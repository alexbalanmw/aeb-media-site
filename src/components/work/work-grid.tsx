"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export type WorkCard = {
  slug: string;
  client: string;
  vertical: string;
  services: string[];
  resultHeadline: string;
  summary: string;
};

export function WorkGrid({ studies }: { studies: WorkCard[] }) {
  const [filter, setFilter] = useState<string>("All");
  const filters = useMemo(
    () => ["All", ...Array.from(new Set(studies.flatMap((study) => study.services)))],
    [studies],
  );
  const visible =
    filter === "All"
      ? studies
      : studies.filter((study) => study.services.includes(filter));

  return (
    <div>
      <div
        role="group"
        aria-label="Filter case studies by service"
        className="flex flex-wrap gap-2"
      >
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-ring",
              filter === item
                ? "border-brand-600 bg-brand-600 text-white dark:border-brand-400 dark:bg-brand-400 dark:text-brand-950"
                : "border-border bg-card text-muted-foreground hover:border-brand-400 hover:text-foreground",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2" aria-live="polite">
        {visible.map((study) => (
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className="group flex h-full flex-col justify-between gap-10 rounded-2xl border border-border bg-card p-8 transition-colors hover:border-brand-400 focus-visible:outline-2 focus-visible:outline-ring"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {study.client} · {study.vertical}
              </p>
              <h2 className="mt-4 font-display text-display-md font-semibold text-balance">
                {study.resultHeadline}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {study.summary}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-400">
                Read
                <ArrowRightIcon
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
