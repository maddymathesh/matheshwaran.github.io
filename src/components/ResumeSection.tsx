"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { FileText, Download, Printer, CheckCircle2, ShieldCheck, Eye } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function ResumeSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="resume" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 border-t border-white/10">
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase text-sky-400">
            <span>06 // Candidate Resume</span>
          </div>
          <h2 className="mt-2 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Curriculum Vitae
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
            Verified academic credentials, technical skills, projects, and contact information ready for review.
          </p>
        </div>

        {/* Resume Action Banner Card */}
        <div className="mt-10 glass-panel rounded-3xl p-8 sm:p-10 border border-sky-500/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-500/30 px-3 py-1 text-xs font-mono text-sky-300">
                <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
                <span>Verified Candidate Profile</span>
              </div>
              <h3 className="font-mono text-2xl font-bold text-white sm:text-3xl">
                {personalInfo.name} — Resume
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                Prepared specifically for software engineering internships, graduate training programs, and entry-level full-stack positions. 
                Contains verified education records from SRM Institute of Science &amp; Technology and Thiruvalluvar University, complete skill matrices, and practical project deliverables.
              </p>

              <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
                <span>● Format: Digital &amp; Printable PDF</span>
                <span>● Status: Actively Seeking Roles</span>
                <span>● Location: {personalInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:brightness-110"
              >
                <Eye className="h-4 w-4" />
                <span>View Full Resume</span>
              </button>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-sky-500/40 hover:text-white"
              >
                <Printer className="h-4 w-4 text-sky-400" />
                <span>Print / Save as PDF</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
