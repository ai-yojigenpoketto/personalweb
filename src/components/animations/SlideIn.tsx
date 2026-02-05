"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { slideInLeft, slideInRight } from "@/lib/animations";

interface SlideInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right";
}

export function SlideIn({
  children,
  className,
  delay = 0,
  direction = "left",
}: SlideInProps) {
  const variants = direction === "left" ? slideInLeft : slideInRight;

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
