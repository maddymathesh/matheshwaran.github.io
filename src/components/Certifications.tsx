import { certificationsData } from "@/lib/data";
import { Award, Calendar, CheckCircle2, BookCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 border-t border-white/10">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase text-sky-400">
          <span>05 // Specialized Training</span>
        </div>
        <h2 className="mt-2 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Certifications &amp; Training
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
          Formal technical training completed to supplement academic coursework with hands-on full-stack development skills.
        </p>
      </div>

      {/* Certification Cards */}
      <div className="mt-12">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="glass-card rounded-2xl p-6 sm:p-8 border-sky-500/20"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-500/30 bg-sky-950/50 text-sky-400">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-mono text-xl font-bold text-white sm:text-2xl">
                      {cert.title}
                    </h3>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 font-mono text-xs font-medium text-emerald-400">
                      Verified Completion
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    Provider: <span className="text-sky-400">{cert.provider}</span> • Focus: {cert.area}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-1.5 font-mono text-xs text-slate-300 shrink-0">
                <Calendar className="h-3.5 w-3.5 text-sky-400" />
                <span>{cert.date}</span>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              {cert.description}
            </p>

            {/* Core Competencies Trained */}
            <div className="mt-6 border-t border-white/10 pt-5">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300">
                Key Competencies Covered:
              </span>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {cert.skillsLearned.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
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
