import { products } from "@/lib/mock/products";

export async function fetchProducts({
  page,
  limit,
}: {
  page: string | number;
  limit: number;
}) {
  // const data: FetchProductServiceResponse = await fetch(
  //   "https://dummyjson.com/products",
  //   {
  //     cache: "force-cache",
  //   },
  // ).then((res) => res.json());
  const startIndex = (parseInt(page.toString()) - 1) * limit;
  const endIndex = startIndex + limit;

  return {
    products: products.slice(startIndex, endIndex),
    total: products.length,
  };
}
