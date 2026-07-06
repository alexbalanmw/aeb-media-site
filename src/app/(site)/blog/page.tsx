import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { getBlogPosts } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: "Local Business Marketing Blog | AEB Media",
  description:
    "Practical insights on social media marketing, Google Ads, Meta Ads, and AI automation for local businesses — from a Chicagoland agency in the field.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/feed.xml" },
  },
};

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 md:pt-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
            Blog
          </p>
          <h1 className="mt-3 font-display text-display-xl font-bold text-balance">
            Insights for growing businesses
          </h1>
          <p className="mt-6 text-lede text-muted-foreground">
            Practical advice on social media, ads, and growth strategies for local
            businesses.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:pb-28">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet. Check back soon!</p>
        ) : (
          <div className="divide-y divide-border border-y border-border">
            {posts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.04}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-3 py-10 focus-visible:outline-2 focus-visible:outline-ring md:grid-cols-12 md:items-baseline"
                >
                  <p className="text-sm text-muted-foreground md:col-span-3">
                    <time dateTime={post.date}>
                      {dateFormat.format(new Date(post.date))}
                    </time>
                  </p>
                  <div className="md:col-span-9">
                    <h2 className="font-display text-display-md font-semibold text-balance group-hover:text-brand-600 dark:group-hover:text-brand-400">
                      {post.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-muted-foreground">
                      {post.description}
                    </p>
                    {post.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>

      <CtaBand
        title="Ready to put this into practice?"
        body="Claim your free social media audit. We'll analyze your online presence and show you exactly what's working, what's not, and how to start getting more clients."
        buttonLabel="Claim your free audit"
        buttonHref="/free-audit"
      />
    </>
  );
}
