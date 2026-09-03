"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { Menu, X, FileText } from "lucide-react";
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
      <header className="sticky top-0 z-40 border-b border-[#E6E6E2] bg-[#FBFBF9]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5 sm:px-8">
          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <a
              href="#top"
              className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#121214] transition-opacity hover:opacity-80"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#121214] text-xs font-semibold text-white">
                M
              </div>
              <span>{personalInfo.name}</span>
            </a>

            <div className="hidden items-center gap-1.5 rounded-full border border-[#BDE0D7] bg-[#EEF6F4] px-2.5 py-0.5 text-xs font-medium text-[#0D5F4E] sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0D5F4E]" />
              <span>MCA @ SRM</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-6 text-xs font-medium text-[#5C5C64] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#121214]"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="flex items-center gap-1.5 rounded-md border border-[#E6E6E2] bg-white px-3 py-1.5 text-xs font-medium text-[#121214] transition-colors hover:border-[#D5D5D0]"
            >
              <FileText className="h-3.5 w-3.5 text-[#5C5C64]" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="rounded-md bg-[#0D5F4E] px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#094538]"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[#E6E6E2] text-[#5C5C64] transition-colors hover:border-[#D5D5D0] hover:text-[#121214] md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileOpen && (
          <div className="border-b border-[#E6E6E2] bg-[#FBFBF9] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-[#5C5C64]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-1 transition-colors hover:text-[#121214]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-[#E6E6E2] pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setResumeOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 rounded-md border border-[#E6E6E2] bg-white py-2 text-xs font-medium text-[#121214]"
                >
                  <FileText className="h-3.5 w-3.5 text-[#5C5C64]" />
                  <span>View / Download Resume</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center rounded-md bg-[#0D5F4E] py-2 text-xs font-medium text-white"
                >
                  Contact Me
                </a>
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
