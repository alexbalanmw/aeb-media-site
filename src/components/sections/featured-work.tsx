import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { getFeaturedCaseStudies } from "@/lib/content";

export function FeaturedWork() {
  const studies = getFeaturedCaseStudies();
  if (studies.length === 0) return null;

  return (
    <section className="bg-brand-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-300">
                Case studies
              </p>
              <h2 className="mt-3 font-display text-display-lg font-bold text-balance">
                Results that speak for themselves
              </h2>
            </div>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-200 hover:text-white"
            >
              All work
              <ArrowRightIcon
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {studies.slice(0, 3).map((study, index) => (
            <ScrollReveal key={study.slug} delay={index * 0.08}>
              <Link
                href={`/work/${study.slug}`}
                className="group flex h-full flex-col justify-between gap-10 rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-brand-400 focus-visible:outline-2 focus-visible:outline-ring"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                    {study.client} · {study.vertical}
                  </p>
                  <h3 className="mt-4 font-display text-display-md font-semibold text-balance">
                    {study.resultHeadline}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {study.summary}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
