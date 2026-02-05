import { ProductsGridProps } from "@/types/propsType";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";

const ProductsGrid = ({ products, total }: ProductsGridProps) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductsList products={products} />
      </div>
      <Pagination total={total}  />
    </>
  );
};

export default ProductsGrid;
