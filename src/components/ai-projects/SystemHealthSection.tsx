"use client";

import { motion } from "framer-motion";
import { SystemHealthItem } from "@/lib/ai-projects-types";

interface SystemHealthSectionProps {
  items: SystemHealthItem[];
}

export function SystemHealthSection({ items }: SystemHealthSectionProps) {
  // Group by category
  const grouped = items.reduce<Record<string, SystemHealthItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <section>
      <h2
        className="text-sm font-[family-name:var(--font-fira-code)] mb-6 tracking-wider"
        style={{ color: "var(--ai-accent)" }}
      >
        // SYSTEM_HEALTH
      </h2>

      <div className="space-y-8">
        {Object.entries(grouped).map(([category, categoryItems]) => (
          <div key={category}>
            <h3
              className="text-xs font-[family-name:var(--font-fira-code)] uppercase tracking-widest mb-4"
              style={{ color: "var(--ai-text-muted)" }}
            >
              {category}
            </h3>
            <div className="space-y-3">
              {categoryItems.map((item, i) => (
                <div key={item.name} className="flex items-center gap-4">
                  {/* Name */}
                  <span
                    className="text-sm font-[family-name:var(--font-fira-code)] w-36 shrink-0"
                    style={{ color: "var(--ai-text-secondary)" }}
                  >
                    {item.name}
                  </span>

                  {/* Progress bar */}
                  <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "var(--ai-border)" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #059669, #34d399)",
                      }}
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${item.proficiency}%` }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                    />
                  </div>

                  {/* Percentage */}
                  <span
                    className="text-xs font-[family-name:var(--font-fira-code)] w-10 text-right"
                    style={{ color: "var(--ai-text-muted)" }}
                  >
                    {item.proficiency}%
                  </span>

                  {/* Status dot */}
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
