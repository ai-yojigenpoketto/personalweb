export interface UseCase {
  icon: string;
  title: string;
  description: string;
}

export interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface TechCategory {
  name: string;
  items: string[];
  description?: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  highlights?: string[];
  // Enhanced fields for sales pages
  tagline?: string;
  problem?: string;
  useCases?: UseCase[];
  screenshots?: Screenshot[];
  techCategories?: TechCategory[];
  architecture?: string;
  metrics?: Metric[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "AI/LLM"
  | "RAG & Search"
  | "Agentic Systems"
  | "Data & ML"
  | "Cloud & DevOps"
  | "Backend";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
