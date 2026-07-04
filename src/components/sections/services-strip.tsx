import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { services } from "@/lib/services";

export function ServicesStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <ScrollReveal>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
            What we do
          </p>
          <h2 className="mt-3 font-display text-display-lg font-bold text-balance">
            Built around what your business actually needs
          </h2>
          <p className="mt-5 text-lede text-muted-foreground">
            No cookie-cutter packages. We learn your business first, then build a
            custom plan using only what moves the needle.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {services.map((service, index) => (
          <ScrollReveal
            key={service.slug}
            delay={index * 0.06}
            className={index < 2 ? "lg:col-span-3" : "lg:col-span-2"}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-brand-400 focus-visible:outline-2 focus-visible:outline-ring"
            >
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {service.navLabel}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.blurb}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-400">
                Learn more
                <ArrowRightIcon
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
