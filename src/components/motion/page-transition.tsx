"use client";

import { m, useReducedMotion } from "motion/react";
import { useEffect, type ReactNode } from "react";

// False only for the very first document load. Motion SSRs `initial` styles
// inline, so animating the initial load would ship the whole page hidden at
// opacity 0 until hydration — terrible for LCP and for users without JS.
// Client-side navigations remount the template, re-running the animation.
let hasNavigated = false;

/** Route-change entrance, used from app/template.tsx so it re-runs per navigation. */
export function PageTransition({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = hasNavigated && !reduceMotion;

  useEffect(() => {
    hasNavigated = true;
  }, []);

  if (!shouldAnimate) {
    return <>{children}</>;
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </m.div>
  );
}
