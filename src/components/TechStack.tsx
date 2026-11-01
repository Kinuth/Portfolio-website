"use client";

import { techStack } from "@/data/projects";
import { motion } from "framer-motion";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiPython,
    SiDjango,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiMysql,
    SiDocker,
    SiAmazonwebservices,
    SiGit,
    SiPytest,
    SiGithubactions,
} from "react-icons/si";
import {
    TestTubes,
    Gauge,
    ShieldCheck,
    Bug,
    Cpu,
    Workflow,
    GitBranch,
    Terminal,
    Layers,
    Database,
    Sparkles,
    CheckCircle2,
} from "lucide-react";
import React from "react";

// Mapping skills to specific icons
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    // Testing & QA
    Pytest: SiPytest,
    "Regression Testing": TestTubes,
    "Boundary-Value Analysis": Gauge,
    "Code Coverage": ShieldCheck,
    "Defect Lifecycle & RCA": Bug,
    "SIL Simulation": Cpu,

    // DevOps & CI/CD
    "GitHub Actions": SiGithubactions,
    "Azure Pipelines": Workflow,
    Docker: SiDocker,
    AWS: SiAmazonwebservices,
    Git: SiGit,
    "CI/CD Automation": GitBranch,

    // Backend
    Python: SiPython,
    "Node.js": SiNodedotjs,
    Express: SiExpress,
    Django: SiDjango,
    "Django REST Framework": SiDjango,

    // Frontend
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    React: SiReact,
    "Next.js": SiNextdotjs,
    "Tailwind CSS": SiTailwindcss,

    // Databases & Cache
    PostgreSQL: SiPostgresql,
    Redis: SiRedis,
    MongoDB: SiMongodb,
    MySQL: SiMysql,
};

// Category styling metadata
const categoryMeta: {
    [key: string]: {
        icon: React.ComponentType<{ className?: string }>;
        badgeColor: string;
        borderGlow: string;
    };
} = {
    "Testing & QA Automation": {
        icon: TestTubes,
        badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        borderGlow: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    },
    "DevOps & CI/CD": {
        icon: Workflow,
        badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
        borderGlow: "hover:border-sky-500/50 hover:shadow-sky-500/10",
    },
    "Backend & Systems": {
        icon: Terminal,
        badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
        borderGlow: "hover:border-indigo-500/50 hover:shadow-indigo-500/10",
    },
    Frontend: {
        icon: Layers,
        badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
        borderGlow: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
    },
    "Databases & Cache": {
        icon: Database,
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        borderGlow: "hover:border-amber-500/50 hover:shadow-amber-500/10",
    },
};

export default function TechStack() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="skills">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-primary mb-4">
                        <Sparkles size={14} />
                        <span>Core Competencies &amp; Technical Expertise</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Skills &amp; Technology Stack
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
                        From mission-critical automated testing suites and CI/CD pipelines to fullstack web systems and distributed data stores.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techStack.map((category, index) => {
                        const meta = categoryMeta[category.category] || {
                            icon: Terminal,
                            badgeColor: "bg-primary/10 text-primary border-primary/30",
                            borderGlow: "hover:border-primary/50",
                        };
                        const CategoryIcon = meta.icon;

                        return (
                            <motion.div
                                key={category.category}
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-800/80 transition-all duration-300 shadow-lg ${meta.borderGlow} flex flex-col justify-between`}
                            >
                                <div>
                                    {/* Category Header */}
                                    <div className="flex items-center justify-between gap-3 mb-3">
                                        <div className="flex items-center gap-2.5">
                                            <div className="p-2 rounded-lg bg-slate-800/80 text-white">
                                                <CategoryIcon className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white">
                                                {category.category}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-slate-400 text-xs mb-5 line-clamp-2">
                                        {category.description}
                                    </p>

                                    {/* Skills Badges */}
                                    <div className="grid grid-cols-2 gap-2.5">
                                        {category.skills.map((skill) => {
                                            const Icon = iconMap[skill] || CheckCircle2;
                                            return (
                                                <motion.div
                                                    key={skill}
                                                    variants={item}
                                                    className="flex items-center gap-2.5 p-2.5 bg-slate-800/40 hover:bg-slate-800/90 rounded-xl border border-slate-800/60 hover:border-slate-700 transition-all text-slate-300 hover:text-white group"
                                                >
                                                    <Icon className="text-lg shrink-0 text-slate-400 group-hover:text-primary transition-colors" />
                                                    <span className="text-xs font-medium leading-tight">
                                                        {skill}
                                                    </span>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
