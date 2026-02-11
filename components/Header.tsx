import Link from "next/link";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40
                       bg-[#0B0F17]/80 backdrop-blur
                       border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-12 h-16 flex items-center justify-between">
        <Link href="/" className="text-sm tracking-wide font-medium">
          RANG & MALL
        </Link>

        <nav className="flex gap-8 text-sm text-[#9AA4BF]">
          <Link href="/workspace">Workspace</Link>
          <a href="https://freedomlabs.in" target="_blank">
            FreedomLabs
          </a>
        </nav>
      </div>
    </header>
  );
}
