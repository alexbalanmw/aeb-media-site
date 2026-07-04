import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cta, nav } from "@/lib/site";

/**
 * Slim, translucent app-bar in the apple.com mold: hairline border, heavy
 * blur + saturation, compact centered nav, small pill CTA.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="relative mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-[15px] font-bold tracking-tight"
          aria-label="AEB.media — home"
        >
          AEB<span className="text-brand-600 dark:text-brand-400">.media</span>
        </Link>

        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-foreground/60 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="hidden h-7 rounded-full bg-ember-500 px-3.5 text-xs font-semibold text-ember-950 hover:bg-ember-400 md:inline-flex"
          >
            <Link href={cta.href} data-cta="header-free-audit">
              {cta.label}
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
