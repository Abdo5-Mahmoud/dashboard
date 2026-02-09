"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/Button";
import { PaginationProps } from "@/types/props.type";

const Pagination = ({ total }: PaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") || "1");
  const setPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-end gap-2 mb-4">
      {/* Previous */}
      <Button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
        styles="
      h-8 px-3
      rounded-md
      text-sm font-medium
      border
      bg-white text-gray-700
      hover:bg-gray-100
      disabled:opacity-50 disabled:cursor-not-allowed
      dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700
      dark:hover:bg-gray-800
    "
      >
        Prev
      </Button>

      {/* Pages */}
      <div className="flex items-center gap-1">
        {Array.from({ length: Math.ceil(total / 5) }, (_, i) => i + 1).map(
          (pageNum) => {
            const isActive = pageNum === page;

            return (
              <Button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                styles={`
              h-8 min-w-[32px]
              rounded-md
              text-sm font-medium
              transition
              ${
                isActive
                  ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                  : "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              }
            `}
              >
                {pageNum}
              </Button>
            );
          },
        )}
      </div>

      {/* Next */}
      <Button
        onClick={() => setPage(page + 1)}
        disabled={page >= Math.ceil(total / 5)}
        styles="
      h-8 px-3
      rounded-md
      text-sm font-medium
      border
      bg-white text-gray-700
      hover:bg-gray-100
      disabled:opacity-50 disabled:cursor-not-allowed
      dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700
      dark:hover:bg-gray-800
    "
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
