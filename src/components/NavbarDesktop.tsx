"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
  { href: "#contact", label: "Contato" },
];

export function NavbarDesktop() {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex space-x-8 font-medium">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`
                group relative transition-colors duration-200
                text-gray-200 hover:text-gray-100 font-semibold
              `}
            >
              {link.label}
              <span
                className={`
                  pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full
                  transition-all duration-300 rounded
                  bg-gray-100
                  ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                  origin-left
                `}
                aria-hidden="true"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}