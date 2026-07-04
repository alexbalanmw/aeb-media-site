import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | AEB Media",
  description:
    "Book a free consultation. We'll learn about your business and build a custom growth plan — no pressure, no obligations.",
};

const expectations = [
  "We reply within one business day — usually much faster.",
  "A free 30-minute call: your business, your goals, where you're stuck.",
  "A custom plan built around what actually moves the needle. No packages.",
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
            Contact
          </p>
          <h1 className="mt-3 font-display text-display-xl font-bold text-balance">
            Let&apos;s talk about your growth.
          </h1>
          <p className="mt-6 text-lede text-muted-foreground">
            Book a free consultation. We&apos;ll learn about your business and build a
            custom growth plan — no pressure, no obligations.
          </p>
          <ul className="mt-10 space-y-4">
            {expectations.map((item, index) => (
              <li key={item} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="font-display text-lg font-bold text-brand-400"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-muted-foreground">
            Prefer email?{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-brand-600 underline underline-offset-4 dark:text-brand-400"
            >
              {site.email}
            </a>
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
