"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useToast } from "@/components/ui/Toast";
import { Shield, Mail, Phone, MapPin, Send } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/internship", label: "Internships" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/services", label: "Web & App Development" },
  { href: "/services/sms-whatsapp", label: "SMS & WhatsApp Marketing" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/refunds", label: "Refund & Returns" },
  { href: "/shipping", label: "Shipping & Delivery" },
];

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast("Please enter a valid email address.", "error");
      return;
    }

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast("Successfully subscribed to our newsletter!", "success");
    }, 1200);
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/20 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Info Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-sm">
              <Shield className="h-4.5 w-4.5" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-zinc-900 dark:text-zinc-50">
              Trust<span className="text-indigo-600 dark:text-indigo-400">Rax</span>
            </span>
          </Link>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">
            TrustRax is your digital growth partner, delivering smart corporate, educational, property, and marketing solutions to scale your business.
          </p>
          <div className="flex flex-col gap-2.5 mt-2">
            <a
              href="mailto:meet@trustrax.com"
              className="flex items-center gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Mail className="h-4 w-4" />
              meet@trustrax.com
            </a>
            <a
              href="tel:+918892011190"
              className="flex items-center gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              +91 8892011190
            </a>
            <div className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <MapPin className="h-4.5 w-4.5 mt-0.5 shrink-0 text-zinc-400" />
              <span>
                K 3 Aknsha Deep Heights, Kunadi, Kota, Rajasthan - 324008
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">
            Our Services
          </h4>
          <ul className="flex flex-col gap-2.5">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">
            Stay Updated
          </h4>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Subscribe to our newsletter to receive the latest updates, digital growth guides, and strategy releases.
          </p>
          <form onSubmit={handleSubscribe} className="relative flex gap-2 mt-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full rounded-xl border border-zinc-200 bg-white/80 dark:border-zinc-800 dark:bg-zinc-950/80 px-3.5 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 dark:focus:ring-indigo-500/20 dark:focus:border-indigo-500 pr-10"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm disabled:opacity-50 cursor-pointer"
              aria-label="Subscribe"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-zinc-200/60 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-950/40">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} TrustRax. All rights reserved. Made in Kota, India.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-end">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
