# How to deploy

Your Netlify project uses **Netlify Drop** (drag-and-drop). Drop only accepts
**already-built static files** — it does NOT run `npm install` or `npm run build`.
So you must build locally first, then drag the generated `out/` folder.

This project is configured for **static export** (`output: "export"` in
`next.config.js`), so the build produces a plain static `out/` folder — no
server, no plugin, no errors.

## Step 1 — Build locally (one time, on your computer)

You need Node 20+ installed. In the project folder:

```bash
npm install
npm run build
```

This creates an **`out/`** folder containing the whole static site.

## Step 2 — Deploy

Drag the **`out/`** folder (NOT the project root, NOT the zip) into the
"Drag and drop your project folder here" box on your Netlify project page.

That's it. Because it's static files, there's no build step on Netlify and the
plugin error cannot happen.

---

## Alternative: deploy via Git (no local build needed)

If you'd rather not build locally each time:

1. Push this folder to a GitHub repo.
2. Netlify → **Add new site → Import an existing project → GitHub**.
3. Netlify reads `netlify.toml` (command `npm run build`, publish `out`),
   runs the build for you, and deploys. No drag-and-drop needed.

This is the better long-term workflow — every Git push auto-deploys.
