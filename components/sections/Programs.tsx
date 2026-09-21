"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { programs } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Programs() {
  return (
    <section id="programas" className="bg-fme-white py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow={programs.eyebrow} title={programs.title} description={programs.description} />

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {programs.items.map((program, index) => (
            <motion.article
              key={program.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={program.image.src}
                  alt={program.image.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fme-purple/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-fme-turquoise">
                {program.category}
              </p>
              <h3 className="mt-2 text-xl font-bold text-fme-ink">{program.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fme-muted">{program.description}</p>

              {program.link ? (
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-fme-magenta hover:underline"
                >
                  Conoce más
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </a>
              ) : (
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-fme-magenta">
                  Conoce más
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </span>
              )}
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
