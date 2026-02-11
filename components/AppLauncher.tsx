"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Home, Hammer, Utensils, LayoutGrid } from "lucide-react";
import Link from "next/link";

const apps = [
  {
    name: "Dwell USA",
    icon: Home,
    href: "/dwell/us",
  },
  {
    name: "Dwell India",
    icon: Building2,
    href: "/dwell/in",
  },
  {
    name: "Builder Studio",
    icon: Hammer,
    href: "#",
  },
  {
    name: "Gulgul",
    icon: Utensils,
    href: "#",
  },
  {
    name: "FreedomLabs",
    icon: LayoutGrid,
    href: "/freedomlabs",
  },
];

export default function AppLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setOpen(!open)}
        className="fixed top-6 left-6 z-50 w-12 h-12
                   rounded-xl bg-white/10 backdrop-blur
                   border border-white/10
                   flex items-center justify-center"
      >
        <LayoutGrid size={20} />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-6 z-40
                       w-72 p-6
                       rounded-3xl
                       bg-white/5 backdrop-blur-xl
                       border border-white/10"
          >
            <div className="grid grid-cols-3 gap-6">
              {apps.map((app) => {
                const Icon = app.icon;
                return (
                  <Link
                    key={app.name}
                    href={app.href}
                    className="group flex flex-col items-center text-center"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl
                                    bg-white/10
                                    flex items-center justify-center
                                    group-hover:bg-white/20
                                    transition"
                    >
                      <Icon size={20} />
                    </div>
                    <span className="mt-2 text-xs text-[#9AA4BF]">
                      {app.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
