"use client";

import { siteConfig } from "@/data/projects";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-gradient-to-b from-background to-slate-900">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            </div>

            <div className="z-10 max-w-4xl mx-auto space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-primary font-medium tracking-wide text-lg mb-2">
                        Hi, I&apos;m {siteConfig.name}
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
                        {siteConfig.headline}
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
                >
                    {siteConfig.subHeadline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-4 pt-8"
                >
                    <Link
                        href={siteConfig.socials.github} // Use specific links if needed, but the object has generic keys
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors border border-slate-700"
                    >
                        <Github size={20} />
                        <span>GitHub</span>
                    </Link>
                    <Link
                        href={siteConfig.socials.linkedin}
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#005582] text-white rounded-full transition-colors"
                    >
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                    </Link>
                    <Link
                        href="#contact"
                        className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-full transition-colors font-medium"
                    >
                        <Mail size={20} />
                        <span>Contact Me</span>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500"
            >
                <ArrowRight className="rotate-90" size={24} />
            </motion.div>
        </section>
    );
}
