import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ImpactSection } from "@/components/home/ImpactSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { Testimonials } from "@/components/home/Testimonials";
import { TechStack } from "@/components/home/TechStack";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-zinc-950 text-white">
      <Hero />
      <ImpactSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <TechStack />
    </div>
  );
}
