"use client";

import { motion } from "framer-motion";
import { CheckCircle2, LayoutGrid, ArrowRight, Rocket } from "lucide-react";

const features = [
  {
    title: "Fully interactive homepage",
    description: "Every section is designed to feel alive with hover feedback, gradient accents, and crisp responsive layouts.",
    icon: LayoutGrid,
  },
  {
    title: "Optimized conversions",
    description: "Premium UX patterns and clear action paths keep users moving toward your contact and proposal forms.",
    icon: ArrowRight,
  },
  {
    title: "Modern motion design",
    description: "Smooth entrance animations and subtle floating cards create a confident, high-end brand experience.",
    icon: Rocket,
  },
  {
    title: "Trustworthy visuals",
    description: "Bold section spacing, glass-like cards, and accessible color contrast make the homepage feel credible.",
    icon: CheckCircle2,
  },
];

export function FeatureShowcase() {
  return (
    <section className="bg-white dark:bg-zinc-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-500 dark:text-indigo-300">Homepage design</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              A clean homepage built for clarity and lead generation.
            </h2>
            <p className="mt-5 max-w-xl text-zinc-600 dark:text-zinc-400 leading-8">
              Every section is focused on making it easy for visitors to understand your offer and take the next step.
            </p>
          </div>
          <div className="grid gap-5">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-7 shadow-xl shadow-zinc-200/50 transition hover:-translate-y-1 hover:border-indigo-300 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-indigo-500"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-7">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
