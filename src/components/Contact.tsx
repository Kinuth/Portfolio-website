"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/projects";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fallback handle submit (client-side only for demo)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: "", email: "", message: "" });
            alert("Message sent! (Simulation)");
        }, 1000);
    };

    return (
        <section className="py-20 bg-background" id="contact">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Have a project in mind or want to discuss the latest tech? I&apos;m always open to new opportunities and conversations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-white">Let&apos;s Connect</h3>
                        <p className="text-slate-400">
                            Feel free to reach out via email or connect with me on social media. I&apos;ll get back to you as soon as possible.
                        </p>

                        <div className="flex flex-col gap-6">
                            <a href={siteConfig.socials.email} className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-primary/10 transition-colors">
                                    <Mail className="group-hover:text-primary" size={24} />
                                </div>
                                <span className="text-lg">contact@ryankinuthia.com</span>
                            </a>
                            <a href={siteConfig.socials.linkedin} target="_blank" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-[#0077b5]/10 transition-colors">
                                    <Linkedin className="group-hover:text-[#0077b5]" size={24} />
                                </div>
                                <span className="text-lg">LinkedIn</span>
                            </a>
                            <a href={siteConfig.socials.github} target="_blank" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-white/10 transition-colors">
                                    <Github className="group-hover:text-white" size={24} />
                                </div>
                                <span className="text-lg">GitHub</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Your message..."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 hover:gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Sending..." : (
                                <>
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p className="mt-2 text-xs">Built with Next.js & Tailwind CSS</p>
        </footer>
    );
}
