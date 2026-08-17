# GitHub Copilot Custom Instructions for Grey River Lodge

## Project Overview & Hosting
- **Hosting Platform:** Netlify.
- **Framework & Build:** Vite with React and TypeScript.
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

## Netlify Routing & Architecture Guidelines
- **Configuration File:** All routing, redirects, and custom headers must be specified in the root `netlify.toml` file.
- **SPA Routing:** Single-page application fallback routing is handled via `/* -> /index.html 200` in `netlify.toml`.
- **API Rewrites & Proxies:** Use `netlify.toml` `[[redirects]]` blocks for external API proxies (e.g., Environment Canada hydrometric endpoints at `/api/river-gauge`).
- **Serverless Functions:** When writing backend endpoints or webhooks, place them in `netlify/functions/` using the standard Netlify Functions format (`@netlify/functions`).
- **Environment Variables:** Access environment variables via `import.meta.env` (for Vite client-side variables prefixed with `VITE_`) or Netlify platform environment variables for functions. Never hardcode secrets.

## Code Standards
- Keep components modular, responsive, and fully typed in TypeScript (`.tsx`).
- Ensure all builds output clean, production-ready static bundles compatible with Vite.