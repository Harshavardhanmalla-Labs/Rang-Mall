"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ventures } from "@/lib/ventures";

export default function Ecosystem() {
  return (
    <section className="max-w-7xl mx-auto px-12 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-16"
      >
        {ventures.map((v) => (
          <motion.div
            key={v.name}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative aspect-square rounded-3xl
                       bg-white/5 backdrop-blur
                       hover:bg-white/10"
          >
            <Link
              href={v.href || "#"}
              className="absolute inset-0 p-8 text-center"
            >
              <div className="text-xl font-medium tracking-wide">{v.name}</div>

              <div className="mt-2 text-sm text-[#9AA4BF]">{v.description}</div>

              {/* Regions */}
              {v.regions && (
                <div className="mt-6 space-y-1 text-xs text-[#9AA4BF] opacity-0 hover:opacity-100 transition">
                  {v.regions.map((r) => (
                    <div key={r.name}>
                      {r.name} — {r.description}
                    </div>
                  ))}
                </div>
              )}

              {/* Sub products */}
              {v.subProducts && (
                <div className="mt-6 space-y-1 text-xs text-[#9AA4BF] opacity-0 hover:opacity-100 transition">
                  {v.subProducts.map((s) => (
                    <div key={s.name}>
                      {s.name} — {s.description}
                    </div>
                  ))}
                </div>
              )}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
