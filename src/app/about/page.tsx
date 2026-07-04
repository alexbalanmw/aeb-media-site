import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | AEB Media",
  description:
    "AEB Media is a Chicagoland digital-marketing agency founded by Alex Balan — done-for-you content and growth systems that turn attention into revenue.",
  alternates: { canonical: "/about" },
};

const beliefs = [
  {
    title: "Done-for-you or it doesn't happen",
    body: "Every owner plans to post more, follow up faster, run better ads — next week. We build systems that don't depend on your spare time, because you don't have any.",
  },
  {
    title: "Attention is only step one",
    body: "Views don't pay rent. Every piece of content and every ad we make is wired into something — a form, a booking, a follow-up — that turns attention into revenue.",
  },
  {
    title: "Local is different",
    body: "A local business doesn't need to go viral in Tokyo. It needs the right people within twenty minutes of the shop to see it, trust it, and call. That's the game we play.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 md:pt-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
            About
          </p>
          <h1 className="mt-3 font-display text-display-xl font-bold text-balance">
            Built for the businesses that keep {site.region.split(",")[0]} running.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <ScrollReveal className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7">
            {/* TODO: confirm — founder bio details beyond public positioning */}
            <p>
              AEB Media was founded by <strong className="text-foreground">Alex Balan</strong>{" "}
              with a simple observation: the local businesses doing the best work are
              usually the worst at showing it. The plumber with a hundred five-star
              jobs and no reviews online. The gym that changes lives and posts twice
              a year. The cleaning company that loses every after-hours lead to
              whoever answers first.
            </p>
            <p>
              Not because they don&apos;t care — because they&apos;re busy doing the
              actual work. So we built the agency around that reality:{" "}
              <strong className="text-foreground">
                done-for-you content and systems that turn attention into revenue
              </strong>
              . We show up with cameras, we script the hooks, we run the ads, we wire
              up the automations — and the owner keeps running the business.
            </p>
            <p>
              Across our client accounts, that approach has generated over 127 million
              views — and more importantly, the interactions, followers, and client
              inquiries that come with them.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
                The short version
              </p>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold">Who</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {site.name}, founded by {site.founder}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">Where</dt>
                  <dd className="mt-1 text-muted-foreground">{site.region}</dd>
                </div>
                <div>
                  <dt className="font-semibold">What</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Social content, Google & Meta Ads, web, and AI automation for
                    local home-services, fitness, and wellness businesses
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">How</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Custom growth systems — never cookie-cutter packages
                  </dd>
                </div>
              </dl>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-border bg-card py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="max-w-2xl font-display text-display-lg font-bold text-balance">
              What we believe
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {beliefs.map((belief, index) => (
              <ScrollReveal key={belief.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-background p-7">
                  <h3 className="font-display text-lg font-semibold">{belief.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {belief.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's see what your business looks like with real content behind it."
        body="A free 30–45 minute photo and video shoot, no strings attached. You keep the content either way."
        buttonLabel="Claim your free shoot"
        buttonHref="/free-shoot"
      />
    </>
  );
}
