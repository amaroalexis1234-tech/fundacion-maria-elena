"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { stories } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const SWIPE_THRESHOLD = 50;

export function Stories() {
  const [index, setIndex] = useState(0);
  const total = stories.items.length;
  const current = stories.items[index];

  const goTo = (next: number) => {
    setIndex(((next % total) + total) % total);
  };

  const touchStartXRef = useRef(0);

  return (
    <section id="historias" className="bg-fme-offwhite py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow={stories.eyebrow} title={stories.title} />

        <div
          className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          onTouchStart={(event) => {
            touchStartXRef.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            const delta = event.changedTouches[0].clientX - touchStartXRef.current;
            if (delta > SWIPE_THRESHOLD) goTo(index - 1);
            if (delta < -SWIPE_THRESHOLD) goTo(index + 1);
          }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image.src}
                  alt={current.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-2xl font-semibold leading-snug tracking-tight text-fme-ink sm:text-[28px]">
                  “{stories.quoteHighlight}”
                </p>
                <p className="mt-6 text-base leading-relaxed text-fme-muted">{current.quote}</p>
                <p className="mt-5 text-sm font-bold uppercase tracking-wide text-fme-purple">{current.name}</p>
                <Button href="#contacto" variant="text" className="mt-6">
                  {stories.cta} →
                </Button>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-5">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Historia anterior"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fme-line text-fme-ink transition-colors hover:border-fme-magenta hover:text-fme-magenta"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <span className="text-sm font-medium tabular-nums text-fme-muted">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Historia siguiente"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fme-line text-fme-ink transition-colors hover:border-fme-magenta hover:text-fme-magenta"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
