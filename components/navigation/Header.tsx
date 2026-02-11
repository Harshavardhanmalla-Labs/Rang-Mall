import Link from "next/link";
import AppLauncher from "./AppLauncher";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="text-lg font-semibold">
          FreedomLabs
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <Link href="/careers">Careers</Link>
          <Link href="/ventures">Ventures</Link>
          <Link href="/governance">Governance</Link>
        </nav>

        <AppLauncher />
      </div>
    </header>
  );
}
