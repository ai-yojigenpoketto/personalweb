export interface AIProjectMetric {
  value: string;
  label: string;
}

export interface TerminalLine {
  prompt?: string;
  command?: string;
  output?: string;
  isComment?: boolean;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  x: number;
  y: number;
  type: "input" | "process" | "output" | "store";
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label?: string;
}

export interface AIProject {
  id: string;
  title: string;
  subtitle: string;
  status: "Production" | "Beta" | "Development";
  description: string;
  techStack: string[];
  techIcons: string[];
  metrics: AIProjectMetric[];
  terminalSession: TerminalLine[];
  architecture: {
    nodes: ArchitectureNode[];
    edges: ArchitectureEdge[];
  };
  highlights: string[];
  githubUrl?: string;
}

export interface SystemHealthItem {
  name: string;
  category: string;
  proficiency: number;
  status: "Operational" | "Degraded" | "Offline";
}
