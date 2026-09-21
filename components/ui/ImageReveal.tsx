"use client";

import Image, { type ImageProps } from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ImageRevealProps = Omit<ImageProps, "className"> & {
  wrapperClassName?: string;
  imageClassName?: string;
  delay?: number;
};

export function ImageReveal({ wrapperClassName, imageClassName, delay = 0, alt, ...props }: ImageRevealProps) {
  return (
    <motion.div
      className={cn("relative overflow-hidden", wrapperClassName)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image alt={alt} className={cn("h-full w-full object-cover", imageClassName)} {...props} />
    </motion.div>
  );
}
