import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "lenovo",
    company: "Lenovo",
    role: "AIOps Advisory Researcher",
    location: "Morrisville, NC",
    period: "Aug 2024 - Present",
    description:
      "Leading AI/ML initiatives for enterprise operations, building production-ready GenAI and Agentic applications.",
    achievements: [
      "Built Self-Service BI Agent (Text-to-Chart) enabling natural language data visualization",
      "Developed Smart Infrastructure MVP with S3, ETL pipelines, and analytics dashboards",
      "Created AgentOps MVP with FastAPI, PostgreSQL, Redis/RQ, and OpenTelemetry integration",
      "Implemented real-time streaming and evidence-first analysis for automated Root Cause Analysis",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Next.js",
      "OpenTelemetry",
      "LangChain",
    ],
  },
  {
    id: "outlier",
    company: "Outlier.ai",
    role: "AI Training Contractor",
    location: "Remote",
    period: "Oct 2024 - Present",
    description:
      "Contributing to AI model improvement through advanced evaluation and training methodologies.",
    achievements: [
      "Conducted multi-turn prompting evaluation for complex conversational AI scenarios",
      "Performed agent tool calling evaluation to improve function-calling capabilities",
      "Applied RLHF techniques and Prompt Engineering for model refinement",
    ],
    technologies: ["RLHF", "Prompt Engineering", "LLM Evaluation"],
  },
  {
    id: "merative",
    company: "Merative (formerly IBM Watson Health)",
    role: "Data Scientist",
    location: "Remote",
    period: "Jul 2017 - Aug 2023",
    description:
      "Built ML/NLP solutions for healthcare analytics, earning multiple innovation awards.",
    achievements: [
      "Developed NLP and Neural Network models using Transformers for medical text analysis",
      "Created medical procedure grouper system (Innovation Award)",
      "Built frequent pattern mining solution (Client Success Award)",
      "Shipped Watson Change Detection production code for enterprise deployment",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "Transformers",
      "NLP",
      "SQL",
      "Spark",
    ],
  },
];
