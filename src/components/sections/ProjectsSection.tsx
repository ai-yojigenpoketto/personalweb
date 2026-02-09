"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { GradientText } from "@/components/ui/GradientText";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  // Sort projects: featured first, then by id
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Featured <GradientText>Projects</GradientText>
          </h2>
          <p className="text-[var(--ai-text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            Production-ready GenAI and Agentic applications I&apos;ve built
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
