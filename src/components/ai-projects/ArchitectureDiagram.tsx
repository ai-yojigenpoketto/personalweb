"use client";

import { motion } from "framer-motion";
import { ArchitectureNode, ArchitectureEdge } from "@/lib/ai-projects-types";

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
}

const nodeColors: Record<ArchitectureNode["type"], string> = {
  input: "#10b981",
  process: "#64748b",
  output: "#10b981",
  store: "#f59e0b",
};

const nodeBgColors: Record<ArchitectureNode["type"], string> = {
  input: "rgba(16,185,129,0.15)",
  process: "rgba(100,116,139,0.15)",
  output: "rgba(16,185,129,0.15)",
  store: "rgba(245,158,11,0.15)",
};

function getNodeCenter(node: ArchitectureNode) {
  return { cx: node.x + 7, cy: node.y + 5 };
}

export function ArchitectureDiagram({ nodes, edges }: ArchitectureDiagramProps) {
  return (
    <div
      className="rounded-lg border p-4"
      style={{ background: "var(--ai-terminal-bg)", borderColor: "var(--ai-border)" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-auto" style={{ minHeight: 200 }}>
        <defs>
          <marker
            id="arrowhead"
            markerWidth="6"
            markerHeight="4"
            refX="5"
            refY="2"
            orient="auto"
          >
            <polygon points="0 0, 6 2, 0 4" fill="#555570" />
          </marker>
        </defs>

        {/* Edges */}
        {edges.map((edge, i) => {
          const fromNode = nodes.find((n) => n.id === edge.from);
          const toNode = nodes.find((n) => n.id === edge.to);
          if (!fromNode || !toNode) return null;

          const from = getNodeCenter(fromNode);
          const to = getNodeCenter(toNode);

          return (
            <motion.g key={`edge-${i}`}>
              <motion.line
                x1={from.cx}
                y1={from.cy}
                x2={to.cx}
                y2={to.cy}
                stroke="#555570"
                strokeWidth="0.5"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              />
              {edge.label && (
                <motion.text
                  x={(from.cx + to.cx) / 2}
                  y={(from.cy + to.cy) / 2 - 2}
                  textAnchor="middle"
                  fill="#55556a"
                  fontSize="2.5"
                  fontFamily="var(--font-fira-code), monospace"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                >
                  {edge.label}
                </motion.text>
              )}
            </motion.g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <rect
              x={node.x}
              y={node.y}
              width="14"
              height="10"
              rx="1.5"
              fill={nodeBgColors[node.type]}
              stroke={nodeColors[node.type]}
              strokeWidth="0.4"
            />
            <text
              x={node.x + 7}
              y={node.y + 5.5}
              textAnchor="middle"
              fill={nodeColors[node.type]}
              fontSize="2.2"
              fontFamily="var(--font-fira-code), monospace"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
