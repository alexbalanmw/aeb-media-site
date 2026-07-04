import { CheckIcon } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/jsonld";
import { getService, services } from "@/lib/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.navLabel} | AEB Media`,
    description: service.blurb,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const ctaHref = service.slug === "social" ? "/free-shoot" : "/contact";

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(service),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.navLabel, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-ink to-brand-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_10%,rgb(107_63_160/0.35),transparent)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 md:pb-24 md:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-300">
            {service.name}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-display-xl font-bold text-balance">
            {service.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lede text-white/70">{service.subheadline}</p>
          <p className="mt-8 max-w-2xl border-l-2 border-ember-400 pl-4 text-sm leading-relaxed text-white/60">
            <span className="font-semibold text-white/80">Who it&apos;s for: </span>
            {service.who}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <ScrollReveal>
          <h2 className="max-w-2xl font-display text-display-lg font-bold text-balance">
            {service.painsHeading}
          </h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {service.pains.map((pain, index) => (
            <ScrollReveal key={pain.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <h3 className="font-display text-lg font-semibold">{pain.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pain.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
              What you get
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-display-lg font-bold text-balance">
              {service.deliverablesHeading}
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {service.deliverables.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.05}>
                <div className="flex gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900">
                    <CheckIcon
                      aria-hidden="true"
                      className="size-3.5 text-brand-700 dark:text-brand-300"
                    />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
              How it works
            </p>
            <h2 className="mt-3 font-display text-display-lg font-bold">The process</h2>
          </ScrollReveal>
          <ol className="lg:col-span-7 lg:col-start-6">
            {service.process.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.06}>
                <li className="flex gap-6 border-t border-border py-8 first:border-t-0 first:pt-0 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="font-display text-3xl font-bold text-brand-300 dark:text-brand-700"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Ready to get started?"
        body="Book a free consultation. We'll learn about your business and build a custom plan — no pressure, no obligations."
        buttonLabel={service.ctaLabel}
        buttonHref={ctaHref}
      />
    </>
  );
}
