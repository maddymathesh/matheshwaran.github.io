"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo, highlightsStats } from "@/lib/data";
import {
  ArrowDown,
  FileText,
  Mail,
  MapPin,
  ExternalLink,
  Sparkles,
  GraduationCap,
  Terminal,
} from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section id="top" className="relative mx-auto max-w-6xl px-6 pt-12 pb-16 sm:px-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Information & Actions */}
          <div className="lg:col-span-7">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-950/30 px-3.5 py-1 text-xs font-mono font-medium text-sky-300 backdrop-blur-sm"
            >
              <GraduationCap className="h-3.5 w-3.5 text-sky-400" />
              <span>MCA Student • SRM Institute of Science &amp; Technology</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-5 font-mono text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Subtitle / Roles */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-3 font-mono text-base font-semibold text-sky-400 sm:text-lg"
            >
              {personalInfo.roles.join(" | ")}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-4 max-w-xl text-lg font-medium text-slate-200 sm:text-xl"
            >
              &ldquo;{personalInfo.tagline}&rdquo;
            </motion.p>

            {/* Concise Summary */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base"
            >
              {personalInfo.summary}
            </motion.p>

            {/* Location & Contact Meta */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-sky-400" />
                <span>{personalInfo.location}</span>
              </span>
              <span className="text-slate-600">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 text-sky-400" />
                <span>{personalInfo.email}</span>
              </a>
            </motion.div>

            {/* Prominent Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:brightness-110"
              >
                <span>View Projects</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="flex items-center gap-2 rounded-xl border border-sky-500/30 bg-sky-950/40 px-5 py-3 text-sm font-semibold text-sky-300 backdrop-blur-sm transition-all hover:bg-sky-500/20 hover:text-white"
              >
                <FileText className="h-4 w-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-300 transition-all hover:border-white/20 hover:text-white"
              >
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-6 flex items-center gap-5 text-xs font-mono text-slate-400"
            >
              <span className="text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-sky-400"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-sky-400"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.48 1.48 0 1 0-.03-2.96 1.48 1.48 0 0 0 .03 2.96m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.portfolio}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-sky-400"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Web Portfolio</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: User Profile Photo Card & Key Stats */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-sm"
            >
              {/* Card Container */}
              <div className="glass-card relative overflow-hidden rounded-3xl p-5 border border-white/10 shadow-2xl">
                {/* Photo with Frame */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-sky-500/20 bg-slate-900 shadow-inner">
                  <Image
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  {/* Subtle Gradient Vignette at Bottom of Photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c111c] via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Floating Candidate Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-[#0c111c]/90 px-3 py-2 backdrop-blur-md border border-white/10">
                    <div>
                      <span className="block font-mono text-xs font-bold text-white">
                        {personalInfo.name}
                      </span>
                      <span className="block text-[11px] text-sky-400">
                        MCA Candidate (2025–2027)
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>

                {/* Quick Academic Snapshot Grid below Photo */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="rounded-xl border border-white/5 bg-slate-900/60 p-2.5">
                    <span className="block text-[10px] text-slate-500 uppercase">Degree</span>
                    <span className="font-bold text-white">MCA @ SRM IST</span>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-slate-900/60 p-2.5">
                    <span className="block text-[10px] text-slate-500 uppercase">Undergrad</span>
                    <span className="font-bold text-white">BCA (First Class)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Verified Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-14 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4"
        >
          {highlightsStats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-mono text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-slate-200">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-400">
                {stat.sub}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
