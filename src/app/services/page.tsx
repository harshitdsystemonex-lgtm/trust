import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Code2, Megaphone, MessageCircleCode, Smartphone, Layers } from "lucide-react";

const serviceBlocks = [
  {
    title: "Web & App Development",
    description: "Custom responsive websites, e-commerce stores, mobile apps, and backend automation that help businesses launch faster.",
    icon: Code2,
  },
  {
    title: "Digital Marketing",
    description: "SEO, Google Ads, social campaigns, and branding that drive qualified traffic and measurable conversions.",
    icon: Megaphone,
  },
  {
    title: "WhatsApp & SMS",
    description: "Official WhatsApp API journeys, bulk SMS alerts, chatbots, and CRM integration for instant customer follow-up.",
    icon: MessageCircleCode,
  },
  {
    title: "Mobile Solutions",
    description: "Native and cross-platform apps built for real user engagement, reliability, and app store readiness.",
    icon: Smartphone,
  },
  {
    title: "Brand Strategy",
    description: "Brand identity, landing page optimization, and digital growth plans to retain customers and increase lifetime value.",
    icon: Layers,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-zinc-950 text-white">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Our Services</p>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Digital operations, marketing, and verified finance services for growth-focused teams.
            </h1>
            <p className="mt-6 text-zinc-300 leading-8">
              TrustRax delivers premium digital solutions with strong technical foundations and high-conversion campaigns that help brands grow.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="gradient" href="/contact">Talk To Us</Button>
              <Button variant="outline" href="/services/sms-whatsapp">Explore Marketing Plans</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceBlocks.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border-zinc-800 bg-white/5">
                <CardContent>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/10 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                  <CardDescription className="mt-3 text-zinc-300 leading-7">{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
