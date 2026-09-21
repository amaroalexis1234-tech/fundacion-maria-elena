"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export function Dialog({ open, onClose, title, children }: DialogProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    lastActiveRef.current = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      lastActiveRef.current?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-fme-ink/50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md rounded-[24px] bg-white p-6 shadow-[0_20px_50px_rgba(27,27,34,0.2)] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full text-fme-muted transition-colors hover:bg-fme-offwhite hover:text-fme-ink"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="pr-8 text-xl font-bold text-fme-ink">{title}</h3>
            <div className="mt-4 text-[15px] leading-relaxed text-fme-muted">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
