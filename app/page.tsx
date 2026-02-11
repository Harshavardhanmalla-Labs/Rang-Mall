import Ecosystem from "@/components/Ecosystem";
import Philosophy from "@/components/Philosophy";

export default function Home() {
  return (
    <main className="bg-[#0A0D14] text-[#E8EBF2]">
      {/* HERO */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent blur-3xl animate-pulse" />
        <div className="text-center z-10">
          <h1 className="text-[92px] font-medium tracking-tight">
            Rang & Mall
          </h1>
          <p className="mt-10 text-[30px] text-[#9AA4BF] max-w-4xl mx-auto">
            An operating company building and owning systems across AI,
            infrastructure, and consumer platforms.
          </p>
        </div>
      </section>

      <Ecosystem />
      <Philosophy />
    </main>
  );
}
