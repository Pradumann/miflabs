"use client";

import { motion } from "framer-motion";
import { Check, Euro, TrendingUp } from "lucide-react";

const plans = [
  {
    title: "Standard Build",
    price: "€2,000",
    equity: "0% equity",
    description: "The full app, delivered in 4 weeks, with no strings attached.",
    features: [
      "Complete MVP in 4 weeks",
      "App Store & Play Store ready",
      "Source code handover",
      "30 days post-launch support",
    ],
    color: "from-cyan-500 to-violet-500",
    recommended: true,
  },
  {
    title: "Equity Partner",
    price: "€1,000",
    equity: "+ 1% equity",
    description: "For founders who want to move fast and keep cash in the business.",
    features: [
      "Complete MVP in 4 weeks",
      "App Store & Play Store ready",
      "Source code handover",
      "60 days post-launch support",
      "Ongoing product advisor",
    ],
    color: "from-emerald-400 to-cyan-500",
    recommended: false,
  },
  {
    title: "Builder Stake",
    price: "€500",
    equity: "+ 2% equity",
    description: "For early-stage ideas with big vision and tight budgets.",
    features: [
      "Complete MVP in 4 weeks",
      "App Store & Play Store ready",
      "Source code handover",
      "90 days post-launch support",
      "Ongoing product advisor",
      "Priority feature updates",
    ],
    color: "from-violet-400 to-fuchsia-500",
    recommended: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950" />
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Pricing</h2>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Fair pricing for serious builders.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            If budget is still a constraint, I am happy to share the risk and work for a discounted cash fee plus a small equity stake.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl card-glass p-7 transition-all hover:glow ${
                plan.recommended ? "ring-2 ring-cyan-500/50" : ""
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                  Most Popular
                </span>
              )}
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${plan.color} text-white shadow-lg`}>
                {plan.recommended ? <Euro size={24} /> : <TrendingUp size={24} />}
              </div>

              <h4 className="mt-6 text-xl font-bold text-white">{plan.title}</h4>
              <p className="mt-2 text-sm text-slate-400">{plan.description}</p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="ml-2 text-sm font-medium text-slate-400">{plan.equity}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check size={16} className="mt-0.5 shrink-0 text-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02]"
              >
                Discuss this option
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
