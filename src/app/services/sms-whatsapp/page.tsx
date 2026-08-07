import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Starter Plan",
    price: "₹7,999",
    volume: "5,000 messages",
    features: ["WhatsApp API setup","Basic campaign templates","Monthly analytics"],
  },
  {
    name: "Growth Plan",
    price: "₹14,999",
    volume: "15,000 messages",
    features: ["Automated campaigns","CRM routing","Lead follow-up workflows"],
  },
  {
    name: "Premium Plan",
    price: "₹29,999",
    volume: "50,000 messages",
    features: ["Dedicated account manager","Rich media templates","Multi-channel follow-up"],
  },
];

export default function SmsWhatsappPage() {
  return (
    <div className="bg-zinc-950 text-white">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.14),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Marketing Plans</p>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Official SMS & WhatsApp marketing packages built for conversions.
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-zinc-300 leading-8">
            Choose the right plan for your campaign size and get setup support, creative messaging, and lead automation from a trusted provider.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="border-zinc-800 bg-white/5">
              <CardHeader className="gap-4">
                <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                <p className="text-lg font-semibold text-indigo-300">{plan.price}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-3xl bg-zinc-900/70 p-4 text-zinc-200">
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Message Volume</p>
                  <p className="mt-2 text-xl font-semibold text-white">{plan.volume}</p>
                </div>
                <ul className="space-y-3 text-zinc-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="rounded-2xl bg-white/5 p-3">{feature}</li>
                  ))}
                </ul>
                <Button variant="gradient" href="/contact" className="w-full">
                  Get This Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
