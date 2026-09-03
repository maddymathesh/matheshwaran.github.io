import Image from "next/image";
import { personalInfo } from "@/lib/data";
import {
  Code2,
  Database,
  Layers,
  Cpu,
  ShieldCheck,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-20 sm:px-8 border-t border-[#E6E6E2]">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#121214] sm:text-3xl">
          About Me
        </h2>
        <p className="mt-1.5 max-w-xl text-sm text-[#5C5C64] sm:text-base">
          Academic foundation, development interests, and personal philosophy.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Narrative */}
        <div className="space-y-5 text-sm sm:text-base leading-relaxed text-[#5C5C64] lg:col-span-7">
          <p>
            I am an MCA student and BCA graduate with a deep interest in software development, 
            full-stack web application development, databases, and problem solving. I am currently 
            pursuing my <span className="font-semibold text-[#121214]">Master of Computer Applications (MCA)</span> at{" "}
            <span className="font-semibold text-[#121214]">SRM Institute of Science and Technology</span> (2025–2027), 
            having completed my <span className="font-semibold text-[#121214]">Bachelor of Computer Applications (BCA)</span> from{" "}
            <span className="font-semibold text-[#121214]">Dr. M.G.R. Chockalingam Arts College, Arni</span> (affiliated with Thiruvalluvar University) with First Class honors.
          </p>

          <p>
            My passion centers on <span className="font-medium text-[#0D5F4E]">building practical applications</span> and 
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
          <div className="mt-6 rounded-lg border border-[#E6E6E2] bg-white p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7A7A82]">
              Key Focus Areas
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 text-xs font-medium text-[#121214]">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-[#0D5F4E] shrink-0" />
                <span>Full-Stack Web Application Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-[#0D5F4E] shrink-0" />
                <span>Database Design &amp; Data Persistence</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-[#0D5F4E] shrink-0" />
                <span>Problem Solving &amp; Logic Building</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-[#0D5F4E] shrink-0" />
                <span>Modern Web Technologies &amp; Frameworks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Profile Card */}
        <div className="rounded-xl border border-[#E6E6E2] bg-white p-6 sm:p-7 lg:col-span-5 space-y-5">
          <div className="flex items-center gap-4 border-b border-[#E6E6E2] pb-5">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#E6E6E2]">
              <Image
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                fill
                sizes="48px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#121214]">
                {personalInfo.name}
              </h3>
              <p className="text-xs text-[#5C5C64]">
                Software Developer &amp; MCA Candidate
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-start justify-between border-b border-[#E6E6E2]/60 pb-2">
              <span className="text-[#7A7A82]">Current Degree</span>
              <span className="font-semibold text-[#121214] text-right">MCA (2025–2027)</span>
            </div>

            <div className="flex items-start justify-between border-b border-[#E6E6E2]/60 pb-2">
              <span className="text-[#7A7A82]">Current Institution</span>
              <span className="font-semibold text-[#121214] text-right">SRM IST, Chennai</span>
            </div>

            <div className="flex items-start justify-between border-b border-[#E6E6E2]/60 pb-2">
              <span className="text-[#7A7A82]">Undergraduate</span>
              <span className="font-semibold text-[#121214] text-right">BCA, First Class (68.54%)</span>
            </div>

            <div className="flex items-start justify-between border-b border-[#E6E6E2]/60 pb-2">
              <span className="text-[#7A7A82]">Location</span>
              <span className="font-semibold text-[#121214] text-right">{personalInfo.location}</span>
            </div>

            <div className="flex items-start justify-between border-b border-[#E6E6E2]/60 pb-2">
              <span className="text-[#7A7A82]">Languages</span>
              <span className="font-semibold text-[#0D5F4E] text-right">{personalInfo.languages.join(", ")}</span>
            </div>

            <div className="flex items-start justify-between border-b border-[#E6E6E2]/60 pb-2">
              <span className="text-[#7A7A82]">Nationality</span>
              <span className="font-semibold text-[#121214] text-right">{personalInfo.nationality}</span>
            </div>

            <div className="flex items-start justify-between">
              <span className="text-[#7A7A82]">Academic Attendance</span>
              <span className="font-semibold text-[#0D5F4E] text-right">95.3% (School Record)</span>
            </div>
          </div>

          <div className="rounded-lg border border-[#BDE0D7] bg-[#EEF6F4] p-3.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0D5F4E]">
              <ShieldCheck className="h-4 w-4 text-[#0D5F4E]" />
              <span>Placement &amp; Internship Readiness</span>
            </div>
            <p className="mt-1 text-xs text-[#5C5C64] leading-relaxed">
              Actively seeking software engineering internships and entry-level full-stack positions with strong problem-solving orientation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
