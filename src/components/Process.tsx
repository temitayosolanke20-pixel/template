"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We learn your goals. No pitch.",
  },
  {
    step: "02",
    title: "Strategy & Build",
    description: "Campaign, creatives, landing page — built for your market.",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    description: "Live in days. Weekly cuts and scaling.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 md:py-40 bg-[#0D0D1A]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[10px] font-black tracking-[0.45em] uppercase text-purple-400 mb-5">
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 md:p-10 border border-white/[0.06] sm:border-r-0 last:sm:border-r group hover:bg-purple-500/[0.03] transition-colors duration-300"
            >
              <span
                className="block text-6xl font-black tracking-tighter mb-10 leading-none"
                style={{
                  background: "linear-gradient(135deg, rgba(168,85,247,0.22), rgba(123,47,190,0.08))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {step.step}
              </span>
              <h3 className="text-lg font-black uppercase tracking-wide mb-4 text-[#F8F8FF] group-hover:text-purple-300 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-[#F8F8FF]/45 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
