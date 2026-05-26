"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ─── EDIT products ───
const PRODUCTS = [
  {
    id: "1",
    name: "Classic Logo Tee",
    price: "$45",
    badge: "New",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
    href: "/products/classic-logo-tee",
  },
  {
    id: "2",
    name: "Oversized Hoodie",
    price: "$120",
    badge: "Selling Fast",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
    href: "/products/oversized-hoodie",
  },
  {
    id: "3",
    name: "Cargo Joggers",
    price: "$95",
    badge: null,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    href: "/products/cargo-joggers",
  },
  {
    id: "4",
    name: "Graphic Long Sleeve",
    price: "$65",
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80",
    href: "/products/graphic-long-sleeve",
  },
  {
    id: "5",
    name: "Logo Snapback",
    price: "$40",
    badge: null,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80",
    href: "/products/logo-snapback",
  },
  {
    id: "6",
    name: "Heavy Zip Hoodie",
    price: "$145",
    badge: "New",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80",
    href: "/products/heavy-zip-hoodie",
  },
  {
    id: "7",
    name: "Track Pants",
    price: "$85",
    badge: null,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
    href: "/products/track-pants",
  },
  {
    id: "8",
    name: "Washed Tee",
    price: "$50",
    badge: "Selling Fast",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    href: "/products/washed-tee",
  },
];

export function ProductGrid() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-black uppercase tracking-tight"
        >
          New Arrivals
        </motion.h2>
        <Link
          href="/collections/new"
          className="text-xs font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors underline underline-offset-4"
        >
          View All
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <Link href={product.href} className="group block">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4] bg-zinc-900 mb-3">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-white text-black text-[10px] font-black uppercase tracking-widest px-2 py-1">
                    {product.badge}
                  </span>
                )}
                {/* Quick add */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white text-black text-xs font-black tracking-widest uppercase text-center py-3">
                  Quick Add
                </div>
              </div>

              {/* Info */}
              <p className="text-sm font-bold tracking-wide">{product.name}</p>
              <p className="text-sm text-white/50 mt-0.5">{product.price}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
