import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { getBlogPost, getBlogPosts } from "@/lib/content";
import { blogPostJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";

type Params = { slug: string };

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function generateStaticParams(): Params[] {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | AEB Media`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          blogPostJsonLd(post),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-ink to-brand-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_10%,rgb(107_63_160/0.35),transparent)]"
        />
        <div className="relative mx-auto max-w-3xl px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-brand-200 hover:text-white"
          >
            <ArrowLeftIcon aria-hidden="true" className="size-4" />
            All posts
          </Link>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
          </p>
          <h1 className="mt-4 font-display text-display-lg font-bold text-balance">
            {post.title}
          </h1>
          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <div className="prose prose-neutral dark:prose-invert prose-headings:font-display prose-headings:font-semibold prose-a:text-brand-600 dark:prose-a:text-brand-400 max-w-none">
          <MDXRemote source={post.body} />
        </div>
      </article>

      <CtaBand
        title="Find out where your business stands"
        body="Claim your free social media audit. We'll analyze your online presence and show you exactly what's working, what's not, and how to start getting more clients."
        buttonLabel="Claim your free audit"
        buttonHref="/free-audit"
      />
    </>
  );
}
