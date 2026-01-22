"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/projects";

export default function About() {
    return (
        <section className="py-20 bg-slate-950" id="about">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-800"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
                    </div>

                    <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                        <p>
                            I&apos;m a <span className="text-primary font-medium">{siteConfig.title}</span> with a passion for building software that makes a difference. My journey has been driven by a curiosity to understand how things work and a desire to create efficient, scalable solutions.
                        </p>
                        <p>
                            I specialize in full-stack development, combining robust backend architecture with intuitive frontend interfaces. My philosophy centers on writing clean, maintainable code and solving real-world problems.
                        </p>
                        <p>
                            Beyond coding, I&apos;m deeply interested in <span className="text-accent font-medium">financial inclusion</span> and <span className="text-accent font-medium">digital connectivity</span>, believing that technology should be accessible and empowering for everyone.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
