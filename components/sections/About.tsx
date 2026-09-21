import { about } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <section id="nosotros" className="bg-fme-white py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-8 h-40 w-40 rounded-[50%_50%_45%_55%/55%_45%_55%_45%] bg-fme-blue/10 lg:h-56 lg:w-56"
          />
          <ImageReveal
            src={about.image.src}
            alt={about.image.alt}
            width={1000}
            height={1250}
            wrapperClassName="relative aspect-[4/5] w-full rounded-[24px]"
            imageClassName="rounded-[24px]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />

          <p className="mt-6 text-lg leading-relaxed text-fme-muted">{about.body}</p>

          <Button href="#contacto" variant="text" className="mt-8">
            {about.cta} →
          </Button>
        </div>
      </Container>
    </section>
  );
}
