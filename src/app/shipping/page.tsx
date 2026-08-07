export default function ShippingPage() {
  return (
    <div className="bg-zinc-950 text-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Shipping & Delivery</p>
          <h1 className="text-4xl font-bold tracking-tight">Shipping and delivery policy for digital services.</h1>
          <p className="text-zinc-400 leading-8">
            For digital products and campaigns, delivery timelines are based on agreed project milestones and approval cycles.
          </p>
        </div>
        <div className="space-y-8 text-zinc-300 leading-8">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Delivery Timeline</h2>
            <p>Delivery schedules are established before work begins and may vary depending on project scope and approvals.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Digital Handover</h2>
            <p>Final deliverables are shared through secure download links, repositories, or hosting access details.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Revisions</h2>
            <p>Minor revisions are included in the agreed milestone. Additional changes after handover may be handled through support or maintenance agreements.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
