"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const SERVICES = [
  {
    number: "01",
    label: "Marketing & Growth",
    title: "Ad Management",
    description:
      "Full Meta ad management — strategy, creative, targeting, daily optimization. One flat retainer. One new customer worth $1,000–$2,000+ covers the fee.",
    highlight: "Lead guarantee or you don't pay.",
    cta: "Get Started",
    href: "#contact",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Websites",
    title: "Web Creation",
    description:
      "Custom sites built to convert, not just look good. Or pick a premium template and launch in days. Mobile-first, fast, built for authority.",
    highlight: "Custom builds + ready-to-launch templates.",
    cta: "See Templates",
    href: "#marketplace",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Creative Package",
    title: "Video Creatives",
    description:
      "Send your brand info, get back polished ad-ready video. No retainer, no meetings. Finished creatives ready to run, starting at $300.",
    highlight: "Flat rate. No retainer required.",
    cta: "Order a Package",
    href: "#marketplace",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

function TiltCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 250, damping: 25 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 250, damping: 25 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-[#0D0D1A] border border-white/[0.07] p-6 md:p-8 group hover:border-purple-500/30 transition-colors duration-500 cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 group-hover:from-purple-600/[0.06] to-transparent transition-all duration-500 pointer-events-none" aria-hidden="true" />

      <div className="flex items-start justify-between mb-6">
        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-purple-500/50">
          {service.number}
        </span>
        <span className="text-purple-400/60 group-hover:text-purple-400 transition-colors duration-300">
          {service.icon}
        </span>
      </div>

      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F8F8FF]/30 mb-2">
        {service.label}
      </p>
      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight text-[#F8F8FF] mb-4">
        {service.title}
      </h3>
      <p className="text-sm text-[#F8F8FF]/50 leading-relaxed mb-6">
        {service.description}
      </p>
      <p className="text-[11px] font-bold text-purple-400 tracking-wide mb-6">
        ◆ {service.highlight}
      </p>
      <a
        href={service.href}
        className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.25em] uppercase text-[#F8F8FF]/50 hover:text-[#F8F8FF] transition-colors group/link"
      >
        {service.cta}
        <span className="text-purple-400 group-hover/link:translate-x-1.5 transition-transform duration-300">
          →
        </span>
      </a>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 bg-[#0D0D1A]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[10px] font-black tracking-[0.45em] uppercase text-purple-400 mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
            Three Ways{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A855F7, #7B2FBE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We Grow You
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <TiltCard key={s.number} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
