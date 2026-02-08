"use client";

import { useState, useCallback } from "react";
import { AIProject } from "@/lib/ai-projects-types";
import { AI_PROJECTS, SYSTEM_HEALTH } from "@/data/ai-projects";
import { DashboardShell } from "./DashboardShell";
import { TerminalHero } from "./TerminalHero";
import { ProjectGrid } from "./ProjectGrid";
import { SystemHealthSection } from "./SystemHealthSection";
import { DeepDiveDrawer } from "./DeepDiveDrawer";

export function AIProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<AIProject | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDeepDive = useCallback((project: AIProject) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  return (
    <DashboardShell>
      <TerminalHero />
      <ProjectGrid projects={AI_PROJECTS} onDeepDive={handleDeepDive} />
      <SystemHealthSection items={SYSTEM_HEALTH} />
      <DeepDiveDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </DashboardShell>
  );
}
