import ProductsGrid from "@/components/ui/ProductsGrid";
import { fetchProducts } from "@/services/products.services";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] }>;
}) => {
  const allSearchParams = await searchParams;

  const currentPage: number | string =
    (allSearchParams.page as string | number) || (1 as number);

  const { products, total } = await fetchProducts({
    page: currentPage,
    limit: 5,
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Products
        </h1>
      </div>

      <ProductsGrid products={products} total={total} />
    </div>
  );
};

export default ProductsPage;
