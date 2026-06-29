"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TEMPLATES = [
  {
    id: "t1",
    name: "Contractor Pro",
    niche: "Home Services",
    price: "$349",
    description: "Built for contractors and home improvement businesses. Lead form hero, before/after gallery, review section, and a no-nonsense contact section that converts.",
    tags: ["Conversion-focused", "Mobile-first", "Fast"],
    badge: "Best Seller",
    color: "#7B2FBE",
  },
  {
    id: "t2",
    name: "Service Authority",
    niche: "Local Services",
    price: "$299",
    description: "Clean, professional layout for any local service business. Service cards, trust badges, Google review integration section, and a sticky call button.",
    tags: ["Trust-building", "Local SEO ready", "Clean"],
    badge: null,
    color: "#6B21A8",
  },
  {
    id: "t3",
    name: "Brand Presence",
    niche: "Creative & Fashion",
    price: "$449",
    description: "Full-screen editorial layout for clothing brands, creatives, and lifestyle businesses. Lookbook gallery, product showcases, and a high-end visual feel.",
    tags: ["Editorial", "Visual-first", "Premium"],
    badge: "New",
    color: "#A855F7",
  },
];

const CREATIVE_PACKAGES = [
  {
    id: "c1",
    name: "Starter Pack",
    price: "$300",
    deliverables: [
      "3 short-form video ads (15–30 sec)",
      "Branded captions & hooks written",
      "Ready to run on Meta / TikTok",
      "3-day turnaround",
    ],
    cta: "Order Now",
  },
  {
    id: "c2",
    name: "Growth Pack",
    price: "$550",
    deliverables: [
      "6 short-form video ads",
      "2 static graphic ads",
      "Branded captions, hooks & CTAs",
      "A/B variation included",
      "5-day turnaround",
    ],
    cta: "Order Now",
    badge: "Most Popular",
  },
  {
    id: "c3",
    name: "Brand Kit",
    price: "$900",
    deliverables: [
      "10 video ads + 5 static graphics",
      "Full creative strategy doc",
      "Brand style frames",
      "Unlimited revision round",
      "7-day turnaround",
    ],
    cta: "Order Now",
  },
];

type Tab = "templates" | "creatives";

export function Marketplace() {
  const [activeTab, setActiveTab] = useState<Tab>("templates");

  return (
    <section id="marketplace" className="py-32" style={{ background: "#0a0a14" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[10px] font-black tracking-[0.45em] uppercase text-purple-400 mb-4">
            Marketplace
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            Buy. Launch.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A855F7, #7B2FBE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Grow.
            </span>
          </h2>
          <p className="mt-4 text-sm text-white/45 max-w-lg">
            No retainer required. Pick up a website template or a video creative package — on your terms.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-0 mb-12 border-b border-white/[0.06]">
          {(["templates", "creatives"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-4 mr-10 text-xs font-black tracking-[0.25em] uppercase transition-colors duration-300 ${
                activeTab === tab ? "text-white" : "text-white/35 hover:text-white/60"
              }`}
            >
              {tab === "templates" ? "Website Templates" : "Video Creatives"}
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "templates" ? (
            <motion.div
              key="templates"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {TEMPLATES.map((template, i) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative bg-[#0D0D1A] border border-white/[0.07] hover:border-purple-500/30 transition-all duration-400 group overflow-hidden"
                >
                  {/* Preview placeholder */}
                  <div
                    className="h-48 relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${template.color}22, ${template.color}08)` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-1 mx-auto mb-3 rounded-full" style={{ background: template.color }} />
                        <div className="w-24 h-0.5 mx-auto mb-2 rounded-full bg-white/10" />
                        <div className="w-20 h-0.5 mx-auto rounded-full bg-white/10" />
                      </div>
                    </div>
                    {template.badge && (
                      <span className="absolute top-3 left-3 text-[10px] font-black tracking-widest uppercase px-3 py-1 bg-[#7B2FBE] text-white">
                        {template.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-1">
                      {template.niche}
                    </p>
                    <h3 className="text-xl font-black uppercase tracking-tight mb-3">{template.name}</h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-5">{template.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {template.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 border border-white/10 text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-white">{template.price}</span>
                      <a
                        href="#contact"
                        className="text-[11px] font-black tracking-[0.2em] uppercase px-5 py-2.5 bg-[#7B2FBE] hover:bg-[#A855F7] text-white transition-colors duration-300"
                      >
                        Get This
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="creatives"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {CREATIVE_PACKAGES.map((pkg, i) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative bg-[#0D0D1A] border transition-all duration-400 p-8 ${
                    pkg.badge
                      ? "border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.08)]"
                      : "border-white/[0.07] hover:border-purple-500/25"
                  }`}
                >
                  {pkg.badge && (
                    <span className="absolute -top-px left-8 text-[10px] font-black tracking-widest uppercase px-4 py-1 bg-[#A855F7] text-white">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-black uppercase tracking-tight mb-1 mt-3">{pkg.name}</h3>
                  <p className="text-4xl font-black text-white mb-6">
                    {pkg.price}
                    <span className="text-sm text-white/30 font-normal ml-1">/ package</span>
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`block text-center text-[11px] font-black tracking-[0.2em] uppercase py-3.5 transition-colors duration-300 ${
                      pkg.badge
                        ? "bg-[#7B2FBE] hover:bg-[#A855F7] text-white"
                        : "border border-white/15 hover:border-purple-500/50 text-white/70 hover:text-white"
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-xs text-white/25 tracking-wider"
        >
          Need something custom? <a href="#contact" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">Let&apos;s talk</a>
        </motion.p>
      </div>
    </section>
  );
}
