"use client";

import { useState } from "react";
import { contact } from "@/lib/data";
import {
  Mail,
  Copy,
  Check,
  Send,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Trigger user's mail client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Mathesh,\n\n${message}\n\nFrom: ${name} (${email})`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;

    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setName("");
      setEmail("");
      setMessage("");
    }, 4000);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase text-sky-400">
          <span>05 // Get In Touch</span>
        </div>
        <h2 className="mt-2 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Start a Conversation
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
          Whether you have a full-stack role, an ambitious project, or an engineering challenge to solve, I&apos;d love to connect.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Direct Contact & Socials */}
        <div className="space-y-6 lg:col-span-5">
          {/* Email Quick-Copy Card */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                Direct Email
              </span>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                <Clock className="h-3 w-3" />
                <span>Replies within 12h</span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-900/80 p-3">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="h-4 w-4 shrink-0 text-sky-400" />
                <span className="truncate font-mono text-sm text-white">
                  {contact.email}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex shrink-0 items-center gap-1.5 rounded-lg bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-300 hover:bg-sky-500/20 hover:text-white"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="glass-card group flex items-center justify-between rounded-xl p-4 transition-all hover:border-sky-500/40"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 text-slate-300 transition-colors group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span className="text-sm font-semibold text-slate-200 group-hover:text-white">
                  GitHub
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-400" />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-card group flex items-center justify-between rounded-xl p-4 transition-all hover:border-sky-500/40"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 text-slate-300 transition-colors group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.48 1.48 0 1 0-.03-2.96 1.48 1.48 0 0 0 .03 2.96m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                </svg>
                <span className="text-sm font-semibold text-slate-200 group-hover:text-white">
                  LinkedIn
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-400" />
            </a>
          </div>

          {/* Current Status Box */}
          <div className="glass-panel rounded-xl p-4 text-xs text-slate-300">
            <div className="font-semibold text-white flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Hire</span>
            </div>
            <p className="mt-1.5 text-slate-400 leading-relaxed">
              Targeting Full-Stack, Backend, or Lead Engineering opportunities in high-velocity teams.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Quick Inquiry Form */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:col-span-7">
          <h3 className="font-mono text-base font-bold text-white">
            Send a Quick Note
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            This will open your default email app with your message pre-formatted.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="sender-name"
                  className="block font-mono text-[11px] font-medium text-slate-300 uppercase tracking-wider"
                >
                  Your Name
                </label>
                <input
                  id="sender-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Mercer"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/70 px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="sender-email"
                  className="block font-mono text-[11px] font-medium text-slate-300 uppercase tracking-wider"
                >
                  Your Email
                </label>
                <input
                  id="sender-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. alex@company.com"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/70 px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-sky-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="sender-message"
                className="block font-mono text-[11px] font-medium text-slate-300 uppercase tracking-wider"
              >
                Message / Project Details
              </label>
              <textarea
                id="sender-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your role, project, or what you're building..."
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/70 px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-sky-500 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sent"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:brightness-110 disabled:opacity-75"
            >
              {status === "sent" ? (
                <>
                  <Check className="h-4 w-4 text-emerald-300" />
                  <span>Opening Mail Client...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Direct Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
