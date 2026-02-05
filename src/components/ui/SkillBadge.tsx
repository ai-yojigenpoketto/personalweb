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
  "AI/LLM": "from-indigo-700 to-indigo-600",
  "RAG & Search": "from-slate-700 to-slate-600",
  "Agentic Systems": "from-violet-700 to-violet-600",
  "Data & ML": "from-slate-600 to-indigo-600",
  "Cloud & DevOps": "from-slate-700 to-violet-700",
  Backend: "from-indigo-600 to-slate-600",
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
        "bg-gradient-to-r text-white shadow-md",
        categoryColors[category]
      )}
    >
      {name}
    </motion.span>
  );
}
