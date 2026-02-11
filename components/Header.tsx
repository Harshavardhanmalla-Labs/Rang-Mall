import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full backdrop-blur bg-[#0b0e14]/80 border-b border-[#1f2430] z-50">
      <nav className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between text-sm">
        <Link href="/" className="font-medium">
          Rang & Mall
        </Link>
        <div className="flex gap-6 text-[#9aa1b2]">
          <Link href="/ventures">Ventures</Link>
          <Link href="/governance">Governance</Link>
          <Link href="/careers">Careers</Link>
        </div>
      </nav>
    </header>
  );
}
