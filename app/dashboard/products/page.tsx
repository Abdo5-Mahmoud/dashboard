import { Button } from "@/components/ui/Button";
import Pagination from "@/components/Pagination";
import ProductsList from "@/components/ui/ProductsList";
import { fetchProducts } from "@/services/products.services";
import { ProductsPageProps } from "@/types/props.type";
import Link from "next/link";

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
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
          Total Products :
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1.5">
            {total}
          </span>
        </h1>
        <Button>
          <Link href="/dashboard/newproduct">Add New Product</Link>
        </Button>
      </div>
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 sm:p-6 ">
        <Pagination total={total} />

        <ProductsList products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
