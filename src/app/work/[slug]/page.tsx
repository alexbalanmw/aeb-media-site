import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CtaBand } from "@/components/sections/cta-band";
import { getCaseStudies, getCaseStudy } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.client} Case Study | AEB Media`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-ink to-brand-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_10%,rgb(107_63_160/0.35),transparent)]"
        />
        <div className="relative mx-auto max-w-3xl px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-brand-200 hover:text-white"
          >
            <ArrowLeftIcon aria-hidden="true" className="size-4" />
            All work
          </Link>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            {study.client} · {study.vertical}
          </p>
          <h1 className="mt-4 font-display text-display-lg font-bold text-balance">
            {study.resultHeadline}
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {study.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <div className="prose prose-neutral dark:prose-invert prose-headings:font-display prose-headings:font-semibold prose-a:text-brand-600 dark:prose-a:text-brand-400 max-w-none">
          <MDXRemote source={study.body} />
        </div>
      </article>

      <CtaBand
        title="Want results like these for your business?"
        body="Book a free consultation. We'll learn about your business and build a custom growth plan — no pressure, no obligations."
        buttonLabel="Book a free consultation"
        buttonHref="/contact"
      />
    </>
  );
}
