"use client";

import { useState } from "react";
import SideBarLink from "../ui/SideBarLink";
import { SidebarProps } from "@/types/props.type";
import { Button } from "../ui/Button";

export default function MobileSidebar({ links }: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Button */}
      <Button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        styles="
          sm:hidden
          h-9 w-9
        inline-flex items-center justify-center
        rounded-md
        border
        bg-white text-gray-700
        hover:bg-gray-100
        dark:bg-gray-900 dark:text-gray-200 dark:border-gray-800 dark:hover:bg-gray-800
        absolute top-12 left-2
        z-30
        "
      >
        ☰
      </Button>

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <aside
            className="   relative z-50 h-screen w-64
            bg-white dark:bg-gray-950
            p-4
            animate-slide-in
            "
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Menu
              </h2>

              <Button
                onClick={() => setOpen(false)}
                styles="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close menu"
              >
                ✕
              </Button>
            </div>

            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.name} onClick={() => setOpen(false)}>
                  <SideBarLink link={link} />
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </>
  );
}
