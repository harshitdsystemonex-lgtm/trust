"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

const quotes = [
  {
    name: "Sanya Singh",
    role: "Founder, EdTech Startup",
    quote: "TrustRax delivered our website and the WhatsApp campaign in under 4 weeks. The leads were already more qualified from day one.",
  },
  {
    name: "Aditya Jain",
    role: "Operations Head, Operations Services",
    quote: "The launch workflow and digital campaign management saved us time and helped our teams work more efficiently.",
  },
  {
    name: "Nisha Patel",
    role: "Marketing Manager, Retail Brand",
    quote: "Their digital marketing team understood our audience quickly and made every campaign feel premium and measurable.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl text-center mx-auto mb-14">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400">
            Client Feedback
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Trusted by businesses across sectors.
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-8">
            Our clients appreciate practical delivery, fast support, and campaigns built to perform at scale.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {quotes.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <Card className="h-full border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
                <CardContent>
                  <div className="mb-4 inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-700 dark:text-indigo-300">
                    <Star className="mr-2 h-4 w-4" />
                    Highly recommended
                  </div>
                  <CardDescription className="text-zinc-700 dark:text-zinc-300 leading-7">
                    “{item.quote}”
                  </CardDescription>
                </CardContent>
                <CardHeader className="pt-0 px-6 pb-6">
                  <CardTitle className="text-base">{item.name}</CardTitle>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.role}</p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
