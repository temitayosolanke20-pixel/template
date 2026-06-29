"use client";

import { motion } from "framer-motion";

/* Retainer pricing removed — custom quote only.
   Fixed-scope items (templates, video packages) are priced in Marketplace. */
export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 lg:py-32 border-t border-white/[0.05]" style={{ background: "#0a0a14" }}>
      <div className="mx-auto max-w-4xl px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-[10px] font-black tracking-[0.45em] uppercase text-purple-400">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            We Price Around{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A855F7, #7B2FBE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your Goals.
            </span>
          </h2>
          <p className="text-base text-[#F8F8FF]/50 leading-relaxed max-w-prose mx-auto">
            Ad management retainers are scoped to your market, budget, and growth targets — not a fixed package.
            Website templates and video creative packages have fixed prices in our{" "}
            <a href="#marketplace" className="text-purple-400 hover:text-[#F8F8FF] transition-colors underline underline-offset-2">
              marketplace
            </a>
            .
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
            {[
              { label: "Ad Management", note: "Custom retainer", from: "From $800 / mo", href: "#contact", cta: "Get a Quote" },
              { label: "Website Templates", note: "Fixed price, launch in days", from: "From $299", href: "#marketplace", cta: "Browse Templates" },
              { label: "Video Creatives", note: "Flat rate per package", from: "From $300", href: "#marketplace", cta: "Order a Package" },
            ].map((item) => (
              <div key={item.label} className="p-6 md:p-8 border border-white/[0.07] bg-[#0D0D1A]">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F8F8FF]/30 mb-2">{item.note}</p>
                <h3 className="text-lg font-black uppercase tracking-tight text-[#F8F8FF] mb-2">{item.label}</h3>
                <p className="text-2xl font-black text-[#F8F8FF] mb-6">{item.from}</p>
                <a
                  href={item.href}
                  className="block text-center text-[11px] font-black tracking-[0.2em] uppercase py-3 border border-white/15 hover:border-purple-500/40 text-[#F8F8FF]/70 hover:text-[#F8F8FF] transition-all duration-300"
                >
                  {item.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#F8F8FF]/25 tracking-wider mt-8">
            All engagements start with a free strategy call — no commitment required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
