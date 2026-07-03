import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const dhruvTaraImg = "https://i.postimg.cc/dVWc4vB7/Whats-App-Image-2026-06-25-at-13-44-46.jpg";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom parallax scroll values
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textCardY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const shadowImageY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  
  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden px-6 pt-12 pb-8 md:px-12 lg:pt-16"
    >
      {/* Editorial Watermark Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-3 select-none">
        <h1 className="font-serif text-[24vw] font-bold text-alabaster/2 leading-none">
          SANJANA
        </h1>
      </div>

      {/* Main Asymmetric Collage Container */}
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-12 md:gap-4 lg:my-auto">
        
        {/* LEFT COLUMN: Large vertical portrait */}
        <motion.div 
          style={{ y: portraitY }}
          className="relative z-10 flex flex-col justify-center md:col-span-5 lg:col-span-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="group overflow-hidden rounded-sm border border-alabaster/10 shadow-2xl relative">
            <img 
              src="https://i.postimg.cc/4dRFzM02/sanjana-photo.jpg" 
              alt="V Sanjana Portrait" 
              referrerPolicy="no-referrer"
              className="h-[480px] w-full object-cover object-[center_20%] transition-all duration-700 group-hover:scale-105 md:h-[550px]"
            />
            {/* Metadata caption vertically styled inside border */}
            <div className="absolute bottom-4 left-4 bg-burgundy-950/80 px-3 py-1.5 backdrop-blur-sm border border-alabaster/5">
              <p className="font-mono text-[9px] tracking-[0.2em] text-rose-cream uppercase">
                PORTRAIT 01 // NY STUDIO
              </p>
            </div>
          </div>
        </motion.div>

        {/* CENTER COLUMN: Solid overlap text card */}
        <motion.div 
          style={{ y: textCardY }}
          className="relative z-20 flex flex-col justify-center md:col-span-7 md:-ml-8 lg:col-span-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="bg-burgundy-850 p-8 shadow-2xl border border-alabaster/5 md:p-12 lg:p-14 relative overflow-hidden">
            {/* Fine decorative lines */}
            <div className="absolute top-4 left-4 h-8 w-8 border-t border-l border-alabaster/10" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-alabaster/10" />
            
            <p className="font-mono text-[9px] tracking-[0.4em] text-rose-muted uppercase mb-4">
              WELCOME
            </p>
            
            <h2 className="font-serif text-3xl font-light leading-tight tracking-wide text-alabaster md:text-4xl lg:text-5.5xl">
              STORIES ARE A PLACE TO <span className="italic font-normal text-rose-cream">COME HOME TO</span>.
            </h2>
            
            <div className="mt-6 space-y-4 font-sans text-xs font-light leading-relaxed text-rose-cream/80">
              <p className="font-serif text-sm italic text-alabaster">
                Some books entertain.<br />
                Some books stay.
              </p>
              <p>
                I write stories that sit quietly beside you—making you laugh, ache, remember, and believe that even the smallest moments can carry extraordinary meaning.
              </p>
              <p className="font-serif italic text-rose-cream/90 text-sm border-l border-alabaster/20 pl-4 py-0.5 mt-4">
                If, somewhere within these pages, you find a piece of yourself...<br />
                then the story has found its home.
              </p>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <span className="h-[1px] w-12 bg-rose-muted/50" />
              <span className="font-serif text-xs tracking-wider text-rose-cream uppercase">V Sanjana // Author</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Secondary smaller contextual image */}
        <motion.div 
          style={{ y: shadowImageY }}
          className="relative z-10 flex flex-col justify-center items-center pb-12 md:col-span-12 md:flex md:flex-row lg:col-span-3 lg:flex-col lg:justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <div className="group w-full max-w-[220px] self-center overflow-hidden rounded-sm border border-alabaster/10 shadow-xl transition-all md:self-end lg:self-start">
            <img 
              src={dhruvTaraImg} 
              alt="Dhruv Tara Inspiration" 
              referrerPolicy="no-referrer"
              className="h-[280px] w-full object-cover transition-all duration-700 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80";
              }}
            />
            <div className="bg-burgundy-950 p-3 border-t border-alabaster/5">
              <p className="font-mono text-[8px] tracking-[0.15em] text-rose-muted uppercase">
                DHRUV TARA // FORTHCOMING
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER OF HERO: Scroll Indicator */}
      <div className="mx-auto flex w-full max-w-7xl items-end justify-between border-t border-alabaster/10 pt-6 mt-8">
        <div className="flex items-center space-x-3 text-rose-muted">
          <span className="font-mono text-[9px] tracking-widest uppercase">READING TIME</span>
          <span className="font-mono text-[9px] tracking-widest text-alabaster">EST. 4 MIN</span>
        </div>
        
        <button 
          onClick={() => {
            document.getElementById("books")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex flex-col items-center space-y-1 text-rose-cream hover:text-alabaster transition-colors duration-300 cursor-none"
          data-cursor="SCROLL"
        >
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase">SCROLL TO DISCOVER</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={12} className="text-rose-cream/80 group-hover:text-alabaster" />
          </motion.div>
        </button>

        <div className="hidden text-right font-mono text-[9px] tracking-widest text-rose-muted uppercase md:block">
          ISBN SUITE // EDITIONS 2021-2026
        </div>
      </div>
    </section>
  );
}
