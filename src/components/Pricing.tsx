"use client";

import { motion } from "framer-motion";

const PLANS = [
  {
    name: "Launch",
    subtitle: "For businesses just getting started with paid ads",
    price: "From $800",
    period: "/ month",
    features: [
      "Meta ad account setup & management",
      "2 ad creatives per month",
      "Weekly performance reports",
      "Monthly strategy call",
      "Dedicated point of contact",
    ],
    cta: "Start Here",
    highlight: false,
  },
  {
    name: "Growth",
    subtitle: "For businesses ready to scale their lead flow",
    price: "From $1,500",
    period: "/ month",
    features: [
      "Full Meta ad management (multiple campaigns)",
      "5 video/graphic creatives per month",
      "Landing page optimization",
      "Bi-weekly strategy calls",
      "Lead guarantee — or we work free until you hit it",
      "Priority response & support",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Authority",
    subtitle: "For established businesses wanting full brand domination",
    price: "Custom",
    period: "",
    features: [
      "Everything in Growth",
      "Custom website creation included",
      "Full brand identity build-out",
      "Multi-platform ad management",
      "Monthly creative content shoot",
      "Dedicated brand strategist",
    ],
    cta: "Let's Talk",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32" style={{ background: "#0a0a14" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[10px] font-black tracking-[0.45em] uppercase text-purple-400 mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Invest in{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A855F7, #7B2FBE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Results
            </span>
          </h2>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto">
            No long-term lock-ins. No hidden fees. Just straightforward retainers built around your growth goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-8 border transition-all duration-400 ${
                plan.highlight
                  ? "border-purple-500/50 bg-[#0D0D1A] shadow-[0_0_60px_rgba(168,85,247,0.1)]"
                  : "border-white/[0.07] bg-[#0D0D1A] hover:border-white/15"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-px left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              )}

              <p className="text-[10px] font-bold tracking-[0.35em] uppercase text-white/30 mb-2">
                {plan.subtitle}
              </p>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-white/30">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/60">
                    <svg
                      className="mt-0.5 flex-shrink-0 text-purple-400"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center text-[11px] font-black tracking-[0.2em] uppercase py-4 transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[#7B2FBE] hover:bg-[#A855F7] text-white"
                    : "border border-white/15 hover:border-purple-500/40 text-white/70 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-xs text-white/25 tracking-wider"
        >
          All plans include a free strategy call before you commit to anything.
        </motion.p>
      </div>
    </section>
  );
}
