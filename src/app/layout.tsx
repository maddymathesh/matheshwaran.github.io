import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mathesh Waran R | Full-Stack Engineer & Product Builder",
  description:
    "Full-stack software engineer and final-year MCA student at SRM. Founder of two live production platforms, Technical Lead of a 14-person intern team, and builder of AI campus research systems.",
  keywords: [
    "Mathesh Waran R",
    "Full Stack Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "FastAPI",
    "PostgreSQL",
    "SRM Institute of Science and Technology",
    "Maddy BGMI Store",
    "Maddy RecoveryHub",
  ],
  authors: [{ name: "Mathesh Waran R" }],
  openGraph: {
    title: "Mathesh Waran R | Full-Stack Engineer & Product Builder",
    description:
      "Engineering resilient platforms for campus, communities, and production scale. Founder of 2 live businesses & tech lead of 14 interns.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#070a11",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#070a11] text-slate-100 font-sans selection:bg-sky-500/30 selection:text-white relative">
        {/* Background Grid Pattern & Ambient Glow Lights */}
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />
        <div className="ambient-glow-top" />
        <div className="ambient-glow-middle" />

        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
