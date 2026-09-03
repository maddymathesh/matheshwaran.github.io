"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { work, statistics, contact } from "@/lib/data";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  Terminal,
  Activity,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const liveWork = work.filter((item) => item.status === "live");

  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pt-12 pb-20 sm:px-8 sm:pt-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Headlines, Bio, CTAs */}
        <div className="lg:col-span-7">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-950/30 px-3.5 py-1 text-xs font-medium text-sky-300 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-sky-400" />
            <span>Full-Stack Engineer &amp; Campus Tech Lead</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 font-mono text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Engineering <br className="hidden sm:block" />
            <span className="text-gradient-cyan">resilient platforms</span> <br />
            for real users.
          </motion.h1>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Final-year MCA student at <span className="font-semibold text-white">SRM Institute of Science and Technology</span>. 
            I build and operate production systems — currently running two live platforms, 
            directing a <span className="font-semibold text-sky-300">14-engineer team</span> rebuilding SRM&apos;s campus infrastructure, 
            and engineering AI-powered research platforms with Next.js, FastAPI, and PostgreSQL.
          </motion.p>

          {/* CTA Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:brightness-110 hover:shadow-sky-500/40"
            >
              <span>Explore Projects</span>
              <ArrowDown className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all hover:border-sky-500/40 hover:bg-slate-800 hover:text-white"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-slate-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="#experience"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              <span>Leadership &amp; Background</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Metric Badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {statistics.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-mono text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-slate-300">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-500">
                  {stat.highlight}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Live Operations Telemetry Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="glass-panel relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/60 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[11px] text-slate-400">
                  systems-telemetry.maddy
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>all systems online</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 space-y-4 font-mono text-xs">
              <div className="text-slate-400 flex items-center justify-between border-b border-white/5 pb-2">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Terminal className="h-3.5 w-3.5 text-sky-400" />
                  <span>Production Services</span>
                </span>
                <span className="text-[11px] text-slate-500">Latency: 18ms</span>
              </div>

              {/* Service 1: Maddy BGMI Store */}
              <div className="rounded-lg bg-slate-900/60 p-3 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">maddybgmistoreog.in</span>
                  <span className="rounded bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 text-[10px] text-emerald-400">
                    Live • 100%
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans">
                  Account trading marketplace • Custom escrow transaction panel
                </p>
                <div className="flex gap-2 text-[10px] text-slate-500">
                  <span>Next.js</span>
                  <span>•</span>
                  <span>PostgreSQL</span>
                  <span>•</span>
                  <span>Prisma</span>
                </div>
              </div>

              {/* Service 2: Maddy RecoveryHub */}
              <div className="rounded-lg bg-slate-900/60 p-3 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">maddyrecoveryhub.in</span>
                  <span className="rounded bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 text-[10px] text-emerald-400">
                    Live • Active
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans">
                  Account recovery triage &amp; client assistance pipeline
                </p>
                <div className="flex gap-2 text-[10px] text-slate-500">
                  <span>Next.js</span>
                  <span>•</span>
                  <span>Supabase Auth</span>
                  <span>•</span>
                  <span>Realtime</span>
                </div>
              </div>

              {/* Service 3: SRM Curious Bee */}
              <div className="rounded-lg bg-slate-900/60 p-3 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">SRM Curious Bee Rebuild</span>
                  <span className="rounded bg-sky-950/60 border border-sky-500/30 px-1.5 py-0.5 text-[10px] text-sky-400">
                    Lead • 14 Interns
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans">
                  Campus event &amp; community infrastructure for SRM
                </p>
                <div className="flex gap-2 text-[10px] text-slate-500">
                  <span>Next.js</span>
                  <span>•</span>
                  <span>Team Architecture</span>
                  <span>•</span>
                  <span>PostgreSQL</span>
                </div>
              </div>

              {/* Terminal Footer Status Line */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Activity className="h-3 w-3 text-sky-400" />
                  <span>Host: Chennai / SRM</span>
                </span>
                <span className="text-slate-400">Node v20.x • React 19</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
