"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  gradient?: "primary" | "secondary" | "accent";
}

const gradients = {
  primary: "from-[#f0f0f5] via-emerald-400 to-[#f0f0f5]",
  secondary: "from-emerald-400 to-emerald-300",
  accent: "from-emerald-500 to-emerald-400",
};

export function GradientText({
  className,
  gradient = "primary",
  children,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        gradients[gradient],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
