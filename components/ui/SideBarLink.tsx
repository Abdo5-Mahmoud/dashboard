"use client";

import { SideBarLinkProps } from "@/types/props.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarLink = ({ link, isChild = false }: SideBarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === link.href || (link.children && pathname.startsWith(link.href));

  return (
    <Link
      href={link.href}
      className={`
        block rounded-md px-3 py-2 text-sm transition
        ${
          isActive
            ? "bg-gray-900 text-white dark:bg-gray-800"
            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        }
        ${isChild ? "text-xs py-1.5" : "font-medium"}
      `}
    >
      {link.name}
    </Link>
  );
};

export default SideBarLink;
