import { CareersForm } from "@/components/careers/CareersForm";

export default function CareersPage() {
  return (
    <div className="bg-zinc-950 text-white">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_0.95fr] items-center">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Careers</p>
              <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Join our remote team and build digital products with impact.
              </h1>
              <p className="mt-6 text-zinc-300 leading-8">
                Apply for work-from-home roles across marketing, development, operations, and support. We welcome applicants who want to grow with our service-led business.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-white/5 p-6 shadow-xl">
              <CareersForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
