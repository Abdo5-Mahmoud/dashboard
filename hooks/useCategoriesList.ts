import { products } from "@/lib/mock/products";
import { CategoryType } from "@/types/category.type";

export function useCategory(): { categoriesList: CategoryType[] } {
  const categories = products.reduce(
    (acc, curr) => {
      const category = curr.category!;
      if (!acc[category]) {
        acc[category] = { name: category, products: 0 };
      }
      acc[category].products += 1;
      return acc;
    },
    {} as Record<string, { name: string; products: number }>,
  );
  const categoriesList = Object.values(categories);
  return { categoriesList };
}
