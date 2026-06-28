"use client";

import { motion } from "framer-motion";
import { Heart, Code2, Rocket, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Built with care",
    description: "Every pixel, every interaction, every line of code is crafted like it is my own product.",
  },
  {
    icon: Code2,
    title: "Clean tech stack",
    description: "Modern React Native, Flutter, and native iOS/Android tooling chosen for stability and speed.",
  },
  {
    icon: Rocket,
    title: "Launch ready",
    description: "From app store submission to onboarding screens, I deliver apps that are ready to ship.",
  },
  {
    icon: Shield,
    title: "Forever quality",
    description: "I build with maintenance in mind so your app keeps running beautifully as platforms evolve.",
  },
];

export function About() {
  return (
    <section id="about-story" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">About</h2>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Turning ideas into apps that feel like magic.
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              I started Make It Forever Labs because I believe the best apps are born from passion,
              not process overload. As a solo, founder-led developer, I work shoulder-to-shoulder with startups,
              small business owners, and dreamers who want more than a generic template.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Whether you are solving a problem for thousands of users or building a simple tool for your
              community, I bring the same question to every project: <em>How do we make this last forever?</em>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-glass rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:glow"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300">
                  <value.icon size={22} />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-white">{value.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
