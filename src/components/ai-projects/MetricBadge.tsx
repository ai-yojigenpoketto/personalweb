"use client";

import { AIProjectMetric } from "@/lib/ai-projects-types";

interface MetricBadgeProps {
  metric: AIProjectMetric;
}

export function MetricBadge({ metric }: MetricBadgeProps) {
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors"
      style={{
        borderColor: "var(--ai-border)",
        background: "var(--ai-bg-primary)",
      }}
    >
      <span
        className="font-semibold text-sm font-[family-name:var(--font-fira-code)]"
        style={{ color: "var(--ai-accent)" }}
      >
        {metric.value}
      </span>
      <span className="text-xs" style={{ color: "var(--ai-text-muted)" }}>
        {metric.label}
      </span>
    </div>
  );
}
