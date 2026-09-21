import { Mail, Newspaper } from "lucide-react";
import { press } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Press() {
  return (
    <section id="prensa" className="bg-fme-offwhite py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeading eyebrow={press.eyebrow} title={press.title} description={press.description} />

        <div className="rounded-[24px] border border-fme-line bg-white p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-fme-offwhite text-fme-blue">
              <Newspaper className="h-[18px] w-[18px]" />
            </span>
            <p className="text-sm font-semibold text-fme-ink">{press.contactLabel}</p>
          </div>

          <div className="mt-6 space-y-4">
            <a
              href={`mailto:${press.email}`}
              className="flex items-center gap-3 text-[15px] text-fme-ink transition-colors hover:text-fme-blue"
            >
              <Mail className="h-4 w-4 shrink-0 text-fme-muted" />
              {press.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
