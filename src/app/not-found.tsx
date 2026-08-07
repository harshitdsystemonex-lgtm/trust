import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white px-6 py-24">
      <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-12 text-center shadow-2xl shadow-black/40 backdrop-blur-md">
        <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">404</p>
        <h1 className="mt-6 text-6xl font-bold tracking-tight text-white">Page not found</h1>
        <p className="mt-4 text-zinc-400 leading-8">
          The page you are looking for doesn’t exist or has been moved. Let’s get you back to a high-performing page.
        </p>
        <Link href="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">
          Return home
        </Link>
      </div>
    </div>
  );
}
