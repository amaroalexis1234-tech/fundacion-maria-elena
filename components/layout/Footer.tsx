"use client";

import { useState } from "react";
import { MapPin, MessageCircle } from "lucide-react";
import { contact, footer, legal, map, siteInfo } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Dialog } from "@/components/ui/Dialog";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  WhatsApp: MessageCircle,
} as const;

export function Footer() {
  const year = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="border-t border-fme-line bg-fme-offwhite">
      <Container className="flex flex-col gap-10 py-14 lg:flex-row lg:items-start lg:justify-between">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 text-sm font-semibold text-fme-ink">
            <MapPin className="h-4 w-4 text-fme-magenta" />
            Encuéntranos
          </div>

          <div className="relative mt-3 overflow-hidden rounded-[20px] border border-fme-line shadow-[0_4px_16px_rgba(27,27,34,0.06)]">
            <iframe
              src={map.embedUrl}
              title={map.title}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-48 w-full border-0 grayscale-[15%]"
            />
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <p className="text-sm text-fme-muted">{contact.info.ubicacion}</p>
            <a
              href={map.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-semibold text-fme-blue underline-offset-4 hover:underline"
            >
              Ver en Google Maps →
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 lg:items-end">
          <p className="text-sm font-semibold text-fme-ink">Síguenos</p>
          <div className="flex gap-3">
            {footer.social.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fme-line text-fme-ink/70 transition-colors hover:border-fme-magenta hover:text-fme-magenta"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>

      <div className="border-t border-fme-line">
        <Container className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-fme-muted">
            © {year} {siteInfo.name}. Todos los derechos reservados. {siteInfo.legalNote}
          </p>
          <button
            type="button"
            onClick={() => setIsPrivacyOpen(true)}
            className="text-left text-xs font-medium text-fme-ink/70 underline-offset-4 transition-colors hover:text-fme-magenta hover:underline"
          >
            {legal.privacyLinkLabel}
          </button>
        </Container>
      </div>

      <Dialog open={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} title={legal.privacyTitle}>
        <p>{legal.privacyBody}</p>
      </Dialog>
    </footer>
  );
}
