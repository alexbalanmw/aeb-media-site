# Build Progress

Working checklist for the AEB Media site rebuild. Update as work lands.

## Phases
- [x] 1. Scaffold: Next 15.5 + TS strict + Tailwind v4 + shadcn/ui (radix/nova) + motion/zod/next-themes/MDX deps, ESLint(jsx-a11y)+Prettier, .env.example
- [ ] 2. Design system: tokens (purple scale, ink, amber accent, dark mode), fonts (Bricolage Grotesque + Inter), fluid type, motion primitives, DESIGN.md
- [ ] 3. Shared layout: header/nav/mobile sheet, footer, sticky mobile CTA, skip link
- [ ] 4. Home page
- [ ] 5. Services overview + 5 detail pages
- [ ] 6. Work index + case-study MDX template + 2 starter studies
- [ ] 7. About, Contact, Free-shoot pages
- [ ] 8. Lead form + n8n webhook + anti-spam
- [ ] 9. SEO: metadata, OG images, sitemap/robots/llms.txt, JSON-LD
- [ ] 10. Analytics: Vercel + GA4 + Meta Pixel (env-gated)
- [ ] 11. Performance + a11y pass, Lighthouse >=95x4, README, DoD sweep

## Notes / decisions
- npm (not pnpm): corepack enable requires admin on this machine.
- `next build` runs webpack (stable); dev uses turbopack.
- shadcn CLI v4: radix base, nova preset. Form handling via `field` component + zod (v4).
- Home-dir git repo at C:\Users\hecho\.git is accidental — user to delete manually.
- Live site (aeb.media) is client-rendered; copy must be pulled via rendered browser fetch.
