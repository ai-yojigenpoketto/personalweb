"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Sparkles,
  Bug,
  RefreshCw,
  Brain,
  Search,
  Activity,
  FileText,
  Eye,
  MessageSquare,
  BarChart3,
  Repeat,
  Download,
  AlertTriangle,
  Layers,
  Zap,
  LucideIcon,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { Project } from "@/lib/types";

interface ProjectDetailContentProps {
  project: Project;
}

// Icon mapping for use cases
const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Bug,
  RefreshCw,
  Brain,
  Search,
  Activity,
  FileText,
  Eye,
  MessageSquare,
  BarChart3,
  Repeat,
  Download,
  AlertTriangle,
  Layers,
  Zap,
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-[var(--ai-text-muted)] hover:text-emerald-400 transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            {project.featured && (
              <motion.span
                variants={staggerItem}
                className="inline-block px-4 py-1.5 text-xs font-medium rounded-full bg-emerald-600 text-white mb-6"
              >
                Featured Project
              </motion.span>
            )}

            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              <GradientText>{project.title}</GradientText>
            </motion.h1>

            {project.tagline && (
              <motion.p
                variants={staggerItem}
                className="text-xl sm:text-2xl text-[var(--ai-text-secondary)] mb-6"
              >
                {project.tagline}
              </motion.p>
            )}

            <motion.p
              variants={staggerItem}
              className="text-lg text-[var(--ai-text-muted)] mb-8"
            >
              {project.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap justify-center gap-4"
            >
              {project.demo && (
                <Button size="lg" asChild>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    View Demo
                  </a>
                </Button>
              )}
              {project.github && (
                <Button variant="secondary" size="lg" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                </Button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 pb-24 space-y-24">
        {/* The Problem Section */}
        {project.problem && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--ai-text-primary)]">
                The Problem
              </h2>
            </div>
            <GlassCard className="p-8" hover={false}>
              <p className="text-lg text-[var(--ai-text-secondary)] whitespace-pre-line leading-relaxed">
                {project.problem}
              </p>
            </GlassCard>
          </motion.section>
        )}

        {/* Use Cases Section */}
        {project.useCases && project.useCases.length > 0 && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-900/30 flex items-center justify-center">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--ai-text-primary)]">
                What You Can Do
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {project.useCases.map((useCase, index) => {
                const Icon = iconMap[useCase.icon] || Sparkles;
                return (
                  <motion.div key={index} variants={staggerItem}>
                    <GlassCard className="p-6 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-900/30 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[var(--ai-text-primary)] mb-2">
                            {useCase.title}
                          </h3>
                          <p className="text-[var(--ai-text-secondary)]">
                            {useCase.description}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Tech Stack Section */}
        {project.techCategories && project.techCategories.length > 0 && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-900/30 flex items-center justify-center">
                <Layers className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--ai-text-primary)]">
                Tech Stack
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {project.techCategories.map((category, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <GlassCard className="p-6 h-full" hover={false}>
                    <h3 className="text-lg font-semibold text-[var(--ai-text-primary)] mb-3">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {category.items.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium rounded-full bg-[var(--ai-bg-primary)] text-[var(--ai-text-muted)] border border-[var(--ai-border)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {category.description && (
                      <p className="text-sm text-[var(--ai-text-muted)]">
                        {category.description}
                      </p>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Architecture Section */}
        {project.architecture && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-900/30 flex items-center justify-center">
                <Layers className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--ai-text-primary)]">
                Architecture
              </h2>
            </div>
            <GlassCard className="p-8" hover={false}>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {project.architecture.split("\n").map((line, i) => {
                  // Handle bold markdown
                  const parts = line.split(/\*\*(.*?)\*\*/g);
                  return (
                    <p
                      key={i}
                      className="text-[var(--ai-text-secondary)] mb-2 last:mb-0"
                    >
                      {parts.map((part, j) =>
                        j % 2 === 1 ? (
                          <strong
                            key={j}
                            className="text-[var(--ai-text-primary)] font-semibold"
                          >
                            {part}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                })}
              </div>
            </GlassCard>
          </motion.section>
        )}

        {/* Metrics Section */}
        {project.metrics && project.metrics.length > 0 && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-900/30 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--ai-text-primary)]">
                Results
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-6">
              {project.metrics.map((metric, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <GlassCard className="p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-[var(--ai-text-muted)]">
                      {metric.label}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Key Features (Original Highlights) */}
        {project.highlights && project.highlights.length > 0 && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-900/30 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--ai-text-primary)]">
                Key Features
              </h2>
            </div>
            <GlassCard className="p-8" hover={false}>
              <ul className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-[var(--ai-text-secondary)]"
                  >
                    <span className="w-6 h-6 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{highlight}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.section>
        )}

        {/* Final CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <GlassCard className="p-12" hover={false}>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--ai-text-primary)] mb-4">
              Interested in this project?
            </h2>
            <p className="text-[var(--ai-text-secondary)] mb-8 max-w-xl mx-auto">
              Check out the source code, try the demo, or get in touch to
              discuss how similar solutions could help your team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {project.demo && (
                <Button size="lg" asChild>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Try the Demo
                  </a>
                </Button>
              )}
              {project.github && (
                <Button variant="secondary" size="lg" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-2" />
                    View Source
                  </a>
                </Button>
              )}
              <Button variant="secondary" size="lg" asChild>
                <Link href="/#contact">Get in Touch</Link>
              </Button>
            </div>
          </GlassCard>
        </motion.section>
      </div>
    </div>
  );
}
