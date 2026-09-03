"use client";

import { personalInfo } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-auto border-t border-[#E6E6E2] bg-[#FBFBF9]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row sm:px-8">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#121214]">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-[#121214] text-[10px] font-semibold text-white">
              M
            </span>
            <span>{personalInfo.name}</span>
          </div>
          <p className="text-xs text-[#7A7A82]">
            MCA Candidate @ SRM IST, {personalInfo.location}
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="text-xs text-[#7A7A82] text-center">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All verified credentials.
        </div>

        {/* Right: Scroll to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group flex items-center gap-1.5 rounded-md border border-[#E6E6E2] bg-white px-3 py-1.5 text-xs font-medium text-[#5C5C64] transition-colors hover:border-[#D5D5D0] hover:text-[#121214]"
        >
          <span>Back to Top</span>
          <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
