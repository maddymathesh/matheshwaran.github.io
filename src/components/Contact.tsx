"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sentStatus, setSentStatus] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const emailSubject = encodeURIComponent(
      subject || `Software Opportunity / Inquiry from ${name}`
    );
    const emailBody = encodeURIComponent(
      `Hello Matheshwaran,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

    setSentStatus(true);
    setTimeout(() => {
      setSentStatus(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 4000);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-20 sm:px-8 border-t border-[#E6E6E2]">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#121214] sm:text-3xl">
          Get In Touch
        </h2>
        <p className="mt-1.5 max-w-xl text-sm text-[#5C5C64] sm:text-base">
          Available for software engineering internships, campus placements, and entry-level full-stack development roles.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="space-y-4 lg:col-span-5">
          {/* Email Card */}
          <div className="rounded-xl border border-[#E6E6E2] bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7A7A82]">
                Work Email
              </span>
              <span className="rounded-full border border-[#BDE0D7] bg-[#EEF6F4] px-2 py-0.5 text-[11px] font-medium text-[#0D5F4E]">
                Primary
              </span>
            </div>

            <div className="mt-2.5 flex items-center justify-between gap-2 rounded-lg border border-[#E6E6E2] bg-[#FBFBF9] p-3">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="h-4 w-4 shrink-0 text-[#0D5F4E]" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="truncate text-xs font-medium text-[#121214] hover:text-[#0D5F4E]"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="shrink-0 rounded-md bg-[#F2F2EE] px-2 py-1 text-xs font-medium text-[#5C5C64] transition-colors hover:bg-[#E6E6E2] hover:text-[#121214]"
                title="Copy email"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="h-3.5 w-3.5 text-[#0D5F4E]" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>

            <div className="mt-2 text-xs text-[#7A7A82]">
              Alternate: {personalInfo.altEmail}
            </div>
          </div>

          {/* Phone Card */}
          <div className="rounded-xl border border-[#E6E6E2] bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7A7A82]">
                Phone Number
              </span>
              <span className="text-xs text-[#7A7A82]">Call / WhatsApp</span>
            </div>

            <div className="mt-2.5 flex items-center justify-between gap-2 rounded-lg border border-[#E6E6E2] bg-[#FBFBF9] p-3">
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#0D5F4E]" />
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-xs font-medium text-[#121214] hover:text-[#0D5F4E]"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="shrink-0 rounded-md bg-[#F2F2EE] px-2 py-1 text-xs font-medium text-[#5C5C64] transition-colors hover:bg-[#E6E6E2] hover:text-[#121214]"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="h-3.5 w-3.5 text-[#0D5F4E]" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

          {/* Location & Social Profiles */}
          <div className="rounded-xl border border-[#E6E6E2] bg-white p-5 space-y-4">
            <div className="flex items-center gap-2.5 text-xs text-[#5C5C64]">
              <MapPin className="h-4 w-4 text-[#0D5F4E] shrink-0" />
              <span>Location: <strong className="text-[#121214]">{personalInfo.location}</strong></span>
            </div>

            <div className="border-t border-[#E6E6E2]/70 pt-3 grid grid-cols-2 gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-lg border border-[#E6E6E2] bg-[#FBFBF9] p-3 text-xs font-medium text-[#121214] transition-colors hover:border-[#D5D5D0]"
              >
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#5C5C64]" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>GitHub</span>
                </div>
                <ExternalLink className="h-3 w-3 text-[#7A7A82]" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-lg border border-[#E6E6E2] bg-[#FBFBF9] p-3 text-xs font-medium text-[#121214] transition-colors hover:border-[#D5D5D0]"
              >
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#5C5C64]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.48 1.48 0 1 0-.03-2.96 1.48 1.48 0 0 0 .03 2.96m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                  </svg>
                  <span>LinkedIn</span>
                </div>
                <ExternalLink className="h-3 w-3 text-[#7A7A82]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="rounded-xl border border-[#E6E6E2] bg-white p-6 sm:p-8 lg:col-span-7">
          <h3 className="text-base font-semibold text-[#121214]">
            Send a Direct Note
          </h3>
          <p className="mt-1 text-xs text-[#5C5C64]">
            Have an internship opening, entry-level opportunity, or project discussion? Fill in the details below.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium text-[#121214]"
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="mt-1.5 w-full rounded-lg border border-[#E6E6E2] bg-[#FBFBF9] px-3.5 py-2.5 text-xs sm:text-sm text-[#121214] placeholder-[#7A7A82] transition-colors focus:border-[#0D5F4E] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium text-[#121214]"
                >
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. john@company.com"
                  className="mt-1.5 w-full rounded-lg border border-[#E6E6E2] bg-[#FBFBF9] px-3.5 py-2.5 text-xs sm:text-sm text-[#121214] placeholder-[#7A7A82] transition-colors focus:border-[#0D5F4E] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block text-xs font-medium text-[#121214]"
              >
                Subject / Topic
              </label>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Software Engineering Internship Opportunity"
                className="mt-1.5 w-full rounded-lg border border-[#E6E6E2] bg-[#FBFBF9] px-3.5 py-2.5 text-xs sm:text-sm text-[#121214] placeholder-[#7A7A82] transition-colors focus:border-[#0D5F4E] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-medium text-[#121214]"
              >
                Message Details *
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="mt-1.5 w-full rounded-lg border border-[#E6E6E2] bg-[#FBFBF9] px-3.5 py-2.5 text-xs sm:text-sm text-[#121214] placeholder-[#7A7A82] transition-colors focus:border-[#0D5F4E] focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sentStatus}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#0D5F4E] py-2.5 text-xs sm:text-sm font-medium text-white transition-colors hover:bg-[#094538] disabled:opacity-75"
            >
              {sentStatus ? (
                <>
                  <Check className="h-4 w-4 text-white" />
                  <span>Preparing Email Client...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
