"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ai-yojigenpoketto",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/lei-zhou-phd",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:rzhou213@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {currentYear} Lei Zhou. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-colors",
                  "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white",
                  "hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
