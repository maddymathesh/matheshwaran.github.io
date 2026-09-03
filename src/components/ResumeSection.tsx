"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { Spotlight } from "@/components/ui/spotlight";
import { ShieldCheck, Eye, Printer } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function ResumeSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="resume" className="relative mx-auto max-w-5xl px-6 py-20 sm:px-8 border-t border-[#E6E6E2]">
        {/* Section Header */}
        <div>
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#121214] sm:text-3xl">
            Curriculum Vitae
          </h2>
          <p className="mt-1.5 max-w-xl text-sm text-[#5C5C64] sm:text-base">
            Verified academic credentials, technical skills, projects, and contact information ready for review.
          </p>
        </div>

        {/* Resume Action Banner Card */}
        <div className="relative overflow-hidden mt-10 rounded-xl border border-[#E6E6E2] bg-white p-6 sm:p-10 transition-colors hover:border-[#D5D5D0]">
          {/* 21st.dev Spotlight cursor hover effect */}
          <Spotlight
            className="bg-[radial-gradient(circle_at_center,rgba(189,224,215,0.35)_0%,rgba(238,246,244,0.15)_50%,transparent_80%)]"
            size={400}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#BDE0D7] bg-[#EEF6F4] px-3 py-1 text-xs font-medium text-[#0D5F4E]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#0D5F4E]" />
                <span>Verified Candidate Profile</span>
              </div>
              <h3 className="text-xl font-semibold text-[#121214] sm:text-2xl">
                {personalInfo.name} — Resume
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5C5C64]">
                Prepared specifically for software engineering internships, graduate training programs, and entry-level full-stack positions. 
                Contains verified education records from SRM Institute of Science &amp; Technology and Thiruvalluvar University, complete skill matrices, and practical project deliverables.
              </p>

              <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#7A7A82]">
                <span>Format: Digital &amp; Printable PDF</span>
                <span>Status: Actively Seeking Roles</span>
                <span>Location: {personalInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center gap-2 rounded-md bg-[#0D5F4E] px-5 py-2.5 text-xs sm:text-sm font-medium text-white transition-colors hover:bg-[#094538]"
              >
                <Eye className="h-4 w-4" />
                <span>View Full Resume</span>
              </button>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center gap-2 rounded-md border border-[#E6E6E2] bg-white px-5 py-2.5 text-xs sm:text-sm font-medium text-[#121214] transition-colors hover:border-[#D5D5D0]"
              >
                <Printer className="h-4 w-4 text-[#5C5C64]" />
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
