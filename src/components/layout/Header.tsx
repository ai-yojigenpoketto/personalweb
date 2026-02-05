"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useThemeContext } from "./ThemeProvider";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useThemeContext();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={cn(
          "mx-auto mt-4 max-w-5xl px-4",
          "rounded-full border",
          "bg-white/70 dark:bg-slate-900/70",
          "border-slate-200/50 dark:border-slate-700/50",
          "backdrop-blur-lg shadow-lg"
        )}
      >
        <div className="flex h-14 items-center justify-between px-4">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-bold bg-gradient-to-r from-slate-800 via-indigo-700 to-slate-700 bg-clip-text text-transparent"
          >
            Lei Zhou
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
                  "hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full transition-colors",
                "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
                "hover:bg-slate-100 dark:hover:bg-slate-800"
              )}
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-full transition-colors",
                "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
                "hover:bg-slate-100 dark:hover:bg-slate-800"
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
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
                      "hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
