
export const siteConfig = {
  name: "Ryan Kinuthia",
  title: "Fullstack Engineer",
  headline: "Architecting Scalable Digital Solutions.",
  subHeadline:
    "Fullstack Engineer focused on turning complex requirements into elegant, maintainable code.",
  profilePic: "/profile.jpg", // Added profile pic path
  socials: {
    github: "https://github.com/Kinuth",
    linkedin: "https://www.linkedin.com/in/ryan-kinuthia/",
    email: "mailto:kinuthiaryan01@gmail.com",
  },
};

export const techStack = [
  {
    category: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "Django REST Framework"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "Git", "GitHub"],
  },
];

export const projects = [
  {
    title: "Stax Chama",
    description:
      "A FinTech solution for investment groups to track contributions, loans, and dividends.",
    tags: ["Django", "Python", "PostgreSQL"],
    img: "/stax-project.png", 
    links: {
      demo: "https://www.loom.com/share/f718f921a2a54265aa9de714e08f3e4a",
      view: "https://stax-chama-app.vercel.app/",
    },
  },
  {
    title: "SocialMedia API",
    description:
      "A high-traffic RESTful API with JWT auth, image uploads, and feed algorithms.",
    tags: ["Django REST Framework", "Redis", "Celery"],
    img: "/project-placeholder.png",
    links: {
      code: "https://github.com/Kinuth/Alx_DjangoLearnLab/tree/main/social_media_api",
    },
  },
  {
    title: "GridFlow Solar Website",
    description:
      "A modern landing page for a Kenyan solar startup with high-performance animations.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    img: "/gridflow.png",
    links: {
      view: "https://gridflow-solar-web.vercel.app/",
    },
  },
];
