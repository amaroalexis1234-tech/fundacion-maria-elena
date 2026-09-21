"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({ value, suffix = "", duration = 1.5, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const controls = animate(0, value, {
      duration: prefersReducedMotion ? 0 : duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("es")}
      {suffix}
    </span>
  );
}
