"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ai-yojigenpoketto",
    icon: Github,
    description: "Check out my projects and code",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/lei-zhou-phd",
    icon: Linkedin,
    description: "Connect professionally",
  },
  {
    name: "Email",
    url: "mailto:rzhou213@gmail.com",
    icon: Mail,
    description: "rzhou213@gmail.com",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Get in <GradientText>Touch</GradientText>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-xl mx-auto">
            Have a project in mind or want to discuss AI/ML opportunities? Let&apos;s connect!
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GlassCard className="p-8" hover={false}>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl",
                    "bg-slate-50 dark:bg-slate-800/50",
                    "text-slate-700 dark:text-slate-300",
                    "hover:bg-slate-100 dark:hover:bg-slate-700/50",
                    "transition-colors group"
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-indigo-600 flex items-center justify-center">
                    <link.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {link.name}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {link.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 text-center">
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Open to discussing new projects, collaborations, or opportunities in GenAI and Agentic systems.
              </p>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
