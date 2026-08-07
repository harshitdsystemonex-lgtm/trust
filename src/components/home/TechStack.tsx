"use client";

import { motion } from "framer-motion";

const stack = [
  { label: "Web & Mobile", items: ["Next.js", "React", "Tailwind", "React Native"] },
  { label: "Marketing", items: ["WhatsApp API", "SMS Campaigns", "SEO", "Paid Ads"] },
  { label: "Automation", items: ["CRM Integration", "Chatbots", "Lead Funnels", "Analytics"] },
];

export function TechStack() {
  return (
    <section className="py-20 md:py-24 bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl text-center mx-auto mb-14">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Technology & Services
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            The tools and services we use to power growth.
          </h2>
          <p className="mt-4 text-white/70 leading-8">
            We use modern engineering, automation and campaign systems to deliver fast, scalable solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stack.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
