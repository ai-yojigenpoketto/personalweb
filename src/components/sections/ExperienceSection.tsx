"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { GradientText } from "@/components/ui/GradientText";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Work <GradientText>Experience</GradientText>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            My professional journey building data and ML systems
          </p>
        </FadeIn>

        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
