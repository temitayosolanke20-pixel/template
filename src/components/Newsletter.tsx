"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// ─── EDIT newsletter section content ───
const CONTENT = {
  eyebrow: "Join the community",
  headline: "GET EARLY ACCESS TO DROPS",
  subtext: "Sign up and be the first to know about new releases, restocks, and exclusive offers.",
  placeholder: "Your email address",
  buttonLabel: "Subscribe",
  successMessage: "You're in. Stay tuned.",
};

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
    // TODO: wire up to your email provider (Klaviyo, Mailchimp, etc.)
  };

  return (
    <section className="py-24 px-6 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-4">
          {CONTENT.eyebrow}
        </p>
        <h2 className="text-4xl font-black uppercase tracking-tight mb-4">
          {CONTENT.headline}
        </h2>
        <p className="text-sm text-white/50 mb-8">{CONTENT.subtext}</p>

        {submitted ? (
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-lg font-bold tracking-widest uppercase text-white"
          >
            {CONTENT.successMessage}
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={CONTENT.placeholder}
              className="flex-1 bg-zinc-900 border border-white/10 text-white text-sm px-5 py-4 outline-none focus:border-white/30 transition-colors placeholder:text-white/30"
            />
            <button
              type="submit"
              className="bg-white text-black text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              {CONTENT.buttonLabel}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
