"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, ReactNode, cloneElement, isValidElement } from "react";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  children: ReactNode;
}

function getButtonClasses(
  variant: "primary" | "secondary" | "ghost" = "primary",
  size: "sm" | "md" | "lg" = "md",
  className?: string
) {
  return cn(
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-[#0a0a0f]",
    "disabled:opacity-50 disabled:pointer-events-none",
    // Variants
    variant === "primary" && [
      "bg-emerald-600 text-white",
      "hover:bg-emerald-500",
      "shadow-lg hover:shadow-xl hover:shadow-emerald-500/20",
    ],
    variant === "secondary" && [
      "border border-[var(--ai-border)] bg-[var(--ai-bg-card)] text-[var(--ai-text-primary)]",
      "hover:bg-[var(--ai-bg-card-hover)]",
    ],
    variant === "ghost" && [
      "text-[var(--ai-text-secondary)]",
      "hover:bg-[var(--ai-bg-card)] hover:text-[var(--ai-text-primary)]",
    ],
    // Sizes
    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-6 py-2.5 text-sm",
    size === "lg" && "px-8 py-3 text-base",
    className
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", asChild, className, children, ...props }, ref) => {
    const classes = getButtonClasses(variant, size, className);

    if (asChild && isValidElement(children)) {
      return cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(classes, (children as React.ReactElement<{ className?: string }>).props.className),
      });
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
