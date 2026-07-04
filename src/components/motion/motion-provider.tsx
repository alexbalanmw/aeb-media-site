"use client";

import { LazyMotion } from "motion/react";
import type { ReactNode } from "react";

// Async feature bundle: the animation engine loads in its own chunk after
// hydration instead of sitting in the critical path. Until it arrives,
// m.* components render their static SSR state.
const loadFeatures = () => import("./motion-features").then((mod) => mod.default);

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
