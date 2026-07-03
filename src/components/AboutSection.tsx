import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"bio" | "philosophy" | "routine">("bio");

  return (
    <section id="about" className="relative border-t border-alabaster/10 bg-burgundy-900 py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Grid: Portrait and Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="overflow-hidden rounded-sm border border-alabaster/10 shadow-2xl">
                <img 
                  src="https://i.postimg.cc/Pr09M2Pf/Whats-App-Image-2026-06-29-at-14-59-45.jpg" 
                  alt="V Sanjana Portrait" 
                  referrerPolicy="no-referrer"
                  className="h-[500px] w-full object-cover object-[center_25%] transition-all duration-700 group-hover:scale-105 md:h-[600px]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic biography, philosophy, routine */}
          <div className="flex flex-col justify-between lg:col-span-7 lg:pl-4">
            <div>
              <span className="font-mono text-[9px] tracking-[0.4em] text-rose-muted uppercase">
                A NEW AGE STORYTELLER
              </span>
              <h2 className="mt-3 font-serif text-4xl font-light text-alabaster tracking-wide md:text-5xl">
                ABOUT <span className="italic font-normal text-rose-cream">V SANJANA</span>
              </h2>

              {/* Subnavigation Tab Bar */}
              <div className="mt-8 flex border-b border-alabaster/10 space-x-6 md:space-x-8">
                {(["bio", "philosophy", "routine"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 font-mono text-[10px] tracking-widest uppercase transition-colors relative cursor-none ${
                      activeTab === tab ? "text-alabaster" : "text-rose-cream/50 hover:text-alabaster"
                    }`}
                    data-cursor="TAB"
                  >
                    {tab === "bio" ? "BIOGRAPHY" : tab === "philosophy" ? "PHILOSOPHY" : "ROUTINE"}
                    {activeTab === tab && (
                      <motion.div 
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-alabaster"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="mt-8">
                <AnimatePresence mode="wait">
                  {activeTab === "bio" && (
                    <motion.div
                      key="bio-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4 font-sans text-xs font-light leading-relaxed text-rose-cream/80"
                    >
                      <p>
                        I am v Sanjana a new age storyteller with an old soul, drawn to the emotions that often go unnoticed. My stories explore love, longing, nostalgia, family, and the quiet moments that leave the deepest marks on our lives.
                      </p>
                      <p>
                        I believe that extraordinary stories are hidden within ordinary lives. A familiar street, a forgotten promise, the taste of a homemade recipe, or a chance reunion can become the beginning of something unforgettable. Through my writing, I strive to capture these emotions with honesty, warmth, and authenticity.
                      </p>
                      <p>
                        Over the years, I have written several short stories, each reflecting my fascination with human connections and the memories that shape who we become. My storytelling is deeply inspired by everyday life, where simple moments often carry extraordinary meaning.
                      </p>
                      <p>
                        I am currently preparing to publish my debut novel, <span className="text-alabaster font-normal italic">Dhruv Tara</span>, a story born from the belief that love is not always loud. Sometimes, it patiently waits in the spaces between time, memory, and destiny.
                      </p>
                      <p>
                        This is only the beginning of my journey as an author, and I hope my stories become a place where readers find comfort, hope, and a piece of themselves.
                      </p>
                      <p className="font-serif italic text-rose-cream pt-2">
                        Welcome to my world of stories.
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "philosophy" && (
                    <motion.div
                      key="philosophy-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4 font-sans text-xs font-light leading-relaxed text-rose-cream/80"
                    >
                      <p className="font-serif italic text-alabaster text-sm border-l border-alabaster/20 pl-4 py-1">
                        Stories have always been a part of who I am.
                      </p>
                      <p>
                        As a child, I loved listening to stories. I was endlessly curious about the people around me, wondering about the lives they lived, the battles they fought in silence, and the moments that shaped them. Every stranger, every conversation, every fleeting glance felt like the beginning of a story.
                      </p>
                      <p>
                        Over time, that curiosity became a passion. I realized I didn’t just want to hear stories. I wanted to write them. Not because they were perfect, but because they felt real. They carried the emotions, flaws, hopes, and heartbreaks that make us human.
                      </p>
                      <p>
                        I write the stories I always wished I could read. Stories that make you feel, question, dream, and sometimes simply breathe.
                      </p>
                      <p>
                        To me, there is nothing wrong with escaping reality for a little while. In fact, I believe stories are one of the safest and most beautiful places to do exactly that. They remind us that while we may step away from our own world for a few hours, we often return to it with a fuller heart, a different perspective, or the quiet comfort of knowing someone else has felt what we feel.
                      </p>
                      <p>
                        If my words can become that place for even one reader, a place to laugh, cry, heal, or simply escape, then I have written the story I was meant to tell.
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "routine" && (
                    <motion.div
                      key="routine-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4 font-sans text-xs font-light leading-relaxed text-rose-cream/80"
                    >
                      <p className="font-serif italic text-alabaster text-sm border-l border-alabaster/20 pl-4 py-1">
                        Finding extraordinary meaning in quiet, everyday disciplines.
                      </p>
                      <p>
                        My writing routine is not about grand gestures; it is anchored in the simple rhythms of everyday life. I start my mornings early, when the world is still quiet and the boundary between dreams and reality is beautifully blurred. With a warm cup of tea and a blank notebook, I capture the initial sparks of emotion—the unfiltered thoughts before the day gets loud.
                      </p>
                      <p>
                        During the day, I dedicate time to conscious observation. I take walks along familiar streets, sit in quiet corners of local cafes, and simply watch the world go by. A forgotten smile, a gentle gesture between strangers, or a nostalgic scent can inspire an entire narrative.
                      </p>
                      <p>
                        In the quiet hours of the evening, I return to my desk to refine these raw moments. This is where the magic of editing happens—shaping raw thoughts into authentic prose, making sure every sentence breathes with genuine warmth and comfort.
                      </p>
                      <p>
                        I write consistently because stories need patience. Just like the unchanging light of Dhruv Tara, some narratives take time to find their perfect, inevitable orbit.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
