import Link from "next/link";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cta } from "@/lib/site";

const secondaryStats = [
  { value: 527, suffix: "K+", label: "Interactions" },
  { value: 113, suffix: "K+", label: "Followers generated" },
  { value: 1840, suffix: "+", label: "Client inquiries driven" },
];

/**
 * Above-the-fold entrances are pure CSS (tw-animate-css) rather than
 * ScrollReveal so the hero paints from static HTML without waiting for
 * hydration — keeps LCP fast and works without JS.
 */
// Slide-only (no fade): content is visible from first paint, so the LCP
// element isn't held at opacity 0 waiting for its animation delay.
const entrance =
  "animate-in slide-in-from-bottom-4 fill-mode-both duration-700 motion-reduce:animate-none";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink via-brand-950 to-ink text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_70%_20%,rgb(107_63_160/0.35),transparent)]"
      />
      <div className="scroll-exit relative mx-auto grid max-w-6xl gap-14 px-4 pb-20 pt-20 sm:px-6 md:pb-28 md:pt-28 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          {/* No entrance animation on the H1 — it's the LCP element and any
              animation (even transform-only) re-emits its LCP candidate late.
              Three deliberate lines instead of free wrapping. */}
          <h1 className="font-display text-display-2xl font-bold">
            <span className="block">Your competitors</span>
            <span className="block bg-gradient-to-r from-brand-300 via-brand-400 to-ember-400 bg-clip-text text-transparent">
              are getting seen.
            </span>
            <span className="block">Are you?</span>
          </h1>
          <p
            className={cn(entrance, "mt-7 max-w-xl text-lede text-white/70")}
            style={{ animationDelay: "200ms" }}
          >
            We build custom growth systems for local businesses — social media, Google
            Ads, Meta campaigns, and AI automations — tailored to exactly what your
            business needs.
          </p>
          <div
            className={cn(entrance, "mt-10 flex flex-wrap items-center gap-4")}
            style={{ animationDelay: "300ms" }}
          >
            <Magnetic>
              <Button
                asChild
                size="lg"
                className="h-13 bg-ember-500 px-8 text-base font-semibold text-ember-950 hover:bg-ember-400"
              >
                <Link href={cta.href} data-cta="hero-free-audit">
                  {cta.label}
                </Link>
              </Button>
            </Magnetic>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 border-white/20 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/work">See our results</Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 lg:self-center">
          <div
            className={cn(
              entrance,
              "rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm",
            )}
            style={{ animationDelay: "350ms" }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Across all client accounts
            </p>
            <p className="mt-3 font-display text-6xl font-bold leading-none tracking-tight sm:text-7xl">
              <AnimatedCounter
                value={127}
                suffix="M+"
                className="bg-gradient-to-r from-brand-300 to-ember-300 bg-clip-text text-transparent"
              />
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/60">
              views generated
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {secondaryStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="order-last mt-1 text-[11px] leading-snug text-white/50">
                    {stat.label}
                  </dt>
                  <dd className="font-display text-xl font-bold sm:text-2xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
