"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  Home,
  Building2,
  Hammer,
  Utensils,
  FileText,
  MessageSquare,
  Folder,
  Flame,
} from "lucide-react";

const apps = [
  {
    name: "Dwell USA",
    icon: Home,
    href: "https://isdwell.com",
  },
  {
    name: "Dwell India",
    icon: Building2,
    href: "https://isdwell.in",
  },
  {
    name: "Builder Studio",
    icon: Hammer,
    href: "https://builderstudio.freedomlabs.in",
  },
  {
    name: "Gulgul",
    icon: Utensils,
    href: "https://gulgul.org",
  },
  {
    name: "FreedomLabs Forge",
    icon: Flame,
    href: "https://forge.freedomlabs.in",
  },
  {
    name: "FL Docs",
    icon: FileText,
    href: "https://docs.freedomlabs.in",
  },
  {
    name: "WeChat",
    icon: MessageSquare,
    href: "https://chat.freedomlabs.in",
  },
  {
    name: "Workspace",
    icon: Folder,
    href: "/workspace",
  },
];

export default function AppLauncher() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  useEffect(() => {
    const outside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", outside);
    return () => document.removeEventListener("mousedown", outside);
  }, [open]);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => setOpen(!open)}
        className="fixed top-6 left-6 z-50
                   w-10 h-10 rounded-xl
                   bg-[#121722]
                   border border-white/5
                   flex items-center justify-center"
      >
        <LayoutGrid size={18} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="fixed top-20 left-6 z-50
                         w-[320px] p-8
                         rounded-2xl
                         bg-[#121722]
                         border border-white/5"
            >
              <div className="grid grid-cols-3 gap-6">
                {apps.map((app) => {
                  const Icon = app.icon;
                  return (
                    <a
                      key={app.name}
                      href={app.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-center"
                      onClick={() => setOpen(false)}
                    >
                      <div
                        className="w-12 h-12 rounded-xl
                                      bg-[#1A2030]
                                      flex items-center justify-center"
                      >
                        <Icon size={18} />
                      </div>
                      <span className="mt-2 text-xs text-[#9AA4BF]">
                        {app.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
