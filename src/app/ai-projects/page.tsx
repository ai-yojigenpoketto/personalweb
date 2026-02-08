import type { Metadata } from "next";
import { AIProjectsPage } from "@/components/ai-projects/AIProjectsPage";

export const metadata: Metadata = {
  title: "AI Projects | Lei Zhou - AI Infrastructure Lab",
  description:
    "Explore production-grade AI infrastructure projects: agentic runtimes, multi-agent systems, RAG pipelines, and autonomous research agents.",
  openGraph: {
    title: "AI Projects | Lei Zhou - AI Infrastructure Lab",
    description:
      "Explore production-grade AI infrastructure projects: agentic runtimes, multi-agent systems, RAG pipelines, and autonomous research agents.",
  },
};

export default function AIProjectsRoute() {
  return <AIProjectsPage />;
}
