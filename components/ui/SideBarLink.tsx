"use client";

import { SideBarLinkProps } from "@/types/props.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarLink = ({ link }: SideBarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <Link
      href={link.href}
      className={`block rounded-md px-3 py-2 text-sm transition
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
    >
      {link.name}
    </Link>
  );
};

export default SideBarLink;
