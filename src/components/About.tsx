import Image from "next/image";
import { personalInfo } from "@/lib/data";
import {
  GraduationCap,
  MapPin,
  Languages,
  CheckCircle2,
  Code2,
  Database,
  Layers,
  Cpu,
  ShieldCheck,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 border-t border-white/10">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase text-sky-400">
          <span>01 // Background &amp; Profile</span>
        </div>
        <h2 className="mt-2 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          About Me
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
          Academic foundation, development interests, and personal philosophy.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Narrative */}
        <div className="space-y-5 text-base leading-relaxed text-slate-300 lg:col-span-7">
          <p>
            I am an MCA student and BCA graduate with a deep interest in software development, 
            full-stack web application development, databases, and problem solving. I am currently 
            pursuing my <span className="font-semibold text-white">Master of Computer Applications (MCA)</span> at{" "}
            <span className="font-semibold text-white">SRM Institute of Science and Technology</span> (2025–2027), 
            having completed my <span className="font-semibold text-white">Bachelor of Computer Applications (BCA)</span> from{" "}
            <span className="font-semibold text-white">Dr. M.G.R. Chockalingam Arts College, Arni</span> (affiliated with Thiruvalluvar University) with First Class honors.
          </p>

          <p>
            My passion centers on <span className="text-sky-300 font-medium">building practical applications</span> and 
            continuously learning modern technologies. Rather than remaining purely theoretical, I enjoy translating 
            programming fundamentals in C, Java, Python, and JavaScript into real working software — from automated 
            desktop and QR-based attendance utilities to full-stack web applications on the MERN stack.
          </p>

          <p>
            I place strong emphasis on writing clean, readable code, designing structured database schemas (MongoDB, SQLite, PostgreSQL), 
            and understanding end-to-end development flows. I am eager to contribute my skills to high-velocity software engineering 
            teams as an intern, graduate trainee, or entry-level software developer.
          </p>

          {/* Core Areas of Interest */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-sky-400">
              Key Focus Areas
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Full-Stack Web Application Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Database Design &amp; Data Persistence</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-indigo-400 shrink-0" />
                <span>Problem Solving &amp; Logic Building</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Modern Web Technologies &amp; Frameworks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Profile Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 lg:col-span-5 space-y-6">
          <div className="flex items-center gap-4 border-b border-white/10 pb-5">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-sky-500/30">
              <Image
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                fill
                sizes="56px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <h3 className="font-mono text-base font-bold text-white">
                {personalInfo.name}
              </h3>
              <p className="text-xs text-slate-400">
                Software Developer &amp; MCA Candidate
              </p>
            </div>
          </div>

          <div className="space-y-3.5 text-xs font-mono">
            <div className="flex items-start justify-between border-b border-white/5 pb-2">
              <span className="text-slate-400">Current Degree</span>
              <span className="font-semibold text-white text-right">MCA (2025–2027)</span>
            </div>

            <div className="flex items-start justify-between border-b border-white/5 pb-2">
              <span className="text-slate-400">Current Institution</span>
              <span className="font-semibold text-white text-right">SRM IST, Chennai</span>
            </div>

            <div className="flex items-start justify-between border-b border-white/5 pb-2">
              <span className="text-slate-400">Undergraduate</span>
              <span className="font-semibold text-white text-right">BCA, First Class (68.54%)</span>
            </div>

            <div className="flex items-start justify-between border-b border-white/5 pb-2">
              <span className="text-slate-400">Location</span>
              <span className="font-semibold text-white text-right">{personalInfo.location}</span>
            </div>

            <div className="flex items-start justify-between border-b border-white/5 pb-2">
              <span className="text-slate-400">Languages</span>
              <span className="font-semibold text-sky-400 text-right">{personalInfo.languages.join(", ")}</span>
            </div>

            <div className="flex items-start justify-between border-b border-white/5 pb-2">
              <span className="text-slate-400">Nationality</span>
              <span className="font-semibold text-white text-right">{personalInfo.nationality}</span>
            </div>

            <div className="flex items-start justify-between">
              <span className="text-slate-400">Academic Attendance</span>
              <span className="font-semibold text-emerald-400 text-right">95.3% (School Record)</span>
            </div>
          </div>

          <div className="rounded-xl border border-white/5 bg-slate-900/80 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Placement &amp; Internship Readiness</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400 leading-relaxed">
              Actively seeking software engineering internships and entry-level full-stack positions with strong problem-solving orientation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
