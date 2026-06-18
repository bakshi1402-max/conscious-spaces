# Conscious Spaces

An interior design studio website — a premium, editorial, minimalist build with a warm neutral palette (ivory, sand, stone, clay, bark). Built as an original design system with placeholder content.

## Stack

- **Next.js 15** (App Router, React 19)
- **Tailwind CSS 3**
- **Framer Motion 11** for animations and micro-interactions
- TypeScript, fully responsive, SEO + accessibility minded

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deploy to Netlify

This repo includes `netlify.toml` preconfigured for the official Next.js runtime.

1. Push to a Git repo (GitHub/GitLab) **or** drag-and-drop deploy.
2. In Netlify: **Add new site → Import project** → pick the repo.
3. Netlify auto-detects Next.js. The included `@netlify/plugin-nextjs` plugin
   handles SSR, image optimization, and routing. Build command `npm run build`,
   publish dir `.next` are already set.
4. Deploy.

> Note: deploying via Git is recommended over a static drag-and-drop because the
> site uses Next.js server features (dynamic routes, image optimization).

## Structure

```
src/
  app/
    layout.tsx            Root layout (fonts, header, footer, metadata)
    page.tsx              Home (hero, statement, marquee, showcase, faq)
    works/page.tsx        Works grid
    works/[slug]/page.tsx Project detail (static-generated)
    gallery/page.tsx      Masonry gallery
    about/page.tsx        Studio / philosophy
    contact/page.tsx      Contact form + details
    not-found.tsx         404
    sitemap.ts, robots.ts SEO
    globals.css           Design tokens + utilities
  components/             Reusable, modular components
  data/content.ts         CMS-ready content layer (swap for any CMS)
```

## Content

All copy, project names, and imagery are original placeholder content. Images
are loaded from Unsplash via `next/image` (configured in `next.config.js`).
Swap `src/data/content.ts` for a CMS by replacing the exported arrays with
fetched data.
