"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

/**
 * LazyMotion provider that loads only the domAnimation feature set.
 * This reduces the Framer Motion bundle by ~60% compared to the full bundle.
 *
 * - domAnimation: Supports transforms, opacity, and basic animations
 * - Does NOT include: layout animations, drag, or SVG path animations
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
