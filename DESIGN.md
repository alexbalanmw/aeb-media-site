# AEB Media — Design System

Decisions of record. Change here first, then in code.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `brand-600` | `#6b3fa0` | Brand purple (source of truth). Primary buttons/links (light mode). |
| `brand-50…950` | see `globals.css` | Full derived scale. `brand-400` is primary in dark mode. |
| `ember-400…600` | `#ff7a45` / `#f75c1e` / `#dd4610` | The one energetic accent (warm amber-coral). CTAs and key highlights ONLY — if everything is ember, nothing is. |
| `ink` | `#0e0a14` | Warm near-black text. Never pure #000. |
| `paper` | `#faf8f5` | Warm off-white light-mode surface. |
| dark bg | `#110c19` | Purple-cast near-black, not gray. |

Contrast notes: `ember-600` on white and white on `ember-600` pass AA for large text/UI;
for body-size text on ember use `ember-700`+. White on `brand-600` passes AA. Ember text
on purple backgrounds: only `ember-300`/`ember-200` on `brand-900+` — check before using.

Semantic (shadcn) vars map to these scales in `globals.css` — components use semantic
names (`primary`, `muted`…), sections may use scale names (`bg-brand-950`, `text-ember-400`).

## Typography

- Display: **Bricolage Grotesque** (`--font-display`, `font-display` utility) — headlines,
  stats, nav wordmark. Tight tracking at size.
- Body/UI: **Inter** (`--font-sans`, default on `html`).
- Both self-hosted via `next/font/google` (downloaded at build; zero layout shift, `display: swap`).
- Fluid scale (clamp-based utilities): `text-display-2xl` (H1 hero), `text-display-xl`
  (H1 interior), `text-display-lg` (H2), `text-display-md` (H3), `text-lede` (intro copy).
  Oversized headlines are the design's backbone — H1s should feel almost too big.

## Motion

Purposeful, brief, springy. Everything honors `prefers-reduced-motion` (static fallback,
never hidden content). Primitives in `src/components/motion/`:

- `ScrollReveal` — fade + 24px rise on first view. Stagger siblings with `delay`.
- `AnimatedCounter` — counts up in view; SSR/reduced-motion renders final value.
- `Marquee` — pure-CSS logo loop (server component), pauses on hover, static when reduced.
- `Magnetic` — ≤6px drift toward pointer on CTAs. Mouse-only.
- `PageTransition` — 0.35s fade/rise per route via `app/template.tsx`.

Durations 0.3–0.6s, ease `[0.21, 0.47, 0.32, 0.98]`. No parallax, no scroll-jacking.

## Layout

- Generous whitespace; 12-col grid mentality; asymmetric compositions (offset heroes,
  overlapping stat blocks) over centered-everything.
- Dark sections (`brand-950`/ink) punctuate the warm paper flow for rhythm.
- Radius scale from `--radius: 0.625rem`.

## Dark mode

Class strategy via `next-themes`, defaults to system. Dark is a first-class palette
(purple-cast surfaces), not inverted gray.
