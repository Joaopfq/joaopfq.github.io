"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";

const navLinks = [
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
  { href: "#contact", label: "Contato" },
];

export function NavbarMobile() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex md:hidden items-center">
      <button
        className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Abrir menu"
      >
        <IoMenu />
      </button>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-neutral-900 shadow-lg z-50
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded text-neutral-200 focus:outline-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="flex flex-col mt-20 px-6 font-medium space-y-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    block py-2 group relative transition-colors duration-200
                    text-neutral-200 hover:text-neutral-100 font-semibold
                  `}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  <span
                    className={`
                      pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full
                      transition-all duration-300 rounded
                      bg-neutral-100
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
      </div>
    </div>
  );
}