# Portfolio — Mathesh Waran R

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion. Fonts (JetBrains Mono + Inter) are self-hosted via `@fontsource`, so there's no external font request at runtime.

## Before you deploy

1. **Edit your contact details** in `src/lib/data.ts` — the `contact` object has placeholder email/GitHub/LinkedIn links. Replace them with your real ones.
2. **Review the project copy** in `src/lib/data.ts` (`work` array) — statuses (`live` / `building` / `planning`) and one-line summaries were written from what's known about each project. Adjust anything that's since changed.
3. Optionally swap the metadata in `src/app/layout.tsx` (page title/description) if you want different SEO copy.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploy

The fastest path is Vercel:

```bash
npm install -g vercel
vercel
```

Or push this to a GitHub repo and import it at vercel.com/new — zero config needed, it's a standard Next.js app.

## Structure

- `src/app/page.tsx` — assembles the page from section components
- `src/components/` — Nav, Hero, Work, Stack, About, Contact, Footer
- `src/lib/data.ts` — all editable content (projects, stack, contact info) lives here, separate from layout code
- `src/app/globals.css` — design tokens (colors, fonts) as CSS variables feeding Tailwind's `@theme`

## Design notes

- Dark ink background (`#10151C`) with a warm brass signal color (`#E0A458`) used sparingly for the one "live" accent, plus a muted steel blue (`#5F8FB0`) for structural/status elements.
- Display type is JetBrains Mono (self-hosted), body text is Inter — a deliberate technical/humanist pairing rather than a single default sans.
- The only non-interactive animation is the one staggered hero reveal on load; everything else (the Work section's expand/collapse) only moves in response to a click.
