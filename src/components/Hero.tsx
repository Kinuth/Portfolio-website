"use client";

import { siteConfig } from "@/data/projects";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden bg-gradient-to-b from-background to-slate-900 pt-20" id="hero">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            </div>

            <div className="z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Text Content */}
                <div className="space-y-6 text-center md:text-left order-2 md:order-1">
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
                        className="text-slate-400 text-xl md:text-2xl leading-relaxed"
                    >
                        {siteConfig.subHeadline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-8"
                    >
                        <Link
                            href={siteConfig.socials.github}
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

                {/* Profile Image / Dynamic Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative order-1 md:order-2 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        {/* Glowing ring/effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src={siteConfig.profilePic || "/profile.png"}
                                alt={siteConfig.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Badge (optional "Available for hire" or similar) */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-6 -right-6 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 shadow-lg flex items-center gap-2"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                            </span>
                            <span className="text-xs font-medium text-white">Open to Work</span>
                        </motion.div>
                    </div>
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
