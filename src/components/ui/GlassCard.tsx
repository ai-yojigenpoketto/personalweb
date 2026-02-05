"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-2xl",
          "bg-white/80 dark:bg-slate-800/50",
          "backdrop-blur-lg",
          "border border-slate-200/50 dark:border-slate-700/50",
          "shadow-lg",
          hover && [
            "transition-all duration-300",
            "hover:shadow-xl hover:shadow-indigo-500/10",
            "hover:border-indigo-300/30 dark:hover:border-indigo-500/30",
            "hover:-translate-y-1",
          ],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";
