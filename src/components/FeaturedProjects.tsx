"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProjects() {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="projects">
            {/* Ambient Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-emerald-400 mb-4">
                        <CheckCircle2 size={14} />
                        <span>Verified Implementations &amp; Real-World Systems</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Featured Engineering Projects
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
                        Selected works demonstrating automated regression testing, robust backend architectures, and high-performance applications.
                    </p>
                </motion.div>

                {/* Projects Grid: 2 columns for optimal content density and readability */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/5"
                        >
                            {/* Thumbnail Media */}
                            <div className="relative h-56 w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                                {project.img ? (
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-slate-700">
                                        <Code2 size={48} />
                                    </div>
                                )}

                                {/* Overlay Badges / Links */}
                                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {project.links.code && (
                                        <Link
                                            href={project.links.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-white text-white hover:text-slate-950 font-medium text-xs rounded-full transition-colors shadow-lg"
                                        >
                                            <Github size={16} />
                                            <span>Source Code</span>
                                        </Link>
                                    )}
                                    {(project.links.demo || project.links.view) && (
                                        <Link
                                            href={(project.links.demo || project.links.view)!}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-hover text-white font-medium text-xs rounded-full transition-colors shadow-lg"
                                        >
                                            <ExternalLink size={16} />
                                            <span>Live Demo</span>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Content Block */}
                            <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                                <div>
                                    {/* Key Metrics / Highlights Header */}
                                    {project.metrics && (
                                        <div className="flex flex-wrap items-center gap-2 mb-3.5">
                                            {project.metrics.tests && (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold">
                                                    <CheckCircle2 size={12} />
                                                    {project.metrics.tests}
                                                </span>
                                            )}
                                            {project.metrics.coverage && (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[11px] font-semibold">
                                                    <ShieldCheck size={12} />
                                                    {project.metrics.coverage}
                                                </span>
                                            )}
                                            {project.metrics.ci && (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[11px] font-semibold">
                                                    <Cpu size={12} />
                                                    {project.metrics.ci}
                                                </span>
                                            )}
                                            {project.metrics.highlights && (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 text-[11px] font-medium">
                                                    {project.metrics.highlights}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2.5 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 bg-slate-800/80 text-slate-300 text-xs font-medium rounded-lg border border-slate-700/60"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Direct Action Footer */}
                                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                                        {project.links.code ? (
                                            <Link
                                                href={project.links.code}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-primary transition-colors"
                                            >
                                                <Github size={15} />
                                                <span>GitHub Repository</span>
                                            </Link>
                                        ) : <div />}

                                        {(project.links.demo || project.links.view) && (
                                            <Link
                                                href={(project.links.demo || project.links.view)!}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover transition-colors"
                                            >
                                                <span>Open Live Demo</span>
                                                <ExternalLink size={13} />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
