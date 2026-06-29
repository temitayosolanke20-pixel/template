"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Contact", href: "#contact" },
];

function ZPLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="ZP monogram">
      <defs>
        <linearGradient id="zpGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#7B2FBE" />
        </linearGradient>
      </defs>
      {/* Z shape */}
      <polyline
        points="4,8 18,8 4,26 18,26"
        stroke="url(#zpGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Arrow tip on Z */}
      <polyline
        points="14,20 20,12 26,20"
        stroke="url(#zpGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* P shape */}
      <path
        d="M22 8 L22 32 M22 8 L32 8 Q38 8 38 16 Q38 24 32 24 L22 24"
        stroke="url(#zpGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0D0D1A]/95 backdrop-blur-md border-b border-white/8"
            : "bg-transparent"
        }`}
        style={{ top: "32px" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <ZPLogo size={36} />
            <span className="text-sm font-black tracking-[0.2em] uppercase text-white group-hover:text-purple-400 transition-colors">
              The Zenith Point
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-bold tracking-widest uppercase text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="inline-block bg-[#7B2FBE] hover:bg-[#A855F7] text-white text-[11px] font-black tracking-widest uppercase px-6 py-3 transition-colors duration-300"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-1"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0D0D1A] flex flex-col pt-28 px-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-3xl font-black tracking-wider uppercase py-5 border-b border-white/8 hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-10"
            >
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block bg-[#7B2FBE] text-white text-sm font-black tracking-widest uppercase px-10 py-4"
              >
                Book a Free Call
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
