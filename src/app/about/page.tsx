import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { ShieldCheck, Globe2, Users, Sparkles } from "lucide-react";

const stats = [
  { value: "500+", label: "Projects delivered", icon: ShieldCheck },
  { value: "24/7", label: "Support coverage", icon: Globe2 },
  { value: "99%", label: "Delivery success", icon: Sparkles },
  { value: "120+", label: "Business customers", icon: Users },
];

export default function AboutPage() {
  return (
    <div className="bg-zinc-950 text-white">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">About TrustRax</p>
              <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white">
                We help next-generation businesses build digital momentum.
              </h1>
              <p className="mt-6 max-w-2xl text-zinc-300 leading-8">
                From websites and apps to verified messaging and secure business systems, we design digital products that strengthen brand trust and create measurable growth.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button variant="gradient" href="/services">See Services</Button>
                <Button variant="outline" href="/contact">Contact Us</Button>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="bg-white/5 border-white/10">
                    <CardHeader className="gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-600 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{stat.value}</CardTitle>
                        <CardDescription>{stat.label}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-400">Our vision</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Building reliable digital products for serious teams.
            </h2>
            <p className="text-zinc-400 leading-8">
              We believe every business deserves digital systems that feel premium, operate securely, and deliver results. That’s why our solutions combine product thinking with practical execution.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Card className="border-zinc-800 bg-zinc-950/90">
              <CardHeader>
                <CardTitle>Client-first delivery</CardTitle>
                <CardDescription>
                  We prioritize communication, milestone clarity, and quality reviews at every stage of your project.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-zinc-800 bg-zinc-950/90">
              <CardHeader>
                <CardTitle>Operational excellence</CardTitle>
                <CardDescription>
                  Our team combines technical expertise with support systems designed to keep your launch smooth and scalable.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
