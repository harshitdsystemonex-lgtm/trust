"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";

export function FloatingActionWidgets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappUrl = "https://wa.me/918892011190?text=Hello%20TrustRax%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";
  const emailUrl = "mailto:meet@trustrax.com?subject=Inquiry%20from%20Website";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 transition-colors cursor-pointer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        {/* Customized WhatsApp SVG */}
        <svg
          className="h-6.5 w-6.5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.02 14.07 1.01 11.5 1.012c-5.441 0-9.866 4.372-9.87 9.802 0 1.698.452 3.355 1.309 4.811L1.926 21.93l6.452-1.689zM18.867 15.35c-.32-.16-1.897-.938-2.193-1.047-.297-.108-.512-.162-.727.16-.215.324-.834 1.047-1.021 1.263-.188.216-.376.243-.696.082-.32-.16-1.354-.5-2.58-1.593-.952-.85-1.594-1.9-1.782-2.22-.187-.324-.02-.5-.18-.66-.145-.145-.32-.377-.48-.567-.16-.188-.213-.323-.32-.54-.107-.215-.053-.404-.027-.567.027-.162.215-.512.32-.76.107-.25.16-.426.24-.593.08-.168.04-.316.02-.48-.02-.162-.727-1.751-1.021-2.457-.29-.696-.58-.599-.8-.61-.206-.01-.44-.01-.673-.01-.233 0-.61.087-.93.43-.32.343-1.22 1.196-1.22 2.91 0 1.714 1.25 3.376 1.42 3.606.172.23 2.458 3.753 5.957 5.263.833.36 1.482.574 1.99.736.837.266 1.6.228 2.2.14.67-.1 2.064-.843 2.355-1.659.29-.816.29-1.516.202-1.659-.088-.143-.32-.224-.64-.384z" />
        </svg>
      </motion.a>

      {/* Email Button */}
      <motion.a
        href={emailUrl}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition-colors cursor-pointer"
        title="Email Support"
        aria-label="Email Support"
      >
        <Mail className="h-5.5 w-5.5" />
      </motion.a>

      {/* Scroll to Top Trigger */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 shadow-lg cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
