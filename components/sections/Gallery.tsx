"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const aspectByOrientation = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
} as const;

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const total = gallery.items.length;

  const close = useCallback(() => {
    setActiveIndex(null);
    lastTriggerRef.current?.focus();
  }, []);

  const goTo = useCallback(
    (next: number) => setActiveIndex(((next % total) + total) % total),
    [total],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") goTo(activeIndex + 1);
      if (event.key === "ArrowLeft") goTo(activeIndex - 1);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, close, goTo]);

  const active = activeIndex !== null ? gallery.items[activeIndex] : null;

  return (
    <section id="galeria" className="bg-fme-white py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} />

        <div className="mt-14 columns-2 gap-4 sm:gap-5 lg:columns-3">
          {gallery.items.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={(event) => {
                lastTriggerRef.current = event.currentTarget;
                setActiveIndex(index);
              }}
              className={`group relative mb-4 block w-full overflow-hidden rounded-2xl sm:mb-5 ${aspectByOrientation[image.orientation]}`}
              aria-label={`Ampliar fotografía: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {active ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Visor de fotografías"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-fme-ink/90 p-4 sm:p-8"
            onClick={close}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Cerrar visor"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goTo(activeIndex! - 1);
              }}
              aria-label="Fotografía anterior"
              className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div
              className="relative aspect-[4/3] w-full max-w-3xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goTo(activeIndex! + 1);
              }}
              aria-label="Fotografía siguiente"
              className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium tabular-nums text-white/70">
              {String(activeIndex! + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
