import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverData = target.closest("[data-cursor]") as HTMLElement | null;
      if (hoverData) {
        setHoverText(hoverData.getAttribute("data-cursor") || "");
      } else {
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={cursorRef}
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="pointer-events-none fixed top-0 left-0 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <motion.div
        animate={{
          width: hoverText ? 85 : 12,
          height: hoverText ? 85 : 12,
          backgroundColor: hoverText ? "rgba(239, 230, 213, 0.95)" : "rgba(239, 230, 213, 0.8)",
          borderColor: hoverText ? "rgba(84, 29, 33, 0.2)" : "rgba(84, 29, 33, 0.1)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        className="flex items-center justify-center rounded-full border shadow-xl"
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center font-mono text-[9px] font-semibold tracking-widest text-burgundy-950 uppercase"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
