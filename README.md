# AEB Media — aeb.media

Marketing site for AEB Media, a Chicagoland digital-marketing agency for local
businesses. Next.js 15 (App Router, RSC), TypeScript strict, Tailwind v4,
shadcn/ui, motion/react, MDX content layer. Deploys on Vercel.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in what you have; everything degrades gracefully
npm run dev                  # http://localhost:3000
```

| Command             | What it does                 |
| ------------------- | ---------------------------- |
| `npm run dev`       | Dev server (Turbopack)       |
| `npm run build`     | Production build (Turbopack) |
| `npm run start`     | Serve the production build   |
| `npm run lint`      | ESLint (incl. jsx-a11y)      |
| `npm run typecheck` | `tsc --noEmit`               |
| `npm run format`    | Prettier write               |

> Build note: keep `--turbopack` on `next build`. The webpack build produces an
> empty font manifest (no font preload/size-adjust), which hurts LCP.

## Environment variables

All documented in [.env.example](.env.example):

- `NEXT_PUBLIC_SITE_URL` — canonical origin for metadata/sitemap/OG.
- `N8N_LEAD_WEBHOOK_URL` — n8n webhook that receives lead-form POSTs (JSON).
  Unset: submissions log (redacted) to the server console and no-op gracefully.
- `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID` — analytics scripts render
  only when set. Vercel Analytics/Speed Insights load only on Vercel deploys.

## Content authoring

**Case studies** — drop an `.mdx` file into `content/case-studies/`. Frontmatter
is zod-validated at build time (`src/lib/content.ts`):

```yaml
---
title: "..."
client: "..."
vertical: "Home Services"
services: ["Social Media Content", "AI Automation"]
resultHeadline: "..."
summary: "..."
date: "2026-01-15"
featured: true # shows on the home page
---
```

The body is MDX. Mark unverified numbers with `{/* TODO: confirm */}`.

**Services** — typed objects in `src/lib/services.ts` (five pillars). Editing a
service updates its detail page, the overview row, home strip, and footer link.

**Site-wide constants** — name, email, region, nav, CTA in `src/lib/site.ts`.

## Architecture notes

- Server components by default; `"use client"` only at interactive leaves
  (nav sheet, theme toggle, lead form, work filters, motion primitives).
- Motion loads through `LazyMotion` with an async feature bundle
  (`src/components/motion/motion-provider.tsx`) to keep initial JS small.
  The hero's scroll-linked fade is pure CSS (`.scroll-exit`, scroll timelines).
- All motion honors `prefers-reduced-motion` with static fallbacks.
- Lead pipeline: `src/components/lead-form.tsx` → server action
  `src/app/actions/lead.ts` → n8n webhook. Anti-spam: honeypot field,
  time-to-submit window, per-IP sliding-window rate limit.
- SEO: per-route metadata + canonicals, dynamic `ImageResponse` OG images,
  `sitemap.ts`, `robots.ts` (AI crawlers allowed), `public/llms.txt`, JSON-LD
  (ProfessionalService, Service, BreadcrumbList, Article, FAQPage) via
  `src/lib/seo/jsonld.ts`.

## Deploy (Vercel)

1. Import the repo in Vercel; framework auto-detects Next.js.
2. Set the env vars above in Project Settings.
3. Vercel Analytics + Speed Insights activate automatically on deploy.
4. After the first deploy, verify with PageSpeed Insights (mobile) and the
   Google Rich Results test on `/`, a service page, and a case study.
