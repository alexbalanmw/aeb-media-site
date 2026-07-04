"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

type ScrollFadeProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Apple-style scroll-linked exit: content gently fades, drifts, and scales
 * down as it scrolls out of the viewport. Starts fully visible, so it never
 * hides SSR content or delays LCP. Inert under reduced motion.
 */
export function ScrollFade({ children, className }: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ opacity, y, scale }} className={className}>
      {children}
    </motion.div>
  );
}
