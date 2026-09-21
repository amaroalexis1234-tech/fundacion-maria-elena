"use client";

import { motion } from "framer-motion";
import { actionCta } from "@/lib/content";
import { Container } from "@/components/ui/Container";

const HEART_PATH =
  "M32 56C32 56 6 40 6 22C6 12 14 5 23 5C28 5 31 8 32 13C33 8 36 5 41 5C50 5 58 12 58 22C58 40 32 56 32 56Z";

export function ActionCTA() {
  return (
    <section
      id="impulso-final"
      className="relative overflow-hidden bg-gradient-to-br from-fme-blue via-fme-purple to-fme-magenta py-24 lg:py-32"
    >
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="pointer-events-none absolute -bottom-24 -right-10 h-[420px] w-[420px] fill-white/10 blur-[1px] lg:h-[560px] lg:w-[560px]"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d={HEART_PATH} />
      </motion.svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-[55%_45%_40%_60%/50%_55%_45%_50%] bg-white/5 blur-xl"
      />

      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="text-[clamp(2rem,4vw+1rem,3.25rem)] font-extrabold leading-[1.1] tracking-tight text-white">
            {actionCta.title}
          </h2>
          <p className="mt-5 text-lg text-white/85">{actionCta.description}</p>

          <div className="mt-10 flex flex-col items-center">
            <span className="font-accent text-3xl font-bold tracking-wide text-white sm:text-4xl">
              {actionCta.hashtag}
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
