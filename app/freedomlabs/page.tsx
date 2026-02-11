import Link from "next/link";

export default function FreedomLabs() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#E8EBF2] px-16 py-32">
      <h1 className="text-6xl font-medium">FreedomLabs</h1>
      <p className="mt-6 text-[#9AA4BF] max-w-2xl">
        Internal platform powering execution, automation, and delivery.
      </p>

      <div className="mt-20 space-y-8">
        <Link
          href="/freedomlabs/jira"
          className="block rounded-2xl bg-white/5 p-10 hover:bg-white/10 transition"
        >
          <h2 className="text-2xl">JIRA Platform</h2>
          <p className="mt-2 text-sm text-[#9AA4BF]">
            Internal issue tracking & delivery system
          </p>
        </Link>

        <Link
          href="/freedomlabs/platform"
          className="block rounded-2xl bg-white/5 p-10 hover:bg-white/10 transition"
        >
          <h2 className="text-2xl">Dev & Infra Tooling</h2>
          <p className="mt-2 text-sm text-[#9AA4BF]">
            CI/CD, automation, platform services
          </p>
        </Link>
      </div>
    </main>
  );
}
