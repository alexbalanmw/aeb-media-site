import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cta, nav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight"
          aria-label={`${site.name} — home`}
        >
          AEB<span className="text-brand-600 dark:text-brand-400">.media</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Magnetic className="hidden md:inline-block">
            <Button
              asChild
              className="bg-ember-500 text-white hover:bg-ember-600 dark:bg-ember-500 dark:hover:bg-ember-400"
            >
              <Link href={cta.href} data-cta="header-free-shoot">
                {cta.label}
              </Link>
            </Button>
          </Magnetic>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
