"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/projects";
import { ShieldCheck, Cpu, Code2, Sparkles } from "lucide-react";

export default function About() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="about">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-900/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-800 shadow-xl"
                >
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-primary mb-3">
                            <Sparkles size={14} />
                            <span>Engineering Philosophy</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
                    </div>

                    <div className="space-y-6 text-slate-300 leading-relaxed text-base md:text-lg">
                        <p>
                            I&apos;m a <span className="text-primary font-semibold">{siteConfig.title}</span> dedicated to building scalable digital solutions and high-assurance software systems. My work combines fullstack web development with deep software quality engineering.
                        </p>
                        <p>
                            Whether architecting high-throughput backend APIs, building responsive frontend experiences, or engineering automated regression testing harnesses with 100% branch coverage, I focus on system reliability, clean domain models, and comprehensive CI/CD automation.
                        </p>
                        <p>
                            Beyond technical architecture, I believe technology should empower people and solve critical operational challenges — from <span className="text-emerald-400 font-medium">financial inclusion tools</span> to <span className="text-sky-400 font-medium">mission-critical systems verification</span>.
                        </p>
                    </div>

                    {/* Quick Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-800/80">
                        <div className="flex items-center gap-3 p-3.5 bg-slate-800/40 rounded-xl border border-slate-800">
                            <Code2 className="text-primary shrink-0" size={20} />
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Fullstack Systems</h4>
                                <p className="text-[11px] text-slate-400">Next.js, Python, Django, Node</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3.5 bg-slate-800/40 rounded-xl border border-slate-800">
                            <ShieldCheck className="text-emerald-400 shrink-0" size={20} />
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Test Automation</h4>
                                <p className="text-[11px] text-slate-400">Pytest, Regression, BVA, RCA</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3.5 bg-slate-800/40 rounded-xl border border-slate-800">
                            <Cpu className="text-purple-400 shrink-0" size={20} />
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider">CI/CD &amp; DevOps</h4>
                                <p className="text-[11px] text-slate-400">GitHub Actions, Azure, Docker</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
