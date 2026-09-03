import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matheshwaran R | MCA Student & Software Developer",
  description:
    "Personal portfolio of Matheshwaran R, MCA student at SRM Institute of Science and Technology and BCA graduate from Dr. M.G.R. Chockalingam Arts College. Full-stack web developer, MERN trained, building practical software solutions.",
  keywords: [
    "Matheshwaran R",
    "MCA Student",
    "Software Developer",
    "Full-Stack Web Developer",
    "MERN Stack",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "SQLite",
    "SRM Institute of Science and Technology",
    "Tamil Nadu India",
  ],
  authors: [{ name: "Matheshwaran R" }],
  openGraph: {
    title: "Matheshwaran R | MCA Student & Software Developer",
    description:
      "Building practical software solutions with modern web technologies. MCA candidate at SRM IST.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#FBFBF9",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#FBFBF9] text-[#121214] font-sans selection:bg-[#EEF6F4] selection:text-[#0D5F4E] relative">
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
