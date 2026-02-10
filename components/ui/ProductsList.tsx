import { ProductType } from "@/types/Product.types";
import { ProductsListProps } from "@/types/props.type";
import Link from "next/link";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((prod: ProductType) => (
        <ProductCard key={prod.id} product={prod}>
          <Link
            className="
      rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 text-center"
            href={`/dashboard/products/${prod.id}`}
          >
            Update Product
          </Link>
        </ProductCard>
      ))}
    </div>
  );
};

export default ProductsList;
