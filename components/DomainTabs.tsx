"use client";

const domains = [
  "All",
  "AI",
  "Infrastructure",
  "Consumer",
  "Enterprise",
  "PropTech",
];

export default function DomainTabs({ active, onChange }: any) {
  return (
    <div className="flex gap-3 mb-10 text-sm">
      {domains.map((d) => (
        <button
          key={d}
          onClick={() => onChange(d)}
          className={`px-4 py-1.5 rounded-full border ${
            active === d
              ? "border-[#4f7cff] text-[#4f7cff]"
              : "border-[#1f2430] text-[#9aa1b2]"
          }`}
        >
          {d}
        </button>
      ))}
    </div>
  );
}
