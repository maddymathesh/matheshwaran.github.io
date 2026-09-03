import { educationData } from "@/lib/data";
import { GraduationCap, Calendar, Award, Building, CheckCircle2, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 border-t border-white/10">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase text-sky-400">
          <span>02 // Academic History</span>
        </div>
        <h2 className="mt-2 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Education Timeline
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
          Academic progression from secondary school through undergraduate degree to current MCA studies.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="mt-12 relative border-l-2 border-white/10 ml-3 sm:ml-6 space-y-10">
        {educationData.map((item) => {
          const isCurrent = item.status === "Currently Pursuing";

          return (
            <div key={item.id} className="relative pl-7 sm:pl-10">
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 ${
                  isCurrent
                    ? "border-sky-400 bg-sky-500 shadow-md shadow-sky-500/50"
                    : "border-slate-500 bg-slate-800"
                }`}
              >
                {isCurrent && (
                  <span className="absolute -inset-1 rounded-full bg-sky-400 opacity-40 animate-ping" />
                )}
              </div>

              {/* Education Card */}
              <div
                className={`glass-card rounded-2xl p-6 sm:p-7 ${
                  isCurrent ? "border-sky-500/30 shadow-lg shadow-sky-500/5" : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    {/* Status Badge */}
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-mono text-xs font-medium ${
                          isCurrent
                            ? "bg-sky-950/80 border border-sky-500/40 text-sky-300"
                            : "bg-emerald-950/80 border border-emerald-500/40 text-emerald-400"
                        }`}
                      >
                        {item.status}
                      </span>

                      <span className="flex items-center gap-1 font-mono text-xs text-slate-400">
                        <Calendar className="h-3 w-3" />
                        {item.duration}
                      </span>
                    </div>

                    {/* Degree Title */}
                    <h3 className="mt-3 font-mono text-xl font-bold text-white sm:text-2xl">
                      {item.degree}
                    </h3>

                    {/* Institution & University */}
                    <div className="mt-1 text-sm font-semibold text-slate-300 flex flex-wrap items-center gap-2">
                      <span className="flex items-center gap-1.5">
                        <Building className="h-3.5 w-3.5 text-sky-400" />
                        {item.institution}
                      </span>
                      {item.university && (
                        <span className="text-slate-400">({item.university})</span>
                      )}
                      {item.board && (
                        <span className="text-slate-400">({item.board})</span>
                      )}
                    </div>
                  </div>

                  {/* Grade / CGPA Pill */}
                  <div className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-2 sm:text-right shrink-0">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      Performance / Score
                    </span>
                    <span className="font-mono text-sm font-bold text-sky-300 sm:text-base">
                      {item.grade}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-5 border-t border-white/10 pt-4 space-y-1.5">
                    {item.highlights.map((h, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-400" />
                        <span className="leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
