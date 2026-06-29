"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--gx", `${x}%`);
      el.style.setProperty("--gy", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-96px)] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 55% 55% at var(--gx,50%) var(--gy,45%), rgba(168,85,247,0.18) 0%, transparent 70%), #0D0D1A",
      }}
    >
      {/* Ambient orb — the one signature 3D/glow moment */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(123,47,190,0.22) 0%, transparent 65%)" }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none">
        <div className="absolute top-8 left-8 w-12 h-px bg-purple-500/40" />
        <div className="absolute top-8 left-8 w-px h-12 bg-purple-500/40" />
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none">
        <div className="absolute bottom-8 right-8 w-12 h-px bg-purple-500/40" />
        <div className="absolute bottom-8 right-8 w-px h-12 bg-purple-500/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[10px] font-black tracking-[0.45em] uppercase text-purple-400 mb-8"
        >
          Baltimore, MD — Marketing & Brand Agency
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.88] tracking-tighter uppercase"
        >
          We Don&apos;t Just{" "}
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, #A855F7 0%, #7B2FBE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Market
          </span>
          <br />
          Your Brand.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.88] tracking-tighter uppercase mt-1"
        >
          We{" "}
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, #7B2FBE 0%, #A855F7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Rebuild
          </span>{" "}
          It.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-8 text-base md:text-lg text-white/45 max-w-lg mx-auto leading-relaxed"
        >
          Ads that convert. Websites that close. Creatives that stop the scroll.
          Built for service businesses where one customer changes everything.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#7B2FBE] hover:bg-[#A855F7] text-white text-[11px] font-black tracking-[0.25em] uppercase px-10 py-4 transition-colors duration-300"
          >
            Book a Free Call
            <span className="text-white/70">→</span>
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-3 border border-white/15 hover:border-purple-500/60 text-white/70 hover:text-white text-[11px] font-black tracking-[0.25em] uppercase px-10 py-4 transition-all duration-300"
          >
            See What We Do
          </Link>
        </motion.div>

        {/* Social proof line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-10 text-[10px] tracking-[0.3em] uppercase text-white/25"
        >
          Serving contractors · home improvement · local service businesses
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-purple-500/60 to-transparent"
        />
        <span className="text-[9px] tracking-[0.35em] uppercase text-white/20">Scroll</span>
      </motion.div>
    </section>
  );
}
