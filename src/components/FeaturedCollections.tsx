"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ─── EDIT featured collections ───
const COLLECTIONS = [
  {
    title: "Tops",
    subtitle: "Graphic tees, hoodies & more",
    href: "/collections/tops",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  },
  {
    title: "Bottoms",
    subtitle: "Joggers, shorts & sweats",
    href: "/collections/bottoms",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
  },
  {
    title: "Accessories",
    subtitle: "Hats, bags & extras",
    href: "/collections/accessories",
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800&q=80",
  },
];

export function FeaturedCollections() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-10"
      >
        Shop by Category
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {COLLECTIONS.map((col, i) => (
          <motion.div
            key={col.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            <Link href={col.href} className="group relative block overflow-hidden aspect-[3/4] bg-zinc-900">
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${col.image})` }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xl font-black uppercase tracking-wider">{col.title}</p>
                <p className="text-xs text-white/60 mt-1 tracking-wider">{col.subtitle}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
