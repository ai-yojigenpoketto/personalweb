"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Calendar } from "lucide-react";
import { Experience } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-8"
    >
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-[var(--ai-border)]" />
      )}

      {/* Dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>

      {/* Content */}
      <div
        className={cn(
          "rounded-xl p-6",
          "bg-[var(--ai-bg-card)]",
          "border border-[var(--ai-border)]",
          "shadow-lg"
        )}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg font-semibold text-[var(--ai-text-primary)]">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 text-sm text-[var(--ai-text-secondary)]">
              <Building2 size={14} />
              <span>{experience.company}</span>
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-1 text-sm text-[var(--ai-text-muted)]">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[var(--ai-text-secondary)] text-sm mb-4">
          {experience.description}
        </p>

        {/* Achievements */}
        <ul className="space-y-2 mb-4">
          {experience.achievements.map((achievement, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-[var(--ai-text-secondary)]"
            >
              <span className="text-emerald-500 mt-1">-</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        {experience.technologies && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--ai-border)]">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium rounded-md bg-[var(--ai-bg-primary)] text-[var(--ai-text-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
