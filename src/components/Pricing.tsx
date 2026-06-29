"use client";

import { motion } from "framer-motion";

export function Pricing() {
  return (
    <section id="pricing" className="py-32 md:py-40 border-t border-white/[0.05]" style={{ background: "#0a0a14" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[10px] font-black tracking-[0.45em] uppercase text-purple-400 mb-5">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            We Price Around{" "}
            <span style={{ background: "linear-gradient(135deg, #A855F7, #7B2FBE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Your Goals.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { label: "Ad Management",    note: "Custom retainer",          from: "From $800 / mo", href: "#contact",     cta: "Get a Quote" },
            { label: "Website Templates", note: "Fixed price, launch fast", from: "From $299",      href: "#marketplace", cta: "Browse Templates" },
            { label: "Video Creatives",  note: "Flat rate per package",    from: "From $300",      href: "#marketplace", cta: "Order a Package" },
          ].map((item, i) => (
            <motion.div key={item.label}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-10 border border-white/[0.07] bg-[#0D0D1A]"
            >
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F8F8FF]/30 mb-3">{item.note}</p>
              <h3 className="text-xl font-black uppercase tracking-tight text-[#F8F8FF] mb-6">{item.label}</h3>
              <p className="text-3xl font-black text-[#F8F8FF] mb-10">{item.from}</p>
              <a href={item.href}
                className="block text-center text-[11px] font-black tracking-[0.2em] uppercase py-3.5 border border-white/15 hover:border-purple-500/40 text-[#F8F8FF]/70 hover:text-[#F8F8FF] transition-all duration-300"
              >
                {item.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-10 text-center text-xs text-[#F8F8FF]/25 tracking-wider"
        >
          All engagements start with a free strategy call.
        </motion.p>
      </div>
    </section>
  );
}
