import { certificationsData } from "@/lib/data";
import { Award, Calendar, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-5xl px-6 py-20 sm:px-8 border-t border-[#E6E6E2]">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#121214] sm:text-3xl">
          Certifications &amp; Training
        </h2>
        <p className="mt-1.5 max-w-xl text-sm text-[#5C5C64] sm:text-base">
          Formal technical training completed to supplement academic coursework with hands-on full-stack development skills.
        </p>
      </div>

      {/* Certification Cards */}
      <div className="mt-10">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="rounded-xl border border-[#E6E6E2] bg-white p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#BDE0D7] bg-[#EEF6F4] text-[#0D5F4E]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-[#121214] sm:text-xl">
                      {cert.title}
                    </h3>
                    <span className="rounded-full border border-[#BDE0D7] bg-[#EEF6F4] px-2.5 py-0.5 text-xs font-medium text-[#0D5F4E]">
                      Verified Completion
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-[#5C5C64]">
                    Provider: <span className="text-[#121214]">{cert.provider}</span> • Focus: {cert.area}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 rounded-md border border-[#E6E6E2] bg-[#FBFBF9] px-3 py-1.5 text-xs font-medium text-[#5C5C64] shrink-0">
                <Calendar className="h-3.5 w-3.5 text-[#0D5F4E]" />
                <span>{cert.date}</span>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#5C5C64]">
              {cert.description}
            </p>

            {/* Core Competencies Trained */}
            <div className="mt-6 border-t border-[#E6E6E2]/70 pt-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7A7A82]">
                Key Competencies Covered:
              </span>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {cert.skillsLearned.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-[#5C5C64]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0D5F4E]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
