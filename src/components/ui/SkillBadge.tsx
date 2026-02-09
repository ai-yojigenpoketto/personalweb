"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SkillCategory } from "@/lib/types";

interface SkillBadgeProps {
  name: string;
  category: SkillCategory;
  index: number;
}

const categoryColors: Record<SkillCategory, string> = {
  "AI/LLM": "bg-[var(--ai-bg-card)] border border-emerald-500/20 text-emerald-400",
  "RAG & Search": "bg-[var(--ai-bg-card)] border border-emerald-500/20 text-emerald-400",
  "Agentic Systems": "bg-[var(--ai-bg-card)] border border-emerald-500/20 text-emerald-400",
  "Data & ML": "bg-[var(--ai-bg-card)] border border-emerald-500/20 text-emerald-400",
  "Cloud & DevOps": "bg-[var(--ai-bg-card)] border border-emerald-500/20 text-emerald-400",
  Backend: "bg-[var(--ai-bg-card)] border border-emerald-500/20 text-emerald-400",
};

export function SkillBadge({ name, category, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium",
        categoryColors[category]
      )}
    >
      {name}
    </motion.span>
  );
}
