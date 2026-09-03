"use client";

import { personalInfo } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-auto border-t border-white/10 bg-[#070a11]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row sm:px-8">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <div className="flex items-center gap-2 font-mono text-sm font-bold text-white">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-sky-500/20 text-[10px] text-sky-400">
              M
            </span>
            <span>{personalInfo.name}</span>
          </div>
          <p className="text-xs text-slate-500">
            MCA Candidate @ SRM IST • {personalInfo.location}
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="font-mono text-xs text-slate-400 text-center">
          © {new Date().getFullYear()} {personalInfo.name}. All verified credentials.
        </div>

        {/* Right: Scroll to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:border-sky-500/40 hover:text-white"
        >
          <span>Back to Top</span>
          <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
