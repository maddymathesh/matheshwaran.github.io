"use client";

import { projectsData } from "@/lib/data";
import { Spotlight } from "@/components/ui/spotlight";
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
  "qr-attendance": <QrCode className="h-5 w-5 text-[#0D5F4E]" />,
  "mern-portfolio": <Globe className="h-5 w-5 text-[#0D5F4E]" />,
  "curiousbees": <Users className="h-5 w-5 text-[#0D5F4E]" />,
  "maddy-bgmi-store": <ShoppingBag className="h-5 w-5 text-[#0D5F4E]" />,
};

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-6 py-20 sm:px-8 border-t border-[#E6E6E2]">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#121214] sm:text-3xl">
          Featured Projects
        </h2>
        <p className="mt-1.5 max-w-xl text-sm text-[#5C5C64] sm:text-base">
          Practical applications built across full-stack web technologies, Python automation, and database management.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#E6E6E2] bg-white p-6 sm:p-7 transition-colors hover:border-[#D5D5D0]"
          >
            {/* 21st.dev Spotlight cursor hover effect */}
            <Spotlight
              className="bg-[radial-gradient(circle_at_center,rgba(189,224,215,0.4)_0%,rgba(238,246,244,0.18)_50%,transparent_80%)]"
              size={320}
            />

            <div className="relative z-10">
              {/* Card Header: Category & Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E6E6E2] bg-[#FBFBF9]">
                    {projectIcons[project.id] || <Code2 className="h-5 w-5 text-[#0D5F4E]" />}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#0D5F4E]">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-[#121214]">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 rounded-md border border-[#E6E6E2] bg-white px-2.5 py-1 text-xs font-medium text-[#121214] transition-colors hover:border-[#D5D5D0]"
                    title="Visit project link"
                  >
                    <span>Live</span>
                    <ExternalLink className="h-3 w-3 text-[#5C5C64]" />
                  </a>
                )}
              </div>

              {/* Tagline */}
              <p className="mt-4 text-xs font-medium text-[#121214]">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5C5C64]">
                {project.description}
              </p>

              {/* Key Functionality Bullets */}
              <div className="mt-5 space-y-1.5 border-t border-[#E6E6E2]/70 pt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7A7A82]">
                  Key Functionality:
                </span>
                {project.keyFunctionality.map((fn, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#5C5C64]">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0D5F4E]" />
                    <span>{fn}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills Footer */}
            <div className="relative z-10 mt-6 border-t border-[#E6E6E2]/70 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-transparent bg-[#F2F2EE] px-2.5 py-1 text-xs font-medium text-[#121214]"
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
