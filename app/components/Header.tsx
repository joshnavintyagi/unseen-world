export default function Header() {
  return (
    <header className="border-b border-white/[0.06]">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12">
        
        {/* BRAND */}
        <a
          href="/"
          aria-label="Unseen World home"
          className="flex items-center"
        >
          {/* WORDMARK */}
          <div className="flex w-[190px] flex-col items-center">
            <p className="whitespace-nowrap text-[26px] font-medium tracking-[0.34em] text-white">
              UNSEEN
            </p>

            <p className="mt-1 whitespace-nowrap text-[17px] font-semibold tracking-[0.42em] text-[#D4AF37]">
              WORLD
            </p>
          </div>

          {/* LARGE GOLD U */}
          <div className="-ml-3 flex h-[110px] w-[105px] items-center justify-center overflow-visible">
            <img
              src="/images/unseen-logo.png"
              alt=""
              className="h-[190px] w-[190px] max-w-none object-contain"
            />
          </div>
        </a>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-10 text-[15px] md:flex">
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
            className="ml-2 rounded-xl bg-[#D4AF37] px-7 py-4 font-semibold text-[#081220] transition hover:bg-[#E7C84B]"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}