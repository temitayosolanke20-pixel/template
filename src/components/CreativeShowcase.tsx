"use client";

import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEOS = [
  {
    id: 1,
    src: "/videos/creative-01.mp4",
    label: "Brand Spot",
    tag: "Video Creative",
  },
  {
    id: 2,
    src: "/videos/creative-02.mp4",
    label: "Product Feature",
    tag: "Video Creative",
  },
  {
    id: 3,
    src: "/videos/creative-03.mp4",
    label: "Campaign Ad",
    tag: "Video Creative",
  },
];

function VideoCard({
  video,
  index,
}: {
  video: (typeof VIDEOS)[0];
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [active, setActive] = useState(false);

  const toggleMute = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  }, []);

  const handleMouseEnter = () => {
    setActive(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setActive(false);
    /* Keep playing — we want autoplay loop. This just removes the hover state. */
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.14, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden border border-white/[0.07] hover:border-purple-500/35 transition-colors duration-500"
      style={{ aspectRatio: "9/16" }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={video.src}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />

      {/* Dark overlay — lifts on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/10 transition-all duration-500" />

      {/* Purple tint overlay — subtle brand color wash */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(123,47,190,0.25) 100%)" }}
      />

      {/* Top tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className="text-[9px] font-black tracking-[0.35em] uppercase text-purple-400/80">
          {video.tag}
        </span>
      </div>

      {/* Bottom label + mute button */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex items-end justify-between">
        <div>
          <p className="text-xs font-black tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors">
            {video.label}
          </p>
        </div>

        {/* Mute / unmute toggle */}
        <button
          onClick={(e) => { e.stopPropagation(); toggleMute(); }}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-black/50 border border-white/15 hover:border-purple-500/50 text-white/60 hover:text-white transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100"
        >
          {muted ? (
            /* Muted icon */
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
            </svg>
          ) : (
            /* Unmuted icon */
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
              <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
            </svg>
          )}
        </button>
      </div>

      {/* Active border glow */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.3)" }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function CreativeShowcase() {
  return (
    <section id="creative-work" className="py-32 bg-[#0D0D1A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-black tracking-[0.45em] uppercase text-purple-400 mb-4">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
              Creatives That{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #A855F7, #7B2FBE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Stop the Scroll
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:text-right max-w-xs"
          >
            <p className="text-sm text-white/40 leading-relaxed">
              Hover to see them in action. Click the speaker icon to hear the audio.
            </p>
            <a
              href="#marketplace"
              className="inline-flex items-center gap-2 mt-4 text-[11px] font-black tracking-[0.2em] uppercase text-purple-400 hover:text-white transition-colors group"
            >
              Order a Package
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        {/* 3-column video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {VIDEOS.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-xs text-white/22 tracking-wider"
        >
          These are real creatives produced for clients. Your brand gets the same treatment.
        </motion.p>
      </div>
    </section>
  );
}
