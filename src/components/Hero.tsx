"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ─── EDIT hero content ───
const HERO = {
  // Replace with your actual image URL or a /public path
  backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80",
  eyebrow: "Season 3 — Drop 001",
  headline: "BORN FROM\nDARKNESS",
  subtext: "Limited quantities. Once it's gone, it's gone.",
  ctaPrimary: { label: "Shop Now", href: "/collections/new" },
  ctaSecondary: { label: "View Lookbook", href: "/lookbook" },
};

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end pb-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO.backgroundImage})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs font-bold tracking-[0.3em] uppercase text-white/60 mb-4"
        >
          {HERO.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-6xl sm:text-8xl md:text-[10rem] font-black leading-none tracking-tighter uppercase whitespace-pre-line"
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-sm text-white/60 tracking-widest uppercase"
        >
          {HERO.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href={HERO.ctaPrimary.href}
            className="inline-block bg-white text-black text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-white/90 transition-colors"
          >
            {HERO.ctaPrimary.label}
          </Link>
          <Link
            href={HERO.ctaSecondary.href}
            className="inline-block border border-white text-white text-xs font-black tracking-widest uppercase px-10 py-4 hover:bg-white hover:text-black transition-colors"
          >
            {HERO.ctaSecondary.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
