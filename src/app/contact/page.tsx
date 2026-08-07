import { ContactForm } from "@/components/contact/ContactForm";
import { Accordion } from "@/components/ui/Accordion";

const faqs = [
  {
    title: "How fast can I start a project?",
    content: "Most website and marketing engagements can begin within 3-5 business days after agreement and initial requirements are approved.",
  },
  {
    title: "Do you support WhatsApp API integration?",
    content: "Yes, we provide official WhatsApp Business API setup, templates, and automated workflows for customer communication.",
  },
  {
    title: "What support do you provide after launch?",
    content: "We help with ongoing website updates, campaign optimization, and technical maintenance to keep your digital operations running smoothly.",
  },
  {
    title: "Is remote work available for internship and career roles?",
    content: "Yes. Our internship and work-from-home positions are designed to be remote with regular mentoring and milestone-based reviews.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-zinc-950 text-white">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_0.9fr] items-start">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Contact Us</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Tell us about your digital goals and let’s build the next phase.
              </h1>
              <p className="max-w-2xl text-zinc-300 leading-8">
                Send a detailed inquiry, request a demo, or ask about support options. We’ll reply with a tailored response quickly.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-zinc-800 bg-white/5 p-6">
                  <h2 className="text-lg font-semibold text-white">Email</h2>
                  <p className="mt-3 text-zinc-400">meet@trustrax.com</p>
                </div>
                <div className="rounded-3xl border border-zinc-800 bg-white/5 p-6">
                  <h2 className="text-lg font-semibold text-white">Phone</h2>
                  <p className="mt-3 text-zinc-400">+91 88920 11190</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-white/5 p-6 shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl text-center mx-auto mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">FAQs</p>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Frequently asked questions.
            </h2>
          </div>
          <Accordion items={faqs.map((faq) => ({ title: faq.title, content: faq.content }))} />
        </div>
      </section>
    </div>
  );
}
