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
    <nav
      className="
  h-16
  flex items-center
  border-b
  bg-gray-50 dark:bg-gray-900
  border-gray-200 dark:border-gray-800
  px-4 sm:px-6
  text-gray-900 dark:text-gray-100
"
    >
      {/* Left side */}
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-bold">
          <Link
            href="/"
            className="
          transition-colors
          hover:text-indigo-600
          dark:hover:text-indigo-400
          ml-3
        "
          >
            Admin Panel
          </Link>
        </h1>
      </div>

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
