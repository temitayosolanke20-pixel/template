"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REVIEWS = [
  {
    id: 1,
    name: "Marcus T.",
    business: "MT Roofing & Exteriors · Baltimore, MD",
    text: "2–3 leads a week to 12–15 in the first month. Worth every dollar.",
    result: "5x lead increase in 30 days",
  },
  {
    id: 2,
    name: "Jordan W.",
    business: "Westside Landscape Group · Columbia, MD",
    text: "Our spring season was the biggest we've ever had.",
    result: "Record revenue season",
  },
  {
    id: 3,
    name: "Denise F.",
    business: "Premier Kitchen & Bath · Annapolis, MD",
    text: "Customers mention the website before we've even met. The brand work alone was worth it.",
    result: "Closing higher-ticket projects",
  },
  {
    id: 4,
    name: "Chris A.",
    business: "All-Star Solar Solutions · Towson, MD",
    text: "No chasing, no excuses. Ads converting and creative quality we're proud of.",
    result: "30+ qualified consultations / month",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % REVIEWS.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-32 md:py-40 lg:py-48 bg-[#0D0D1A]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[10px] font-black tracking-[0.45em] uppercase text-purple-400 mb-5">
            Client Results
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            Real Businesses.{" "}
            <span style={{ background: "linear-gradient(135deg, #A855F7, #7B2FBE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Real Numbers.
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-center mb-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#A855F7" className="mx-0.5">
                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl md:text-2xl text-[#F8F8FF]/85 leading-relaxed italic mb-10 font-light">
                &ldquo;{REVIEWS[active].text}&rdquo;
              </p>
              <p className="text-sm font-black tracking-widest uppercase text-[#F8F8FF] mb-1">
                {REVIEWS[active].name}
              </p>
              <p className="text-xs text-[#F8F8FF]/35 tracking-wider mb-6">
                {REVIEWS[active].business}
              </p>
              <div className="inline-block px-4 py-1.5 border border-purple-500/30 bg-purple-500/8">
                <p className="text-[11px] font-bold text-purple-400 tracking-wider">◆ {REVIEWS[active].result}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mb-16">
          {REVIEWS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`Review ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${i === active ? "bg-purple-500 w-8" : "bg-[#F8F8FF]/20 w-2 hover:bg-[#F8F8FF]/40"}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
          {REVIEWS.map((review, i) => (
            <motion.button key={review.id} onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-left bg-[#0D0D1A] p-8 transition-colors duration-300 ${active === i ? "bg-purple-500/[0.06]" : "hover:bg-white/[0.02]"}`}
            >
              <p className="text-sm text-[#F8F8FF]/60 leading-relaxed line-clamp-3 mb-6 italic">&ldquo;{review.text}&rdquo;</p>
              <p className="text-xs font-black tracking-wider uppercase text-[#F8F8FF] mb-1">{review.name}</p>
              <p className="text-[11px] text-purple-400">{review.result}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
