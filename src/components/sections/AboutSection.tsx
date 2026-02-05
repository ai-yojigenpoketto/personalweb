"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Download } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { PROFILE } from "@/lib/constants";

export function AboutSection() {
  const stats = [
    { label: "Years Experience", value: PROFILE.yearsExperience },
    { label: "Projects Shipped", value: "20+" },
    { label: "Innovation Awards", value: "2" },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            About <GradientText>Me</GradientText>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            A passionate data scientist turning complex AI research into production-ready solutions
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Bio & Stats */}
          <FadeIn delay={0.1}>
            <GlassCard className="p-6" hover={false}>
              {/* Location */}
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-4">
                <MapPin size={18} />
                <span>{PROFILE.location}</span>
              </div>

              {/* Bio */}
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 whitespace-pre-line">
                {PROFILE.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Resume Button */}
              <Button variant="secondary" className="w-full" asChild>
                <a href="/resume.pdf" download>
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </Button>
            </GlassCard>
          </FadeIn>

          {/* Right: Education & Current Role */}
          <div className="space-y-6">
            {/* Current Role */}
            <FadeIn delay={0.2}>
              <GlassCard className="p-6" hover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-slate-700 to-indigo-600">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Current Role
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      AIOps Advisory Researcher
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  At Lenovo, building production GenAI applications and multi-agent systems
                  for enterprise operations.
                </p>
              </GlassCard>
            </FadeIn>

            {/* Education */}
            <FadeIn delay={0.3}>
              <GlassCard className="p-6" hover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Education
                  </h3>
                </div>
                <div className="space-y-3">
                  {PROFILE.education.map((edu) => (
                    <div key={edu.degree}>
                      <p className="font-medium text-slate-900 dark:text-white">
                        {edu.degree}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {edu.school}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
