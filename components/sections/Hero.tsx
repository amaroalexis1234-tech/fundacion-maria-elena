"use client";

import { motion } from "framer-motion";
import { hero, siteInfo } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";

const HEART_PATH =
  "M32 56C32 56 6 40 6 22C6 12 14 5 23 5C28 5 31 8 32 13C33 8 36 5 41 5C50 5 58 12 58 22C58 40 32 56 32 56Z";

export function Hero() {
  const ctaHref = getWhatsAppUrl(`Hola, quiero ayudar a ${siteInfo.name}.`) ?? "#contacto";
  const [titleBefore, titleAfter] = hero.title.split(hero.titleAccent);

  return (
    <section id="inicio" className="relative overflow-hidden bg-fme-white pt-32 pb-24 sm:pt-36 lg:pb-32">
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="pointer-events-none absolute -top-16 right-[-12%] h-[420px] w-[420px] opacity-[0.14] blur-[1px] lg:h-[600px] lg:w-[600px]"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="heroHeart" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#32A9C7" />
            <stop offset="45%" stopColor="#4B7CB7" />
            <stop offset="100%" stopColor="#AD3A87" />
          </linearGradient>
        </defs>
        <path d={HEART_PATH} fill="url(#heroHeart)" />
      </motion.svg>

      <Container className="relative grid items-center gap-14 lg:grid-cols-[9fr_11fr] lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-fme-blue"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.625rem,5vw+1.5rem,4.75rem)] font-extrabold leading-[1.05] tracking-tight text-fme-ink"
          >
            {titleBefore}
            <span className="relative inline-block">
              <span className="relative z-10">{hero.titleAccent}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-[0.06em] -z-0 h-[0.34em] -rotate-1 rounded-full bg-gradient-to-r from-fme-turquoise/55 via-fme-blue/45 to-fme-magenta/55"
              />
            </span>
            {titleAfter}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-lg leading-relaxed text-fme-muted"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Button href={ctaHref} external={ctaHref.startsWith("https://wa.me")}>
              {hero.primaryCta}
            </Button>
            <Button href="#nosotros" variant="text">
              {hero.secondaryCta} →
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <ImageReveal
            src={hero.image.src}
            alt={hero.image.alt}
            width={1200}
            height={1500}
            priority
            wrapperClassName="aspect-[4/5] w-full rounded-[28px]"
            imageClassName="rounded-[28px]"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />

          <motion.div
            initial={{ opacity: 0, y: 10, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-5 left-6 rounded-2xl bg-white px-5 py-3 shadow-[0_10px_30px_rgba(57,32,87,0.14)] sm:left-8 sm:px-6 sm:py-3.5"
          >
            <span className="font-accent text-2xl font-bold leading-none text-fme-magenta sm:text-3xl">
              {siteInfo.hashtag}
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
