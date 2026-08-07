export default function RefundsPage() {
  return (
    <div className="bg-zinc-950 text-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Refund & Returns</p>
          <h1 className="text-4xl font-bold tracking-tight">Refund and returns policy.</h1>
          <p className="text-zinc-400 leading-8">
            We strive to deliver high-quality digital services. Refunds are handled based on the contract terms and service delivery status.
          </p>
        </div>
        <div className="space-y-8 text-zinc-300 leading-8">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Eligibility</h2>
            <p>Refund requests may be considered for services not started or where deliverables were not provided as agreed.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Process</h2>
            <p>Contact our support team within 7 days of issue identification. Provide a clear summary and any relevant delivery references.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Terms</h2>
            <p>Refunds depend on project stage, resources consumed, and any third-party costs already incurred.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Exceptions</h2>
            <p>Certain services may not be refundable if work has already been completed or third-party licenses are purchased.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
