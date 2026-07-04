import Link from "next/link";
import { Magnetic } from "@/components/motion/magnetic";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink to-brand-950 py-24 text-white md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgb(107_63_160/0.4),transparent)]"
      />
      <ScrollReveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-display-xl font-bold text-balance">
          See what your business looks like with{" "}
          <span className="bg-gradient-to-r from-brand-300 to-ember-300 bg-clip-text text-transparent">
            real content
          </span>{" "}
          behind it.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lede text-white/70">
          We&apos;ll come out for a free 30–45 minute photo and video shoot — no
          strings attached. You keep the content either way.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <Button
              asChild
              size="lg"
              className="h-13 bg-ember-500 px-8 text-base font-semibold text-white hover:bg-ember-600"
            >
              <Link href="/free-shoot" data-cta="closing-free-shoot">
                Claim your free shoot
              </Link>
            </Button>
          </Magnetic>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-13 border-white/20 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/contact">Book a free consultation</Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}
