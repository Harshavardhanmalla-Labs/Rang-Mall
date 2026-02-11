"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `block px-3 py-2 rounded-md text-sm transition ${
      pathname === path
        ? "bg-black text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-10">Workspace</h2>

      <nav className="space-y-2">
        <Link href="/workspace" className={linkClass("/workspace")}>
          Dashboard
        </Link>

        <Link href="/workspace/chat" className={linkClass("/workspace/chat")}>
          Chat
        </Link>

        <Link href="/workspace/docs" className={linkClass("/workspace/docs")}>
          Docs
        </Link>

        <Link
          href="/workspace/projects"
          className={linkClass("/workspace/projects")}
        >
          Projects
        </Link>
      </nav>
    </aside>
  );
}
