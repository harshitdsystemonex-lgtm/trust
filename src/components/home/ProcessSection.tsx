"use client";

import { motion } from "framer-motion";
import { Layers, Sparkles, MessageCircle, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    title: "Plan",
    description: "We audit your current presence and define a clear strategy for website, marketing, or business growth.",
    icon: Layers,
  },
  {
    title: "Build",
    description: "Design and development happen in agile sprints with frequent reviews to keep delivery aligned with your goals.",
    icon: Sparkles,
  },
  {
    title: "Launch",
    description: "We deploy on modern infrastructure and activate campaigns to start producing measurable results immediately.",
    icon: Rocket,
  },
  {
    title: "Optimize",
    description: "Performance monitoring, analytics, and continual refinement keep your systems improving month after month.",
    icon: BarChart3,
  },
  {
    title: "Support",
    description: "Your team gets direct access to our support channel, making updates, campaigns and compliance changes easy.",
    icon: MessageCircle,
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-24 bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl text-center mx-auto mb-14">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400">
            Our Process
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            A seamless delivery path from brief to launch.
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-8">
            We streamline every stage into a clear workflow so you can focus on results while we handle execution.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.01 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.4, delay: index * 0.08, type: "spring", stiffness: 200, damping: 20 }}
                className="rounded-3xl border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/10">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{step.title}</div>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
