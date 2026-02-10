import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

const links = [
  {
    name: "Products",
    href: "/dashboard/products",
    children: [
      {
        name: "All Products",
        href: "/dashboard/products",
      },
      {
        name: "Create Product",
        href: "/dashboard/products/create",
      },
    ],
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
    children: [
      {
        name: "All Categories",
        href: "/dashboard/categories",
      },
      {
        name: "Create Category",
        href: "/dashboard/categories/create",
      },
    ],
  },
];

export const Sidebar = () => {
  return (
    <>
      <MobileSidebar links={links} />
      <DesktopSidebar links={links} />
    </>
  );
};
