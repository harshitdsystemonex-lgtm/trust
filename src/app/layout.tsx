import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { FloatingActionWidgets } from "@/components/layout/FloatingActionWidgets";
import { CookieConsent } from "@/components/ui/CookieConsent";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrustRax - Digital Growth Partner | Custom Web, App & Marketing",
  description:
    "Empowering businesses across India with custom website design, mobile application development, digital marketing, official WhatsApp API integrations, and comprehensive corporate solutions.",
  keywords: [
    "TrustRax",
    "web development India",
    "app development Kota",
    "digital marketing services",
    "WhatsApp Marketing API",
    "bulk SMS marketing",
    "business automation",
    "internship Kota",
  ],
  authors: [{ name: "TrustRax Team", url: "https://trustrax.com" }],
  openGraph: {
    title: "TrustRax - Digital Growth Partner",
    description:
      "Integrated web, app, digital marketing, and business automation services to scale your operations pan-India.",
    url: "https://trustrax.com",
    siteName: "TrustRax",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrustRax - Digital Growth Partner",
    description: "Scale your business with end-to-end IT, SMM, and financial support services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-body bg-white text-zinc-950 transition-colors duration-300 selection:bg-indigo-500/30 dark:bg-zinc-950 dark:text-white">
        <ThemeProvider>
          <ToastProvider>
            <ScrollProgress />
            <Header />
            <main className="flex-grow flex flex-col">{children}</main>
            <Footer />
            <FloatingActionWidgets />
            <CookieConsent />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
