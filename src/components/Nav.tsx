"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import ResumeModal from "./ResumeModal";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Training" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070a11]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-8">
          {/* Logo / Monogram */}
          <div className="flex items-center gap-3">
            <a
              href="#top"
              className="flex items-center gap-2.5 font-mono text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-indigo-600 text-xs font-bold text-white shadow-sm shadow-sky-500/20">
                M
              </div>
              <span className="tracking-tight">{personalInfo.name}</span>
            </a>

            <div className="hidden items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-[11px] font-mono text-emerald-400 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>MCA @ SRM</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-400 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-sky-500/40 hover:text-white"
            >
              <FileText className="h-3.5 w-3.5 text-sky-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-1 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-300 transition-all hover:bg-sky-500/20 hover:text-white"
            >
              <span>Contact</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileOpen && (
          <div className="border-b border-white/10 bg-[#0c111c]/95 px-6 py-5 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-1 transition-colors hover:text-sky-400"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-3 border-t border-white/10 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setResumeOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-slate-900 py-2 text-xs font-medium text-white"
                >
                  <FileText className="h-4 w-4 text-sky-400" />
                  <span>View / Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
