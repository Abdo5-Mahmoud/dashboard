import { ProductType } from "./ProductTypes";

export type ProductCardProps = {
  product: ProductType;
  children?: React.ReactNode;
};

export type SideBarLinkProps = {
  link: {
    name: string;
    href: string;
  };
};

export type UsePaginationProps = {
  totalItems: number;
  pageSize: number;
  currentPage: number;
};

export type ProductsGridProps = {
  products: ProductType[];
  total: number;
};

export type ProductsListProps = {
  products: ProductType[];
};
