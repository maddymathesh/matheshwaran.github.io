import { technicalStack } from "@/lib/data";
import {
  Code2,
  Server,
  Database,
  Cpu,
  Layers,
  Shield,
  Zap,
  Bot,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="h-5 w-5 text-sky-400" />,
  Server: <Server className="h-5 w-5 text-indigo-400" />,
  Database: <Database className="h-5 w-5 text-emerald-400" />,
  Cpu: <Cpu className="h-5 w-5 text-amber-400" />,
};

export default function Stack() {
  return (
    <section id="stack" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase text-sky-400">
          <span>02 // Capabilities &amp; Architecture</span>
        </div>
        <h2 className="mt-2 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Technical Stack &amp; Tooling
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
          Proven across production web services, high-throughput backend APIs, relational databases, and AI pipelines.
        </p>
      </div>

      {/* Tech Domain Cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {technicalStack.map((group) => (
          <div
            key={group.title}
            className="glass-card flex flex-col justify-between rounded-2xl p-6"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80">
                {iconMap[group.iconName] || <Layers className="h-5 w-5 text-sky-400" />}
              </div>

              <h3 className="mt-4 font-mono text-base font-bold text-white">
                {group.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                {group.description}
              </p>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/5 bg-slate-900/90 px-2 py-1 font-mono text-[11px] font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Architectural Philosophy Callout */}
      <div className="mt-10 glass-panel rounded-2xl p-6 sm:p-8">
        <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-sky-400">
          Core Engineering Principles
        </h3>

        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
              <Shield className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Production Reliability
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                Handling edge cases, automated escrow handoffs, state validations, and customer support tickets under real-world conditions.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                End-to-End Ownership
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                Leading the whole delivery cycle: schema modeling, database indexing, backend APIs, clean frontend state, and ongoing ops.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <Bot className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Practical AI Integration
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                Using Gemini API embeddings to solve tangible institutional collaboration and matching problems across SRM departments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
