# Build Progress

Working checklist for the AEB Media site rebuild. Update as work lands.

## Phases
- [x] 1. Scaffold: Next 15.5 + TS strict + Tailwind v4 + shadcn/ui (radix/nova) + motion/zod/next-themes/MDX deps, ESLint(jsx-a11y)+Prettier, .env.example
- [x] 2. Design system: tokens (purple scale, ink, ember accent, dark mode), fonts (Bricolage Grotesque + Inter), fluid type, motion primitives, DESIGN.md
- [x] 3. Shared layout: header/nav/mobile sheet, footer, sticky mobile CTA, skip link
- [x] 4. Home page (hero + counters, marquee, services strip, featured work, process, closing CTA)
- [x] 5. Services overview + 5 detail pages (live-site copy preserved where it existed)
- [x] 6. Work index (filterable) + case-study MDX template + 2 starter studies
- [x] 7. About, Contact, Free-audit pages (free-shoot offer replaced by free social media audit, 2026-07-04)
- [x] 8. Lead form + n8n webhook + anti-spam (verified end-to-end against a local listener)
- [x] 9. SEO: metadata/canonicals, dynamic OG images, sitemap/robots/llms.txt, JSON-LD
- [x] 10. Analytics: Vercel (deploy-gated) + GA4 + Meta Pixel (env-gated), CTA + lead events
- [x] 11. Performance + a11y pass, Lighthouse, README

## Lighthouse (local `next start`, mobile emulation, 2026-07-04)
- Accessibility / Best Practices / SEO: **100 / 100 / 100** on Home, /services/social, /work/swing-loose.
- Performance: **~80–83 simulated** on all three; **CLS 0**, TBT ≤ 260ms.
  Under observed (devtools) throttling **FCP = LCP = 2.9s** — the paint itself is
  fast; the simulated gap is the model chaining LCP behind hydration JS, plus
  ~460ms local TTFB from `next start` on this machine.
- **Post-deploy TODO:** run PageSpeed Insights against the Vercel URL (CDN TTFB
  + HTTP/2 remove the two biggest local penalties) and confirm ≥95; if short,
  next lever is trimming the remaining motion usage on the home page.

## Open items / user to provide
- Verified case-study numbers — swing-loose (baseline spend/cost per booking; result: cost per
  booking change, booking volume, ROAS) and molly-maid (response time, booking rate, review growth).
  MDX comments were removed because Keystatic's editor can't parse `{/* */}` expressions —
  don't add them back into content/ files; track pending numbers here instead.
- Public contact email confirmation (currently alexb@aeb.media) + social profile URLs (footer TODO)
- Founder bio details for About beyond public positioning
- Client logo files if image logos are wanted in the marquee (text wordmarks now)
- Env vars in Vercel: N8N_LEAD_WEBHOOK_URL, NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_META_PIXEL_ID, NEXT_PUBLIC_SITE_URL

## Notes / decisions
- npm (not pnpm): corepack enable requires admin on this machine.
- `next build --turbopack` is required: the webpack build emits an empty font
  manifest (no preload/size-adjust) which regresses LCP.
- Header: 48px translucent apple-style bar (user feedback 2026-07-04); hero
  badge removed; scroll-linked hero exit via CSS scroll timelines.
- Primary offer is the FREE SOCIAL MEDIA AUDIT (/free-audit) — user pushes
  audits, not shoots. Full 13-client list lives in logo-marquee.tsx.
- Page transitions skip the initial document load (motion SSRs initial styles —
  animating first load ships the page hidden at opacity 0).
- Never run `npm run build` while a dev/prod server is serving `.next`.
- Home-dir git repo at C:\Users\hecho\.git is accidental — user to delete manually.
- Live site (aeb.media) is a Vite SPA; copy was extracted from its JS bundle.
