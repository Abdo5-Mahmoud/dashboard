import { FetchProductServiceResponse } from "@/types/fetchTypes";

export async function fetchProducts({
  page,
  limit,
}: {
  page: string | number;
  limit: number;
}): Promise<FetchProductServiceResponse> {
  const data: FetchProductServiceResponse = await fetch(
    "https://dummyjson.com/products",
    {
      cache: "force-cache",
    },
  ).then((res) => res.json());
  const products = data.products;
  const startIndex = (parseInt(page.toString()) - 1) * limit;
  const endIndex = startIndex + limit;
  data.products = products.slice(startIndex, endIndex);

  return { products: data.products, total: products.length };
}
