export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-10 py-12 shadow-2xl shadow-black/20 backdrop-blur-md">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
        <div className="space-y-2 text-center">
          <p className="text-xl font-semibold">Loading premium experience...</p>
          <p className="text-sm text-zinc-400">Please wait while we prepare the page.</p>
        </div>
      </div>
    </div>
  );
}
