export default function PrivacyPage() {
  return (
    <div className="bg-zinc-950 text-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Privacy Policy</p>
          <h1 className="text-4xl font-bold tracking-tight">Your privacy matters at TrustRax.</h1>
          <p className="text-zinc-400 leading-8">
            We collect only the information necessary to respond to your inquiries and improve our services. Your data is never sold or shared with third parties for marketing without consent.
          </p>
        </div>
        <div className="space-y-8 text-zinc-300 leading-8">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
            <p>We may collect contact information, service preferences, and inquiry details when you submit our forms.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">How We Use It</h2>
            <p>We use submitted details to contact you, prepare estimates, and support service delivery. We also improve our site through analytics and feedback.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Data Security</h2>
            <p>We take reasonable measures to protect your information internally. Sensitive data is handled securely and stored only for as long as needed.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Cookies</h2>
            <p>We use cookies for site functionality, analytics, and to remember preferences. You can manage consent through the cookie banner.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p>If you have questions about privacy, email us at meet@trustrax.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
