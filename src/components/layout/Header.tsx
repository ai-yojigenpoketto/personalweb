"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (href.startsWith("/") && !href.startsWith("/#")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={cn(
          "mx-auto mt-4 max-w-5xl px-4",
          "rounded-full border",
          "bg-[#0d0d12]/80",
          "border-[var(--ai-border)]/50",
          "backdrop-blur-lg shadow-lg"
        )}
      >
        <div className="flex h-14 items-center justify-between px-4">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-bold font-[var(--font-fira-code)] text-emerald-400"
          >
            Lei Zhou
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  "text-[var(--ai-text-muted)] hover:text-[var(--ai-text-primary)]",
                  "hover:bg-[var(--ai-bg-card)]"
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-full transition-colors",
                "text-[var(--ai-text-muted)] hover:text-[var(--ai-text-primary)]",
                "hover:bg-[var(--ai-bg-card)]"
              )}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 pb-4 pt-2 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      "text-[var(--ai-text-muted)] hover:text-[var(--ai-text-primary)]",
                      "hover:bg-[var(--ai-bg-card)]"
                    )}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
