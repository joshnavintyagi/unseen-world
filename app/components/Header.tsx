"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="relative z-50 border-b border-white/[0.06] bg-[#081220]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[82px] w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 md:min-h-0 md:px-12 md:py-4">
        {/* BRAND */}
        <a
          href="/"
          aria-label="Unseen World home"
          onClick={closeMenu}
          className="flex min-w-0 shrink-0 items-center"
        >
          {/* WORDMARK */}
          <div className="flex w-[125px] flex-col items-center sm:w-[145px] md:w-[190px]">
            <p className="whitespace-nowrap text-[17px] font-medium tracking-[0.27em] text-white sm:text-[20px] sm:tracking-[0.3em] md:text-[26px] md:tracking-[0.34em]">
              UNSEEN
            </p>

            <p className="mt-0.5 whitespace-nowrap text-[11px] font-semibold tracking-[0.36em] text-[#D4AF37] sm:mt-1 sm:text-[13px] sm:tracking-[0.39em] md:text-[17px] md:tracking-[0.42em]">
              WORLD
            </p>
          </div>

          {/* GOLD U */}
          <div className="-ml-2 flex h-[70px] w-[68px] shrink-0 items-center justify-center overflow-visible sm:h-[78px] sm:w-[76px] md:-ml-3 md:h-[110px] md:w-[105px]">
            <img
              src="/images/unseen-logo.png"
              alt=""
              className="h-[118px] w-[118px] max-w-none object-contain sm:h-[135px] sm:w-[135px] md:h-[190px] md:w-[190px]"
            />
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-[15px] lg:gap-10 md:flex"
        >
          <a
            href="#transfers"
            className="transition hover:text-[#D4AF37]"
          >
            Transfers
          </a>

          <a
            href="#tours"
            className="transition hover:text-[#D4AF37]"
          >
            Tours
          </a>

          <a
            href="#experiences"
            className="transition hover:text-[#D4AF37]"
          >
            Experiences
          </a>

          <a
            href="#holidays"
            className="transition hover:text-[#D4AF37]"
          >
            Holidays
          </a>

          <a
            href="#about"
            className="transition hover:text-[#D4AF37]"
          >
            About
          </a>

          <a
            href="#booking"
            className="ml-1 rounded-xl bg-[#D4AF37] px-5 py-3.5 font-semibold text-[#081220] transition hover:bg-[#E7C84B] lg:ml-2 lg:px-7 lg:py-4"
          >
            Book Now
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/35 bg-[#D4AF37]/[0.06] text-[#D4AF37] transition hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/10 md:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
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
              aria-hidden="true"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/[0.06] bg-[#07101b]/98 transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[520px] opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex w-full max-w-[1400px] flex-col px-4 pb-5 pt-3 sm:px-6"
        >
          <a
            href="#transfers"
            onClick={closeMenu}
            className="border-b border-white/[0.06] px-2 py-3.5 text-[15px] text-slate-200 transition hover:text-[#D4AF37]"
          >
            Transfers
          </a>

          <a
            href="#tours"
            onClick={closeMenu}
            className="border-b border-white/[0.06] px-2 py-3.5 text-[15px] text-slate-200 transition hover:text-[#D4AF37]"
          >
            Tours
          </a>

          <a
            href="#experiences"
            onClick={closeMenu}
            className="border-b border-white/[0.06] px-2 py-3.5 text-[15px] text-slate-200 transition hover:text-[#D4AF37]"
          >
            Experiences
          </a>

          <a
            href="#holidays"
            onClick={closeMenu}
            className="border-b border-white/[0.06] px-2 py-3.5 text-[15px] text-slate-200 transition hover:text-[#D4AF37]"
          >
            Holidays
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="px-2 py-3.5 text-[15px] text-slate-200 transition hover:text-[#D4AF37]"
          >
            About
          </a>

          <a
            href="#booking"
            onClick={closeMenu}
            className="mt-3 flex min-h-[50px] items-center justify-center rounded-xl bg-[#D4AF37] px-6 text-sm font-semibold text-[#081220] shadow-[0_10px_30px_rgba(212,175,55,0.12)] transition hover:bg-[#E7C84B]"
          >
            Plan My Journey
          </a>
        </nav>
      </div>
    </header>
  );
}