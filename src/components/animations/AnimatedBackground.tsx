"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn(
          "absolute -top-40 -left-40 w-80 h-80 rounded-full",
          "bg-gradient-to-br from-indigo-400/15 to-slate-400/15",
          "blur-3xl"
        )}
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn(
          "absolute top-1/3 -right-40 w-96 h-96 rounded-full",
          "bg-gradient-to-br from-violet-400/10 to-indigo-400/10",
          "blur-3xl"
        )}
      />
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn(
          "absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full",
          "bg-gradient-to-br from-slate-400/10 to-indigo-300/10",
          "blur-3xl"
        )}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
