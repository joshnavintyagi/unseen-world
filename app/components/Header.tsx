"use client";

import { useEffect, useState } from "react";

const navigationItems = [
  { href: "/home#transfers", label: "Airport Transfers" },
  { href: "/home#tours", label: "Chauffeur Services" },
  { href: "/home#experiences", label: "Tours & Experiences" },
  { href: "/home#holidays", label: "Worldwide Travel" },
  { href: "/home#about", label: "About Us" },
  { href: "/home#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#06111d]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[92px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="/"
          aria-label="Unseen World landing page"
          className="flex shrink-0 items-center"
        >
          <div className="flex flex-col">
            <span className="whitespace-nowrap text-[21px] font-medium leading-none tracking-[0.27em] text-white sm:text-[24px]">
              UNSEEN
            </span>

            <span className="mt-2 whitespace-nowrap text-[10px] font-semibold leading-none tracking-[0.48em] text-[#D4AF37] sm:text-[12px]">
              WORLD
            </span>
          </div>

          <div className="-ml-1 flex h-[82px] w-[82px] items-center justify-center sm:h-[88px] sm:w-[88px]">
            <img
              src="/images/unseen-logo.png"
              alt=""
              className="h-[132px] w-[132px] max-w-none object-contain sm:h-[145px] sm:w-[145px]"
            />
          </div>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 text-[13px] font-medium text-white/85 md:flex lg:gap-8 lg:text-[14px]"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition duration-200 hover:text-[#D4AF37]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/home#booking"
            className="ml-1 flex min-h-[46px] items-center justify-center rounded-lg border border-[#D4AF37]/80 px-5 font-semibold text-[#D4AF37] transition duration-200 hover:bg-[#D4AF37] hover:text-[#06111d]"
          >
            Book Now
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/50 bg-[#06111d]/70 text-[#D4AF37] transition hover:border-[#D4AF37] md:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6 6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/[0.06] bg-[#06111d]/98 transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[620px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 pb-6">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-white/[0.07] py-4 text-sm font-medium text-white/90 transition hover:text-[#D4AF37]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/home#booking"
            onClick={closeMenu}
            className="mt-5 flex min-h-[50px] items-center justify-center rounded-xl bg-[#D4AF37] font-semibold text-[#06111d] transition hover:bg-[#E7C84B]"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}