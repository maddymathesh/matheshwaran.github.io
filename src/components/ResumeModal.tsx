"use client";

import { personalInfo, educationData, skillCategories, projectsData, certificationsData } from "@/lib/data";
import { X, Printer, Mail, Phone, MapPin, Globe } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-[#E6E6E2] bg-white text-[#121214] shadow-xl">
        {/* Modal Action Bar (Hidden when printing) */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#E6E6E2] bg-[#FBFBF9]/95 px-6 py-4 backdrop-blur-md print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#121214]">Matheshwaran_R_Resume.pdf</span>
            <span className="rounded-full border border-[#BDE0D7] bg-[#EEF6F4] px-2.5 py-0.5 text-xs font-medium text-[#0D5F4E]">
              Verified Candidate
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded-md bg-[#0D5F4E] px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#094538]"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-1.5 text-[#7A7A82] transition-colors hover:bg-[#F2F2EE] hover:text-[#121214]"
              aria-label="Close resume preview"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-8 sm:p-12 space-y-8 bg-white print:p-0 print:text-black">
          {/* Resume Header */}
          <div className="border-b border-[#E6E6E2] pb-6 print:border-black">
            <h1 className="text-3xl font-semibold tracking-tight text-[#121214] print:text-black sm:text-4xl">
              {personalInfo.name}
            </h1>
            <p className="mt-1 text-base font-medium text-[#0D5F4E] print:text-black">
              MCA Student | Software Developer | Full-Stack Web Developer
            </p>
            <p className="mt-2 text-sm text-[#5C5C64] print:text-gray-700">
              {personalInfo.tagline}
            </p>

            {/* Contact details row */}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#5C5C64] print:text-gray-800">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#0D5F4E] print:text-black" />
                {personalInfo.location}
              </span>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-[#121214]">
                <Phone className="h-3.5 w-3.5 text-[#0D5F4E] print:text-black" />
                {personalInfo.phone}
              </a>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-[#121214]">
                <Mail className="h-3.5 w-3.5 text-[#0D5F4E] print:text-black" />
                {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#121214]">
                <svg className="h-3.5 w-3.5 text-[#0D5F4E] print:text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.48 1.48 0 1 0-.03-2.96 1.48 1.48 0 0 0 .03 2.96m1.39 9.74v-8.37H5.07v8.37h2.78Z"/></svg>
                LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#121214]">
                <svg className="h-3.5 w-3.5 text-[#0D5F4E] print:text-black" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                GitHub
              </a>
              <a href={personalInfo.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#121214]">
                <Globe className="h-3.5 w-3.5 text-[#0D5F4E] print:text-black" />
                Portfolio
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#0D5F4E] print:text-black border-b border-[#E6E6E2] pb-1 print:border-gray-400">
              Professional Summary
            </h2>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#5C5C64] print:text-gray-800">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#0D5F4E] print:text-black border-b border-[#E6E6E2] pb-1 print:border-gray-400">
              Education
            </h2>
            <div className="mt-4 space-y-4">
              {educationData.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <div className="font-semibold text-sm text-[#121214] print:text-black">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-[#5C5C64] print:text-gray-700">
                      {edu.institution} {edu.university ? `• ${edu.university}` : ""} {edu.board ? `• ${edu.board}` : ""}
                    </div>
                    {edu.highlights && (
                      <ul className="mt-1 list-disc list-inside text-xs text-[#7A7A82] print:text-gray-600">
                        {edu.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="text-right sm:shrink-0 text-xs">
                    <span className="font-semibold text-[#0D5F4E] print:text-black">{edu.grade}</span>
                    <span className="block text-[11px] text-[#7A7A82] print:text-gray-600">{edu.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#0D5F4E] print:text-black border-b border-[#E6E6E2] pb-1 print:border-gray-400">
              Technical Skills
            </h2>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="flex items-baseline gap-2">
                  <span className="font-semibold text-[#121214] print:text-gray-900 min-w-[140px]">
                    {cat.title}:
                  </span>
                  <span className="text-[#5C5C64] print:text-gray-700">
                    {cat.skills.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#0D5F4E] print:text-black border-b border-[#E6E6E2] pb-1 print:border-gray-400">
              Projects
            </h2>
            <div className="mt-4 space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-[#121214] print:text-black">
                      {project.name}
                    </span>
                    <span className="text-xs font-medium text-[#0D5F4E] print:text-black">
                      {project.technologies.join(", ")}
                    </span>
                  </div>
                  <p className="mt-1 text-[#5C5C64] print:text-gray-800">
                    {project.description}
                  </p>
                  <ul className="mt-1 list-disc list-inside text-[11px] text-[#7A7A82] print:text-gray-600">
                    {project.keyFunctionality.slice(0, 2).map((fn, idx) => (
                      <li key={idx}>{fn}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Training & Certifications */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#0D5F4E] print:text-black border-b border-[#E6E6E2] pb-1 print:border-gray-400">
              Training &amp; Certifications
            </h2>
            <div className="mt-3 text-xs space-y-2">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="flex justify-between items-start">
                  <div>
                    <span className="font-semibold text-[#121214] print:text-black">{cert.title}</span>
                    <span className="text-[#5C5C64] print:text-gray-600"> — {cert.provider} ({cert.area})</span>
                    <p className="mt-0.5 text-[#5C5C64] print:text-gray-700 text-xs">{cert.description}</p>
                  </div>
                  <span className="text-[#7A7A82] print:text-gray-600 shrink-0 ml-4">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Personal Details */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#0D5F4E] print:text-black border-b border-[#E6E6E2] pb-1 print:border-gray-400">
              Additional Information
            </h2>
            <div className="mt-2 text-xs flex flex-wrap gap-x-6 gap-y-1 text-[#5C5C64] print:text-gray-800">
              <span><strong>Languages:</strong> {personalInfo.languages.join(", ")}</span>
              <span><strong>Nationality:</strong> {personalInfo.nationality}</span>
              <span><strong>Nativity:</strong> {personalInfo.nativity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
