"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo, highlightsStats } from "@/lib/data";
import {
  Mail,
  MapPin,
  ExternalLink,
  GraduationCap,
  Download,
} from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section id="top" className="relative mx-auto max-w-5xl px-6 pt-12 pb-16 sm:px-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Information & Actions */}
          <div className="lg:col-span-7">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#BDE0D7] bg-[#EEF6F4] px-3.5 py-1 text-xs font-medium text-[#0D5F4E]"
            >
              <GraduationCap className="h-3.5 w-3.5 text-[#0D5F4E]" />
              <span>MCA Student • SRM Institute of Science &amp; Technology</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#121214] sm:text-5xl lg:text-6xl"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Subtitle / Roles */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.14 }}
              className="mt-3 text-base font-medium text-[#0D5F4E] sm:text-lg"
            >
              {personalInfo.roles.join(" | ")}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.18 }}
              className="mt-3 text-lg font-medium text-[#121214] sm:text-xl"
            >
              &ldquo;{personalInfo.tagline}&rdquo;
            </motion.p>

            {/* Concise Summary */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.22 }}
              className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5C5C64] sm:text-base"
            >
              {personalInfo.summary}
            </motion.p>

            {/* Location & Contact Meta */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.26 }}
              className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-[#7A7A82]"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#0D5F4E]" />
                <span>{personalInfo.location}</span>
              </span>
              <span className="text-[#D5D5D0]">|</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 text-[#5C5C64] transition-colors hover:text-[#121214]"
              >
                <Mail className="h-3.5 w-3.5 text-[#0D5F4E]" />
                <span>{personalInfo.email}</span>
              </a>
            </motion.div>

            {/* Prominent Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-[#0D5F4E] px-4 py-2.5 text-xs sm:text-sm font-medium text-white transition-colors hover:bg-[#094538]"
              >
                View Projects
              </a>

              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-2 rounded-md border border-[#E6E6E2] bg-white px-4 py-2.5 text-xs sm:text-sm font-medium text-[#121214] transition-colors hover:border-[#D5D5D0]"
              >
                <Download className="h-4 w-4 text-[#5C5C64]" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-[#E6E6E2] bg-white px-4 py-2.5 text-xs sm:text-sm font-medium text-[#5C5C64] transition-colors hover:border-[#D5D5D0] hover:text-[#121214]"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.34 }}
              className="mt-6 flex items-center gap-5 text-xs font-medium text-[#7A7A82]"
            >
              <span>Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#5C5C64] transition-colors hover:text-[#121214]"
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
                className="flex items-center gap-1.5 text-[#5C5C64] transition-colors hover:text-[#121214]"
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
                className="flex items-center gap-1.5 text-[#5C5C64] transition-colors hover:text-[#121214]"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[#7A7A82]" />
                <span>Web Portfolio</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: User Profile Photo Card & Key Stats */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="relative w-full max-w-sm"
            >
              {/* Card Container (rounded-2xl for primary human anchor) */}
              <div className="relative overflow-hidden rounded-2xl border border-[#E6E6E2] bg-white p-4">
                {/* Photo with Frame */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#F2F2EE]">
                  <Image
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top"
                  />
                  {/* Floating Candidate Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg border border-[#E6E6E2]/80 bg-white/95 px-3 py-2 backdrop-blur-sm">
                    <div>
                      <span className="block text-xs font-semibold text-[#121214]">
                        {personalInfo.name}
                      </span>
                      <span className="block text-xs text-[#5C5C64]">
                        MCA Candidate (2025–2027)
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#BDE0D7] bg-[#EEF6F4] px-2 py-0.5 text-xs font-medium text-[#0D5F4E]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0D5F4E]" />
                      Active
                    </span>
                  </div>
                </div>

                {/* Quick Academic Snapshot Grid below Photo */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg border border-[#E6E6E2] bg-[#FBFBF9] p-2.5">
                    <span className="block text-[11px] font-medium text-[#7A7A82]">Degree</span>
                    <span className="font-semibold text-[#121214]">MCA @ SRM IST</span>
                  </div>
                  <div className="rounded-lg border border-[#E6E6E2] bg-[#FBFBF9] p-2.5">
                    <span className="block text-[11px] font-medium text-[#7A7A82]">Undergrad</span>
                    <span className="font-semibold text-[#121214]">BCA (First Class)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Verified Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.38 }}
          className="mt-14 grid grid-cols-2 gap-6 border-t border-[#E6E6E2] pt-8 sm:grid-cols-4"
        >
          {highlightsStats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl font-semibold tracking-tight text-[#121214] sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-[#121214]">
                {stat.label}
              </span>
              <span className="text-xs text-[#7A7A82]">
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
