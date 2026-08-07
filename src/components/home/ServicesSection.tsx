"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Code2,
  Megaphone,
  MessageCircleCode,
  Smartphone,
  Layers,
  LineChart,
  Search,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Responsive, secure, and stunning websites built with modern frameworks or WordPress. Fast loading speeds and high conversion rate optimization.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & SMM",
    description:
      "Result-driven marketing campaigns including SEO, brand building, content strategies, and social media page management to engage targeted audiences.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: MessageCircleCode,
    title: "WhatsApp Business API",
    description:
      "Official WhatsApp API integrations, automated messaging campaigns, chatbot workflows, and CRM setup to increase lead conversions.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "High-performance native and cross-platform mobile apps for iOS and Android, built from concept to App Store/Google Play deployment.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Layers,
    title: "WordPress Plugins & Dev",
    description:
      "Custom plugin development, setup, and performance tuning to extend functionality and streamline administrative operations.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: LineChart,
    title: "Marketing Strategy Support",
    description:
      "Full-funnel execution plans. A dedicated account manager aligns leads, executes ads, and tracks campaign analytics to hit targets.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Search,
    title: "SEO Audits & Auditing Tools",
    description:
      "Thorough website audits, competitor reviews, targeted keyword research, and on-page adjustments to rank higher on Google search engine result pages.",
    color: "from-violet-500 to-fuchsia-500",
  },
];

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="services" className="relative py-20 md:py-28 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent opacity-60" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50">
            Our Offerings
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight text-zinc-900 dark:text-zinc-50">
            Services That Drive Growth & Support Success
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            We provide end-to-end IT, marketing, and business solutions tailored to help you scale operations, generate qualified leads, and verify quality.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <Card className="h-full group hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl dark:bg-zinc-900/40" glow>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${service.color} text-white shadow-md shadow-indigo-500/10 transition-transform duration-300 group-hover:-translate-y-1`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg md:text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Services CTA Banner */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-3xl border border-zinc-200 bg-white/70 shadow-lg dark:border-zinc-800 dark:bg-zinc-900/60 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex p-3 rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg md:text-xl text-zinc-900 dark:text-zinc-50">
                Looking for customized bulk marketing services?
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-0.5">
                Check out our Bulk SMS & WhatsApp marketing campaigns for instant notifications.
              </p>
            </div>
          </div>
          <Button variant="gradient" href="/services/sms-whatsapp" className="group w-full md:w-auto shrink-0">
            View Marketing Plans
            <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
