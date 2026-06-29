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

const PAIN_POINTS = [
  "Inconsistent lead flow — feast or famine months",
  "Competitors with worse work winning on social",
  "No time to run ads or manage content yourself",
  "Branding that loses jobs before the estimate",
];

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-20 md:py-28 lg:py-32 border-t border-white/[0.05]" style={{ background: "#0a0a14" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] font-black tracking-[0.45em] uppercase text-purple-400 mb-5">
              Who We Serve
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
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
            <p className="text-base text-[#F8F8FF]/50 leading-relaxed max-w-prose mb-8">
              Service businesses where one job means{" "}
              <span className="text-[#F8F8FF]/80 font-semibold">$1,000–$5,000+</span>. Fewer
              conversions needed, cleaner ROI. That&apos;s the story we tell — and deliver.
            </p>

            <div className="space-y-4 mb-8">
              {PAIN_POINTS.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  </span>
                  <p className="text-sm text-[#F8F8FF]/60">{point}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-5 border border-purple-500/20 bg-purple-500/5"
            >
              <p className="text-sm text-[#F8F8FF]/80 leading-relaxed">
                <span className="text-purple-400 font-bold">Sound familiar?</span>{" "}
                You deliver great work — you just need more of the right people finding you.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — industry grid */}
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
            <p className="mt-4 text-[11px] text-[#F8F8FF]/25 tracking-wider text-center">
              + clothing brands & creative businesses
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
