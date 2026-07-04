"use client";

import { m, useReducedMotion, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  /** Max translation toward the pointer, in px. */
  strength?: number;
};

/**
 * Subtle magnetic hover: the child drifts toward the pointer and springs back.
 * Inert under reduced motion and on touch devices (no hover events fire).
 */
export function Magnetic({ children, className, strength = 6 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 300, damping: 20, mass: 0.4 });
  const y = useSpring(0, { stiffness: 300, damping: 20, mass: 0.4 });

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node || event.pointerType !== "mouse") return;
    const rect = node.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(relX * strength * 2);
    y.set(relY * strength * 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.div
      ref={ref}
      className={className}
      style={{ x, y, display: "inline-block" }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </m.div>
  );
}
