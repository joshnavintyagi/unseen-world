export default function Home() {
  return (
    <main className="min-h-screen bg-[#081220] text-white">
      <header className="mx-auto flex max-w-[1400px] items-center justify-between px-12 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37] text-2xl font-bold text-[#081220]">
            U
          </div>

          <div>
            <p className="text-lg tracking-[0.35em]">UNSEEN</p>
            <p className="text-xs tracking-[0.45em] text-[#D4AF37]">WORLD</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#transfers">Transfers</a>
          <a href="#tours">Tours</a>
          <a href="#experiences">Experiences</a>
          <a href="#holidays">Holidays</a>
          <a href="#about">About</a>

          <button className="rounded-lg bg-[#D4AF37] px-5 py-3 font-semibold text-[#081220]">
            Book Now
          </button>
        </nav>
      </header>

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
            Discover the UK through custom-built tours, private transfers, unforgettable Highland experiences and worldwide holidays.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-lg bg-[#D4AF37] px-6 py-3 font-semibold text-[#081220]">
              Plan My Journey
            </button>

            <button className="rounded-lg border border-white/40 px-6 py-3 font-semibold hover:bg-white hover:text-[#081220]">
              Explore Scotland
            </button>
          </div>
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:h-[500px]">
          <img
            src="/images/hero.jpg"
            alt="Scottish Highlands landscape"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#081220]/45 via-transparent to-transparent" />
        </div>
      </section>
    <section className="mx-auto max-w-[1400px] px-12 py-20">

  <h2 className="mb-12 text-center text-4xl font-semibold">
    Travel services, designed around you.
  </h2>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <h3 className="mb-4 text-2xl font-semibold">Airport Transfers</h3>
      <p className="text-slate-300">
        Luxury airport transfers across the UK with professional drivers and fixed pricing.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <h3 className="mb-4 text-2xl font-semibold">Private Tours</h3>
      <p className="text-slate-300">
  Tailor-made private tours across Scotland, England and beyond, designed around your interests.
</p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <h3 className="mb-4 text-2xl font-semibold">Worldwide Holidays</h3>
      <p className="text-slate-300">
        Discover handpicked holidays through our trusted travel partners around the world.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <h3 className="mb-4 text-2xl font-semibold">AI Trip Planner</h3>
      <p className="text-slate-300">
        Tell us your dream trip and let Unseen AI build the perfect itinerary for you.
      </p>
    </div>

  </div>

</section>  
    </main>
  );
}