export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  university?: string;
  duration: string;
  status: "Currently Pursuing" | "Completed";
  grade: string;
  gradeType: "CGPA" | "Percentage";
  highlights?: string[];
  board?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  keyFunctionality: string[];
  highlight: string;
  category: "Full-Stack" | "Python & Database" | "Web Application";
  github?: string;
  demo?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  provider: string;
  date: string;
  area: string;
  description: string;
  skillsLearned: string[];
}

export const personalInfo = {
  name: "Matheshwaran R",
  roles: [
    "MCA Student",
    "Software Developer",
    "Full-Stack Web Developer",
  ],
  tagline: "Building practical software solutions with modern web technologies.",
  summary:
    "I am an MCA student at SRM Institute of Science and Technology and a BCA graduate with a strong interest in software development, web application development, databases, and problem solving. I enjoy building practical applications and learning modern technologies. My technical background includes full-stack web development, programming, databases, version control, and basic cloud technologies.",
  location: "Tamil Nadu, India",
  phone: "+91 6374759225",
  email: "r.matheshwaran.io@gmail.com",
  altEmail: "mrmatheshwaran17@gmail.com",
  github: "https://github.com/matheshwaran-io",
  linkedin: "https://www.linkedin.com/in/matheshwaran-io/",
  portfolio: "https://maddymathesh.github.io",
  languages: ["English", "Tamil"],
  nationality: "Indian",
  nativity: "Tamil Nadu",
  community: "MBC / Vanniyar",
  avatarUrl: "/profile.jpg",
};

export const educationData: EducationItem[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "SRM Institute of Science and Technology",
    duration: "2025 – 2027",
    status: "Currently Pursuing",
    grade: "In Progress",
    gradeType: "CGPA",
    highlights: [
      "Advanced coursework in software development, database management systems, and modern web architectures",
      "Actively building full-stack applications and collaborative campus technology projects",
    ],
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Dr. M.G.R. Chockalingam Arts College, Arni",
    university: "Thiruvalluvar University",
    duration: "2021 – 2024 (Passing: 2025)",
    status: "Completed",
    grade: "6.854 / 10 (68.54%) — First Class",
    gradeType: "CGPA",
    highlights: [
      "Comprehensive foundation in C, Java, Data Structures, Web Programming, and Relational Databases",
      "Official Course Completion in 2025 with First Class honor and Good Conduct record",
    ],
  },
  {
    id: "class-12",
    degree: "Higher Secondary Certificate (Class XII)",
    institution: "K.K.S. Mani Matric Higher Secondary School",
    board: "Tamil Nadu Higher Secondary Certificate",
    duration: "2020 – 2021 (Passing: 2021)",
    status: "Completed",
    grade: "77.11%",
    gradeType: "Percentage",
    highlights: [
      "Strong academic record with 77.11% in Board Examinations",
      "Exemplary attendance of 95.3% and certified Good Conduct",
    ],
  },
  {
    id: "class-10",
    degree: "Secondary School Leaving Certificate (Class X)",
    institution: "K.K.S. Mani Matric Higher Secondary School",
    board: "Tamil Nadu Board of Secondary Education",
    duration: "2018 – 2019 (Passing: 2019)",
    status: "Completed",
    grade: "64.00%",
    gradeType: "Percentage",
    highlights: [
      "Core foundation in mathematics, science, and computer literacy",
      "Certified Good Conduct throughout schooling",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: "Code2",
    skills: ["C", "Java", "Python", "JavaScript"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Layout",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "Server",
    skills: ["Node.js", "Express.js"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    skills: ["MongoDB", "SQLite"],
  },
  {
    id: "fullstack",
    title: "Full-Stack Technologies",
    icon: "Layers",
    skills: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    id: "tools",
    title: "Tools & Version Control",
    icon: "GitBranch",
    skills: ["Git", "GitHub"],
  },
  {
    id: "os",
    title: "Operating Systems",
    icon: "Monitor",
    skills: ["Windows", "Linux"],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    icon: "Cloud",
    skills: ["Basic Cloud Computing Knowledge"],
  },
  {
    id: "multimedia",
    title: "Design & Multimedia",
    icon: "Palette",
    skills: ["Adobe Photoshop", "Adobe Premiere Pro"],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "qr-attendance",
    name: "QR Code Attendance System",
    tagline: "Automated digital attendance tracking using Python & SQLite",
    description:
      "A QR-code-based attendance application designed to simplify attendance management and eliminate manual attendance registers. The application generates and scans unique QR codes for participants, logging accurate timestamps and maintaining attendance records seamlessly in a local SQLite database.",
    technologies: ["Python", "SQLite", "QR Code Technology"],
    keyFunctionality: [
      "Automated attendance recording via fast QR scanning",
      "Persistent structured attendance logs stored in SQLite database",
      "Reduces proxy attendance and minimizes manual human error",
      "Streamlined export and verification of attendance data",
    ],
    highlight:
      "Focuses on automating attendance recording using QR codes and maintaining persistent attendance records in a relational database.",
    category: "Python & Database",
  },
  {
    id: "mern-portfolio",
    name: "MERN Portfolio Website",
    tagline: "Dynamic personal developer portfolio built on the MERN stack",
    description:
      "A comprehensive full-stack personal portfolio web application designed to present professional credentials, academic history, technical skill competencies, and practical software projects in a modern, interactive format.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    keyFunctionality: [
      "Component-based responsive frontend built with React.js",
      "RESTful API backend powered by Express.js and Node.js",
      "MongoDB database handling project metadata and inquiry storage",
      "Clean navigation and mobile-first responsive design",
    ],
    highlight:
      "Engineered on the MERN stack to deliver a fast, dynamic, and component-driven web experience.",
    category: "Full-Stack",
    demo: "https://maddymathesh.github.io",
  },
  {
    id: "curiousbees",
    name: "CuriousBees",
    tagline: "Campus platform rebuild project at SRM Institute of Science and Technology",
    description:
      "A modern campus platform project developed for SRM Institute of Science and Technology, aimed at facilitating student community engagement, event discovery, and collaborative campus interactions through an intuitive web application.",
    technologies: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
    keyFunctionality: [
      "Clean, modular UI components built with React and Tailwind CSS",
      "Relational data modeling with PostgreSQL for campus activities",
      "Responsive, accessible interface optimized for mobile and desktop",
    ],
    highlight:
      "Campus-focused platform project engineered with modern Next.js and PostgreSQL architecture at SRM.",
    category: "Web Application",
  },
  {
    id: "maddy-bgmi-store",
    name: "Maddy BGMI Store",
    tagline: "Specialized gaming marketplace & digital asset listing web application",
    description:
      "A practical web application and commerce storefront designed for listing and managing gaming accounts. Implements structured product listings, transaction handoff stages, and database persistence to facilitate safe peer exchanges in a specialized gaming community.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    keyFunctionality: [
      "Dedicated transaction panel managing order verification states",
      "PostgreSQL database connected via Prisma ORM for relational data integrity",
      "Responsive storefront interface built for fluid mobile browsing",
    ],
    highlight:
      "Full-stack web application with custom transaction state flows and database persistence.",
    category: "Full-Stack",
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: "gfg-mern",
    title: "MERN Stack Training",
    provider: "GeeksforGeeks",
    date: "February 2025",
    area: "MERN Stack / Full-Stack Web Development",
    description:
      "Comprehensive training covering end-to-end full-stack development with the MERN stack (MongoDB, Express.js, React.js, and Node.js). Focused on building responsive client-side applications, designing scalable REST APIs, managing database schemas, and connecting frontend components with backend services.",
    skillsLearned: [
      "React.js component state & lifecycle",
      "Node.js runtime & Express.js REST API routing",
      "MongoDB database schemas & CRUD operations",
      "Asynchronous JavaScript & API integration",
    ],
  },
];

export const highlightsStats = [
  { value: "MCA", label: "Currently Pursuing", sub: "SRM IST (2025–2027)" },
  { value: "BCA", label: "First Class (68.54%)", sub: "Thiruvalluvar Univ." },
  { value: "MERN", label: "Certified Training", sub: "GeeksforGeeks (2025)" },
  { value: "4+", label: "Practical Projects", sub: "Web, Python & DB" },
];
