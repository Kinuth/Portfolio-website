"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProjects() {
    return (
        <section className="py-20 bg-background" id="projects">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A selection of projects that demonstrate my ability to solve complex problems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col hover:border-primary/50 transition-colors group"
                        >
                            {/* Thumbnail Image */}
                            <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                                {project.img ? (
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-slate-700">
                                        <Code2 size={48} />
                                    </div>
                                )}

                                {/* Overlay with links */}
                                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {project.links.code && (
                                        <Link
                                            href={project.links.code}
                                            target="_blank"
                                            className="p-3 bg-slate-800 text-white rounded-full hover:bg-white hover:text-slate-900 transition-colors"
                                            title="View Code"
                                        >
                                            <Github size={20} />
                                        </Link>
                                    )}
                                    {(project.links.demo || (project.links as any).view) && ( // Handle both demo and view keys
                                        <Link
                                            href={project.links.demo || (project.links as any).view}
                                            target="_blank"
                                            className="p-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors"
                                            title="Live Demo"
                                        >
                                            <ExternalLink size={20} />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
