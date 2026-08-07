"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, TrendingUp, Globe2 } from "lucide-react";

const impactStats = [
  { label: "Quality delivery", value: "99%", icon: ShieldCheck },
  { label: "Campaign growth", value: "+284%", icon: TrendingUp },
  { label: "Remote talent", value: "24/7", icon: Globe2 },
  { label: "Client retention", value: "93%", icon: Sparkles },
];

export function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Trusted impact</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Premium digital growth for companies who want beautiful results.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-zinc-400 leading-8">
            A modern homepage deserves premium interactions, polished details, and measurable performance across every customer journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {impactStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-zinc-900/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-4xl font-bold tracking-tight text-white">{stat.value}</p>
                <p className="mt-3 text-sm text-zinc-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
