import { ProductType } from "./Product.types";

export type FetchProductServiceResponse = {
  products: ProductType[];
  total: number;
};
