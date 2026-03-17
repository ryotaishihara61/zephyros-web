"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SERVICE_LINKS } from "@/lib/links";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const close = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={close}>
          <Image
            src="/images/ZEPHYROS-LOGO.png"
            alt="ZEPHYROS INC."
            width={60}
            height={30}
            className="object-contain w-10 md:w-[60px]"
          />
          <span className="text-sm font-medium text-gray-700">グローバル・コミュニケーションのゼフロス</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-5 text-sm text-gray-600">
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-gray-900">
              サービス
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <ul className="absolute right-0 top-full z-50 hidden group-hover:block w-64 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
              {SERVICE_LINKS.map((link) =>
                link.external ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </li>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-gray-900">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="メニューを開く"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 pb-6">
          {/* サービス */}
          <div className="pt-4">
            <button
              className="flex w-full items-center justify-between text-sm font-semibold text-gray-700 py-2"
              onClick={() => setServicesOpen((v) => !v)}
            >
              サービス
              <ChevronDown
                size={16}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <ul className="mt-1 space-y-1 pl-2">
                {SERVICE_LINKS.map((link) =>
                  link.external ? (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-2 text-sm text-gray-600"
                        onClick={close}
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block py-2 text-sm text-gray-600"
                        onClick={close}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>

          {/* その他リンク */}
          <ul className="mt-2 space-y-1 border-t border-gray-100 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-sm text-gray-600"
                  onClick={close}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
