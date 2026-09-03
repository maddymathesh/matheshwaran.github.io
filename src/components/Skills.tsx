import { skillCategories } from "@/lib/data";
import {
  Code2,
  Layout,
  Server,
  Database,
  Layers,
  GitBranch,
  Monitor,
  Cloud,
  Palette,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="h-5 w-5 text-sky-400" />,
  Layout: <Layout className="h-5 w-5 text-indigo-400" />,
  Server: <Server className="h-5 w-5 text-emerald-400" />,
  Database: <Database className="h-5 w-5 text-amber-400" />,
  Layers: <Layers className="h-5 w-5 text-cyan-400" />,
  GitBranch: <GitBranch className="h-5 w-5 text-rose-400" />,
  Monitor: <Monitor className="h-5 w-5 text-blue-400" />,
  Cloud: <Cloud className="h-5 w-5 text-teal-400" />,
  Palette: <Palette className="h-5 w-5 text-purple-400" />,
};

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 border-t border-white/10">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase text-sky-400">
          <span>03 // Technical Competencies</span>
        </div>
        <h2 className="mt-2 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Technical Skills
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
          Core programming, web frameworks, databases, and development tooling acquired through coursework and practical building.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="glass-card flex flex-col justify-between rounded-2xl p-6"
          >
            <div>
              {/* Category Icon & Title */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 shadow-sm">
                  {iconMap[category.icon] || <Code2 className="h-5 w-5 text-sky-400" />}
                </div>
                <h3 className="font-mono text-base font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-lg border border-white/10 bg-slate-900/90 px-3 py-1.5 font-mono text-xs font-medium text-slate-200 transition-colors hover:border-sky-500/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Verified Skills Note */}
      <div className="mt-8 rounded-xl border border-white/5 bg-slate-950/40 p-4 text-xs font-mono text-slate-400 flex items-center justify-between flex-wrap gap-2">
        <span>● Verified academic &amp; training competencies</span>
        <span className="text-slate-500">MERN Stack • Python • SQLite • Java • C</span>
      </div>
    </section>
  );
}
