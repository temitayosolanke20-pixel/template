"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── EDIT reviews ───
const REVIEWS = [
  {
    id: 1,
    name: "Jordan M.",
    location: "New York, NY",
    rating: 5,
    text: "Quality is insane. The hoodie fits perfectly oversized, and the material is thick — definitely worth every penny. Already ordered two more pieces.",
    product: "Oversized Hoodie",
  },
  {
    id: 2,
    name: "Alex T.",
    location: "Los Angeles, CA",
    rating: 5,
    text: "Shipping was fast, packaging was clean, and the tee looks even better in person. The graphics are sharp and the fit is exactly what I wanted. 10/10.",
    product: "Classic Logo Tee",
  },
  {
    id: 3,
    name: "Casey R.",
    location: "Chicago, IL",
    rating: 5,
    text: "I've bought from a lot of streetwear brands and this is easily top tier. The cargo joggers are comfortable all day and the stitching is clean. Highly recommend.",
    product: "Cargo Joggers",
  },
  {
    id: 4,
    name: "Morgan D.",
    location: "Houston, TX",
    rating: 5,
    text: "Got the zip hoodie and I literally get compliments every time I wear it. The fit, the weight, the design — all perfect. Will be back for the next drop for sure.",
    product: "Heavy Zip Hoodie",
  },
  {
    id: 5,
    name: "Riley K.",
    location: "Miami, FL",
    rating: 5,
    text: "Been waiting on a brand like this. Everything feels premium and the sizing guide was accurate. Love the aesthetic and can't wait for more drops.",
    product: "Graphic Long Sleeve",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? "#fff" : "none"} stroke="#fff" strokeWidth="1.5">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-3">
            Customer Reviews
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tight">
            What People Are Saying
          </h2>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <Stars count={5} />
            <span className="text-sm text-white/60">5.0 · {REVIEWS.length * 47}+ reviews</span>
          </div>
        </motion.div>

        {/* Active review */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <Stars count={REVIEWS[active].rating} />
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90 italic">
                &ldquo;{REVIEWS[active].text}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-bold text-sm tracking-widest uppercase">{REVIEWS[active].name}</p>
                <p className="text-xs text-white/40 mt-1">
                  {REVIEWS[active].location} · {REVIEWS[active].product}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? "bg-white w-6" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {REVIEWS.slice(0, 3).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 p-6 border border-white/5"
            >
              <Stars count={review.rating} />
              <p className="mt-4 text-sm text-white/80 leading-relaxed line-clamp-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs font-bold tracking-wider uppercase">{review.name}</p>
                <p className="text-xs text-white/40 mt-0.5">{review.product}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
