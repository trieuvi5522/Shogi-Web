# Otter Shogi

Bilingual Vietnamese/English storefront for a small shogi shop. The frontend is React + Vite, hosted as a static Cloudflare Pages site. Order and contact submissions are handled by Cloudflare Pages Functions and emailed with Resend.

## Local Development

```bash
npm install
npm run dev
```

PowerShell on this machine may block `npm.ps1`; use `npm.cmd` for local commands if that happens.

## Cloudflare Pages

Cloudflare Pages settings:

- Build command: `npm run build`
- Output directory: `dist`
- Functions directory: `functions`
- Function invocation routes are limited to `/api/*` through `public/_routes.json`.

Set these Cloudflare Pages environment variables/secrets:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL="Otter Shogi <orders@yourdomain.com>"
SHOP_OWNER_EMAIL=you@example.com
```

For local Pages Functions testing, create `.dev.vars` with the same values, then run:

```bash
npm run pages:dev
```

## Routes

- Vietnamese: `/`, `/san-pham`, `/san-pham/:slug`, `/contact`
- English: `/en`, `/en/products`, `/en/products/:slug`, `/en/contact`

Vietnamese is the default language. The language switcher maps the current page to the equivalent route when possible.

## Product Data

Demo products live in `src/data/products.ts`. Replace the names, prices, descriptions, and visuals there when real product content is ready.
