"use client";

import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  /** Final value, e.g. 127 for "127M+". */
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** Duration in seconds. */
  duration?: number;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

/**
 * Dependency-free rAF count-up. Renders the final value for SSR, no-JS, and
 * reduced-motion users; counts up once when scrolled into view.
 */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const format = (n: number) => `${prefix}${Math.round(n).toLocaleString("en-US")}${suffix}`;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / (duration * 1000), 1);
          node.textContent = format(value * easeOut(progress));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "-40px" },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span ref={ref} className={className} aria-label={format(value)}>
      {format(value)}
    </span>
  );
}
