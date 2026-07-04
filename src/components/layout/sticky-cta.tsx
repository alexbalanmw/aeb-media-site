"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cta } from "@/lib/site";

/** Mobile-only sticky CTA bar. Hidden on conversion pages that already lead with the form. */
export function StickyCta() {
  const pathname = usePathname();
  if (pathname === "/free-shoot" || pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden">
      <Button
        asChild
        size="lg"
        className="w-full bg-ember-500 text-base font-semibold text-white hover:bg-ember-600"
      >
        <Link href={cta.href}>{cta.label}</Link>
      </Button>
    </div>
  );
}
