import { experiences } from "@/lib/data";
import { Users, Briefcase, Award, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase text-sky-400">
          <span>03 // Leadership &amp; Trajectory</span>
        </div>
        <h2 className="mt-2 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Experience &amp; Leadership
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
          Proven record of running production systems, coordinating student engineering teams, and institutional impact.
        </p>
      </div>

      {/* Timeline List */}
      <div className="mt-12 space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="glass-card relative rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-mono text-xl font-bold text-white sm:text-2xl">
                    {exp.role}
                  </h3>
                  <span className="rounded-full border border-sky-500/30 bg-sky-950/40 px-2.5 py-0.5 font-mono text-xs font-medium text-sky-300">
                    {exp.badge}
                  </span>
                </div>

                <div className="mt-1 text-base font-semibold text-slate-200">
                  {exp.organization}
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-sky-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {exp.summary}
            </p>

            {/* Bullet Highlights */}
            <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
              {exp.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-5 flex flex-wrap gap-1.5 pt-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/5 bg-slate-900/90 px-2 py-0.5 font-mono text-[11px] text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
