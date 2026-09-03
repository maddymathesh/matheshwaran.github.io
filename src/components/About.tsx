import { GraduationCap, MapPin, CheckCircle, Flame, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase text-sky-400">
          <span>04 // Background &amp; Philosophy</span>
        </div>
        <h2 className="mt-2 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          About Mathesh
        </h2>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Narrative */}
        <div className="space-y-5 text-base leading-relaxed text-slate-300 lg:col-span-7">
          <p>
            I&apos;m currently in my final year of the Master of Computer Applications (MCA) program at{" "}
            <span className="font-semibold text-white">SRM Institute of Science and Technology</span> in Chennai. 
            Unlike typical academic trajectories, most of my practical engineering intuition was forged in the fire of running 
            two independent live digital ventures alongside my degree.
          </p>

          <p>
            Building <span className="text-white font-medium">Maddy BGMI Store</span> and{" "}
            <span className="text-white font-medium">Maddy RecoveryHub</span> forced me to confront what happens after the code is pushed: 
            handling real financial escrow handoffs, edge-case triage, server downtime alerts, and keeping paying users satisfied. 
            That experience taught me that software engineering is about <span className="text-sky-300 font-medium">end-to-end reliability</span>, 
            not just writing pretty functions.
          </p>

          <p>
            That discipline translates directly into my university roles. As the Technical Lead for the{" "}
            <span className="text-white font-medium">SRM Curious Bee</span> platform rebuild, I manage architectural 
            decisions and weekly deliverables for a 14-person intern squad. Simultaneously, I collaborate on AI research 
            tools like <span className="text-white font-medium">ReCollab</span> to break down academic silos across campus using Gemini.
          </p>

          <p className="border-l-2 border-sky-500/80 pl-4 text-sm italic text-slate-400">
            &ldquo;I am most interested in high-impact engineering teams where I can take total ownership of products 
            from architecture through deployment and maintenance.&rdquo;
          </p>
        </div>

        {/* Right Column: Quick Dossier & Highlights */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 lg:col-span-5 space-y-6">
          <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-sky-400">
            Quick Dossier
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
              <div>
                <span className="block font-semibold text-white">Education</span>
                <span className="text-xs text-slate-400">
                  MCA, SRM Institute of Science &amp; Technology (2023–2025)
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
              <div>
                <span className="block font-semibold text-white">Location &amp; Mobility</span>
                <span className="text-xs text-slate-400">
                  Chennai, India • Open to Global Remote &amp; Relocation
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Rocket className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <div>
                <span className="block font-semibold text-white">Current Focus</span>
                <span className="text-xs text-slate-400">
                  Full-Stack Systems, Next.js, PostgreSQL, AI Integration
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Flame className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <div>
                <span className="block font-semibold text-white">Leadership Experience</span>
                <span className="text-xs text-slate-400">
                  Technical Lead (14 Interns), MCA Section Coordinator
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/5 bg-slate-900/60 p-4">
            <div className="text-xs font-semibold text-slate-300">
              Immediate Availability:
            </div>
            <div className="mt-1 text-xs text-slate-400 leading-relaxed">
              Actively interviewing for full-time full-stack software engineering roles and production development projects.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
