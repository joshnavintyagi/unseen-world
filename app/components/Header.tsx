export default function Header() {
  return (
    <header className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37] text-2xl font-bold text-[#081220]">
          U
        </div>

        <div>
          <p className="text-lg tracking-[0.35em]">UNSEEN</p>
          <p className="text-xs tracking-[0.45em] text-[#D4AF37]">
            WORLD
          </p>
        </div>
      </div>

      <nav className="hidden items-center gap-8 text-sm md:flex">
        <a href="#transfers">Transfers</a>
        <a href="#tours">Tours</a>
        <a href="#experiences">Experiences</a>
        <a href="#holidays">Holidays</a>
        <a href="#about">About</a>

        <a
          href="#booking"
          className="rounded-lg bg-[#D4AF37] px-5 py-3 font-semibold text-[#081220]"
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}