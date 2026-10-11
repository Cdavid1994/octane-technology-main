# Octane Technology

Corporate landing page for Octane Technology — built from scratch with
React, Vite, and Tailwind CSS. Deploys to GitHub Pages automatically and
can also run inside a local Minikube cluster, exposed to the internet
through a Cloudflare Tunnel.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Deep-dark UI with cyan / octane-orange neon accents, Inter + Space Grotesk

## Project structure

```text
.
├── src/
│   ├── components/        Navbar, Hero, Features, Metrics, Footer
│   ├── hooks/              useCountUp — intersection-triggered counters
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           Tailwind import + theme tokens
├── public/
│   ├── favicon.svg
│   └── CNAME                custom domain for GitHub Pages
├── .github/workflows/
│   └── deploy.yml           build + publish to gh-pages on push to main
├── k8s/
│   ├── deployment.yaml       octane-site Deployment (2 replicas)
│   ├── service.yaml          ClusterIP Service, port 80
│   └── cloudflared-deployment.yaml   optional in-cluster tunnel connector
├── Dockerfile                multi-stage build, served by nginx:alpine
├── nginx.conf
└── setup-tunnel.sh           guided Cloudflare Tunnel setup
```

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # outputs to dist/
npm run preview
```

## Deploy to GitHub Pages

The `homepage` field in `package.json` is set to `https://octane.technology`
and `public/CNAME` pins the custom domain.

- **Automatic:** every push to `main` triggers
  [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
  builds the site and publishes `dist/` to the `gh-pages` branch via
  `peaceiris/actions-gh-pages`.
- **Manual:** `npm run deploy` (uses the `gh-pages` package locally).

In the repository's GitHub Pages settings, set the source to the `gh-pages`
branch and confirm the custom domain `octane.technology` once DNS is
pointed at GitHub Pages (if you're using GitHub Pages instead of, or
alongside, the Cloudflare Tunnel below).

## Run on Minikube

```bash
# Build the image directly into Minikube's Docker daemon
minikube image build -t octane-site:latest .

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

kubectl rollout status deployment/octane-site
kubectl port-forward svc/octane-site 8080:80   # verify at http://localhost:8080
```

## Expose it with a Cloudflare Tunnel

```bash
./setup-tunnel.sh
```

Walks through `cloudflared tunnel login`, creating the
`octane-cluster-tunnel`, writing `~/.cloudflared/config.yml`, and binding
the DNS record — with a choice between running `cloudflared` locally
(via `kubectl port-forward`) or deploying it as a Pod inside the cluster
(`k8s/cloudflared-deployment.yaml`). See the script's comments for details.
