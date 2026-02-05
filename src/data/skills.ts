import { Skill } from "@/lib/types";

export const skills: Skill[] = [
  // AI/LLM
  { name: "LLM Integration", category: "AI/LLM" },
  { name: "OpenAI API", category: "AI/LLM" },
  { name: "Anthropic Claude", category: "AI/LLM" },
  { name: "Prompt Engineering", category: "AI/LLM" },
  { name: "Fine-tuning", category: "AI/LLM" },
  { name: "RLHF", category: "AI/LLM" },

  // RAG & Search
  { name: "RAG Systems", category: "RAG & Search" },
  { name: "Vector Databases", category: "RAG & Search" },
  { name: "Pinecone", category: "RAG & Search" },
  { name: "Embeddings", category: "RAG & Search" },
  { name: "Semantic Search", category: "RAG & Search" },

  // Agentic Systems
  { name: "LangChain", category: "Agentic Systems" },
  { name: "LangGraph", category: "Agentic Systems" },
  { name: "Multi-Agent Systems", category: "Agentic Systems" },
  { name: "Tool Calling", category: "Agentic Systems" },
  { name: "Agent Orchestration", category: "Agentic Systems" },

  // Data & ML
  { name: "Python", category: "Data & ML" },
  { name: "PyTorch", category: "Data & ML" },
  { name: "Transformers", category: "Data & ML" },
  { name: "NLP", category: "Data & ML" },
  { name: "Pandas", category: "Data & ML" },
  { name: "Scikit-learn", category: "Data & ML" },

  // Cloud & DevOps
  { name: "AWS", category: "Cloud & DevOps" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "Kubernetes", category: "Cloud & DevOps" },
  { name: "OpenTelemetry", category: "Cloud & DevOps" },
  { name: "CI/CD", category: "Cloud & DevOps" },

  // Backend
  { name: "FastAPI", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Redis", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
];

export const skillCategories = [
  "AI/LLM",
  "RAG & Search",
  "Agentic Systems",
  "Data & ML",
  "Cloud & DevOps",
  "Backend",
] as const;
