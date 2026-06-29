"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

function MountainSilhouette() {
  return (
    <svg
      viewBox="0 0 1440 560"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <radialGradient id="summitGlow" cx="50%" cy="0%" r="40%">
          <stop offset="0%"   stopColor="#A855F7" stopOpacity="0.55" />
          <stop offset="30%"  stopColor="#7B2FBE" stopOpacity="0.22" />
          <stop offset="70%"  stopColor="#5B21B6" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0"    />
        </radialGradient>
        <linearGradient id="mistBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#0D0D1A" stopOpacity="0"   />
          <stop offset="60%"  stopColor="#090912" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0D0D1A" stopOpacity="1"   />
        </linearGradient>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#0C0B1C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#08081A" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="ridgeStroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#A855F7" stopOpacity="0.55" />
          <stop offset="35%"  stopColor="#7B2FBE" stopOpacity="0.2"  />
          <stop offset="75%"  stopColor="#4C1D95" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#4C1D95" stopOpacity="0"    />
        </linearGradient>
        <radialGradient id="snowCap" cx="50%" cy="100%" r="100%">
          <stop offset="0%"   stopColor="#E0D8FF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0"    />
        </radialGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M0,560 L0,420 L90,370 L200,300 L300,340 L400,255 L480,285 L560,210 L630,230 L680,155 L720,48 L760,155 L810,225 L860,205 L940,280 L1020,250 L1120,310 L1220,270 L1330,350 L1400,330 L1440,380 L1440,560 Z"
        fill="url(#bodyGrad)"
      />
      <ellipse cx="720" cy="80" rx="260" ry="180" fill="url(#summitGlow)" />
      <path d="M720,48 L700,95 L710,85 L720,78 L730,85 L740,95 Z" fill="url(#snowCap)" />
      <path
        d="M0,420 L90,370 L200,300 L300,340 L400,255 L480,285 L560,210 L630,230 L680,155 L720,48 L760,155 L810,225 L860,205 L940,280 L1020,250 L1120,310 L1220,270 L1330,350 L1400,330 L1440,380"
        fill="none"
        stroke="url(#ridgeStroke)"
        strokeWidth="1"
        filter="url(#softGlow)"
        className="ridge-shimmer"
      />
      <path
        d="M0,460 L120,410 L250,360 L380,390 L490,330 L580,355 L660,295 L720,200 L780,295 L860,345 L970,320 L1080,365 L1200,330 L1320,400 L1440,420"
        fill="none"
        stroke="rgba(123,47,190,0.07)"
        strokeWidth="0.8"
      />
      <path d="M480,380 Q600,330 720,310 Q840,330 960,360 Q1080,380 1160,375" fill="none" stroke="rgba(168,85,247,0.04)" strokeWidth="1" strokeDasharray="4 12" />
      <path d="M380,430 Q560,390 720,370 Q880,390 1060,420" fill="none" stroke="rgba(168,85,247,0.03)" strokeWidth="1" strokeDasharray="4 16" />
      <rect x="0" y="340" width="1440" height="220" fill="url(#mistBase)" />
    </svg>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const mountainY = useTransform(scrollY, [0, 900], [0, -70]);
  const glowOpacity = useTransform(scrollY, [0, 500], [1, 0]);

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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 60% 50% at var(--gx,50%) var(--gy,42%), rgba(168,85,247,0.16) 0%, transparent 65%),
          radial-gradient(ellipse 90% 35% at 50% 110%, rgba(80,100,200,0.07) 0%, transparent 60%),
          linear-gradient(to bottom, #0D0D1A 0%, #0b0b1e 100%)
        `,
      }}
    >
      {/* Decorative: mountain, glows, grid — all pointer-events-none */}
      <motion.div
        style={{ y: mountainY, opacity: glowOpacity }}
        className="absolute inset-x-0 bottom-0 h-[72%] pointer-events-none"
        aria-hidden="true"
      >
        <MountainSilhouette />
      </motion.div>

      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
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

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.028]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      <div className="absolute top-8 left-8 pointer-events-none" aria-hidden="true">
        <div className="w-10 h-px bg-purple-500/30" />
        <div className="w-px h-10 bg-purple-500/30" />
      </div>
      <div className="absolute top-8 right-8 pointer-events-none" aria-hidden="true">
        <div className="w-10 h-px bg-purple-500/30 ml-auto" />
        <div className="w-px h-10 bg-purple-500/30 ml-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8 text-center">
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
          className="text-[clamp(2.8rem,9vw,8rem)] font-black leading-[0.9] tracking-tight uppercase"
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
            Market.
          </span>
          <br />
          We Rebuild It.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 text-base md:text-lg text-[#F8F8FF]/50 max-w-lg mx-auto leading-relaxed"
        >
          Ads that convert. Websites that close. Video creatives that stop the scroll.
          Built for service businesses where one customer changes everything.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#7B2FBE] hover:bg-[#A855F7] text-[#F8F8FF] text-[11px] font-black tracking-[0.25em] uppercase px-10 py-4 transition-colors duration-300"
          >
            Book a Free Call
            <span className="opacity-60">→</span>
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-3 border border-white/12 hover:border-purple-500/50 text-[#F8F8FF]/60 hover:text-[#F8F8FF] text-[11px] font-black tracking-[0.25em] uppercase px-10 py-4 transition-all duration-300"
          >
            See What We Do
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-10 text-[10px] tracking-[0.35em] uppercase text-[#F8F8FF]/20"
        >
          Serving contractors · home improvement · local service businesses
        </motion.p>
      </div>

      {/* Scroll cue — decorative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-purple-400/50 to-transparent"
        />
        <span className="text-[9px] tracking-[0.4em] uppercase text-[#F8F8FF]/20">Ascend</span>
      </motion.div>
    </section>
  );
}
