export default function TermsPage() {
  return (
    <div className="bg-zinc-950 text-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Terms of Service</p>
          <h1 className="text-4xl font-bold tracking-tight">Terms and conditions for using TrustRax.</h1>
          <p className="text-zinc-400 leading-8">
            By using this website or submitting inquiries, you agree to the terms below. We provide digital services and support with a focus on transparency and accountability.
          </p>
        </div>
        <div className="space-y-8 text-zinc-300 leading-8">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Service Scope</h2>
            <p>TrustRax provides digital design, marketing, and business intake solutions. Any estimates or support responses are subject to standard consultation and agreement.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">User Responsibilities</h2>
            <p>Users must provide accurate contact details and relevant information for inquiries. Misuse of contact channels or fraudulent requests may result in declined service.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Intellectual Property</h2>
            <p>All website design, content, and code remain the property of TrustRax except where otherwise agreed in a contract.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Limitation of Liability</h2>
            <p>We are not liable for any indirect damages related to website access, marketing performance, or third-party integrations beyond our service agreements.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Governing Law</h2>
            <p>These terms are governed by the applicable laws of India. Any disputes will follow standard resolution procedures.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
