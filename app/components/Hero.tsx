export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-7 sm:px-6 sm:py-9 lg:grid lg:min-h-[58vh] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-9 lg:py-8">
      {/* CONTENT */}
      <div className="min-w-0">
        <p className="mb-3 max-w-[340px] text-[10px] font-semibold uppercase leading-[1.7] tracking-[0.24em] text-[#D4AF37] sm:max-w-none sm:text-[11px] sm:tracking-[0.28em]">
          UK TRANSFERS • PRIVATE TOURS • WORLDWIDE HOLIDAYS
        </p>

        <h1 className="max-w-[520px] text-[34px] font-semibold leading-[1.06] tracking-[-0.025em] text-white sm:text-[40px] md:text-5xl">
          Every journey reveals something extraordinary.
        </h1>

        <p className="mt-4 max-w-lg text-[15px] font-medium text-slate-200 sm:text-base">
          The future of intelligent travel.
        </p>

        <p className="mt-2.5 max-w-lg text-[14px] leading-6 text-slate-400 sm:mt-3 sm:text-base">
          Discover the UK through custom-built tours, private transfers,
          unforgettable Highland experiences and worldwide holidays.
        </p>

        {/* ACTIONS */}
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:flex sm:flex-wrap sm:gap-3">
          <a
            href="#booking"
            className="flex min-h-[48px] items-center justify-center rounded-xl bg-[#D4AF37] px-3 text-center text-[13px] font-semibold text-[#081220] transition hover:bg-[#E7C84B] sm:px-5 sm:text-sm"
          >
            Plan My Journey
          </a>

          <a
            href="#destinations"
            className="flex min-h-[48px] items-center justify-center rounded-xl border border-white/30 px-3 text-center text-[13px] font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37] sm:px-5 sm:text-sm"
          >
            Explore Scotland
          </a>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="relative mt-7 h-[245px] overflow-hidden rounded-[22px] border border-white/10 shadow-[0_20px_55px_rgba(0,0,0,0.4)] sm:h-[300px] sm:rounded-[26px] md:h-[360px] lg:mt-0 lg:h-[430px] lg:rounded-[28px]">
        <img
          src="/images/hero.jpg"
          alt="Scottish Highlands landscape"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#081220]/25 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081220]/20 via-transparent to-transparent" />

        {/* SUBTLE PREMIUM GOLD EDGE GLOW */}
        <div className="pointer-events-none absolute inset-x-[12%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/45 to-transparent" />
      </div>
    </section>
  );
}