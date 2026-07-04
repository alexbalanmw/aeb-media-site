import Link from "next/link";
import { Magnetic } from "@/components/motion/magnetic";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";

type CtaBandProps = {
  title: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CtaBand({ title, body, buttonLabel, buttonHref }: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink to-brand-950 py-20 text-white md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgb(107_63_160/0.4),transparent)]"
      />
      <ScrollReveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-display-lg font-bold text-balance">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lede text-white/70">{body}</p>
        <div className="mt-9">
          <Magnetic>
            <Button
              asChild
              size="lg"
              className="h-13 bg-ember-500 px-8 text-base font-semibold text-white hover:bg-ember-600"
            >
              <Link href={buttonHref}>{buttonLabel}</Link>
            </Button>
          </Magnetic>
        </div>
      </ScrollReveal>
    </section>
  );
}
