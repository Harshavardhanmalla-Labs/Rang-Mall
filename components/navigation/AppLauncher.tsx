"use client";

import { useState } from "react";
import Link from "next/link";

export default function AppLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
      >
        ☰
      </button>

      {open && (
        <div className="absolute right-0 mt-4 w-72 bg-white border border-gray-200 rounded-2xl shadow-lg p-6 grid grid-cols-3 gap-4">
          <Link href="/dwell/usa">Dwell USA</Link>
          <Link href="/dwell/india">Dwell India</Link>
          <Link href="/builderstudio">Builder</Link>
          <Link href="/freedomlabs">FreedomLabs</Link>
          <Link href="/workspace">Workspace</Link>
        </div>
      )}
    </div>
  );
}
