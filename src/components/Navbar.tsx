import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "HOME" },
    { id: "stories", label: "STORIES" },
    { id: "books", label: "BOOKS / WORKS" },
    { id: "about", label: "THE AUTHOR" },
    { id: "contact", label: "INQUIRIES" },
  ];

  const handleNavClick = (id: string) => {
    onSectionChange(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-burgundy-950/95 py-4 border-b border-alabaster/10 backdrop-blur-md shadow-md">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          
          {/* Main Layout Container */}
          <div className="flex flex-row items-center justify-between gap-0">
            
            {/* Logo Container */}
            <div className="flex flex-col items-start text-left">
              <button
                onClick={() => handleNavClick("hero")}
                className="group flex flex-col items-start text-left cursor-none"
                data-cursor="HOME"
              >
                <span className="font-serif font-semibold tracking-[0.05em] text-alabaster transition-colors duration-300 group-hover:text-rose-cream text-xl md:text-2xl animate-none">
                  V SANJANA
                </span>
                
                <span className="font-mono text-rose-muted uppercase tracking-[0.3em] text-[7px] md:text-[8px] mt-0.5 animate-none">
                  Author
                </span>
              </button>
            </div>

            {/* Desktop Navigation Row */}
            <div className="flex items-center gap-10">
              <nav className="hidden items-center space-x-8 lg:space-x-12 md:flex">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`group relative py-1 font-sans text-xs font-medium tracking-[0.25em] transition-all duration-300 cursor-none ${
                      activeSection === item.id ? "text-alabaster" : "text-rose-cream/60 hover:text-alabaster"
                    }`}
                    data-cursor="GO"
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-alabaster transition-all duration-300 ${
                        activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                ))}
              </nav>

              {/* Extra CTA or contact link - align elegantly */}
              <button
                onClick={() => handleNavClick("contact")}
                className="hidden items-center space-x-1.5 border border-alabaster/20 px-4 py-2 font-mono text-[9px] tracking-widest text-alabaster hover:bg-alabaster hover:text-burgundy-950 transition-all duration-500 md:flex cursor-none"
                data-cursor="WRITE"
              >
                <span>COMMISSION</span>
                <ArrowUpRight size={11} />
              </button>
            </div>

            {/* Mobile Menu Toggle (Always in absolute top right for layout consistency) */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-alabaster focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 flex flex-col justify-between bg-burgundy-950 px-8 pt-36 pb-12 md:hidden"
          >
            <nav className="flex flex-col space-y-8">
              {navItems.map((item, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-serif text-3xl font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? "text-alabaster" : "text-rose-cream/55"
                  }`}
                >
                  <span className="mr-3 font-mono text-xs text-rose-muted">0{idx + 1}.</span>
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <div className="border-t border-alabaster/10 pt-8">
              <p className="font-mono text-[10px] tracking-widest text-rose-muted uppercase mb-4">
                REPRESENTED BY THE WHITING AGENCY
              </p>
              <div className="flex justify-between text-xs text-rose-cream/70">
                <span>NEW YORK</span>
                <span>•</span>
                <span>LONDON</span>
                <span>•</span>
                <span>TOKYO</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
