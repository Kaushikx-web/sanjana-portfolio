import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShortStories from "./components/ShortStories";
import Ticker from "./components/Ticker";
import BookShowcase from "./components/BookShowcase";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Automatically update active nav state based on scroll intersection
  useEffect(() => {
    const sections = ["hero", "stories", "books", "about", "contact"];
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { threshold: 0.25 } // Trigger when 25% of the section is visible
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  const handleSectionNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-burgundy-900 text-rose-cream selection:bg-burgundy-700 selection:text-alabaster">
      {/* Background Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-15 mix-blend-overlay z-50" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" 
        }} 
      />

      {/* Luxury cursor experience */}
      <CustomCursor />

      {/* Floating subtle ambient red glow to enrich depth */}
      <div className="pointer-events-none fixed top-[-10%] left-[-10%] z-0 h-[600px] w-[600px] rounded-full bg-burgundy-800/20 blur-[140px]" />
      <div className="pointer-events-none fixed right-[-10%] bottom-[-10%] z-0 h-[700px] w-[700px] rounded-full bg-burgundy-950/40 blur-[160px]" />

      {/* Navigation */}
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Flow */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full"
      >
        {/* Section 1: Hero collage */}
        <Hero />

        {/* Short Stories Section */}
        <ShortStories />

        {/* Section 2: Accolades / Publishers Marquee */}
        <Ticker />

        {/* Section 4: Deep Book Showcase Labyrinths */}
        <BookShowcase />

        {/* Section 5: Biography & routine tabs */}
        <AboutSection />

        {/* Section 6: Inquiries & Brand footer */}
        <Footer />
      </motion.main>
    </div>
  );
}
