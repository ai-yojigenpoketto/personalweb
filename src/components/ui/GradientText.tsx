"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  gradient?: "primary" | "secondary" | "accent";
}

const gradients = {
  primary: "from-slate-800 via-indigo-700 to-slate-700",
  secondary: "from-slate-700 via-slate-600 to-indigo-600",
  accent: "from-indigo-600 via-slate-600 to-slate-500",
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
