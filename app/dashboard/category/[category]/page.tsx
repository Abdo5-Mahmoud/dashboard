import { EmptyState } from "@/components/EmptyData";
import ProductsList from "@/components/ui/ProductsList";
import { products } from "@/lib/mock/products";

// mock (بدلها بـ DB بعدين)

const AllCategoryProducts = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  const categoryProducts = products.filter(
    (product) => product.category === category,
  );

  <div className="space-y-6">
    {/* Header */}
    <div>
      <h1 className="text-2xl font-bold uppercase text-gray-900 dark:text-gray-100">
        {category}
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {categoryProducts.length} products
      </p>
    </div>

    <EmptyState />
    {/* Products */}
    {/* {categoryProducts.length > 0 ? (
      <ProductsList products={categoryProducts} />
    ) : (
    )} */}
  </div>;
};

export default AllCategoryProducts;
