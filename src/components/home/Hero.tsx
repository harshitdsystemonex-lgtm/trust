"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Zap, Shield, Sparkles, TrendingUp } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-32 bg-radial-[circle_at_top] from-indigo-500/10 via-transparent to-transparent">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left gap-6"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider dark:bg-indigo-950/40 dark:border-indigo-900/60 dark:text-indigo-400 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Digital Growth Partner
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight"
          >
            Reimagining Digital Support.
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mt-2">
              Empowering India&apos;s Tech.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl"
          >
            TrustRax provides premium end-to-end digital solutions: from custom websites and apps to official WhatsApp marketing and banking solutions. We turn your growth goals into reality.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center w-full sm:w-auto"
          >
            <Button variant="gradient" size="lg" href="/contact" className="w-full sm:w-auto group">
              Get Started
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" href="/services" className="w-full sm:w-auto">
              Explore Services
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-8 gap-y-3 mt-4 pt-6 border-t border-zinc-200/50 dark:border-zinc-800/80 w-full"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-zinc-800 dark:text-zinc-200">500+</span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">Clients Nationwide</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-zinc-800 dark:text-zinc-200">99%</span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">Project Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-zinc-800 dark:text-zinc-200">24/7</span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">Active Support</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Graphic Representation */}
        <div className="lg:col-span-5 relative w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[400px] aspect-square"
          >
            {/* Ambient background glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 opacity-20 blur-[80px]" />

            {/* Glowing Center Ring */}
            <div className="absolute inset-0 rounded-full border border-zinc-200/20 dark:border-zinc-800/30 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-dashed border-zinc-200/40 dark:border-zinc-800/40 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Interactive Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              whileHover={{ scale: 1.02 }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-8 left-0 right-0 mx-auto w-[280px] p-4 rounded-2xl border border-zinc-200 bg-white/70 shadow-lg dark:border-zinc-800 dark:bg-zinc-950/80 backdrop-blur-md flex items-center gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 shrink-0">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Growth Target
                </span>
                <span className="block font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                  Audience Reach +284%
                </span>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              whileHover={{ scale: 1.02 }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-16 -left-6 w-[200px] p-4 rounded-2xl border border-zinc-200 bg-white/70 shadow-lg dark:border-zinc-800 dark:bg-zinc-950/80 backdrop-blur-md flex items-center gap-3"
            >
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Automation
                </span>
                <span className="block font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                  12.4k Campaigns
                </span>
              </div>
            </motion.div>

            {/* Floating Card 3 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              whileHover={{ scale: 1.02 }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.2 }}
              className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-[180px] p-4 rounded-2xl border border-zinc-200 bg-white/70 shadow-lg dark:border-zinc-800 dark:bg-zinc-950/80 backdrop-blur-md flex items-center gap-3"
            >
              <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400 shrink-0">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Security
                </span>
                <span className="block font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                  DLT Verified
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
