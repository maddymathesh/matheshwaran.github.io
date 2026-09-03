import { projectsData } from "@/lib/data";
import {
  ExternalLink,
  Code2,
  CheckCircle2,
  QrCode,
  Globe,
  Users,
  ShoppingBag,
} from "lucide-react";

const projectIcons: Record<string, React.ReactNode> = {
  "qr-attendance": <QrCode className="h-5 w-5 text-sky-400" />,
  "mern-portfolio": <Globe className="h-5 w-5 text-indigo-400" />,
  "curiousbees": <Users className="h-5 w-5 text-emerald-400" />,
  "maddy-bgmi-store": <ShoppingBag className="h-5 w-5 text-amber-400" />,
};

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 border-t border-white/10">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase text-sky-400">
          <span>04 // Practical Building</span>
        </div>
        <h2 className="mt-2 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Featured Projects
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
          Practical applications built across full-stack web technologies, Python automation, and database management.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="glass-card group flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-sky-500/40"
          >
            <div>
              {/* Card Header: Category & Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80">
                    {projectIcons[project.id] || <Code2 className="h-5 w-5 text-sky-400" />}
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-medium text-sky-400">
                      {project.category}
                    </span>
                    <h3 className="font-mono text-xl font-bold text-white transition-colors group-hover:text-sky-300">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 rounded-lg border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-xs font-mono text-sky-300 hover:bg-sky-500/20"
                    title="Visit project link"
                  >
                    <span>Live</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>

              {/* Tagline */}
              <p className="mt-4 font-mono text-xs font-medium text-slate-300">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 font-sans">
                {project.description}
              </p>

              {/* Key Functionality Bullets */}
              <div className="mt-5 space-y-1.5 border-t border-white/10 pt-4">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                  Key Functionality:
                </span>
                {project.keyFunctionality.map((fn, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-400" />
                    <span>{fn}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills Footer */}
            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/5 bg-slate-900/90 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
