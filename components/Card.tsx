"use client";

import { motion } from "framer-motion";

export default function Card({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="rounded-2xl
                 bg-[#121722]
                 border border-white/5
                 p-8
                 transition"
    >
      <h2 className="text-lg font-medium">{title}</h2>

      {description && (
        <p className="mt-2 text-sm text-[#9AA4BF]">{description}</p>
      )}
    </motion.div>
  );
}
