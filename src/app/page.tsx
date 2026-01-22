"use client";

import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
