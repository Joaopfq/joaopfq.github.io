"use client";

import Link from "next/link";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-neutral-950 shadow w-full">
      <Link href="/" className="flex items-center space-x-2" aria-label="Home">
        <span className="text-2xl font-bold tracking-tight text-gray-400">
          {"<"}
          <span className="text-green-500">Jp</span>
          {" />"}
        </span>
      </Link>
      <NavbarDesktop />
      <NavbarMobile />
    </nav>
  );
}