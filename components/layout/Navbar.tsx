"use client";
import "@/app/global.css";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/Button";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };
  return (
    <nav className="h-16 border-b px-6 flex items-center bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 dark:text-gray-100">
      <h1 className="text-lg font-bold hover:text-indigo-600 transition-colors">
        <Link href="/">Admin Panel</Link>
      </h1>
      {/* Right side */}
      <div className="ml-auto flex items-center gap-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">Abdo</span>

        <Button
          onClick={toggleTheme}
          styles="
        rounded-md
        border
        px-3 py-1
        text-sm
        border-gray-300 dark:border-gray-700
        hover:bg-gray-100 dark:hover:bg-gray-800
        transition-colors
      "
        >
          {dark ? "Light" : "Dark"}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
