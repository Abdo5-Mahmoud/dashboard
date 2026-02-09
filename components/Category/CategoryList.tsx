import { useCategory } from "@/hooks/useCategoriesList";
import { Button } from "../ui/Button";
import Link from "next/link";

export default function CategoriesList() {
  const { categoriesList } = useCategory();

  return (
    <div
      className="
        rounded-xl border
        bg-white dark:bg-gray-900
        border-gray-200 dark:border-gray-800
        p-4 sm:p-6
      "
    >
      <h2 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
        Categories List
      </h2>

      <div className="space-y-3">
        {categoriesList.map((cat, i) => (
          <div
            key={i}
            className="
                flex items-center justify-between
                rounded-lg border
                border-gray-200 dark:border-gray-800
                bg-gray-50 dark:bg-gray-800
                px-4 py-3
              "
          >
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {cat.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {cat.products} products
              </p>
            </div>

            <Button>
              <Link href={`/dashboard/category/${cat.name}`}>See All</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
