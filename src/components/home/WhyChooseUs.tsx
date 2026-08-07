"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Users, Rocket } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Trusted Compliance",
    description:
      "We build reliable digital products backed by security audits, DLT-verified messaging, and transparent project roadmaps.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description:
      "A polished, brand-first approach to websites, apps, and campaigns that convert high-value leads and build trust quickly.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "From onboarding to campaign delivery, our team stays with you at every step, ensuring responsiveness and clear communication.",
  },
  {
    icon: Rocket,
    title: "Growth Focused",
    description:
      "We combine technical delivery with business goals so that every feature and campaign has measurable impact.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl text-center mx-auto mb-14">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400">
            Why TrustRax
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Solutions built for fast-moving businesses and high-performing teams.
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-8">
            We pair technical expertise with market strategy to deliver digital experiences that engage customers, reduce friction, and accelerate growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <Card className="h-full border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                  <CardHeader className="flex flex-col gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
