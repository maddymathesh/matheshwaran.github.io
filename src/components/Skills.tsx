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
  CheckCircle2,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="h-4 w-4 text-[#0D5F4E]" />,
  Layout: <Layout className="h-4 w-4 text-[#0D5F4E]" />,
  Server: <Server className="h-4 w-4 text-[#0D5F4E]" />,
  Database: <Database className="h-4 w-4 text-[#0D5F4E]" />,
  Layers: <Layers className="h-4 w-4 text-[#0D5F4E]" />,
  GitBranch: <GitBranch className="h-4 w-4 text-[#0D5F4E]" />,
  Monitor: <Monitor className="h-4 w-4 text-[#0D5F4E]" />,
  Cloud: <Cloud className="h-4 w-4 text-[#0D5F4E]" />,
  Palette: <Palette className="h-4 w-4 text-[#0D5F4E]" />,
};

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-20 sm:px-8 border-t border-[#E6E6E2]">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#121214] sm:text-3xl">
          Technical Skills
        </h2>
        <p className="mt-1.5 max-w-xl text-sm text-[#5C5C64] sm:text-base">
          Core programming, web frameworks, databases, and development tooling acquired through coursework and practical building.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col justify-between rounded-lg border border-[#E6E6E2] bg-white p-5 transition-colors hover:border-[#D5D5D0]"
          >
            <div>
              {/* Category Icon & Title */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E6E6E2] bg-[#FBFBF9]">
                  {iconMap[category.icon] || <Code2 className="h-4 w-4 text-[#0D5F4E]" />}
                </div>
                <h3 className="text-sm font-semibold text-[#121214]">
                  {category.title}
                </h3>
              </div>

              {/* Skills Badges (rounded-md 6px for sharp editorial density) */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-transparent bg-[#F2F2EE] px-2.5 py-1 text-xs font-medium text-[#121214] transition-colors hover:border-[#D5D5D0]"
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
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#BDE0D7] bg-[#EEF6F4] p-3.5 text-xs text-[#0D5F4E]">
        <div className="flex items-center gap-2 font-medium">
          <CheckCircle2 className="h-4 w-4 text-[#0D5F4E]" />
          <span>Verified academic &amp; training competencies</span>
        </div>
        <span className="font-medium text-[#5C5C64]">
          MERN Stack, Python, SQLite, Java, C
        </span>
      </div>
    </section>
  );
}
