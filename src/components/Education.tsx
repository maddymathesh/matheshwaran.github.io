import { educationData } from "@/lib/data";
import { Calendar, Building, CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-5xl px-6 py-20 sm:px-8 border-t border-[#E6E6E2]">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#121214] sm:text-3xl">
          Education Timeline
        </h2>
        <p className="mt-1.5 max-w-xl text-sm text-[#5C5C64] sm:text-base">
          Academic progression from secondary school through undergraduate degree to current MCA studies.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="mt-12 relative border-l border-[#E6E6E2] ml-2 sm:ml-4 space-y-8">
        {educationData.map((item) => {
          const isCurrent = item.status === "Currently Pursuing";

          return (
            <div key={item.id} className="relative pl-6 sm:pl-8">
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 ${
                  isCurrent
                    ? "border-[#0D5F4E] bg-[#0D5F4E]"
                    : "border-[#D5D5D0] bg-[#FBFBF9]"
                }`}
              />

              {/* Education Card (rounded-lg for dense sub-card) */}
              <div
                className={`rounded-lg border bg-white p-5 sm:p-6 transition-colors ${
                  isCurrent
                    ? "border-[#BDE0D7]"
                    : "border-[#E6E6E2]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    {/* Status Badge */}
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          isCurrent
                            ? "bg-[#EEF6F4] text-[#0D5F4E] border border-[#BDE0D7]"
                            : "bg-[#F2F2EE] text-[#5C5C64] border border-[#E6E6E2]"
                        }`}
                      >
                        {item.status}
                      </span>

                      <span className="flex items-center gap-1 text-xs text-[#7A7A82]">
                        <Calendar className="h-3 w-3 text-[#7A7A82]" />
                        {item.duration}
                      </span>
                    </div>

                    {/* Degree Title */}
                    <h3 className="mt-2.5 text-lg font-semibold text-[#121214] sm:text-xl">
                      {item.degree}
                    </h3>

                    {/* Institution & University */}
                    <div className="mt-1 text-xs sm:text-sm font-medium text-[#5C5C64] flex flex-wrap items-center gap-2">
                      <span className="flex items-center gap-1.5 text-[#121214]">
                        <Building className="h-3.5 w-3.5 text-[#0D5F4E]" />
                        {item.institution}
                      </span>
                      {item.university && (
                        <span className="text-[#7A7A82]">({item.university})</span>
                      )}
                      {item.board && (
                        <span className="text-[#7A7A82]">({item.board})</span>
                      )}
                    </div>
                  </div>

                  {/* Grade / Score Pill */}
                  <div className="rounded-md border border-[#E6E6E2] bg-[#FBFBF9] px-3 py-1.5 sm:text-right shrink-0">
                    <span className="block text-[10px] uppercase tracking-wider text-[#7A7A82]">
                      Score
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0D5F4E]">
                      {item.grade}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-4 border-t border-[#E6E6E2]/70 pt-3 space-y-1.5">
                    {item.highlights.map((h, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-[#5C5C64]">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0D5F4E]" />
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
