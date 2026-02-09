"use client";

import { motion } from "framer-motion";

interface StatusBadgeProps {
  status: "Production" | "Beta" | "Development";
}

const statusColors = {
  Production: { dot: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/30" },
  Beta: { dot: "bg-amber-500", text: "text-amber-400", border: "border-amber-500/30" },
  Development: { dot: "bg-slate-500", text: "text-slate-400", border: "border-slate-500/30" },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const colors = statusColors[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors.text} ${colors.border}`}
      style={{ background: "var(--ai-bg-card)" }}
    >
      <motion.span
        className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {status}
    </span>
  );
}
