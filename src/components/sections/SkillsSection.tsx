"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { GradientText } from "@/components/ui/GradientText";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skills, skillCategories } from "@/data/skills";
import { SkillCategory } from "@/lib/types";

export function SkillsSection() {
  const getSkillsByCategory = (category: SkillCategory) =>
    skills.filter((skill) => skill.category === category);

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Skills & <GradientText>Expertise</GradientText>
          </h2>
          <p className="text-[var(--ai-text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            Technologies and methodologies I work with daily
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-[var(--ai-text-primary)]">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {getSkillsByCategory(category as SkillCategory).map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    category={skill.category}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
