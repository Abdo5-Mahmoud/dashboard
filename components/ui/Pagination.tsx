"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./Button";

const Pagination = ({ total }: { total: number }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") || "1");
  const setPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-center">
      <Button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
        styles="
      mr-2 px-4
      py-2
      bg-blue-500 
      text-white
      rounded-md
      hover:bg-blue-600
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
      >
        Previous
      </Button>
      <div>
        {Array.from({ length: Math.ceil(total / 5) }, (_, i) => i + 1).map(
          (pageNum) => (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={`mx-1 px-3 py-1 rounded-md ${
                pageNum === page
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {pageNum}
            </button>
          ),
        )}
      </div>
      <Button
        onClick={() => setPage(page + 1)}
        disabled={page >= Math.ceil(total / 5)}
        styles="
          ml-2 px-4
          py-2
          bg-blue-500
          text-white
          rounded-md
          hover:bg-blue-600
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
