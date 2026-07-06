import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { WorkGrid } from "@/components/work/work-grid";
import { getCaseStudies } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Local Business Marketing Case Studies | AEB Media",
  description:
    "Real results for Chicagoland local businesses — case studies in social media content, Google Ads, Meta Ads, and AI automation for home services, fitness, and wellness.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const studies = getCaseStudies().map(
    ({ slug, client, vertical, services, resultHeadline, summary }) => ({
      slug,
      client,
      vertical,
      services,
      resultHeadline,
      summary,
    }),
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 md:pt-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
            Work
          </p>
          <h1 className="mt-3 font-display text-display-xl font-bold text-balance">
            Results that speak for themselves
          </h1>
          <p className="mt-6 text-lede text-muted-foreground">
            A look at the growth systems we&apos;ve built — and what they did for the
            businesses running them.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:pb-28">
        <WorkGrid studies={studies} />
      </section>

      <CtaBand
        title="Want results like these for your business?"
        body="Book a free consultation. We'll learn about your business and build a custom growth plan — no pressure, no obligations."
        buttonLabel="Book a free consultation"
        buttonHref="/contact"
      />
    </>
  );
}
