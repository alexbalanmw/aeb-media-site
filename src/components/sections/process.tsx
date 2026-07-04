import { ScrollReveal } from "@/components/motion/scroll-reveal";

const steps = [
  {
    title: "Strategy",
    body: "We hop on a free 30-minute call. You tell us about your business, your goals, and where you're stuck. We listen, ask smart questions, and figure out exactly what you need — no cookie-cutter packages.",
  },
  {
    title: "Produce",
    body: "We build a tailored plan around your business — whether that's social media content, Google Ads, Meta campaigns, AI automations, or a combination. You only pay for what actually moves the needle.",
  },
  {
    title: "Run",
    body: "Our team handles everything: scripting, filming, editing, posting, ad setup, automation flows. You stay focused on your business. We send weekly updates so you always know what's happening.",
  },
  {
    title: "Report",
    body: "We track every metric that matters. What's working gets amplified. What's not gets cut. Your investment keeps getting smarter over time.",
  },
];

export function Process() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid gap-12 lg:grid-cols-12">
        <ScrollReveal className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
            How we work
          </p>
          <h2 className="mt-3 font-display text-display-lg font-bold text-balance">
            No packages. No one-size-fits-all.
          </h2>
          <p className="mt-5 text-lede text-muted-foreground">
            Here&apos;s how we work together:
          </p>
        </ScrollReveal>

        <ol className="space-y-0 lg:col-span-7 lg:col-start-6">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.08}>
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
  );
}
