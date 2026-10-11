#!/usr/bin/env bash
#
# setup-tunnel.sh
#
# Guides and automates the creation of a Cloudflare Tunnel that exposes the
# Octane Technology site running inside Minikube (Service octane-site,
# ClusterIP, port 80) through the domain octane.technology.
#
# Prerequisites:
#   - cloudflared CLI installed      (https://pkg.cloudflare.com)
#   - A Cloudflare account with the octane.technology zone already added
#   - kubectl configured against the Minikube cluster
#   - The octane-site Deployment/Service already applied (see k8s/)
#
# This script is interactive and makes real changes to your Cloudflare
# account (creates a tunnel, writes a DNS record). Read each step before
# confirming.

set -euo pipefail

TUNNEL_NAME="octane-cluster-tunnel"
HOSTNAME="octane.technology"
CLOUDFLARED_DIR="${HOME}/.cloudflared"
CONFIG_FILE="${CLOUDFLARED_DIR}/config.yml"
SERVICE_NAME="octane-site"
SERVICE_NAMESPACE="default"
LOCAL_PORT="8080"

bold() { printf '\033[1m%s\033[0m\n' "$1"; }
step() { printf '\n\033[1;36m==> %s\033[0m\n' "$1"; }

command -v cloudflared >/dev/null 2>&1 || {
  echo "cloudflared is not installed. Install it first:"
  echo "  https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/"
  exit 1
}

step "1/5 — Authenticate cloudflared against your Cloudflare account"
echo "This opens a browser window. Log in and select the octane.technology zone"
echo "to authorize this machine. A cert.pem will be saved to ${CLOUDFLARED_DIR}."
read -rp "Press Enter to run 'cloudflared tunnel login'... "
cloudflared tunnel login

step "2/5 — Create the dedicated tunnel"
if cloudflared tunnel list 2>/dev/null | grep -q "${TUNNEL_NAME}"; then
  echo "Tunnel '${TUNNEL_NAME}' already exists, skipping creation."
else
  cloudflared tunnel create "${TUNNEL_NAME}"
fi

TUNNEL_ID=$(cloudflared tunnel list -o json | python3 -c "
import json,sys
data = json.load(sys.stdin)
match = [t for t in data if t['name'] == '${TUNNEL_NAME}']
print(match[0]['id'] if match else '')
")

if [[ -z "${TUNNEL_ID}" ]]; then
  echo "Could not resolve the tunnel ID for '${TUNNEL_NAME}'. Aborting."
  exit 1
fi
bold "Tunnel ID: ${TUNNEL_ID}"

step "3/5 — Write ${CONFIG_FILE}"
echo "Choose how cloudflared will reach the site:"
echo "  [1] Local  — cloudflared runs on this machine, traffic goes through"
echo "               'kubectl port-forward' to the Minikube service (quick, dev-only)"
echo "  [2] Cluster — cloudflared runs as a Pod inside Minikube and reaches the"
echo "               Service directly via its internal DNS name (closer to prod)"
read -rp "Select 1 or 2: " MODE

mkdir -p "${CLOUDFLARED_DIR}"

if [[ "${MODE}" == "2" ]]; then
  cat > "${CONFIG_FILE}" <<EOF
tunnel: ${TUNNEL_ID}
credentials-file: ${CLOUDFLARED_DIR}/${TUNNEL_ID}.json

ingress:
  - hostname: ${HOSTNAME}
    service: http://${SERVICE_NAME}.${SERVICE_NAMESPACE}.svc.cluster.local:80
  - service: http_status:404
EOF
  echo "Config written for in-cluster mode."
  echo "Next, create the Kubernetes Secret with the tunnel credentials:"
  echo
  echo "  kubectl create secret generic cloudflared-credentials \\"
  echo "    --from-file=credentials.json=${CLOUDFLARED_DIR}/${TUNNEL_ID}.json"
  echo
  echo "Then update k8s/cloudflared-deployment.yaml's ConfigMap 'tunnel:' field"
  echo "to '${TUNNEL_ID}' (or keep the name if you prefer named-tunnel resolution),"
  echo "and apply it:"
  echo
  echo "  kubectl apply -f k8s/cloudflared-deployment.yaml"
else
  cat > "${CONFIG_FILE}" <<EOF
tunnel: ${TUNNEL_ID}
credentials-file: ${CLOUDFLARED_DIR}/${TUNNEL_ID}.json

ingress:
  - hostname: ${HOSTNAME}
    service: http://localhost:${LOCAL_PORT}
  - service: http_status:404
EOF
  echo "Config written for local mode."
  echo "Before running the tunnel, expose the Minikube service locally:"
  echo
  echo "  kubectl port-forward svc/${SERVICE_NAME} ${LOCAL_PORT}:80"
  echo
  echo "(run that in a separate terminal, keep it open)"
fi

step "4/5 — Route the domain's DNS to this tunnel"
read -rp "Press Enter to run 'cloudflared tunnel route dns ${TUNNEL_NAME} ${HOSTNAME}'... "
cloudflared tunnel route dns "${TUNNEL_NAME}" "${HOSTNAME}"

step "5/5 — Run the tunnel"
if [[ "${MODE}" == "2" ]]; then
  echo "Deploy the connector inside the cluster (after creating the Secret above):"
  echo
  echo "  kubectl apply -f k8s/cloudflared-deployment.yaml"
  echo "  kubectl rollout status deployment/cloudflared"
else
  echo "With 'kubectl port-forward' running in another terminal, start the tunnel:"
  echo
  echo "  cloudflared tunnel run ${TUNNEL_NAME}"
fi

echo
bold "Done. Once the connector is running, https://${HOSTNAME} will route to octane-site."
