import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "autonomous-dev-agent",
    slug: "autonomous-dev-agent",
    title: "Autonomous Development Agent",
    description:
      "AI agent that builds software autonomously - plans tasks, generates code, runs tests, fixes errors, and learns from outcomes.",
    longDescription: `An intelligent AI agent capable of autonomous software development.
The agent understands high-level requirements, breaks them into actionable tasks,
generates production-quality code, executes tests, and iteratively fixes any issues.

Key capabilities include persistent memory for learning from past sessions,
intelligent task decomposition, and self-correction through test-driven development.`,
    technologies: [
      "Python",
      "Anthropic Claude API",
      "CLI",
      "Memory Persistence",
      "Test Automation",
    ],
    featured: true,
    highlights: [
      "Autonomous task planning and decomposition",
      "Code generation with self-correction",
      "Test execution and error resolution",
      "Memory persistence across sessions",
      "CLI interface for developer interaction",
    ],
    // Enhanced fields
    tagline: "Your AI pair programmer that never sleeps",
    problem: `Building software is slow. Debugging is tedious. Developers spend 50% of their time on repetitive tasks like writing boilerplate, fixing simple bugs, and running tests.

What if an AI could handle the repetitive parts while you focus on architecture and creative problem-solving? Traditional code assistants require constant hand-holding - you ask, they respond, you verify, repeat.

This agent flips the script: describe what you want, and it builds it autonomously - planning, coding, testing, and fixing until it works.`,
    useCases: [
      {
        icon: "Sparkles",
        title: "Generate Boilerplate",
        description:
          "Describe a feature in plain English, get production-ready code with proper structure and patterns.",
      },
      {
        icon: "Bug",
        title: "Auto-fix Failing Tests",
        description:
          "Point the agent at failing tests and watch it iteratively fix the code until everything passes.",
      },
      {
        icon: "RefreshCw",
        title: "Refactor with Intent",
        description:
          "Say 'make this more maintainable' or 'add error handling' and the agent rewrites intelligently.",
      },
      {
        icon: "Brain",
        title: "Learn Your Patterns",
        description:
          "Persistent memory means it learns from your codebase and improves over time.",
      },
    ],
    techCategories: [
      {
        name: "Core AI",
        items: ["Anthropic Claude API", "Function Calling", "Chain of Thought"],
        description:
          "Claude powers the reasoning engine with advanced function calling for tool use.",
      },
      {
        name: "Agent Framework",
        items: ["Python", "asyncio", "Rich CLI"],
        description:
          "Built in Python with async support for parallel task execution.",
      },
      {
        name: "Code Execution",
        items: ["subprocess", "pytest", "AST parsing"],
        description:
          "Safe code execution with test automation and static analysis.",
      },
      {
        name: "Memory & State",
        items: ["SQLite", "Vector embeddings", "Session persistence"],
        description:
          "Persistent memory allows learning across sessions and projects.",
      },
    ],
    architecture: `The agent follows a Plan-Execute-Observe loop:

1. **Planner**: Takes high-level goals and decomposes into atomic tasks
2. **Executor**: Generates code, runs commands, and applies changes
3. **Observer**: Monitors test results and system feedback
4. **Memory**: Stores successful patterns and learned corrections

Each iteration refines the output until success criteria are met or the agent requests human guidance.`,
    metrics: [
      { value: "85%", label: "First-pass success rate on standard tasks" },
      { value: "3x", label: "Faster boilerplate generation vs manual" },
      { value: "∞", label: "Patience for repetitive debugging" },
    ],
  },
  {
    id: "agentops-smart-sre",
    slug: "agentops-smart-sre",
    title: "AgentOps Smart SRE",
    description:
      "Production MVP for automated Root Cause Analysis of multi-agent system failures with real-time progress streaming.",
    longDescription: `A comprehensive SRE solution for monitoring and debugging multi-agent AI systems.
Features automated root cause analysis, evidence-first investigation methodology,
and real-time progress streaming for transparency into the debugging process.`,
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "Redis/RQ",
      "Next.js",
      "SSE Streaming",
      "OpenTelemetry",
    ],
    featured: true,
    highlights: [
      "Automated Root Cause Analysis for agent failures",
      "Real-time progress streaming via SSE",
      "Evidence-first analysis methodology",
      "OpenTelemetry integration for observability",
      "Production-ready Next.js dashboard",
    ],
    // Enhanced fields
    tagline: "Debug multi-agent failures in minutes, not hours",
    problem: `When AI agents fail in production, finding the root cause across multiple services is like finding a needle in a haystack made of other needles.

Multi-agent systems are notoriously hard to debug: agents call other agents, make decisions based on intermediate states, and fail in ways that are nearly impossible to reproduce.

Traditional monitoring tools weren't designed for this. You need something that understands agent interactions, follows the reasoning chain, and pinpoints exactly where things went wrong.`,
    useCases: [
      {
        icon: "Search",
        title: "Automated Root Cause Analysis",
        description:
          "Submit a failure trace and get a detailed breakdown of what went wrong and why.",
      },
      {
        icon: "Activity",
        title: "Real-time Investigation",
        description:
          "Watch the analysis unfold in real-time via Server-Sent Events streaming.",
      },
      {
        icon: "FileText",
        title: "Evidence-based Debugging",
        description:
          "Every conclusion is backed by specific log entries, traces, and state snapshots.",
      },
      {
        icon: "Eye",
        title: "Production Observability",
        description:
          "OpenTelemetry integration gives you full visibility into agent behavior.",
      },
    ],
    techCategories: [
      {
        name: "Backend API",
        items: ["FastAPI", "Python", "Pydantic"],
        description:
          "High-performance async API with automatic validation and OpenAPI docs.",
      },
      {
        name: "Data Layer",
        items: ["PostgreSQL", "Redis", "RQ Workers"],
        description:
          "Reliable storage with background job processing for heavy analysis.",
      },
      {
        name: "Frontend",
        items: ["Next.js", "TypeScript", "Tailwind CSS"],
        description: "Modern React dashboard with real-time updates.",
      },
      {
        name: "Observability",
        items: ["OpenTelemetry", "SSE Streaming", "Structured Logging"],
        description:
          "Full tracing and live progress streaming for transparency.",
      },
    ],
    architecture: `The system has three main components:

1. **Ingestion Service**: Receives failure reports and agent traces
2. **Analysis Engine**: AI-powered root cause analysis running as background jobs
3. **Streaming API**: Real-time progress updates via Server-Sent Events
4. **Dashboard**: Next.js interface for investigating failures

Analysis jobs are queued in Redis and processed by RQ workers, allowing the system to handle bursts of failures without blocking.`,
    metrics: [
      { value: "10x", label: "Faster root cause identification" },
      { value: "<30s", label: "Average time to first insight" },
      { value: "Real-time", label: "Progress visibility via SSE" },
    ],
  },
  {
    id: "chart-agent",
    slug: "chart-agent",
    title: "ChartAgent Demo",
    description:
      "Interactive AI dashboard with Text-to-Chart capabilities via conversational prompts and code generation.",
    longDescription: `An AI-powered data visualization tool that transforms natural language queries
into interactive charts and dashboards. Users describe what they want to see,
and the agent generates the appropriate visualizations.`,
    technologies: [
      "Streamlit",
      "Plotly",
      "Pandas",
      "DuckDB",
      "OpenAI API",
      "Anthropic API",
    ],
    featured: false,
    highlights: [
      "Natural language to chart generation",
      "Interactive Plotly visualizations",
      "DuckDB for fast in-memory analytics",
      "Support for multiple LLM providers",
      "Streamlit-based intuitive interface",
    ],
    // Enhanced fields
    tagline: "Turn questions into visualizations instantly",
    problem: `Data teams spend hours writing SQL and building charts. Business users wait days for simple dashboards. The gap between "I want to see X" and actually seeing X is way too wide.

Existing BI tools require training, SQL knowledge, or both. Self-service analytics promised to solve this but ended up creating another tool people need to learn.

What if you could just ask questions in plain English and get instant visualizations?`,
    useCases: [
      {
        icon: "MessageSquare",
        title: "Ask in Plain English",
        description:
          "Type 'Show me sales by region for Q4' and get an instant chart.",
      },
      {
        icon: "BarChart3",
        title: "Generate Charts Instantly",
        description:
          "The AI writes the code, generates the chart, and explains what it did.",
      },
      {
        icon: "Repeat",
        title: "Iterate Conversationally",
        description:
          "Refine your visualization with follow-up questions: 'Now group by category'.",
      },
      {
        icon: "Download",
        title: "Export Anywhere",
        description:
          "Download charts as images or export the underlying data for further analysis.",
      },
    ],
    techCategories: [
      {
        name: "AI & LLM",
        items: ["OpenAI API", "Anthropic API", "Code Generation"],
        description:
          "Multi-provider LLM support for natural language to code translation.",
      },
      {
        name: "Data Processing",
        items: ["DuckDB", "Pandas", "NumPy"],
        description: "Lightning-fast in-memory analytics for instant results.",
      },
      {
        name: "Visualization",
        items: ["Plotly", "Interactive Charts", "Export APIs"],
        description: "Rich interactive visualizations with export capabilities.",
      },
      {
        name: "Interface",
        items: ["Streamlit", "Real-time Updates", "Session State"],
        description:
          "Clean, intuitive UI that makes data exploration effortless.",
      },
    ],
    architecture: `Simple but powerful architecture:

1. **Chat Interface**: Streamlit-based conversational UI
2. **LLM Engine**: Translates questions to Pandas/DuckDB queries
3. **Execution Sandbox**: Safely runs generated code
4. **Renderer**: Plotly visualization with interactive features

The agent maintains conversation context, so you can build on previous queries and refine visualizations iteratively.`,
    metrics: [
      { value: "< 5s", label: "Question to visualization" },
      { value: "Zero", label: "SQL knowledge required" },
      { value: "Multi-LLM", label: "OpenAI + Anthropic support" },
    ],
  },
];
