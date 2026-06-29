"use client";

import { motion } from "framer-motion";

const INDUSTRIES = [
  { icon: "🔨", label: "Home Improvement" },
  { icon: "⚡", label: "Electricians" },
  { icon: "🌿", label: "Landscaping" },
  { icon: "🛁", label: "Kitchen & Bath" },
  { icon: "☀️", label: "Solar" },
  { icon: "🔧", label: "HVAC & Plumbing" },
  { icon: "🪟", label: "Roofing & Windows" },
  { icon: "🏠", label: "General Contractors" },
];

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-32 md:py-40 border-t border-white/[0.05]" style={{ background: "#0a0a14" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] font-black tracking-[0.45em] uppercase text-purple-400 mb-6">
              Who We Serve
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-10">
              Built for Businesses
              <br />
              Where One Customer
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #A855F7, #7B2FBE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Changes Everything.
              </span>
            </h2>
            <p className="text-2xl font-black text-[#F8F8FF]/60">
              One job ={" "}
              <span className="text-[#F8F8FF]">$1,000–$5,000+</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-2 gap-3">
              {INDUSTRIES.map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  whileHover={{ borderColor: "rgba(168,85,247,0.4)", scale: 1.02 }}
                  className="flex items-center gap-4 p-5 border border-white/[0.06] bg-white/[0.02] transition-all duration-300"
                >
                  <span className="text-2xl">{industry.icon}</span>
                  <span className="text-sm font-bold text-[#F8F8FF]/70">{industry.label}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-5 text-[11px] text-[#F8F8FF]/25 tracking-wider text-center">
              + clothing brands & creative businesses
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
