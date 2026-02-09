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
          "bg-[var(--ai-bg-card)]",
          "border border-[var(--ai-border)]",
          "shadow-lg",
          hover && [
            "transition-all duration-300",
            "hover:shadow-xl hover:shadow-emerald-500/10",
            "hover:border-emerald-500/30",
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
