"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

function MountainSilhouette() {
  /*
   * Minimalist mountain range. All coordinates in a 1440×560 viewBox.
   * The central peak (the Zenith) sits at (720, 48) — absolute highest point.
   * Ridge descends on both sides with secondary peaks creating a realistic
   * alpine profile. Fill is barely-darker-than-background; the form reads
   * through the ridge stroke and the summit glow.
   */
  return (
    <svg
      viewBox="0 0 1440 560"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        {/* Summit radial glow — the light at the zenith */}
        <radialGradient id="summitGlow" cx="50%" cy="0%" r="40%">
          <stop offset="0%"   stopColor="#A855F7" stopOpacity="0.55" />
          <stop offset="30%"  stopColor="#7B2FBE" stopOpacity="0.22" />
          <stop offset="70%"  stopColor="#5B21B6" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0"    />
        </radialGradient>

        {/* Cold mist at the mountain base — icy blue-indigo */}
        <linearGradient id="mistBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#0D0D1A" stopOpacity="0"   />
          <stop offset="60%"  stopColor="#090912" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0D0D1A" stopOpacity="1"   />
        </linearGradient>

        {/* Mountain body — slightly cooler/darker than bg to read as depth */}
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#0C0B1C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#08081A" stopOpacity="0.9" />
        </linearGradient>

        {/* Ridge stroke gradient — cold purple fading down */}
        <linearGradient id="ridgeStroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#A855F7" stopOpacity="0.55" />
          <stop offset="35%"  stopColor="#7B2FBE" stopOpacity="0.2"  />
          <stop offset="75%"  stopColor="#4C1D95" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#4C1D95" stopOpacity="0"    />
        </linearGradient>

        {/* Icy snow cap at very tip */}
        <radialGradient id="snowCap" cx="50%" cy="100%" r="100%">
          <stop offset="0%"   stopColor="#E0D8FF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0"    />
        </radialGradient>

        {/* Subtle shimmer filter for ridge line */}
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ─── Mountain body fill ─── */}
      {/*
       * Ridge path (left to right):
       * Far-left base → secondary peaks on left flank →
       * left shoulder → SUMMIT (720,48) →
       * right shoulder → secondary peaks on right flank → far-right base
       */}
      <path
        d="
          M0,560
          L0,420
          L90,370
          L200,300
          L300,340
          L400,255
          L480,285
          L560,210
          L630,230
          L680,155
          L720,48
          L760,155
          L810,225
          L860,205
          L940,280
          L1020,250
          L1120,310
          L1220,270
          L1330,350
          L1400,330
          L1440,380
          L1440,560
          Z
        "
        fill="url(#bodyGrad)"
      />

      {/* ─── Summit glow ─── */}
      {/* Large soft glow concentrated at the peak */}
      <ellipse
        cx="720" cy="80"
        rx="260" ry="180"
        fill="url(#summitGlow)"
      />

      {/* ─── Snow/ice cap — very subtle frost at the very tip ─── */}
      <path
        d="M720,48 L700,95 L710,85 L720,78 L730,85 L740,95 Z"
        fill="url(#snowCap)"
      />

      {/* ─── Primary ridge line — the main silhouette edge ─── */}
      {/* This is what makes the mountain readable: a glowing purple stroke */}
      <path
        d="
          M0,420
          L90,370
          L200,300
          L300,340
          L400,255
          L480,285
          L560,210
          L630,230
          L680,155
          L720,48
          L760,155
          L810,225
          L860,205
          L940,280
          L1020,250
          L1120,310
          L1220,270
          L1330,350
          L1400,330
          L1440,380
        "
        fill="none"
        stroke="url(#ridgeStroke)"
        strokeWidth="1"
        filter="url(#softGlow)"
        className="ridge-shimmer"
      />

      {/* ─── Secondary ridge line — depth layer behind the main ridge ─── */}
      <path
        d="
          M0,460
          L120,410
          L250,360
          L380,390
          L490,330
          L580,355
          L660,295
          L720,200
          L780,295
          L860,345
          L970,320
          L1080,365
          L1200,330
          L1320,400
          L1440,420
        "
        fill="none"
        stroke="rgba(123,47,190,0.07)"
        strokeWidth="0.8"
      />

      {/* ─── Subtle topographic contour lines — echo the mountain form ─── */}
      {/* These read as cold air/altitude layers, like seeing through cloud */}
      <path
        d="M480,380 Q600,330 720,310 Q840,330 960,360 Q1080,380 1160,375"
        fill="none"
        stroke="rgba(168,85,247,0.04)"
        strokeWidth="1"
        strokeDasharray="4 12"
      />
      <path
        d="M380,430 Q560,390 720,370 Q880,390 1060,420"
        fill="none"
        stroke="rgba(168,85,247,0.03)"
        strokeWidth="1"
        strokeDasharray="4 16"
      />

      {/* ─── Frost mist — fades mountain into the section below ─── */}
      <rect x="0" y="340" width="1440" height="220" fill="url(#mistBase)" />
    </svg>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  /* Parallax: mountain moves up slightly slower than page scroll, creating depth */
  const mountainY = useTransform(scrollY, [0, 900], [0, -70]);
  /* Glow fades as you scroll away from hero */
  const glowOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  /* Cursor-reactive radial glow */
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
        /*
         * Background stack (back to front):
         * 1. Base dark with icy-cold blue undertone at the bottom
         *    (cold air settles low, just like a real mountain)
         * 2. Cursor-reactive purple glow follows mouse
         */
        background: `
          radial-gradient(ellipse 60% 50% at var(--gx,50%) var(--gy,42%), rgba(168,85,247,0.16) 0%, transparent 65%),
          radial-gradient(ellipse 90% 35% at 50% 110%, rgba(80,100,200,0.07) 0%, transparent 60%),
          linear-gradient(to bottom, #0D0D1A 0%, #0b0b1e 100%)
        `,
      }}
    >
      {/* ─── Mountain silhouette — parallax layer ─── */}
      <motion.div
        style={{ y: mountainY, opacity: glowOpacity }}
        className="absolute inset-x-0 bottom-0 h-[72%] pointer-events-none"
      >
        <MountainSilhouette />
      </motion.div>

      {/* ─── Ambient peak glow — fixed, pulsing ─── */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <div
          className="w-[500px] h-[280px] pulse-glow"
          style={{
            marginTop: "calc(28vh)",
            background: "radial-gradient(ellipse, rgba(168,85,247,0.14) 0%, transparent 65%)",
            filter: "blur(24px)",
          }}
        />
      </motion.div>

      {/* ─── Subtle grid overlay ─── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.028]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* ─── Corner accent marks ─── */}
      <div className="absolute top-8 left-8 pointer-events-none">
        <div className="w-10 h-px bg-purple-500/30" />
        <div className="w-px h-10 bg-purple-500/30 mt-0" />
      </div>
      <div className="absolute top-8 right-8 pointer-events-none">
        <div className="w-10 h-px bg-purple-500/30 ml-auto" />
        <div className="w-px h-10 bg-purple-500/30 ml-auto" />
      </div>

      {/* ─── Hero content ─── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[10px] font-black tracking-[0.5em] uppercase text-purple-400/80 mb-8"
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
            style={{
              background: "linear-gradient(135deg, #C084FC 0%, #A855F7 40%, #7B2FBE 100%)",
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
          className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.88] tracking-tighter uppercase mt-2"
        >
          We{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #7B2FBE 0%, #A855F7 60%, #C084FC 100%)",
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
          className="mt-8 text-base md:text-lg text-white/40 max-w-lg mx-auto leading-relaxed"
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
            <span className="text-white/60">→</span>
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-3 border border-white/12 hover:border-purple-500/50 text-white/60 hover:text-white text-[11px] font-black tracking-[0.25em] uppercase px-10 py-4 transition-all duration-300"
          >
            See What We Do
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-10 text-[10px] tracking-[0.35em] uppercase text-white/20"
        >
          Serving contractors · home improvement · local service businesses
        </motion.p>
      </div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-purple-400/50 to-transparent"
        />
        <span className="text-[9px] tracking-[0.4em] uppercase text-white/18">Ascend</span>
      </motion.div>
    </section>
  );
}
