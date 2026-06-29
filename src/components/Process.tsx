"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn your business, your market, and your goals. No pitch decks — just a direct conversation about where you are and where you want to go.",
  },
  {
    step: "02",
    title: "Strategy & Build",
    description:
      "We build your campaign structure, creatives, and assets from scratch. Every piece is made to match your brand and speak directly to your ideal customer.",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    description:
      "We go live and watch every metric. We optimize weekly — cutting what doesn't work, scaling what does. You get updates and results in plain English.",
  },
  {
    step: "04",
    title: "Grow & Scale",
    description:
      "Once we've found what works, we scale. More budget where it matters, consistent lead flow, and a brand that looks the part as you grow.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#0D0D1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-[10px] font-black tracking-[0.45em] uppercase text-purple-400 mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            From Zero to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A855F7, #7B2FBE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Consistent Leads
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 md:p-8 border border-white/[0.06] lg:border-r-0 last:lg:border-r group hover:bg-purple-500/[0.03] transition-colors duration-400"
            >
              <span
                className="block text-5xl font-black tracking-tighter mb-6 leading-none"
                style={{
                  background: "linear-gradient(135deg, rgba(168,85,247,0.22), rgba(123,47,190,0.08))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {step.step}
              </span>
              <h3 className="text-base md:text-lg font-black uppercase tracking-wide mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
