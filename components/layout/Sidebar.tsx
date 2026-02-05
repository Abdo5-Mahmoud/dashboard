import SideBarLink from "../ui/SideBarLink";

const links = [
  { name: "Overview", href: "/dashboard" },
  { name: "Products", href: "/dashboard/products" },
];
export const Sidebar = () => {
  return (
    <aside className="w-60 border-r bg-white p-4">
      <h2 className="mb-6 text-sm font-semibold text-gray-500">Menu</h2>
      <ul className="space-y-1">
        {links.map((link) => {
          return (
            <li key={link.name}>
              <SideBarLink link={link} />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
