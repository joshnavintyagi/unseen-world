"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Airport Transfers", href: "/airport-transfers" },
  { label: "Chauffeur Services", href: "/chauffeur-services" },
  { label: "Tours & Experiences", href: "/tours-experiences" },
  { label: "Worldwide Travel", href: "/worldwide-travel" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#06111d]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <div>
            <div className="text-[18px] tracking-[0.28em] text-white font-medium">
              UNSEEN
            </div>

            <div className="mt-1 text-[10px] tracking-[0.42em] text-[#D4AF37] font-semibold">
              WORLD
            </div>
          </div>

          <img
            src="/images/unseen-logo.png"
            alt="Unseen World"
            className="ml-1 h-[70px] w-[70px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navigation.map((item) => {

            const active =
              pathname === item.href ||
              (pathname === "/" && item.href === "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-1 py-2 text-[15px] font-medium transition-all duration-300 ${
                  active
                    ? "text-[#D4AF37]"
                    : "text-white hover:text-[#D4AF37]"
                }`}
              >
                {item.label}

                {active && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded bg-[#D4AF37]" />
                )}
              </Link>
            );
          })}

          <Link
            href="/#booking"
            className="rounded-lg border border-[#D4AF37] px-5 py-3 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#06111d]"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#D4AF37]/40 text-[#D4AF37] lg:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#06111d] lg:hidden">

          <nav className="flex flex-col px-6 py-5">

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-white/10 py-4 ${
                  pathname === item.href
                    ? "text-[#D4AF37]"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#booking"
              onClick={() => setMenuOpen(false)}
              className="mt-5 rounded-xl bg-[#D4AF37] py-3 text-center font-semibold text-[#06111d]"
            >
              Book Now
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
}