"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { hero, siteInfo } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const finalCta = document.getElementById("impulso-final");
      // Hide once the closing CTA section (and everything after it — Prensa,
      // Contacto, Footer) starts entering the viewport, so this button never
      // sits on top of their own buttons, links or the contact form.
      const reachedFinalStretch = finalCta ? finalCta.getBoundingClientRect().top < window.innerHeight : false;
      setVisible(scrollY > 700 && !reachedFinalStretch);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ctaHref = getWhatsAppUrl(`Hola, quiero ayudar a ${siteInfo.name}.`) ?? "#contacto";
  const isExternal = ctaHref.startsWith("https://wa.me");

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
        >
          <a
            href={ctaHref}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={hero.primaryCta}
            title={hero.primaryCta}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-fme-magenta text-white shadow-[0_12px_30px_rgba(173,58,135,0.4)] transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
          >
            <HeartHandshake className="h-6 w-6" />
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
