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
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    "disabled:opacity-50 disabled:pointer-events-none",
    // Variants
    variant === "primary" && [
      "bg-gradient-to-r from-slate-800 to-indigo-700 text-white",
      "hover:from-slate-900 hover:to-indigo-800",
      "shadow-lg hover:shadow-xl hover:shadow-indigo-500/20",
    ],
    variant === "secondary" && [
      "border border-slate-300 dark:border-slate-600",
      "bg-white dark:bg-slate-800",
      "text-slate-700 dark:text-slate-200",
      "hover:bg-slate-50 dark:hover:bg-slate-700",
    ],
    variant === "ghost" && [
      "text-slate-600 dark:text-slate-300",
      "hover:bg-slate-100 dark:hover:bg-slate-800",
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
