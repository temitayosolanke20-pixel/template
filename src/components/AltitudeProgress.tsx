"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/*
 * Fixed right-side climbing route. The dot climbs UP the line as the user
 * scrolls DOWN — the page scroll is framed as an ascent toward the zenith.
 * Desktop only (lg+). Intentionally subtle.
 */
export function AltitudeProgress() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  /* Invert: at scroll 0 → bottom (100%), at scroll 1 → top (0%) */
  const rawTop = useTransform(scrollYProgress, [0, 1], ["92%", "0%"]);
  const smoothTop = useSpring(rawTop, { stiffness: 70, damping: 22 });

  /* Dot brightens as you approach the summit */
  const dotOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.55, 1]);
  const dotGlow = useTransform(
    scrollYProgress,
    [0, 1],
    ["0 0 4px rgba(168,85,247,0.4)", "0 0 10px rgba(168,85,247,1)"]
  );

  if (!mounted) return null;

  return (
    <div
      className="hidden lg:flex fixed right-7 top-1/2 -translate-y-1/2 z-40 flex-col items-center select-none"
      style={{ height: "200px" }}
      aria-hidden="true"
    >
      {/* ZENITH — top label */}
      <span className="text-[8px] font-black tracking-[0.3em] uppercase text-purple-500/40 mb-3">
        ZENITH
      </span>

      {/* Route track */}
      <div className="relative flex-1 w-px overflow-visible">
        {/* Static track line */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/25 via-purple-500/8 to-white/4" />

        {/* Elevation tick marks */}
        {[25, 50, 75].map((pct) => (
          <div
            key={pct}
            className="absolute w-1.5 h-px bg-white/8"
            style={{ top: `${pct}%`, left: "1px" }}
          />
        ))}

        {/* Climbing dot — driven by motion value, moves UP on scroll */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: smoothTop }}
        >
          <motion.div
            style={{ opacity: dotOpacity }}
            className="relative -translate-y-1/2"
          >
            {/* Soft glow halo */}
            <div
              className="absolute rounded-full pulse-glow"
              style={{
                width: "12px",
                height: "12px",
                left: "-5px",
                top: "-5px",
                background: "radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)",
              }}
            />
            {/* Core dot */}
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-purple-400"
              style={{ boxShadow: dotGlow }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* BASE — bottom label */}
      <span className="text-[8px] font-black tracking-[0.3em] uppercase text-white/12 mt-3">
        BASE
      </span>
    </div>
  );
}
