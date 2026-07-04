import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  /** Extra classes for the moving track, e.g. gap utilities. */
  trackClassName?: string;
};

/**
 * CSS-driven infinite marquee. The track holds two copies of the content and
 * translates -50%; under prefers-reduced-motion the animation is disabled and
 * the first copy displays as a static row. Server component — no JS shipped.
 */
export function Marquee({ children, className, trackClassName }: MarqueeProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max animate-marquee items-center gap-16",
          "group-hover:[animation-play-state:paused] motion-reduce:animate-none",
          trackClassName,
        )}
      >
        <div className="flex shrink-0 items-center gap-16">{children}</div>
        <div className="flex shrink-0 items-center gap-16" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
