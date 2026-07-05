# AEB Media Website — Agent Guide

## What this is
Marketing site for AEB Media, a Chicagoland digital-marketing agency (social content,
Google/Meta Ads, web + lead-gen, n8n automation) serving local home-services, fitness,
and wellness businesses. Founder: Alex Balan. Positioning: "custom growth systems for
local businesses." Headline stat: 127M+ views generated.

## Stack
Next.js 15 (App Router, RSC), TypeScript strict, Tailwind v4, shadcn/ui, motion/react,
MDX content layer (next-mdx-remote + gray-matter, typed content/ dir), deployed on Vercel.
Package manager: npm (pnpm unavailable on this machine — corepack needs admin).

## Rules
- Server components by default; "use client" only at the smallest interactive leaf.
- Never hardcode secrets. Read integrations from env; keep `.env.example` current.
- Don't add paid deps, third-party scripts, or new external calls without asking.
- Don't invent stats, testimonials, or client results — mark unknowns `{/* TODO: confirm */}`.
- After each unit of work: `npm run build`, `npm run lint`, `npm run typecheck` must pass.
- Brand purple: #6b3fa0. Respect prefers-reduced-motion everywhere.

## Design decisions (confirmed)
- Accent: warm amber/coral family (see DESIGN.md for exact tokens). Ember CTAs
  use dark ember-950 text on ember-500 (AA contrast).
- Display type: Bricolage Grotesque; body: Inter. Both via next/font.
- Dark mode: class-based via next-themes, defaults to system.
- Header: slim 48px translucent apple-style bar, centered nav, pill CTA (2026-07-04).
- Motion: LazyMotion + `m.*` components; no entrance animation on LCP elements;
  page transitions skip the initial document load. See DESIGN.md.

## Build gotchas
- `next build --turbopack` required — webpack build emits an empty font manifest
  (no font preload/size-adjust), regressing LCP.
- Never run a build while a dev/prod server is serving `.next` (shared dir).

## Integrations
- Lead form -> `LEAD_WEBHOOK_URL` (currently Formspree -> Alex's email; n8n later).
- Analytics: Vercel Analytics/Speed Insights; GA4 + Meta Pixel behind env vars.

## Commands
- Dev: `npm run dev` | Build: `npm run build` | Lint: `npm run lint` | Types: `npm run typecheck`

## State
See PROGRESS.md for the live checklist. Update CLAUDE.md when a decision is made.
