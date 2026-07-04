import { CheckIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { faqJsonLd } from "@/lib/seo/jsonld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Free Photo & Video Shoot | AEB Media",
  description:
    "Claim a free 30–45 minute photo and video shoot for your Chicagoland business. No strings attached — you keep the content either way.",
  alternates: { canonical: "/free-shoot" },
};

const included = [
  "A 30–45 minute on-location photo and video shoot at your business",
  "Professional direction — we script the hooks and guide you the whole way",
  "Content you keep and can post, whether or not we ever work together",
  "A no-pressure look at how done-for-you content actually works",
];

const faqs = [
  {
    question: "What's the catch?",
    answer:
      "There isn't one. The shoot is free, the content is yours, and there's nothing to sign. It's how we'd rather start a relationship: show you what your business looks like with real content behind it, and let the work make the case.",
  },
  {
    question: "Why would you do this for free?",
    answer:
      "Because telling you we make great content is cheap — showing you isn't. Some businesses that take the free shoot become clients. Some just walk away with good content. We're fine with both.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "No. We handle direction, angles, and hooks on the day. Just run your business like normal — real work makes the best content.",
  },
  {
    question: "Who is this for?",
    answer:
      "Local businesses in the Chicagoland area — home services, fitness, wellness, and anyone whose customers should be seeing their work in the feed.",
  },
];

export default function FreeShootPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <section className="relative overflow-hidden bg-gradient-to-b from-ink via-brand-950 to-ink text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_10%,rgb(107_63_160/0.4),transparent)]"
        />
        <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-20 text-center sm:px-6 md:pb-24 md:pt-28">
          <p className="mx-auto inline-flex rounded-full border border-ember-400/40 bg-ember-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ember-300">
            Free — no strings attached
          </p>
          <h1 className="mt-8 font-display text-display-2xl font-bold text-balance">
            We&apos;ll shoot your business.{" "}
            <span className="bg-gradient-to-r from-brand-300 to-ember-300 bg-clip-text text-transparent">
              For free.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lede text-white/70">
            A free 30–45 minute photo and video shoot at your business. You keep the
            content either way — whether or not we ever work together.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="h-13 bg-ember-500 px-10 text-base font-semibold text-white hover:bg-ember-600"
            >
              <Link href="#claim" data-cta="free-shoot-hero-claim">
                Claim your free shoot
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <ScrollReveal>
            <h2 className="font-display text-display-lg font-bold text-balance">
              What you get
            </h2>
            <ul className="mt-8 space-y-5">
              {included.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900">
                    <CheckIcon
                      aria-hidden="true"
                      className="size-3.5 text-brand-700 dark:text-brand-300"
                    />
                  </span>
                  <p className="leading-relaxed text-muted-foreground">{item}</p>
                </li>
              ))}
            </ul>
            <h2 className="mt-14 font-display text-display-lg font-bold">
              Fair questions
            </h2>
            <Accordion type="single" collapsible className="mt-4">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-left font-display text-base font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>

          <div id="claim" className="scroll-mt-24">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 lg:sticky lg:top-24">
              <h2 className="font-display text-2xl font-bold">Claim your free shoot</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us where to show up. We&apos;ll reach out to schedule.
              </p>
              <div className="mt-8">
                <LeadForm defaultService="free-shoot" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
