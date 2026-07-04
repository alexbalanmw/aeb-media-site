import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | AEB Media",
  description:
    "Social media content, Google Ads, Meta Ads, web development, and AI automation — five pillars, combined into a custom growth system for your local business.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 md:pt-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
            Services
          </p>
          <h1 className="mt-3 font-display text-display-xl font-bold text-balance">
            Five pillars. One custom system.
          </h1>
          <p className="mt-6 text-lede text-muted-foreground">
            No cookie-cutter packages. We learn your business first, then combine only
            the pieces that move the needle — content, ads, web, and automation working
            as one growth system.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:pb-28">
        <div className="divide-y divide-border border-y border-border">
          {services.map((service, index) => (
            <ScrollReveal key={service.slug} delay={index * 0.04}>
              <Link
                href={`/services/${service.slug}`}
                className="group grid gap-4 py-10 transition-colors focus-visible:outline-2 focus-visible:outline-ring md:grid-cols-12 md:items-center"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-sm font-bold text-muted-foreground/60 md:col-span-1"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-display-md font-semibold group-hover:text-brand-600 dark:group-hover:text-brand-400 md:col-span-5">
                  {service.navLabel}
                </h2>
                <p className="text-muted-foreground md:col-span-5">{service.blurb}</p>
                <span className="hidden justify-self-end md:col-span-1 md:block">
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="size-5 text-brand-600 transition-transform group-hover:translate-x-1 motion-reduce:transition-none dark:text-brand-400"
                  />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure what you need?"
        body="Book a free consultation. We'll learn about your business and build a custom growth plan — no pressure, no obligations."
        buttonLabel="Book a free consultation"
        buttonHref="/contact"
      />
    </>
  );
}
