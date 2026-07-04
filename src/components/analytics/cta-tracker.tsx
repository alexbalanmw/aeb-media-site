"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackCtaClick } from "@/lib/analytics";

/**
 * Delegated listener that reports clicks on any element carrying a
 * data-cta attribute — keeps CTA sections as server components.
 */
export function CtaTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cta]");
      if (target?.dataset.cta) {
        trackCtaClick(target.dataset.cta, pathname);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
