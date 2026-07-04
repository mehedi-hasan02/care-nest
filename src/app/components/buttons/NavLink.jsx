"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive =
    href === "/" ? pathname === "/" : pathname === pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`font-medium ${isActive ? "text-orange-400" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
