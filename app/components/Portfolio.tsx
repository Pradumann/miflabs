"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Homesty",
    description: "A modern property management and living experience app for tenants and homeowners.",
    color: "from-emerald-400 to-cyan-500",
    android: "https://play.google.com/store/apps/details?id=com.homesty.mobile&pli=1",
    ios: "https://apps.apple.com/us/app/homesty/id6596743487",
  },
  {
    title: "Keynest",
    description: "Key exchange and short-stay management made simple for hosts, guests, and agents.",
    color: "from-violet-400 to-fuchsia-500",
    android: "https://play.google.com/store/apps/details?id=com.newkeynest&hl=en_uk",
    ios: "https://apps.apple.com/gb/app/keynest-app/id1468266322",
  },
  {
    title: "Jeevahealth",
    description: "A holistic health companion app connecting users with personalized wellness journeys.",
    color: "from-amber-400 to-rose-500",
    android: "https://play.google.com/store/apps/details?id=com.jeevahealth.cybhi&hl=en_IN",
    ios: "https://apps.apple.com/in/app/bounze-cybhi/id6737420634",
  },
];

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z" />
    </svg>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Portfolio</h2>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Apps that started as ideas, just like yours.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Each project below is a real app, live on the App Store and Google Play, built with the same care I will bring to yours.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl card-glass p-6 transition-all hover:glow"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.color}`} />
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} shadow-lg`}>
                <span className="text-xl font-bold text-white">{project.title[0]}</span>
              </div>

              <h4 className="mt-6 text-xl font-bold text-white">{project.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={project.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/40 px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700/50"
                >
                  <PlayStoreIcon />
                  Play Store
                </a>
                <a
                  href={project.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/40 px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-700/50"
                >
                  <AppStoreIcon />
                  App Store
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
