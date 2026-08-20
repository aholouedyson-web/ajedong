"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Ferme le menu mobile à chaque changement de route (synchronisation avec le routeur)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { to: "/", label: "Accueil" },
    { to: "/galerie", label: "Galerie" },
    { to: "/a-propos", label: "À Propos" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-green-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-white shadow-md overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo-ajed.png"
                alt="AJED Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span
                className={`font-bold text-sm leading-tight block transition-colors duration-300 ${
                  scrolled ? "text-green-800" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                AJED
              </span>
              <span
                className={`text-xs transition-colors duration-300 ${
                  scrolled ? "text-green-600" : "text-green-200"
                }`}
              >
                Étoiles de Demain
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className={`nav-link font-semibold text-sm transition-colors duration-300 pb-1 ${
                  isActive(link.to)
                    ? `active ${scrolled ? "text-green-700" : "text-green-300"}`
                    : scrolled
                    ? "text-gray-700 hover:text-green-700"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact#benevole"
              className="text-sm font-semibold px-4 py-2 rounded-full border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white transition-all duration-300"
            >
              Bénévolat
            </Link>
            <Link
              href="/contact#soutenir"
              className="btn-pulse text-sm font-bold px-5 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30"
            >
              ❤ Nous Soutenir
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-green-800" : "text-white"
            }`}
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white/98 backdrop-blur-md shadow-xl`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`font-semibold text-base py-2 border-b border-gray-100 ${
                isActive(link.to) ? "text-green-700" : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#soutenir"
            className="mt-2 text-center font-bold px-5 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
          >
            ❤ Nous Soutenir
          </Link>
        </div>
      </div>
    </nav>
  );
}
