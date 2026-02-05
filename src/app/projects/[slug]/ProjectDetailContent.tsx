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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors mb-8"
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
                className="inline-block px-4 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-slate-700 to-indigo-600 text-white mb-6"
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
                className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6"
              >
                {project.tagline}
              </motion.p>
            )}

            <motion.p
              variants={staggerItem}
              className="text-lg text-slate-500 dark:text-slate-400 mb-8"
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                The Problem
              </h2>
            </div>
            <GlassCard className="p-8" hover={false}>
              <p className="text-lg text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center">
                <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
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
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                            {useCase.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400">
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 flex items-center justify-center">
                <Layers className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Tech Stack
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {project.techCategories.map((category, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <GlassCard className="p-6 h-full" hover={false}>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {category.items.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-slate-200/50 to-slate-300/50 dark:from-slate-700/50 dark:to-slate-600/50 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {category.description && (
                      <p className="text-sm text-slate-500 dark:text-slate-400">
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center">
                <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
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
                      className="text-slate-600 dark:text-slate-300 mb-2 last:mb-0"
                    >
                      {parts.map((part, j) =>
                        j % 2 === 1 ? (
                          <strong
                            key={j}
                            className="text-slate-900 dark:text-white font-semibold"
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-rose-600 dark:text-rose-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Results
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-6">
              {project.metrics.map((metric, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <GlassCard className="p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-800 to-indigo-600 bg-clip-text text-transparent mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Key Features
              </h2>
            </div>
            <GlassCard className="p-8" hover={false}>
              <ul className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-slate-600 dark:text-slate-300"
                  >
                    <span className="w-6 h-6 shrink-0 rounded-full bg-gradient-to-r from-slate-700 to-indigo-600 flex items-center justify-center text-white text-sm font-medium">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Interested in this project?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
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
