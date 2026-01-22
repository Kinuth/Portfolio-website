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
    SiGithub,
} from "react-icons/si";
import { Component } from "lucide-react"; // Fallbacks or category icons
import React from "react";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    React: SiReact,
    "Next.js": SiNextdotjs,
    "Tailwind CSS": SiTailwindcss,
    "Node.js": SiNodedotjs,
    Express: SiExpress,
    Python: SiPython,
    Django: SiDjango,
    "Django REST Framework": SiDjango, // Reuse Django
    PostgreSQL: SiPostgresql,
    MongoDB: SiMongodb,
    Redis: SiRedis,
    MySQL: SiMysql,
    Docker: SiDocker,
    AWS: SiAmazonwebservices,
    Git: SiGit,
    GitHub: SiGithub,
};

export default function TechStack() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-20 bg-slate-950" id="skills">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Technologies & Tools
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My preferred stack for building scalable and performant applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techStack.map((category) => (
                        <motion.div
                            key={category.category}
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-colors"
                        >
                            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill) => {
                                    const Icon = iconMap[skill] || Component;
                                    return (
                                        <motion.div
                                            key={skill}
                                            variants={item}
                                            className="flex flex-col items-center justify-center gap-2 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 hover:text-white transition-colors text-slate-400 group"
                                        >
                                            <Icon className="text-2xl group-hover:text-primary transition-colors" />
                                            <span className="text-xs font-medium text-center">
                                                {skill}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
