import SideBarLink from "../ui/SideBarLink";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

const links = [
  { name: "Products", href: "/dashboard/products" },
  { name: "Category", href: "/dashboard/category" },
];
export const Sidebar = () => {
  return (
    <>
      <MobileSidebar links={links} />
      <DesktopSidebar links={links} />
    </>
  );
};
