export default function Ticker() {
  const items = [
    "Love, layered.",
    "Hearts and pages.",
    "Chasing love.",
    "Love, rewritten.",
    "Escape into stories.",
    "Worlds within words.",
    "Deeply felt.",
    "Beautifully written.",
  ];

  // Repeat items to ensure smooth infinite wrap
  const repeatedItems = [...items, ...items, ...items, ...items];
  const reversedRepeatedItems = [...repeatedItems].reverse();

  return (
    <section className="relative w-full overflow-hidden border-y border-alabaster/10 bg-burgundy-950 py-6 md:py-8">
      {/* Top track: Leftward marquee */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {repeatedItems.map((item, index) => (
            <div key={`track1-${index}`} className="flex items-center">
              <span className="font-sans text-xs font-semibold tracking-[0.3em] text-alabaster uppercase md:text-sm">
                {item}
              </span>
              <span className="mx-6 h-1.5 w-1.5 rounded-full bg-burgundy-700 md:mx-10" />
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Divider Line inside ticker to look highly structured */}
      <div className="my-3 mx-12 h-[1px] bg-alabaster/5 md:my-4" />

      {/* Bottom track: Rightward marquee */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center">
          {reversedRepeatedItems.map((item, index) => (
            <div key={`track2-${index}`} className="flex items-center">
              <span className="font-sans text-xs font-light tracking-[0.3em] text-rose-cream/60 uppercase md:text-sm">
                {item}
              </span>
              <span className="mx-6 h-1.5 w-1.5 rounded-full bg-burgundy-800 md:mx-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
