import { ProductType } from "@/types/ProductTypes";
import { ProductsListProps } from "@/types/propsType";
import { Button } from "./Button";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }: ProductsListProps) => {
  return products.map((prod: ProductType) => (
    <ProductCard key={prod.id} product={prod}>
      <Button>Add Product</Button>
    </ProductCard>
  ));
};

export default ProductsList;
