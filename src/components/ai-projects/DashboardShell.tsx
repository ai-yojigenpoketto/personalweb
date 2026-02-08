"use client";

import { ReactNode } from "react";

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div
      className="ai-dashboard min-h-screen"
      style={{ background: "var(--ai-bg-primary)", color: "var(--ai-text-primary)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {children}
      </div>
    </div>
  );
}
