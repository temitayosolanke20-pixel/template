"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 text-center"
      >
        <motion.h1
          className="text-5xl font-bold tracking-tight text-black dark:text-white"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Framer + Next.js
        </motion.h1>

        <motion.p
          className="max-w-md text-lg text-zinc-500 dark:text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          This project is wired up with{" "}
          <span className="font-semibold text-black dark:text-white">
            Framer Motion
          </span>{" "}
          for animations and{" "}
          <span className="font-semibold text-black dark:text-white">
            unframer
          </span>{" "}
          to sync components from your Framer project.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href="https://www.framer.com/motion/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-2.5 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Framer Motion Docs
          </a>
          <a
            href="https://github.com/remorses/unframer"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/10 dark:border-white/10 px-6 py-2.5 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            unframer Docs
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
