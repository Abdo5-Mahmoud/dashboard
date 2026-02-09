"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="
      min-h-screen
      flex items-center justify-center
      bg-gray-100 dark:bg-gray-950
      px-4
    "
    >
      <div
        className="
        w-full max-w-md
        rounded-xl
        border
        bg-white dark:bg-gray-900
        border-gray-200 dark:border-gray-800
        p-6
        text-center
      "
      >
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Something went wrong
        </h1>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          An unexpected error occurred. Please try again.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="
              rounded-md
              bg-indigo-600
              px-4 py-2
              text-sm font-medium
              text-white
              hover:bg-indigo-700
            "
          >
            Try again
          </button>

          <Link
            href="/dashboard/products"
            className="
              rounded-md
              border
              px-4 py-2
              text-sm font-medium
              border-gray-300 dark:border-gray-700
              text-gray-700 dark:text-gray-300
              hover:bg-gray-100 dark:hover:bg-gray-800
            "
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
