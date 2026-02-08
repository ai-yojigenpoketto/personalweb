"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "./Terminal";

const TAGLINE = "Architecting Agentic Runtimes & Production-Grade AI Infrastructure.";

const heroTerminalLines = [
  { prompt: "~", command: "whoami" },
  { output: "lei.zhou // AI Infrastructure Engineer" },
  { prompt: "~", command: "cat mission.txt" },
  { output: "Building production-grade agentic systems that ship." },
];

export function TerminalHero() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < TAGLINE.length) {
        setDisplayedText(TAGLINE.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="mb-20 relative">
      {/* Subtle background glow */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.15), transparent 70%)",
        }}
      />

      <div className="relative">
        <motion.h1
          className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-fira-code)] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span style={{ color: "var(--ai-text-primary)" }}>AI Infrastructure </span>
          <span style={{ color: "var(--ai-accent)" }}>Lab</span>
        </motion.h1>

        <motion.div
          className="text-lg md:text-xl mb-8 h-8 font-[family-name:var(--font-fira-code)]"
          style={{ color: "var(--ai-text-secondary)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {displayedText}
          <span
            className="inline-block w-0.5 h-5 ml-0.5 align-middle"
            style={{
              background: "var(--ai-accent)",
              opacity: showCursor ? 1 : 0,
            }}
          />
        </motion.div>

        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Terminal title="~/ai-lab" lines={heroTerminalLines} />
        </motion.div>
      </div>
    </section>
  );
}
