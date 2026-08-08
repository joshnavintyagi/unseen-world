"use client";

import { useEffect, useState } from "react";

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
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#06111d]/40 backdrop-blur-md">
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="/" className="flex items-center" aria-label="Unseen World">
          <div className="flex flex-col">
            <span className="whitespace-nowrap text-[17px] font-medium tracking-[0.25em] text-white sm:text-[20px]">
              UNSEEN
            </span>

            <span className="mt-1 whitespace-nowrap text-[9px] font-semibold tracking-[0.42em] text-[#D4AF37] sm:text-[11px]">
              WORLD
            </span>
          </div>

          <div className="-ml-1 flex h-[72px] w-[72px] items-center justify-center">
            <img
              src="/images/unseen-logo.png"
              alt=""
              className="h-[118px] w-[118px] max-w-none object-contain"
            />
          </div>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-[14px] text-white/90 md:flex lg:gap-9"
        >
          <a href="#transfers" className="transition hover:text-[#D4AF37]">
            Airport Transfers
          </a>

          <a href="#tours" className="transition hover:text-[#D4AF37]">
            Chauffeur Services
          </a>

          <a href="#experiences" className="transition hover:text-[#D4AF37]">
            Tours & Experiences
          </a>

          <a href="#holidays" className="transition hover:text-[#D4AF37]">
            Worldwide Travel
          </a>

          <a href="#about" className="transition hover:text-[#D4AF37]">
            About Us
          </a>

          <a href="#contact" className="transition hover:text-[#D4AF37]">
            Contact
          </a>

          <a
            href="#booking"
            className="rounded-lg border border-[#D4AF37]/70 px-5 py-3 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#06111d]"
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
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/40 text-[#D4AF37] md:hidden"
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
        className={`overflow-hidden bg-[#06111d]/98 transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 pb-6">
          {[
            ["#transfers", "Airport Transfers"],
            ["#tours", "Chauffeur Services"],
            ["#experiences", "Tours & Experiences"],
            ["#holidays", "Worldwide Travel"],
            ["#about", "About Us"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="border-b border-white/[0.07] py-4 text-sm text-white/90"
            >
              {label}
            </a>
          ))}

          <a
            href="#booking"
            onClick={closeMenu}
            className="mt-5 flex min-h-[50px] items-center justify-center rounded-xl bg-[#D4AF37] font-semibold text-[#06111d]"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}