"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Cog,
  Zap,
  Shield,
  Radio,
  Users,
  ShieldCheck,
  Activity,
  Database,
  Search,
  Brain,
  Gauge,
  Microscope,
  Globe,
  FileText,
  CheckCircle,
} from "lucide-react";
import { AIProject } from "@/lib/ai-projects-types";
import { StatusBadge } from "./StatusBadge";
import { MetricBadge } from "./MetricBadge";
import { ScanlineOverlay } from "./ScanlineOverlay";

const iconMap: Record<string, React.ElementType> = {
  cpu: Cpu,
  cog: Cog,
  zap: Zap,
  shield: Shield,
  radio: Radio,
  users: Users,
  "shield-check": ShieldCheck,
  activity: Activity,
  database: Database,
  search: Search,
  brain: Brain,
  gauge: Gauge,
  microscope: Microscope,
  globe: Globe,
  "file-text": FileText,
  "check-circle": CheckCircle,
};

interface SystemCardProps {
  project: AIProject;
  index: number;
  onDeepDive: (project: AIProject) => void;
}

export function SystemCard({ project, index, onDeepDive }: SystemCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative rounded-xl border p-6 transition-colors cursor-default"
      style={{
        background: "var(--ai-bg-card)",
        borderColor: isHovered ? "var(--ai-accent)" : "var(--ai-border)",
        boxShadow: isHovered
          ? "0 0 20px rgba(16, 185, 129, 0.1)"
          : "none",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ScanlineOverlay active={isHovered} />

      {/* Title + Status */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3
          className="text-lg font-semibold font-[family-name:var(--font-fira-code)]"
          style={{ color: "var(--ai-text-primary)" }}
        >
          {project.title}
        </h3>
        <StatusBadge status={project.status} />
      </div>

      {/* Subtitle */}
      <p className="text-sm mb-4" style={{ color: "var(--ai-text-secondary)" }}>
        {project.subtitle}
      </p>

      {/* Tech Icons */}
      <div className="flex items-center gap-3 mb-4">
        {project.techIcons.map((iconName) => {
          const Icon = iconMap[iconName];
          if (!Icon) return null;
          return (
            <Icon
              key={iconName}
              size={16}
              style={{ color: "var(--ai-text-muted)" }}
            />
          );
        })}
      </div>

      {/* Metrics */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.metrics.map((metric) => (
          <MetricBadge key={metric.label} metric={metric} />
        ))}
      </div>

      {/* Deep Dive Button */}
      <button
        onClick={() => onDeepDive(project)}
        className="text-sm font-medium font-[family-name:var(--font-fira-code)] transition-colors"
        style={{ color: "var(--ai-accent)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#34d399")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ai-accent)")}
      >
        Deep Dive →
      </button>
    </motion.div>
  );
}
