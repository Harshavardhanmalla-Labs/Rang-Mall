"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import DomainTabs from "./DomainTabs";
import { ventures } from "@/lib/ventures";

export default function VenturesGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? ventures : ventures.filter((v) => v.domain === active);

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <h2 className="text-2xl font-medium mb-6">Ventures & Products</h2>

      <DomainTabs active={active} onChange={setActive} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((v) => (
          <a
            key={v.name}
            href={v.url}
            className="group rounded-xl border bg-[#11151c] p-6 hover:-translate-y-1 transition"
            style={{ borderColor: v.accent + "33" }}
          >
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">{v.name}</h3>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100" />
            </div>
            <p className="mt-3 text-sm text-[#9aa1b2]">{v.description}</p>
            <span
              className="inline-block mt-4 text-xs px-2 py-1 rounded"
              style={{ background: v.accent + "22", color: v.accent }}
            >
              {v.domain}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
