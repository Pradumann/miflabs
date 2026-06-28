"use client";

import { motion } from "framer-motion";
import { Calendar, Euro, MessageCircle, HeartHandshake, Receipt, Clock } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    title: "Any app in 4 weeks",
    description:
      "A focused, realistic timeline. I ship a working, polished app in just one month so you can start learning from real users fast.",
    stat: "4 weeks",
  },
  {
    icon: Euro,
    title: "Any app in €2000",
    description:
      "No hourly surprises. One clear price for a complete MVP that you can show, test, and grow with confidence.",
    stat: "€2000",
  },
  {
    icon: MessageCircle,
    title: "Free consultation",
    description:
      "Tell me your idea. I will help you shape it, choose the right tech, and map the fastest path to launch.",
    stat: "Free",
  },
  {
    icon: HeartHandshake,
    title: "No harm in free consultation",
    description:
      "No pressure, no commitment. If we are not a fit, you still walk away with a clearer plan and honest feedback.",
    stat: "No risk",
  },
  {
    icon: Receipt,
    title: "Simple billing",
    description:
      "One milestone, one invoice. No hidden fees, no scope creep tricks, no finance-degree required to read the contract.",
    stat: "One invoice",
  },
  {
    icon: Clock,
    title: "Ongoing support",
    description:
      "After launch, I stay close for fixes, updates, and guidance. Your app deserves a partner, not just a builder.",
    stat: "Forever",
  },
];

export function Features() {
  return (
    <section id="highlights" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Key Highlights</h2>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why founders trust this offer.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            No jargon, no surprises. Just a clear promise designed around the things that actually matter when you are building your first app.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative rounded-3xl card-glass p-8 transition-transform hover:-translate-y-2"
            >
              <div className="absolute right-6 top-6 text-2xl font-bold text-slate-700/50">
                {item.stat}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20">
                <item.icon size={24} />
              </div>
              <h4 className="mt-6 text-xl font-semibold text-white">{item.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
