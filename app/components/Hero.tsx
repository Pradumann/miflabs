"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20"
    >
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
        >
          <Sparkles size={16} />
          <span>Startup Mobile App Development</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Your app idea, built{" "}
          <span className="text-gradient">in 4 weeks</span>
          <br className="hidden sm:block" /> for just{" "}
          <span className="text-gradient">€2000</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
        >
          I am a solo mobile app developer who believes every great idea deserves a beautiful,
          lasting home on a phone screen. No agencies. No hidden costs. Just pure craft, honest
          collaboration, and an app we can both be proud of.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/25 transition-transform hover:scale-105"
          >
            <Zap size={18} />
            Start Your Free Consultation
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-base font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800/50"
          >
            See My Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-slate-500"
        >
          <a href="#about-story" className="flex flex-col items-center gap-2 text-xs hover:text-cyan-400">
            <span>Scroll to explore</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
