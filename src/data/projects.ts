export interface Project {
  title: string;
  description: string;
  tags: string[];
  img: string;
  links: {
    code?: string;
    demo?: string;
    view?: string;
  };
  metrics?: {
    tests?: string;
    coverage?: string;
    ci?: string;
    highlights?: string;
  };
  featured?: boolean;
}

export const siteConfig = {
  name: "Ryan Kinuthia",
  title: "Fullstack & Test Automation Engineer",
  headline: "Architecting Scalable Systems & Robust Test Frameworks.",
  subHeadline:
    "Software Engineer specializing in scalable fullstack web applications, resilient backend architectures, and automated regression testing pipelines.",
  profilePic: "/profile.jpg",
  socials: {
    github: "https://github.com/Kinuth",
    linkedin: "https://www.linkedin.com/in/ryan-kinuthia/",
    email: "mailto:ryan-kinuthia@web.de",
  },
};

export const techStack = [
  {
    category: "Testing & QA Automation",
    description: "Automated regression testing, test design, and continuous validation",
    skills: [
      "Pytest",
      "Regression Testing",
      "Boundary-Value Analysis",
      "Code Coverage",
      "Defect Lifecycle & RCA",
      "SIL Simulation",
    ],
  },
  {
    category: "DevOps & CI/CD",
    description: "Pipeline automation, containerization, and cloud deployment",
    skills: [
      "GitHub Actions",
      "Azure Pipelines",
      "Docker",
      "AWS",
      "Git",
      "CI/CD Automation",
    ],
  },
  {
    category: "Backend & Systems",
    description: "Robust APIs, services, and system-level architectures",
    skills: [
      "Python",
      "Node.js",
      "Express",
      "Django",
      "Django REST Framework",
    ],
  },
  {
    category: "Frontend",
    description: "Interactive, accessible, and performant user interfaces",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Databases & Cache",
    description: "Relational, document, and high-throughput caching stores",
    skills: [
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "MySQL",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Automotive Regression Testing Framework",
    description:
      "A Software-in-the-Loop (SIL) inspired regression testing framework in Python for vehicle ECU monitoring controllers. Features 89 automated test cases, 100% branch coverage, boundary-value analysis, defect lifecycle reproduction (BUG-001 guard), and dual CI/CD pipelines via GitHub Actions and Azure DevOps.",
    tags: [
      "Python",
      "Pytest",
      "Automated Testing",
      "GitHub Actions",
      "Azure Pipelines",
      "Regression Testing",
    ],
    img: "/automotive-testing.jpg",
    links: {
      code: "https://github.com/Kinuth/Automotive-regression-testing-framework",
    },
    metrics: {
      tests: "89 Tests Passed",
      coverage: "100% Branch Cov",
      ci: "GitHub & Azure CI",
    },
    featured: true,
  },
  {
    title: "Stax Chama",
    description:
      "A FinTech solution for investment groups to track contributions, loans, and dividends with automated calculations, amortized schedules, and audit logs.",
    tags: ["Django", "Python", "PostgreSQL", "Celery"],
    img: "/stax-chama.svg",
    links: {
      demo: "https://www.loom.com/share/f718f921a2a54265aa9de714e08f3e4a",
      view: "https://stax-chama-app.vercel.app/",
    },
    metrics: {
      highlights: "Audit-Verified Flow",
    },
    featured: true,
  },
  {
    title: "SocialMedia API",
    description:
      "A high-traffic RESTful API with JWT authentication, asynchronous Celery task execution, Redis cache offloading, image management, and feed ranking algorithms.",
    tags: ["Django REST Framework", "Redis", "Celery", "PostgreSQL"],
    img: "/social-api.svg",
    links: {
      code: "https://github.com/Kinuth/Alx_DjangoLearnLab/tree/main/social_media_api",
    },
    metrics: {
      highlights: "Redis Cache & Queue",
    },
  },
  {
    title: "GridFlow Solar Website",
    description:
      "A modern landing page for a solar energy startup featuring responsive interactive calculators, smooth transitions, and high-performance animations.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    img: "/gridflow-solar.svg",
    links: {
      view: "https://gridflowsolar.com/",
    },
    metrics: {
      highlights: "Lighthouse 99/100",
    },
  },
];
