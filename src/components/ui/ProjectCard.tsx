"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { GlassCard } from "./GlassCard";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard className={cn("p-6 h-full flex flex-col", project.featured && "ring-2 ring-emerald-500/50")}>
        {/* Featured Badge */}
        {project.featured && (
          <div className="mb-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-600 text-white">
              Featured
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold text-[var(--ai-text-primary)] mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[var(--ai-text-secondary)] text-sm mb-4 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className={cn(
                "px-2 py-1 text-xs font-medium rounded-md",
                "bg-[var(--ai-bg-primary)]",
                "text-[var(--ai-text-muted)]"
              )}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-[var(--ai-border)]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-[var(--ai-text-muted)] hover:text-emerald-400 transition-colors"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-[var(--ai-text-muted)] hover:text-emerald-400 transition-colors"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
          <a
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1 text-sm text-[var(--ai-text-secondary)] hover:text-emerald-400 transition-colors ml-auto"
          >
            Learn more
            <ArrowRight size={16} />
          </a>
        </div>
      </GlassCard>
    </motion.div>
  );
}
