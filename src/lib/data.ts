export type WorkStatus = "live" | "building" | "planning";
export type WorkCategory = "all" | "production" | "campus" | "ai-systems";

export interface WorkItem {
  id: string;
  name: string;
  role: string;
  category: "production" | "campus" | "ai-systems";
  summary: string;
  detail: string;
  architectureHighlights: string[];
  stack: string[];
  status: WorkStatus;
  url?: string;
  metrics?: string;
  featured?: boolean;
}

export const statusLabel: Record<WorkStatus, string> = {
  live: "Live in Production",
  building: "In Active Development",
  planning: "Architecture & Planning",
};

export const work: WorkItem[] = [
  {
    id: "maddy-bgmi-store",
    name: "Maddy BGMI Store",
    role: "Founder & Full-Stack Developer",
    category: "production",
    summary: "Dedicated marketplace platform for buying and selling BGMI accounts with safe escrow handoffs.",
    detail:
      "Engineered the full commerce storefront and custom transaction panel from scratch. Solves trust and verification challenges in a niche gaming ecosystem through automated listing verification, transparent escrow workflows, and direct seller-to-buyer handoff management.",
    architectureHighlights: [
      "Custom transaction panel handling order states and secure handoffs",
      "PostgreSQL with Prisma ORM for relational asset integrity",
      "Production-deployed serving active community members"
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "TypeScript"],
    status: "live",
    url: "https://maddybgmistoreog.in",
    metrics: "Live Production Marketplace",
    featured: true,
  },
  {
    id: "maddy-recoveryhub",
    name: "Maddy RecoveryHub",
    role: "Founder & Platform Engineer",
    category: "production",
    summary: "Digital identity & account recovery service providing direct tech assistance for locked accounts.",
    detail:
      "A human-in-the-loop support platform designed for users locked out of their personal or commercial digital accounts. Streamlines intake triage, identity proof submissions, and step-by-step resolution pathways that standard automated platform support queues overlook.",
    architectureHighlights: [
      "Integrated request triage pipeline backed by Supabase Auth & Database",
      "Encrypted credential handoff protocols and status tracking",
      "Real-time ticket updates for clients with direct communication hooks"
    ],
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    status: "live",
    url: "https://maddyrecoveryhub.in",
    metrics: "Active Client Service",
    featured: true,
  },
  {
    id: "srm-curious-bee",
    name: "SRM Curious Bee",
    role: "Technical Lead (14 Interns)",
    category: "campus",
    summary: "Full-scale architectural rebuild of SRM's premier campus community and event engagement platform.",
    detail:
      "Leading an engineering team of 14 student interns to rebuild Curious Bee from the ground up. Responsible for overall system architecture, database modeling, sprint coordination, PR reviews, and mentoring junior engineers through modern Next.js production patterns.",
    architectureHighlights: [
      "14-engineer team coordination with modular component architecture",
      "Role-based access control (RBAC) for student organizers and attendees",
      "Scalable PostgreSQL database schema designed for high-traffic campus fests"
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma"],
    status: "building",
    metrics: "14-Engineer Team Lead",
    featured: true,
  },
  {
    id: "recollab",
    name: "ReCollab",
    role: "Lead Systems Developer",
    category: "ai-systems",
    summary: "AI-powered academic research collaboration platform for SRM faculty and PhD scholars.",
    detail:
      "Helps researchers cross departmental silos to find project collaborators, co-authors, and grant partners. Built on a Gemini API semantic matching engine that analyzes publication histories and research abstracts to recommend relevant cross-disciplinary peers.",
    architectureHighlights: [
      "Gemini API semantic matching for research interest embeddings",
      "High-throughput FastAPI asynchronous backend service",
      "PostgreSQL vector/tag indexing for department-wide scholar profiles"
    ],
    stack: ["Next.js", "FastAPI", "Gemini API", "PostgreSQL", "TypeScript"],
    status: "building",
    metrics: "AI Semantic Matching",
    featured: true,
  },
  {
    id: "sentinel",
    name: "Sentinel Security",
    role: "Founder & Architect",
    category: "production",
    summary: "Consolidated security identity suite and digital account integrity service.",
    detail:
      "Unifying digital account recovery, breach auditing, and preventative security guidance under one centralized brand. Built to give everyday creators and business owners an accessible security partner against account takeovers.",
    architectureHighlights: [
      "Automated breach notification and risk assessment engine",
      "Modular client portal for continuous account monitoring",
      "Stricter audit logging and client data zero-knowledge practices"
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    status: "building",
    metrics: "Security Brand in Build",
  },
  {
    id: "research-nexus",
    name: "Research Nexus",
    role: "Core Infrastructure Engineer",
    category: "campus",
    summary: "University-wide research intelligence and publication ecosystem for SRM.",
    detail:
      "Laying foundational data infrastructure to connect disparate departmental research repositories, lab equipment booking, and grant allocations into a unified institutional dashboard for SRM leadership.",
    architectureHighlights: [
      "Centralized schema for cross-departmental publication tracking",
      "FastAPI microservice architecture for data ingestion pipelines",
      "Role-tailored dashboards for deans, HODs, and student researchers"
    ],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "TypeScript"],
    status: "planning",
    metrics: "Institutional Infrastructure",
  },
];

export interface StackCategory {
  title: string;
  iconName: string;
  description: string;
  items: string[];
}

export const technicalStack: StackCategory[] = [
  {
    title: "Frontend Engineering",
    iconName: "Code2",
    description: "Crafting fluid, high-performance web applications with modern React ecosystems.",
    items: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Systems",
    iconName: "Server",
    description: "Building resilient REST APIs, asynchronous handlers, and scalable server logic.",
    items: ["FastAPI", "Node.js", "RESTful APIs", "Python", "Microservices"],
  },
  {
    title: "Databases & Cloud",
    iconName: "Database",
    description: "Architecting relational schemas, data persistence, and real-time backend state.",
    items: ["PostgreSQL", "Prisma ORM", "Supabase", "SQL", "Redis"],
  },
  {
    title: "AI Integration & Hardware",
    iconName: "Cpu",
    description: "Integrating modern LLM capabilities and interfacing with embedded IoT platforms.",
    items: ["Gemini API", "LLM Prompting", "IoT / Embedded C", "Sensors & Microcontrollers"],
  },
];

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  badge: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "curious-bee-lead",
    role: "Technical Lead",
    organization: "SRM Curious Bee",
    location: "SRM Institute of Science and Technology, Chennai",
    period: "2024 — Present",
    badge: "14-Engineer Team Lead",
    summary:
      "Spearheading the architectural overhaul of SRM's central campus event and community platform, leading a cross-functional team of 14 interns.",
    highlights: [
      "Architected clean Next.js + PostgreSQL codebase, breaking monolithic systems into reusable components.",
      "Conducting weekly technical reviews, sprint planning, and hands-on code review for 14 junior developers.",
      "Bridging the gap between student requirements, campus organizers, and institutional infrastructure."
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Team Leadership", "System Design"],
  },
  {
    id: "founder-operator",
    role: "Founder & Software Engineer",
    organization: "Maddy BGMI Store & Maddy RecoveryHub",
    location: "Self-Employed / Bootstrapped",
    period: "2023 — Present",
    badge: "2 Live Production Services",
    summary:
      "Built, launched, and actively operate two revenue-generating digital services with real daily users and custom transactions.",
    highlights: [
      "Constructed proprietary escrow-style transaction panel to guarantee safe handoffs in peer gaming trades.",
      "Engineered automated ticket intake, Supabase storage, and verification workflows for account recovery.",
      "Managing end-to-end responsibilities: full-stack development, server uptime, database maintenance, and customer resolution."
    ],
    tech: ["Next.js", "Supabase", "PostgreSQL", "Prisma", "DevOps & Ops"],
  },
  {
    id: "ai-research-platforms",
    role: "Lead Platform Developer",
    organization: "ReCollab & Research Nexus",
    location: "SRM Research Community",
    period: "2024 — Present",
    badge: "AI Systems Engineering",
    summary:
      "Developing institutional platforms powered by the Gemini API to streamline academic collaboration for PhD scholars and university faculty.",
    highlights: [
      "Integrated Gemini API to match scholars across disciplines based on abstract embeddings and research tags.",
      "Designed asynchronous FastAPI backend services with high-throughput query handling on PostgreSQL.",
      "Eliminating departmental silos to accelerate grant applications and joint research publications."
    ],
    tech: ["FastAPI", "Gemini API", "Next.js", "Python", "Vector Matching"],
  },
  {
    id: "academic-lead",
    role: "Master of Computer Applications (MCA) & Section Coordinator",
    organization: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    period: "2023 — 2025 (Final Year)",
    badge: "Academic Leadership",
    summary:
      "Final-year graduate student balancing rigorous computer science academics with active software development and peer leadership.",
    highlights: [
      "Elected/acting as MCA section coordinator, acting as the primary liaison between faculty and students.",
      "Organizing technical study circles and guiding classmates through full-stack development and Git workflows.",
      "Consistently maintaining strong academic standing while operating production businesses."
    ],
    tech: ["Data Structures & Algorithms", "Database Management", "Distributed Systems", "Software Engineering"],
  },
];

export const statistics = [
  { value: "2", label: "Production Platforms Live", highlight: "Bootstrapped & Operated" },
  { value: "14", label: "Engineers Mentored & Led", highlight: "SRM Campus Platform" },
  { value: "6+", label: "Systems Engineered", highlight: "Web, AI & Cloud" },
  { value: "99.9%", label: "Uptime Focus", highlight: "Real Customer Trust" },
];

export const contact = {
  name: "Mathesh Waran R",
  title: "Full-Stack Software Engineer & Technical Lead",
  location: "Chennai, Tamil Nadu, India",
  email: "matheshwaran@gmail.com",
  status: "Available for Full-Time Roles & High-Impact Projects",
  github: "https://github.com/matheshwaran-io",
  linkedin: "https://linkedin.com",
};
