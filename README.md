# Octane Technology

Corporate landing page for Octane Technology — built from scratch with
React, Vite, and Tailwind CSS.

**Production** (`https://octane.technology`) runs on a local Minikube
cluster, exposed through an in-cluster Cloudflare Tunnel connector — see
[Run on Minikube](#run-on-minikube) below. GitHub Pages is wired up as a
secondary build target (no custom domain attached, to avoid fighting the
tunnel over DNS) at `https://<owner>.github.io/<repo>/`.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Deep-dark UI with cyan / octane-orange neon accents, Inter + Space Grotesk
- Vitest + Testing Library for smoke tests

## Project structure

```text
.
├── src/
│   ├── components/        Navbar, Hero, Features, Metrics, About, Footer
│   ├── hooks/              useCountUp — intersection-triggered counters
│   ├── test/                Vitest setup (jsdom, IntersectionObserver stub)
│   ├── App.jsx · App.test.jsx
│   ├── main.jsx
│   └── index.css           Tailwind import + theme tokens
├── public/
│   ├── favicon.svg, favicon-{16,32}.png, apple-touch-icon.png
│   ├── icon-{192,512}.png, site.webmanifest
│   ├── og-image.png         1200x630 social preview image
│   ├── robots.txt, sitemap.xml
├── .github/workflows/
│   └── deploy.yml           lint + test + build, publish to gh-pages on push to main
├── k8s/
│   ├── deployment.yaml       octane-site Deployment (2 replicas)
│   ├── service.yaml          ClusterIP Service, port 80
│   └── cloudflared-deployment.yaml   in-cluster tunnel connector (active in prod)
├── Dockerfile                multi-stage build, served by nginx:alpine
├── nginx.conf                 security headers (CSP, X-Frame-Options, etc.)
└── setup-tunnel.sh           guided Cloudflare Tunnel setup
```

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run test        # Vitest smoke tests
npm run build       # outputs to dist/
npm run preview
```

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
the DNS record.

**Production runs the in-cluster connector**, not a local `cloudflared`
process: after the tunnel + DNS route exist, create the credentials Secret
and apply the Deployment —

```bash
kubectl create secret generic cloudflared-credentials \
  --from-file=credentials.json=~/.cloudflared/<TUNNEL_ID>.json

# k8s/cloudflared-deployment.yaml's ConfigMap must reference the tunnel by ID
kubectl apply -f k8s/cloudflared-deployment.yaml
kubectl rollout status deployment/cloudflared
```

This way the tunnel survives independently of any local shell session —
no `kubectl port-forward` or `cloudflared tunnel run` needs to stay running
on the host.

## Deploy to GitHub Pages (secondary)

- **Automatic:** every push to `main` triggers
  [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
  lints, tests, builds, and publishes `dist/` to the `gh-pages` branch via
  `peaceiris/actions-gh-pages`.
- **Manual:** `npm run deploy` (uses the `gh-pages` package locally).

No custom domain is attached to this Pages deployment — `octane.technology`
is served by the Minikube + Cloudflare Tunnel path above. Don't re-attach
the custom domain in GitHub Pages settings (or commit a `CNAME` file)
without removing the Cloudflare DNS route first, or the two will fight
over the same hostname.

## What's still a placeholder

- Hero/Metrics numbers (uptime, latency, systems deployed) are illustrative,
  not real figures.
- `About` copy is generic — it hasn't been written from the company's
  actual story.
- No real contact channel (email, form) is wired up yet; CTAs just scroll
  to the footer.
- No client logos, case studies, or legal pages (privacy policy, terms).
