import { SidebarProps } from "@/types/props.type";
import SideBarLink from "../ui/SideBarLink";

const DesktopSidebar = ({ links }: SidebarProps) => {
  return (
    <aside className="hidden sm:block w-40 shrink-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4">
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Menu
      </h2>

      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.name}>
            <SideBarLink link={link} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DesktopSidebar;
