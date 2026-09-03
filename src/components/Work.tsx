"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { work, statusLabel, type WorkStatus, type WorkCategory, type WorkItem } from "@/lib/data";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Globe,
  Sparkles,
  Layers,
  ArrowRight,
  Code2,
  CheckCircle2,
} from "lucide-react";

const categories: { id: WorkCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "production", label: "Production & Bootstrapped" },
  { id: "campus", label: "Campus & SRM Leadership" },
  { id: "ai-systems", label: "AI & Systems" },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("all");
  const [expandedId, setExpandedId] = useState<string | null>("maddy-bgmi-store");

  const filteredWork = work.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
      {/* Section Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase text-sky-400">
            <span>01 // Portfolio &amp; Case Studies</span>
          </div>
          <h2 className="mt-2 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Selected Work &amp; Systems
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
            From bootstrapped customer marketplaces to university-wide AI research engines and 14-person team leadership.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 rounded-xl border border-white/10 bg-slate-900/60 p-1 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-sky-500 text-white shadow-sm shadow-sky-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
        <AnimatePresence>
          {filteredWork.map((project) => {
            const isExpanded = expandedId === project.id;
            const isLive = project.status === "live";
            const isBuilding = project.status === "building";

            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className={`glass-card relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-7 ${
                  project.featured ? "border-sky-500/30 shadow-lg shadow-sky-500/5" : ""
                }`}
              >
                <div>
                  {/* Top Bar: Role & Status */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-300">
                      {project.role}
                    </span>

                    <div className="flex items-center gap-1.5 font-mono text-[11px]">
                      {isLive ? (
                        <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 font-medium text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Production
                        </span>
                      ) : isBuilding ? (
                        <span className="flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-950/40 px-2.5 py-0.5 font-medium text-sky-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                          In Development
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/40 px-2.5 py-0.5 font-medium text-amber-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                          Architecture
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div className="mt-4">
                    <h3 className="font-mono text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {project.summary}
                    </p>
                  </div>

                  {/* Architecture Highlights Collapsible */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-4 overflow-hidden border-t border-white/10 pt-4"
                      >
                        <p className="text-xs leading-relaxed text-slate-400 font-sans">
                          {project.detail}
                        </p>

                        <div className="mt-3.5 space-y-1.5">
                          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-sky-400">
                            Key Architecture Highlights:
                          </span>
                          {project.architectureHighlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs text-slate-300"
                            >
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-400" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer Area: Stack Pills & Actions */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/5 bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-white"
                    >
                      <span>{isExpanded ? "Hide Architecture" : "View Architecture"}</span>
                      {isExpanded ? (
                        <ChevronUp className="h-3.5 w-3.5" />
                      ) : (
                        <ChevronDown className="h-3.5 w-3.5" />
                      )}
                    </button>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-xs font-semibold text-sky-300 transition-colors hover:border-sky-500/60 hover:bg-sky-500/20 hover:text-white"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="font-mono text-[11px] text-slate-500">
                        {project.metrics || "Internal Infrastructure"}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
