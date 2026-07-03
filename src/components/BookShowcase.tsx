import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BOOKS } from "../data";
import { Book } from "../types";
import { ArrowUpRight, BookOpen, Star, HelpCircle, X, Check, ShieldAlert } from "lucide-react";
import { isSupabaseConfigured, placeOrder } from "../lib/supabase";

export default function BookShowcase() {
  const [selectedBook, setSelectedBook] = useState<Book>(BOOKS[0]);
  const [mazeAtmosphere, setMazeAtmosphere] = useState<string>("");
  const [mazeOutcome, setMazeOutcome] = useState<string>("");

  // Order modal state
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderName, setOrderName] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const [orderAddress, setOrderAddress] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [orderStatus, setOrderStatus] = useState<"idle" | "success" | "success-local" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const resetOrderForm = () => {
    setOrderName("");
    setOrderEmail("");
    setOrderAddress("");
    setOrderQuantity(1);
    setOrderStatus("idle");
    setErrorMessage("");
  };

  const handlePlaceOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderName || !orderEmail || !orderAddress) {
      setErrorMessage("Please fill in all fields.");
      setOrderStatus("error");
      return;
    }

    setIsSubmittingOrder(true);
    setErrorMessage("");

    const priceNum = selectedBook.price ? parseFloat(selectedBook.price.replace(/[^0-9.]/g, "")) : 24.90;
    const totalPriceStr = `$${(priceNum * orderQuantity).toFixed(2)}`;

    const result = await placeOrder({
      book_id: selectedBook.id,
      book_title: selectedBook.title,
      buyer_name: orderName,
      buyer_email: orderEmail,
      buyer_address: orderAddress,
      quantity: orderQuantity,
      total_price: totalPriceStr,
    });

    setIsSubmittingOrder(false);
    if (result.success) {
      if (result.isFallback) {
        setOrderStatus("success-local");
      } else {
        setOrderStatus("success");
      }
    } else {
      setOrderStatus("error");
      setErrorMessage(result.error || "An error occurred while saving the order.");
    }
  };

  const mazePrompts: Record<string, string> = {
    "Dread": "You trace the lines of a missing page. The silence between the characters feels like a cold draft blowing through a lock. You realize the narrator has already lied to you three times.",
    "Symmetry": "The novel's structure mirrors your own heartbeat. Left and right pages match in length and metric weight. You close the book and see the exact same pattern in the shadows of your window blinds.",
    "Erasure": "The ink on page 142 begins to fade under your gaze. You search for a character's name only to realize they were never mentioned in the first place, yet their presence lingers on every line.",
    "Whisper": "A low-frequency frequency hum builds in the mountains. The mute cellist writes a single G-sharp on the margin. You suddenly hear the sound of melting snow sliding off the slate roof of your mind."
  };

  const handleMazeClick = (atmosphere: string) => {
    setMazeAtmosphere(atmosphere);
    setMazeOutcome(mazePrompts[atmosphere]);
  };

  return (
    <section id="books" className="relative border-t border-alabaster/10 bg-burgundy-950 py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[9px] tracking-[0.4em] text-rose-muted uppercase">
              BIBLIOGRAPHY & ARCHIVE
            </span>
            <h2 className="mt-3 font-serif text-4xl font-light text-alabaster tracking-wide md:text-5xl">
              FEATURED <span className="italic font-normal text-rose-cream">NOVEL</span>
            </h2>
          </div>
          <p className="mt-4 max-w-sm font-sans text-xs font-light leading-relaxed text-rose-cream/60 md:mt-0 md:text-right">
            Sanjana's work is a dark architectural journey exploring memory, symmetry, and physical vacancy.
          </p>
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* LEFT PANEL: Book Selector (4 Cols) */}
          <div className="space-y-4 lg:col-span-4">
            <span className="block font-mono text-[8px] tracking-[0.3em] text-rose-muted uppercase mb-4">
              SELECT WORK
            </span>
            {BOOKS.map((book) => {
              const isSelected = selectedBook.id === book.id;
              return (
                <button
                  key={book.id}
                  onClick={() => {
                    setSelectedBook(book);
                    setMazeAtmosphere("");
                    setMazeOutcome("");
                  }}
                  className={`w-full text-left p-6 border transition-all duration-500 flex flex-col justify-between items-start relative cursor-none group ${
                    isSelected 
                      ? "bg-burgundy-900 border-alabaster/20 shadow-xl" 
                      : "bg-transparent border-alabaster/5 hover:border-alabaster/10 hover:bg-burgundy-900/40"
                  }`}
                  data-cursor="SELECT"
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="font-mono text-[9px] text-rose-muted tracking-widest">{book.year}</span>
                    <div className="flex items-center space-x-2">
                      {book.isComingSoon && (
                        <span className="font-mono text-[8px] bg-rose-muted/20 text-rose-cream px-1.5 py-0.5 tracking-wider border border-rose-muted/30 uppercase">
                          COMING SOON
                        </span>
                      )}
                      <span className={`font-mono text-[9px] px-2 py-0.5 border ${
                        isSelected ? "border-alabaster/30 text-alabaster" : "border-transparent text-rose-muted/50"
                      }`}>
                        {book.genre}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className={`mt-4 font-serif text-xl tracking-wider transition-colors duration-300 ${
                    isSelected ? "text-alabaster" : "text-rose-cream/55 group-hover:text-rose-cream"
                  }`}>
                    {book.title}
                  </h3>
                  
                  <span className="mt-2 font-mono text-[9px] tracking-wider text-rose-muted">
                    {book.publisher}
                  </span>

                  {isSelected && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-alabaster" 
                    />
                  )}
                </button>
              );
            })}

            {/* Subconscious Interactive Component: The Maze */}
            <div className="mt-8 border border-alabaster/10 bg-burgundy-900/40 p-6">
              <span className="flex items-center space-x-1.5 font-mono text-[9px] tracking-widest text-rose-cream uppercase">
                <BookOpen size={10} />
                <span>THE PORTAL OF THE SUB-TEXT</span>
              </span>
              <p className="mt-3 font-sans text-[11px] font-light leading-relaxed text-rose-cream/60">
                Choose a narrative atmospheric element to reveal a hidden textual secret of the selected work:
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {Object.keys(mazePrompts).map((atm) => (
                  <button
                    key={atm}
                    onClick={() => handleMazeClick(atm)}
                    className={`px-2.5 py-1 font-mono text-[9px] tracking-wider border rounded-sm transition-all duration-300 cursor-none ${
                      mazeAtmosphere === atm 
                        ? "bg-alabaster text-burgundy-950 border-alabaster" 
                        : "bg-transparent border-alabaster/10 text-rose-cream hover:border-alabaster/30"
                    }`}
                    data-cursor="ATMOSPHERE"
                  >
                    {atm.toUpperCase()}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {mazeOutcome && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="mt-4 border-t border-alabaster/10 pt-4"
                  >
                    <p className="font-mono text-[8px] tracking-widest text-rose-muted uppercase">
                      LOCKED PASSAGE REVEALED
                    </p>
                    <p className="mt-2 font-serif text-xs italic leading-relaxed text-alabaster">
                      {mazeOutcome}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT PANEL: Dynamic Details with Animations (8 Cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBook.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 gap-8 md:grid-cols-12"
              >
                
                {/* Book Image */}
                <div className="md:col-span-5">
                  <div className="group relative overflow-hidden rounded-sm border border-alabaster/10 shadow-2xl bg-burgundy-900 aspect-3/4">
                    <img 
                      src={selectedBook.coverImage} 
                      alt={selectedBook.title} 
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (selectedBook.id === "dhruv-tara") {
                          target.src = "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80";
                        } else {
                          target.src = "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=1000&q=80";
                        }
                      }}
                    />
                    
                    {/* Corner badges */}
                    <div className="absolute bottom-4 left-4 bg-burgundy-950/90 px-3 py-1.5 border border-alabaster/10">
                      <p className="font-mono text-[9px] tracking-widest text-alabaster">
                        {selectedBook.isComingSoon ? "FORTHCOMING" : `ISBN ${selectedBook.isbn.split("-")[1]}...`}
                      </p>
                    </div>

                    {selectedBook.isComingSoon && (
                      <div className="absolute top-4 right-4 bg-rose-muted px-2.5 py-1 text-white font-mono text-[9px] tracking-widest uppercase shadow-lg border border-white/10 z-10">
                        COMING SOON
                      </div>
                    )}
                  </div>
                </div>

                {/* Book Narrative & Quote */}
                <div className="flex flex-col justify-between md:col-span-7">
                  
                  {/* Info Header */}
                  <div>
                    <div className="flex items-center space-x-2 text-rose-muted">
                      <span className="font-mono text-[9px] tracking-widest uppercase">{selectedBook.genre}</span>
                      <span>•</span>
                      <span className="font-mono text-[9px] tracking-widest">{selectedBook.pages} PAGES</span>
                      {selectedBook.price && (
                        <>
                          <span>•</span>
                          <span className="font-mono text-[9px] tracking-widest text-rose-cream font-medium">{selectedBook.price}</span>
                        </>
                      )}
                    </div>

                    <h2 className="mt-2 font-serif text-2xl font-light text-alabaster tracking-wide md:text-3xl">
                      {selectedBook.title}
                    </h2>
                    
                    <p className="mt-2 font-serif text-sm italic text-rose-cream/80">
                      {selectedBook.subtitle}
                    </p>

                    <div className="my-6 h-[1px] bg-alabaster/10" />

                    <p className="font-sans text-xs font-light leading-relaxed text-rose-cream/70">
                      {selectedBook.description}
                    </p>

                    {/* Highly stylized quote block */}
                    <blockquote className="mt-6 border-l-2 border-rose-muted pl-4">
                      <p className="font-serif text-sm italic leading-relaxed text-alabaster">
                        {selectedBook.quote}
                      </p>
                    </blockquote>
                  </div>

                  {/* Accolades & CTA */}
                  <div className="mt-8 border-t border-alabaster/10 pt-6">
                    <span className="block font-mono text-[8px] tracking-[0.25em] text-rose-muted uppercase mb-3">
                      ACCOLADES & RECOGNITION
                    </span>
                    
                    <ul className="space-y-1.5">
                      {selectedBook.accolades.map((award, i) => (
                        <li key={i} className="flex items-center space-x-2 text-xs text-rose-cream">
                          <Star size={10} className="text-rose-muted fill-rose-muted" />
                          <span className="font-sans font-light">{award}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-4">
                      {selectedBook.isComingSoon ? (
                        <span
                          className="inline-flex items-center space-x-2 border border-rose-muted/30 bg-rose-muted/15 px-5 py-2.5 font-mono text-[10px] tracking-widest text-rose-cream uppercase rounded-sm select-none"
                        >
                          <span>COMING SOON</span>
                        </span>
                      ) : (
                        <button
                          onClick={() => {
                            resetOrderForm();
                            setIsOrderModalOpen(true);
                          }}
                          className="inline-flex items-center space-x-2 border border-alabaster bg-alabaster px-5 py-2.5 font-mono text-[10px] tracking-widest text-burgundy-950 hover:bg-transparent hover:text-alabaster transition-all duration-300 cursor-none"
                          data-cursor="ORDER"
                        >
                          <span>ACQUIRE COPY</span>
                          <ArrowUpRight size={12} />
                        </button>
                      )}
                      
                      <button
                        onClick={() => {
                          const contactSec = document.getElementById("contact");
                          if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex items-center space-x-2 border border-alabaster/20 px-5 py-2.5 font-mono text-[10px] tracking-widest text-alabaster hover:border-alabaster transition-all duration-300 cursor-none"
                        data-cursor="AGENT"
                      >
                        <span>{selectedBook.isComingSoon ? "INQUIRE ABOUT RIGHTS" : "MEDIA RIGHTS"}</span>
                      </button>
                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Supabase Order Modal Overlay */}
      <AnimatePresence>
        {isOrderModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOrderModalOpen(false)}
              className="absolute inset-0 bg-burgundy-950/85 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-[#FAF6EE] text-burgundy-950 p-8 md:p-10 shadow-2xl border border-burgundy-950/10 rounded-sm overflow-y-auto max-h-[90vh] select-text"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOrderModalOpen(false)}
                className="absolute top-4 right-4 text-burgundy-950/40 hover:text-burgundy-950 transition-colors cursor-none p-1"
                data-cursor="CLOSE"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* DB Sync Indicator Header */}
              <div className="mb-6 flex items-center space-x-2 border-b border-burgundy-950/10 pb-4">
                <div className={`h-2 w-2 rounded-full ${isSupabaseConfigured ? "bg-emerald-600 animate-pulse" : "bg-amber-500 animate-pulse"}`} />
                <span className="font-mono text-[9px] tracking-widest uppercase font-semibold">
                  {isSupabaseConfigured ? "Supabase Connected" : "Local Sandbox Mode"}
                </span>
              </div>

              <div className="mb-6">
                <span className="font-mono text-[8px] tracking-[0.2em] text-rose-muted uppercase">
                  ACQUISITION FORM
                </span>
                <h3 className="font-serif text-2xl font-light tracking-wide text-burgundy-950 mt-1 uppercase">
                  Order "{selectedBook.title}"
                </h3>
                <p className="font-serif text-xs italic text-burgundy-950/60 mt-1">
                  {selectedBook.subtitle}
                </p>
              </div>

              {orderStatus === "success" || orderStatus === "success-local" ? (
                <div className="py-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <Check size={24} />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-burgundy-950">
                    Order Placed Successfully!
                  </h4>
                  
                  {orderStatus === "success-local" ? (
                    <div className="bg-amber-50 border border-amber-200/60 p-4 rounded-sm text-left text-xs space-y-2">
                      <div className="flex items-start space-x-2 text-amber-800 font-semibold font-mono text-[10px] uppercase">
                        <ShieldAlert size={14} className="shrink-0 mt-0.5 text-amber-600" />
                        <span>Saved to Sandbox Cache</span>
                      </div>
                      <p className="text-burgundy-950/70 leading-relaxed">
                        Your order was captured successfully in the local workspace database! To save orders into your personal <strong>Supabase</strong> database, add these credentials to the Settings menu in AI Studio:
                      </p>
                      <ul className="font-mono text-[10px] text-burgundy-950/80 space-y-1 list-disc pl-4">
                        <li><strong className="text-burgundy-950">VITE_SUPABASE_URL</strong></li>
                        <li><strong className="text-burgundy-950">VITE_SUPABASE_ANON_KEY</strong></li>
                      </ul>
                    </div>
                  ) : (
                    <p className="text-sm font-light leading-relaxed text-burgundy-950/70">
                      Thank you for your order. The transaction has been synced to your <strong>Supabase</strong> database table securely.
                    </p>
                  )}

                  <button
                    onClick={() => setIsOrderModalOpen(false)}
                    className="mt-6 w-full py-2.5 bg-burgundy-950 text-white font-mono text-[10px] tracking-widest uppercase hover:bg-rose-muted transition-colors cursor-none rounded-sm"
                    data-cursor="CLOSE"
                  >
                    Return to Bibliography
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePlaceOrderSubmit} className="space-y-4">
                  
                  {/* Buyer Name */}
                  <div>
                    <label className="block font-mono text-[9px] tracking-wider text-burgundy-950/60 uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={orderName}
                      onChange={(e) => setOrderName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-[#F3ECE0] border border-burgundy-950/10 px-4 py-2 text-sm font-sans placeholder-burgundy-950/30 focus:outline-none focus:border-burgundy-950 transition-colors rounded-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-mono text-[9px] tracking-wider text-burgundy-950/60 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={orderEmail}
                      onChange={(e) => setOrderEmail(e.target.value)}
                      placeholder="eleanor@v-sanjana.com"
                      className="w-full bg-[#F3ECE0] border border-burgundy-950/10 px-4 py-2 text-sm font-sans placeholder-burgundy-950/30 focus:outline-none focus:border-burgundy-950 transition-colors rounded-sm"
                    />
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <label className="block font-mono text-[9px] tracking-wider text-burgundy-950/60 uppercase mb-1">
                      Shipping Address
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={orderAddress}
                      onChange={(e) => setOrderAddress(e.target.value)}
                      placeholder="House / Street / City / Country"
                      className="w-full bg-[#F3ECE0] border border-burgundy-950/10 px-4 py-2 text-sm font-sans placeholder-burgundy-950/30 focus:outline-none focus:border-burgundy-950 transition-colors resize-none rounded-sm"
                    />
                  </div>

                  {/* Quantity Selector & Summary */}
                  <div className="grid grid-cols-2 gap-4 items-center bg-[#F3ECE0] p-4 border border-burgundy-950/5 rounded-sm">
                    <div>
                      <label className="block font-mono text-[8px] tracking-widest text-burgundy-950/50 uppercase mb-1.5">
                        Quantity
                      </label>
                      <div className="flex items-center space-x-3">
                        <button
                          type="button"
                          onClick={() => setOrderQuantity(Math.max(1, orderQuantity - 1))}
                          className="w-7 h-7 bg-white hover:bg-burgundy-950 hover:text-white border border-burgundy-950/10 rounded-sm flex items-center justify-center font-bold text-sm transition-all cursor-none"
                          data-cursor="MINUS"
                        >
                          -
                        </button>
                        <span className="font-mono text-sm font-semibold w-6 text-center">{orderQuantity}</span>
                        <button
                          type="button"
                          onClick={() => setOrderQuantity(orderQuantity + 1)}
                          className="w-7 h-7 bg-white hover:bg-burgundy-950 hover:text-white border border-burgundy-950/10 rounded-sm flex items-center justify-center font-bold text-sm transition-all cursor-none"
                          data-cursor="PLUS"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="block font-mono text-[8px] tracking-widest text-burgundy-950/50 uppercase">
                        Total Price
                      </span>
                      <span className="font-serif text-lg font-semibold text-burgundy-950">
                        {`$${((selectedBook.price ? parseFloat(selectedBook.price.replace(/[^0-9.]/g, "")) : 24.90) * orderQuantity).toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  {orderStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-800 text-xs px-3 py-2 rounded-sm font-sans">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmittingOrder}
                    className="w-full py-3 bg-burgundy-950 text-white font-mono text-[10px] tracking-widest uppercase hover:bg-rose-muted transition-colors cursor-none rounded-sm mt-2 flex items-center justify-center space-x-2"
                    data-cursor="SUBMIT"
                  >
                    <span>{isSubmittingOrder ? "TRANSMITTING..." : "CONFIRM ORDER"}</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
