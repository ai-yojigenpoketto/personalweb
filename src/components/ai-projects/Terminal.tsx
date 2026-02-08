"use client";

import { motion } from "framer-motion";
import { TerminalLine } from "@/lib/ai-projects-types";

interface TerminalProps {
  title: string;
  lines: TerminalLine[];
}

export function Terminal({ title, lines }: TerminalProps) {
  return (
    <div
      className="rounded-lg border overflow-hidden"
      style={{
        background: "var(--ai-terminal-bg)",
        borderColor: "var(--ai-border)",
      }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b"
        style={{ borderColor: "var(--ai-border)" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span
          className="text-xs font-[family-name:var(--font-fira-code)] ml-2"
          style={{ color: "var(--ai-text-muted)" }}
        >
          {title}
        </span>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-[family-name:var(--font-fira-code)] text-sm space-y-1 overflow-x-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {lines.map((line, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="leading-relaxed"
            >
              {line.prompt && line.command ? (
                <div>
                  <span style={{ color: "var(--ai-text-muted)" }}>
                    {line.prompt}${" "}
                  </span>
                  <span style={{ color: "var(--ai-accent)" }}>{line.command}</span>
                </div>
              ) : line.output ? (
                <div style={{ color: "var(--ai-text-secondary)" }}>
                  {line.output}
                </div>
              ) : line.isComment ? (
                <div style={{ color: "var(--ai-text-muted)" }}>
                  # {line.command}
                </div>
              ) : null}
            </motion.div>
          ))}

          {/* Blinking cursor */}
          <motion.span
            className="inline-block w-2 h-4 mt-1"
            style={{
              background: "var(--ai-accent)",
              animation: "terminal-blink 1s step-end infinite",
            }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
