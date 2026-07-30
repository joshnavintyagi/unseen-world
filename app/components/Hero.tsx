export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[68vh] max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
          UK TRANSFERS • PRIVATE TOURS • WORLDWIDE HOLIDAYS
        </p>

        <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] md:text-6xl">
          Every journey reveals something extraordinary.
        </h1>

        <p className="mt-5 max-w-xl text-lg text-slate-300">
          The future of intelligent travel.
        </p>

        <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
          Discover the UK through custom-built tours, private transfers,
          unforgettable Highland experiences and worldwide holidays.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#booking"
            className="rounded-lg bg-[#D4AF37] px-6 py-3 font-semibold text-[#081220] transition hover:bg-[#e5c653]"
          >
            Plan My Journey
          </a>

          <a
            href="#destinations"
            className="rounded-lg border border-white/40 px-6 py-3 font-semibold transition hover:bg-white hover:text-[#081220]"
          >
            Explore Scotland
          </a>
        </div>
      </div>

      <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:h-[500px]">
        <img
          src="/images/hero.jpg"
          alt="Scottish Highlands landscape"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#081220]/35 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081220]/20 via-transparent to-transparent" />
      </div>
    </section>
  );
}