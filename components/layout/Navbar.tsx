"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation, siteInfo } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
        isScrolled
          ? "border-b border-fme-line bg-white/85 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="relative flex h-20 items-center justify-between">
        <Link href="#inicio" className="flex shrink-0 items-center">
          <Image
            src="/images/logo/logo-full.png"
            alt={siteInfo.name}
            width={1080}
            height={1080}
            priority
            className="h-14 w-14 sm:h-16 sm:w-16"
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex"
          aria-label="Navegación principal"
        >
          {navigation.desktop.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-fme-ink/80 transition-colors hover:text-fme-magenta"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-fme-ink lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-b border-fme-line bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {navigation.mobile.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-fme-ink transition-colors hover:bg-fme-offwhite hover:text-fme-magenta"
                >
                  {link.label}
                </Link>
              ))}
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
