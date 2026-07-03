import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, X, Sparkles, Feather } from "lucide-react";

interface Story {
  id: string;
  title: string;
  subtitle: string;
  length: string;
  excerpt: string;
  content: string;
  atmosphere: string;
  image: string;
}

const STORIES: Story[] = [
  {
    id: "drumstick-pickle",
    title: "DRUMSTICK PICKLE",
    subtitle: "A Memoir of Kadapa Summer Holidays",
    length: "5 MIN READ",
    excerpt: "Sometimes love doesn’t need grand confessions. Sometimes, it just needs one spoon of drumstick pickle… to bring it all back.",
    content: `If you grew up in a small town in Andhra during the early 2000s, you’ll know what I mean when I say… summer holidays were magic.

I was a school-going girl in Kadapa. My dad worked for the government, and most of his colleagues’ kids studied in the same school as me.

Every weekend, we had these get-togethers — club parties, music, food, running around in fancy frocks, and just being wild little humans.

And that’s where I met Vikram.

Vikram was two years older than me. He was what you’d call a stud even back then — composed, respectful, with that charm that made aunties say, "Aayana chala decent ra babu!"

And me? Total tomboy. Jeans, scraped knees, full volume, and zero filter. Naturally, I picked fights with him every time we met. Over cricket rules, chairs at the party, who got more ice cream… you name it.

But there was one thing I couldn’t fight — his mom’s drumstick pickle.

Oh my god, that pickle! Tangy, spicy, with drumsticks so soft they melted like butter.

I once sneaked into their kitchen just to steal some when no one was watching. Vikram caught me red-handed and just smirked, "Next time, just ask, Nisha."

And from then on, every time we met, there’d be a little box of that pickle — waiting just for me.

But life isn’t all mangoes and pickles, right?

One day in 2007, my dad got transferred. We had to move.

And of course, right before leaving, I had the biggest fight with Vikram. Over something silly though, but I took it so personally. He came to our house while we were leaving and spotted the amazing bike collection I had, and picked up my favorite one among them. He said, "I'm taking it home." I mean, dude, your dad is my dad's boss, you can literally buy a real one, why do you need my toy? He took it home and I was so mad at him—this bastard, I would never talk to him again in my life!

We didn’t say goodbye properly. I left Kadapa. And that was it.

Fifteen years passed. I grew up. Moved cities. Started studying.

And I was so bored with life—like, every one of my friends was having a boyfriend, and I was feeling FOMO, so I commanded all my friends to find a right guy for me.

One day, a friend who got into med school invited me to a get-together in Hyderabad. "There’s this doctor guy—third-year med student. You’ll vibe well, come!"

I walked in, and there he was. Tall, same composed vibe, smile that made you pause — Vikram.

But I didn’t recognize him. Just another new face to me.

But he… he recognized me instantly. Same loud laugh. Same 'I-don't-care' energy. He didn’t tell me who he was. He just… listened, smiled, kept it casual.

Somewhere inside, he was probably thinking, "She forgot me? After all those fights and the pickle thefts?!" But he let it go. Took it slow.

At the end of the evening, someone passed around a lunch box of homemade food. I took a bite… and froze.

That taste. That exact, spicy, nostalgic taste. Drumstick.

I looked up slowly, eyes wide.

He smiled gently and said, "My mom still makes it… the same way."

Boom. Memory unlocked. Kadapa. Club parties. Fights. The boy I never said goodbye to.

It was him.

I looked at him. He smiled like he’d been waiting all these years for me to remember.

I laughed. "Where is my bike, huh?"

He nodded. "Safe in my room..."

And just like that…

Sometimes love doesn’t need grand confessions. Sometimes, it just needs one spoon of drumstick pickle… to bring it all back.`,
    atmosphere: "Spicy & Nostalgic",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "blue-line-metro",
    title: "BLUE LINE METRO",
    subtitle: "A Melancholy Duet on the Transit of Desires",
    length: "7 MIN READ",
    excerpt: "Morning in Rahul’s apartment moved with disciplined efficiency... but all she gets is a thank you. Then, she stepped into the Blue Line Metro.",
    content: `Morning in Rahul’s apartment moved with disciplined efficiency.

Krishnaa woke before the alarm. Coffee first. Then the soft knock on her mother-in-law’s door. She adjusted pillows, massaged oil into thinning hair, fed her medicine with the patience of someone who believed care was a language.

“You are a blessing,” her mother-in-law would say.

Krishnaa smiled. She wore that smile like a neatly ironed saree. Without crease.

Rahul was already scanning headlines on his phone, sleeves rolled with corporate confidence. He was steady, sensible, well-arranged. The kind of man who built life like a spreadsheet. No surprises. No chaos. No cracks visible from the outside.

He provided generously. He was never cruel. He simply loved being practical.

“Lunch packed?” he would ask.

“Yes.”

“Thanks.”
"Thanks"—that's it. Krishnaa loved serving her family; all in return she wanted was love, but all she gets is a thank you.

That word hovered.
She looked down with a disappointment but soon realised she was getting late to office. Soon she wore a chocolate brown mul mul saree with a matching checked blouse and reached the Blue Line Metro, which sliced through the city, metallic and indifferent.

Yudisthir stood near the door, guitar case resting against his back. He looked like someone halfway between triumph and surrender. Broad-shouldered. Restless. Carrying the stubborn faith of a man who had heard “almost” too many times.

That morning, she entered.

She did not walk in. She arrived.

Her skin held the warmth of dusk. Not pale. Not loud. Just deep and luminous in its own register. Her eyes were long, fluid, shaped like they understood patience. Not round innocence. Not sharp suspicion. Something tidal.

He noticed their color when light caught them. Not quite brown. Not quite amber. River water at sunset. Hard to name. Impossible to ignore.

Her hair fell in a smooth brown-black cascade down her back, disciplined yet alive. She wasn’t fragile thin. There was softness at her waist, a gentle curve at her stomach that made her silhouette honest. Real. The kind of curve sarees loved.

She adjusted her pallu, glanced at her reflection in the window.

And then she saw him looking.

She smiled.

Not flirtation. Not invitation.

Kindness.

It unsettled him.

Why would a stranger gift him sunlight?

The next day, she did it again.

And again.

He began to wait for it.

She always noticed him for such rugged personality. What made his eyes look so depressive? She gave him a smile to cheer him up a bit. She didn’t know why she did that, but she just did.

Weeks later, at home, Krishnaa walked into the bedroom to ask Rahul something.

She stopped.

On his phone screen was a woman with porcelain skin and pink lips. He zoomed in, not with guilt, but with quiet admiration. His eyes softened in a way she had never witnessed.

There it was.

The look she had been craving.

He didn’t notice her in the doorway.

It wasn’t betrayal. It was preference.

She realized something painful and precise.

He had given her stability. Respect. Comfort.

But not desire.

She went to bed that night with her heart rearranging itself.

She woke up the next day but it was not same. She lost her morning cheer, she kind of lost herself.

But, she still boarded the metro.

She still saw Yudisthir.

And she still smiled.

But this time, it wasn’t to cheer him.

It was to protect herself.

He noticed the difference. The smile reached her lips, but not her eyes.

Still, he took it. Stored it.

Two days later, she didn’t smile at all.

She sat by the window, eyes glassy, staring at her reflection like it belonged to someone else. The metro’s hum felt louder.

Yudisthir watched from across the compartment.

The kindness was gone.

In its place was something raw.

He stood. Walked toward her. Sat beside her.

He was all contained energy. Rustic. Unsettled. A man who had tasted rejection but refused to swallow defeat. His jaw tight, his posture straight, his eyes deeply observant.

He didn’t ask what happened.

He reached for her hand.

She froze.

Then allowed it.

When she finally looked at him, tears slipped without permission.

For the first time in years, she saw concern directed at her. Not politeness. Not evaluation.

Concern.

The metro roared through darkness as if escorting them into confession.

They got down together.

At a roadside stall, steam rose between them like fragile truce.

They drank quietly.

No interrogation. No advice.

Just presence.

She felt something loosen inside her chest.

After that day, they kept meeting.

Conversations came gradually.

She spoke of feeling “adequate” but never adored. Of being managed, not cherished. Of watching her husband admire someone else’s softness.

He spoke of audition rooms. Of producers who said, “You’re good, but...” Of friends who had already settled while he still hovered between dreams and deadlines.

“I know I’ll make it,” he once said, voice steady. “I just don’t know when.”

They were both tired of being almost.

***

One evening, Krishnaa asked Rahul directly.

“Do you like someone else?”

He didn’t explode. He didn’t deny.

He exhaled.

“I never cheated. I tried to love this. I tried to want this. But sometimes I feel like I’m playing a role I thought I should want.”

For the first time, they spoke without performing decency.

She nodded slowly.

“I think we should separate. Respectfully. If peace lives somewhere else, we should find it.”

Rahul nodded and he gave her a thanks-for-understanding look.

No courtroom drama. No shattered plates.

Just two adults admitting misalignment.

***

After.

Divorce felt quieter than marriage.

On the platform, Yudisthir stood before her.

“If you’re happy with me,” he said carefully, “we can build something. Slowly. Only if you want.”

She stepped closer.

Instead of answering, she cupped his face and kissed him.

It was not frantic. Not rebellious.

It was deliberate.

A kiss chosen.

When she pulled away, she whispered, “I am choosing myself. If we build something, it will be because we are whole. Not because we are lonely.”

They did not rush into marriage.

They became anchors.

She attended his gigs. He walked her home.

Sometimes on the Blue Line Metro, they still stood side by side.

The city rushed. The train moved.

But Krishnaa was no longer in transit.

She had stopped trying to be enough.

She simply was a woman.`,
    atmosphere: "Transit of Desires",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
  }
];

// Helper to dynamically paginate a story's content into beautiful book pages
const splitContentIntoPages = (content: string): string[] => {
  const paragraphs = content.split(/\n\s*\n/);
  const pages: string[] = [];
  let currentPageParagraphs: string[] = [];
  let currentWordCount = 0;

  paragraphs.forEach((p) => {
    const trimmed = p.trim();
    if (!trimmed) return;
    
    // Split into words to estimate space
    const words = trimmed.split(/\s+/).length;

    // Treat divider lines as a point to start a new page
    if (trimmed === "***" || trimmed === "---" || trimmed === "Book Close") {
      if (currentPageParagraphs.length > 0) {
        pages.push(currentPageParagraphs.join("\n\n"));
        currentPageParagraphs = [];
        currentWordCount = 0;
      }
      return;
    }

    // Let's page-break if we hit a substantial length or paragraph limit
    if (currentPageParagraphs.length > 0 && (currentWordCount + words > 160 || currentPageParagraphs.length >= 3)) {
      pages.push(currentPageParagraphs.join("\n\n"));
      currentPageParagraphs = [trimmed];
      currentWordCount = words;
    } else {
      currentPageParagraphs.push(trimmed);
      currentWordCount += words;
    }
  });

  if (currentPageParagraphs.length > 0) {
    pages.push(currentPageParagraphs.join("\n\n"));
  }

  return pages;
};

const pageVariants = {
  initial: (direction: number) => ({
    rotateY: direction > 0 ? 80 : -80,
    opacity: 0,
    transformOrigin: "left center",
  }),
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -80 : 80,
    opacity: 0,
    transformOrigin: "left center",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function ShortStories() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const handleSelectStory = (story: Story) => {
    setSelectedStory(story);
    setCurrentPage(0);
    setDirection(0);
    setIsBookOpen(false);
    setIsClosing(false);
    // Smooth delay before swinging open
    setTimeout(() => {
      setIsBookOpen(true);
    }, 300);
  };

  const handleCloseStory = () => {
    setIsClosing(true);
    setIsBookOpen(false);
    setTimeout(() => {
      setSelectedStory(null);
      setIsClosing(false);
      setCurrentPage(0);
      setDirection(0);
    }, 700); // Wait for the book close cover animation
  };

  const handleNextPage = (pagesLength: number) => {
    if (currentPage < pagesLength - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const pages = selectedStory ? splitContentIntoPages(selectedStory.content) : [];

  return (
    <section id="stories" className="relative border-t border-alabaster/10 bg-burgundy-950 py-24 px-6 md:px-12">
      {/* Decorative vertical lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-alabaster/5 hidden md:block" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="font-mono text-[9px] tracking-[0.4em] text-rose-muted uppercase">
            EPISODIC FICTION
          </span>
          <h2 className="mt-3 font-serif text-3xl font-light text-alabaster tracking-wide md:text-5xl">
            SHORT <span className="italic font-normal text-rose-cream">STORIES</span>
          </h2>
          <p className="mt-4 max-w-md font-sans text-xs font-light leading-relaxed text-rose-cream/60">
            Micro-narratives exploring atmospheric suspense, memory loops, and spatial mysteries. Designed as modular literary appetizers.
          </p>
          <div className="mt-6 h-[1px] w-12 bg-alabaster/20" />
        </div>

        {/* Two Columns Grid for Two Sample Stories */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 max-w-5xl mx-auto">
          {STORIES.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.15 }}
              className="group flex flex-col justify-between border border-alabaster/5 bg-burgundy-900/10 p-8 hover:border-alabaster/10 hover:bg-burgundy-900/30 transition-all duration-500 rounded-sm cursor-none"
              onClick={() => handleSelectStory(story)}
              data-cursor="READ"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-rose-muted">
                    <Feather size={10} className="text-rose-cream/50" />
                    <span className="font-mono text-[9px] tracking-widest uppercase">{story.length}</span>
                  </div>
                  <span className="font-mono text-[8px] tracking-widest text-rose-muted uppercase border border-rose-muted/20 px-2 py-0.5">
                    {story.atmosphere}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl font-light text-alabaster group-hover:text-rose-cream transition-colors duration-300 tracking-wide">
                  {story.title}
                </h3>
                
                <p className="mt-1 font-serif text-xs italic text-rose-cream/70">
                  {story.subtitle}
                </p>

                <div className="my-5 h-[1px] bg-alabaster/10" />

                <p className="font-sans text-xs font-light leading-relaxed text-rose-cream/70 line-clamp-3">
                  {story.excerpt}
                </p>
              </div>

              {/* Action Button at bottom */}
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-alabaster/5">
                <span className="font-mono text-[9px] tracking-widest text-rose-muted">EDITION I</span>
                <span className="flex items-center space-x-1.5 font-mono text-[10px] tracking-widest text-alabaster group-hover:text-rose-cream transition-colors">
                  <span>UNFOLD STORY</span>
                  <ChevronRight size={12} className="text-rose-muted transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* IMMERSIVE STORY READER OVERLAY WITH 3D BOOK OPENING ANIMATION */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-burgundy-950/98 p-4 backdrop-blur-md md:p-8"
          >
            {/* Background click to close */}
            <div 
              className="absolute inset-0 cursor-none" 
              onClick={handleCloseStory} 
              data-cursor="CLOSE"
            />

            {/* 3D Perspective Container */}
            <div 
              className="relative z-10 flex h-full max-h-[85vh] w-full max-w-4xl items-center justify-center pointer-events-none"
              style={{ perspective: "2500px" }}
            >
              
              {/* Main Book Spread */}
              <motion.div
                initial={{ scale: 0.92, y: 30, rotateX: 5 }}
                animate={{ scale: 1, y: 0, rotateX: 0 }}
                exit={{ scale: 0.92, y: 30, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                className="relative flex h-full w-full flex-col md:flex-row bg-[#FAF6EE] text-burgundy-950 shadow-2xl rounded-sm overflow-hidden border border-alabaster/15 pointer-events-auto"
              >
                
                {/* 3D BOOK COVER LAYER (Only on Desktop Spread) */}
                <motion.div
                  initial={{ rotateY: 0, zIndex: 30 }}
                  animate={{ 
                    rotateY: isBookOpen ? -145 : 0,
                    opacity: isBookOpen ? [1, 1, 0.8, 0] : 1,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 80, 
                    damping: 18,
                    opacity: { duration: 0.6, delay: 0.25 }
                  }}
                  className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-br from-burgundy-900 to-burgundy-950 rounded-sm origin-left border-l border-alabaster/10 shadow-2xl pointer-events-none hidden md:flex flex-col justify-between p-12 text-[#FAF6EE]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Outer Gold Foiling Details */}
                  <div className="absolute inset-4 border border-amber-500/10 rounded-[1px]" />
                  <div className="absolute inset-5 border border-amber-500/20 rounded-[1px]" />
                  
                  <div className="text-center mt-6">
                    <span className="font-mono text-[8px] tracking-[0.5em] text-amber-200/40 uppercase">EDITION I</span>
                  </div>

                  <div className="my-auto text-center px-4">
                    <Feather className="mx-auto text-amber-200/20 mb-5 h-8 w-8" />
                    <h3 className="font-serif text-3xl font-light text-amber-100 tracking-wider uppercase leading-snug">
                      {selectedStory.title}
                    </h3>
                    <p className="mt-2 font-serif text-xs italic text-amber-200/50">
                      {selectedStory.subtitle}
                    </p>
                  </div>

                  <div className="text-center mb-6">
                    <p className="font-mono text-[9px] tracking-[0.3em] text-amber-200/50 uppercase">V. SANJANA</p>
                  </div>
                </motion.div>

                {/* 1. LEFT COLUMN: BOOK INTRO / TITLE PAGE (Desktop only) */}
                <div className="hidden md:flex md:w-1/2 h-full flex-col justify-between border-r border-burgundy-950/10 p-12 bg-gradient-to-b from-[#FAF6EE] to-[#F3ECE0] relative shadow-inner shrink-0 select-text">
                  <div>
                    {/* Header meta */}
                    <div className="flex items-center justify-between border-b border-burgundy-950/10 pb-4">
                      <span className="font-mono text-[8px] tracking-[0.25em] text-burgundy-950/40 uppercase">V SANJANA PORTFOLIO</span>
                      <span className="font-mono text-[8px] tracking-[0.25em] text-burgundy-950/40 uppercase">{selectedStory.length}</span>
                    </div>

                    {/* Book Title Title-page style */}
                    <div className="mt-14 space-y-2">
                      <span className="font-mono text-[8px] tracking-[0.3em] text-rose-muted uppercase">
                        ATMOSPHERE: {selectedStory.atmosphere}
                      </span>
                      <h2 className="font-serif text-3xl font-light text-burgundy-950 tracking-wide uppercase leading-tight">
                        {selectedStory.title}
                      </h2>
                      <p className="font-serif text-sm italic text-burgundy-950/70">
                        {selectedStory.subtitle}
                      </p>
                    </div>

                    {/* Excerpt with large dropcap styled feel */}
                    <div className="mt-10 border-l-2 border-rose-muted/40 pl-6">
                      <p className="font-serif text-sm italic leading-relaxed text-burgundy-950/80">
                        “{selectedStory.excerpt}”
                      </p>
                    </div>
                  </div>

                  {/* Aesthetic signature / footer */}
                  <div className="border-t border-burgundy-950/5 pt-6 flex items-center justify-between">
                    <span className="font-mono text-[8px] tracking-widest text-burgundy-950/40">EPISODIC RELEASE</span>
                    <Sparkles size={11} className="text-rose-muted/30" />
                  </div>
                </div>

                {/* 2. RIGHT COLUMN / MAIN BODY: THE ACTUAL PROSE STORY */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-between p-8 md:p-12 bg-[#FAF6EE] relative shadow-inner select-text overflow-hidden" style={{ perspective: "1500px" }}>
                  
                  {/* Close button for entire reader */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 z-40">
                    <button
                      onClick={handleCloseStory}
                      className="bg-burgundy-950 p-2 text-alabaster hover:bg-rose-muted hover:text-white transition-all rounded-full border border-alabaster/10 cursor-none flex items-center justify-center shadow-md shrink-0"
                      data-cursor="CLOSE"
                      aria-label="Close story"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  {/* Floating Page-Turn Clicking Areas (Desktop Only) */}
                  {currentPage > 0 && (
                    <button
                      onClick={handlePrevPage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#FAF6EE]/80 hover:bg-burgundy-950 hover:text-white text-burgundy-950 p-2 rounded-full border border-burgundy-950/10 transition-all cursor-none shadow-md hidden md:flex items-center justify-center z-30"
                      data-cursor="PREV"
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={16} />
                    </button>
                  )}
                  {currentPage < pages.length - 1 && (
                    <button
                      onClick={() => handleNextPage(pages.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#FAF6EE]/80 hover:bg-burgundy-950 hover:text-white text-burgundy-950 p-2 rounded-full border border-burgundy-950/10 transition-all cursor-none shadow-md hidden md:flex items-center justify-center z-30"
                      data-cursor="NEXT"
                      aria-label="Next page"
                    >
                      <ChevronRight size={16} />
                    </button>
                  )}

                  {/* Story Prose Page Container with 3D Page Turn Animation */}
                  <div className="flex-1 flex flex-col justify-between relative mt-4 md:mt-8 select-text overflow-hidden">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                      <motion.div
                        key={currentPage}
                        custom={direction}
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute inset-0 flex flex-col justify-start pr-1 md:pr-4 overflow-y-auto scrollbar-thin scrollbar-thumb-burgundy-950/10 hover:scrollbar-thumb-burgundy-950/20 scrollbar-track-transparent"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        {/* Mobile header (only on page 0 and on mobile) */}
                        {currentPage === 0 && (
                          <div className="block md:hidden mb-6 border-b border-burgundy-950/10 pb-4">
                            <span className="font-mono text-[8px] tracking-[0.25em] text-rose-muted uppercase">
                              {selectedStory.length} • {selectedStory.atmosphere}
                            </span>
                            <h2 className="mt-2 font-serif text-2xl font-light text-burgundy-950 tracking-wide uppercase">
                              {selectedStory.title}
                            </h2>
                            <p className="font-serif text-xs italic text-burgundy-950/60 mt-1">
                              {selectedStory.subtitle}
                            </p>
                            <p className="mt-4 font-serif text-xs italic leading-relaxed text-burgundy-950/80 border-l border-rose-muted/40 pl-4">
                              {selectedStory.excerpt}
                            </p>
                          </div>
                        )}

                        {/* Main Page Story Content */}
                        <div className="font-serif text-sm leading-[1.8] text-burgundy-950/90 space-y-6 whitespace-pre-line md:text-sm antialiased md:tracking-wide">
                          {pages[currentPage]}
                        </div>

                        {/* Atmospheric divider (Only on final page) */}
                        {currentPage === pages.length - 1 && (
                          <div className="mt-auto pt-10 pb-6">
                            <div className="my-6 flex justify-center items-center space-x-4">
                              <span className="h-[1px] w-8 bg-burgundy-950/10" />
                              <Sparkles size={11} className="text-rose-muted/30 animate-pulse" />
                              <span className="h-[1px] w-8 bg-burgundy-950/10" />
                            </div>

                            <p className="text-center font-serif text-xs italic text-burgundy-950/40">
                              — Finis —
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Page bottom control buttons */}
                  <div className="mt-6 border-t border-burgundy-950/10 pt-4 flex items-center justify-between shrink-0">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 0}
                      className={`font-mono text-[9px] tracking-widest border border-burgundy-950/20 px-3 py-1 hover:bg-burgundy-950 hover:text-white transition-colors cursor-none rounded-sm shrink-0 ${
                        currentPage === 0 ? "opacity-30 cursor-not-allowed pointer-events-none" : ""
                      }`}
                      data-cursor="PREV"
                    >
                      PREV PAGE
                    </button>

                    <span className="font-mono text-[9px] tracking-widest text-burgundy-950/50 uppercase select-none">
                      PAGE {currentPage + 1} OF {pages.length}
                    </span>

                    {currentPage < pages.length - 1 ? (
                      <button
                        onClick={() => handleNextPage(pages.length)}
                        className="font-mono text-[9px] tracking-widest text-burgundy-950 border border-burgundy-950/20 px-3 py-1 hover:bg-burgundy-950 hover:text-white transition-colors cursor-none rounded-sm shrink-0"
                        data-cursor="NEXT"
                      >
                        NEXT PAGE
                      </button>
                    ) : (
                      <button
                        onClick={handleCloseStory}
                        className="font-mono text-[9px] tracking-widest text-white bg-burgundy-950 border border-burgundy-950 px-3 py-1 hover:bg-rose-muted hover:border-rose-muted transition-colors cursor-none rounded-sm shrink-0"
                        data-cursor="CLOSE"
                      >
                        RETURN
                      </button>
                    )}
                  </div>
                </div>

                {/* PHYSICAL BOOK GUTTER / SPINE DEPTH SHADOW (Only visible on Desktop Spread) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-burgundy-950/10 to-transparent z-15 pointer-events-none" />
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-burgundy-950/5 z-16 pointer-events-none" />

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
