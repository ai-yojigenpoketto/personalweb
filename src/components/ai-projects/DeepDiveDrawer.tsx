"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { AIProject } from "@/lib/ai-projects-types";
import { StatusBadge } from "./StatusBadge";
import { MetricBadge } from "./MetricBadge";
import { Terminal } from "./Terminal";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

interface DeepDiveDrawerProps {
  project: AIProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export function DeepDiveDrawer({ project, isOpen, onClose }: DeepDiveDrawerProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-2xl overflow-y-auto border-l"
            style={{
              background: "var(--ai-bg-primary)",
              borderColor: "var(--ai-border)",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="ai-dashboard p-6 md:p-8">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg transition-colors"
                style={{ color: "var(--ai-text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ai-text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ai-text-muted)")}
                aria-label="Close drawer"
              >
                <X size={20} />
              </button>

              {/* Status + Title */}
              <div className="mb-2">
                <StatusBadge status={project.status} />
              </div>
              <h2
                className="text-2xl font-bold font-[family-name:var(--font-fira-code)] mb-1"
                style={{ color: "var(--ai-text-primary)" }}
              >
                {project.title}
              </h2>
              <p
                className="text-sm mb-6"
                style={{ color: "var(--ai-text-secondary)" }}
              >
                {project.subtitle}
              </p>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--ai-text-secondary)" }}
              >
                {project.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.metrics.map((metric) => (
                  <MetricBadge key={metric.label} metric={metric} />
                ))}
              </div>

              {/* Terminal Session */}
              <div className="mb-8">
                <h3
                  className="text-xs font-[family-name:var(--font-fira-code)] uppercase tracking-widest mb-3"
                  style={{ color: "var(--ai-text-muted)" }}
                >
                  Session Log
                </h3>
                <Terminal title={project.id} lines={project.terminalSession} />
              </div>

              {/* Architecture */}
              <div className="mb-8">
                <h3
                  className="text-xs font-[family-name:var(--font-fira-code)] uppercase tracking-widest mb-3"
                  style={{ color: "var(--ai-text-muted)" }}
                >
                  Architecture
                </h3>
                <ArchitectureDiagram
                  nodes={project.architecture.nodes}
                  edges={project.architecture.edges}
                />
              </div>

              {/* Highlights */}
              <div>
                <h3
                  className="text-xs font-[family-name:var(--font-fira-code)] uppercase tracking-widest mb-3"
                  style={{ color: "var(--ai-text-muted)" }}
                >
                  Highlights
                </h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "var(--ai-text-secondary)" }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--ai-accent)" }}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
