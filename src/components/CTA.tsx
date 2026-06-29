"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  name: string; business: string; email: string;
  phone: string; service: string; message: string;
};
type Status = "idle" | "submitting" | "success" | "error";

export function CTA() {
  const [form, setForm] = useState<FormState>({ name: "", business: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Submission failed.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const inputClass = "w-full bg-white/[0.03] border border-white/10 text-[#F8F8FF] text-sm px-5 py-4 outline-none focus:border-purple-500/50 transition-colors placeholder:text-[#F8F8FF]/20";

  return (
    <section id="contact" className="py-32 md:py-40 bg-[#0D0D1A] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none pulse-glow" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, rgba(123,47,190,0.18) 0%, transparent 65%)" }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] font-black tracking-[0.45em] uppercase text-purple-400 mb-6">Let&apos;s Talk</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-10">
              Ready to Stop Leaving Money{" "}
              <span style={{ background: "linear-gradient(135deg, #A855F7, #7B2FBE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                on the Table?
              </span>
            </h2>

            <div className="space-y-5 mb-12">
              {["Free 30-minute strategy session", "No obligation — just clarity", "Limited client spots"].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="text-purple-400 text-xs">◆</span>
                  <p className="text-sm text-[#F8F8FF]/60">{item}</p>
                </div>
              ))}
            </div>

            <div className="p-6 border border-white/[0.06] bg-white/[0.02]">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F8F8FF]/30 mb-2">Baltimore, MD</p>
              <p className="text-sm text-[#F8F8FF]/55">Serving MD, DC, VA and beyond. Remote engagements nationwide.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {status === "success" ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mb-8">
                  <svg width="24" height="24" fill="none" stroke="#A855F7" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">We Got It.</h3>
                <p className="text-sm text-[#F8F8FF]/50 max-w-xs">Expect a reply within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" required placeholder="Your Name" value={form.name} onChange={set("name")} className={inputClass} />
                  <input type="text" placeholder="Business Name" value={form.business} onChange={set("business")} className={inputClass} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="email" required placeholder="Email Address" value={form.email} onChange={set("email")} className={inputClass} />
                  <input type="tel" placeholder="Phone (optional)" value={form.phone} onChange={set("phone")} className={inputClass} />
                </div>
                <select value={form.service} onChange={set("service")} className={`${inputClass} appearance-none`}>
                  <option value="" disabled>Service You&apos;re Interested In</option>
                  <option value="Ad Management (Retainer)">Ad Management (Retainer)</option>
                  <option value="Custom Website">Custom Website</option>
                  <option value="Website Template">Website Template</option>
                  <option value="Video Creative Package">Video Creative Package</option>
                  <option value="Full Brand Package">Full Brand Package</option>
                  <option value="Not Sure — Just Exploring">Not Sure — Just Exploring</option>
                </select>
                <textarea rows={4} required placeholder="Tell us about your business..."
                  value={form.message} onChange={set("message")} className={`${inputClass} resize-none`}
                />
                {status === "error" && <p className="text-xs text-red-400 tracking-wide">{errorMsg}</p>}
                <button type="submit" disabled={status === "submitting"}
                  className="w-full bg-[#7B2FBE] hover:bg-[#A855F7] disabled:opacity-60 disabled:cursor-not-allowed text-[#F8F8FF] text-[11px] font-black tracking-[0.3em] uppercase py-5 transition-colors duration-300"
                >
                  {status === "submitting" ? "Sending…" : "Book My Free Strategy Call"}
                </button>
                <p className="text-center text-[10px] text-[#F8F8FF]/20 tracking-wider">No spam. No pitch.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
