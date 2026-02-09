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
    <footer className="border-t border-[var(--ai-border)] bg-[#0d0d12]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-[var(--ai-text-muted)]">
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
                  "text-[var(--ai-text-muted)] hover:text-emerald-400",
                  "hover:bg-[var(--ai-bg-card)]"
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
