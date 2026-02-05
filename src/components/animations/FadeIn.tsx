"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeIn, fadeInUp } from "@/lib/animations";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const variants = direction === "up" ? fadeInUp : fadeIn;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: {
            ...((variants.visible as { transition?: object })?.transition || {}),
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
