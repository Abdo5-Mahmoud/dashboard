import { ProductType } from "./Product.types";

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

export type PaginationProps = { total: number };

export type ProductsGridProps = {
  products: ProductType[];
  total: number;
};

export type ProductsListProps = {
  products: ProductType[];
};

export type SidebarProps = {
  links: { name: string; href: string }[];
};

export type ProductsPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] }>;
};
export type ProductPageProps = { params: Promise<{ id: string }> };

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  styles?: string;
  type?: "button" | "submit" | "reset";
};
export type InputProps = {
  placeholder: string;
  type: string;
  name: string;
};
