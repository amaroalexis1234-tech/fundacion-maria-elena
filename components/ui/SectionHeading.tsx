"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
            tone === "dark" ? "text-fme-blue" : "text-white/70",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-[34px] font-bold leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]",
          tone === "dark" ? "text-fme-ink" : "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "dark" ? "text-fme-muted" : "text-white/80",
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
