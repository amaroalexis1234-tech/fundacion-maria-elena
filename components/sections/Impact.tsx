"use client";

import { motion } from "framer-motion";
import { impact } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Impact() {
  return (
    <section id="impacto" className="bg-fme-offwhite py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow={impact.eyebrow} title={impact.title} align="center" className="mx-auto" />

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-8">
          {impact.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              {stat.value !== null ? (
                <p className="text-[clamp(2.25rem,3.5vw+1rem,3.5rem)] font-extrabold tracking-tight text-fme-purple">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
              ) : (
                <p className="font-mono text-lg font-semibold tracking-tight text-fme-purple/40 sm:text-xl">
                  {stat.placeholder}
                </p>
              )}
              <p className="mt-2 text-sm font-medium text-fme-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
