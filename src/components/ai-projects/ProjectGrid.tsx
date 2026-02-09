"use client";

import { AIProject } from "@/lib/ai-projects-types";
import { SystemCard } from "./SystemCard";

interface ProjectGridProps {
  projects: AIProject[];
  onDeepDive: (project: AIProject) => void;
}

export function ProjectGrid({ projects, onDeepDive }: ProjectGridProps) {
  return (
    <section className="mb-20">
      <h2
        className="text-sm font-[family-name:var(--font-fira-code)] mb-6 tracking-wider"
        style={{ color: "var(--ai-accent)" }}
      >
        // ACTIVE_SYSTEMS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <SystemCard
            key={project.id}
            project={project}
            index={index}
            onDeepDive={onDeepDive}
          />
        ))}
      </div>
    </section>
  );
}
