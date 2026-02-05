import { ProductType } from "./ProductTypes";

export type FetchProductServiceResponse = {
  products: ProductType[];
  total: number;
};
