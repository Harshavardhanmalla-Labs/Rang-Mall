import Link from "next/link";

export default function DwellHub() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#E8EBF2] px-16 py-32">
      <h1 className="text-6xl font-medium">Dwell</h1>
      <p className="mt-6 text-[#9AA4BF] max-w-2xl">
        One platform. Two markets. Independent execution.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <Link
          href="/dwell/us"
          className="rounded-3xl bg-white/5 p-12 hover:bg-white/10 transition"
        >
          <h2 className="text-3xl">USA</h2>
          <p className="mt-3 text-sm text-[#9AA4BF]">
            Multifamily leasing & resident operations
          </p>
        </Link>

        <Link
          href="/dwell/in"
          className="rounded-3xl bg-white/5 p-12 hover:bg-white/10 transition"
        >
          <h2 className="text-3xl">India</h2>
          <p className="mt-3 text-sm text-[#9AA4BF]">
            Owner-first property network
          </p>
        </Link>
      </div>
    </main>
  );
}
