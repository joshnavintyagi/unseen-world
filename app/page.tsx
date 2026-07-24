import Header from "./components/Header";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#081220] text-white">
      <Header />
       
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
              className="rounded-lg bg-[#D4AF37] px-6 py-3 font-semibold text-[#081220]"
            >
              Plan My Journey
            </a>

            <a
              href="#experiences"
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

          <div className="absolute inset-0 bg-gradient-to-r from-[#081220]/45 via-transparent to-transparent" />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        <h2 className="mb-12 text-center text-4xl font-semibold">
          Travel services, designed around you.
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            id="transfers"
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="mb-4 text-2xl font-semibold">
              Airport Transfers
            </h3>

            <p className="leading-7 text-slate-300">
              Luxury airport transfers across the UK with professional drivers
              and fixed pricing.
            </p>
          </div>

          <div
            id="tours"
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="mb-4 text-2xl font-semibold">Private Tours</h3>

            <p className="leading-7 text-slate-300">
              Tailor-made private tours across Scotland, England and beyond,
              designed around your interests.
            </p>
          </div>

          <div
            id="holidays"
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="mb-4 text-2xl font-semibold">
              Worldwide Holidays
            </h3>

            <p className="leading-7 text-slate-300">
              Discover handpicked holidays through our trusted travel partners
              around the world.
            </p>
          </div>

          <div
            id="experiences"
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="mb-4 text-2xl font-semibold">AI Trip Planner</h3>

            <p className="leading-7 text-slate-300">
              Tell us your dream trip and let Unseen AI build the perfect
              itinerary for you.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            The Unseen World difference
          </p>

          <h2 className="text-4xl font-semibold md:text-5xl">
            Why choose Unseen World?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Personal service, local knowledge and carefully designed journeys
            from your first enquiry to your final destination.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <p className="mb-6 text-sm font-semibold text-[#D4AF37]">01</p>
            <h3 className="mb-3 text-xl font-semibold">Luxury service</h3>
            <p className="leading-7 text-slate-400">
              Travel in comfort with professional drivers and carefully selected
              vehicles.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <p className="mb-6 text-sm font-semibold text-[#D4AF37]">02</p>
            <h3 className="mb-3 text-xl font-semibold">
              Tailor-made journeys
            </h3>
            <p className="leading-7 text-slate-400">
              Every tour and travel experience is thoughtfully designed around
              you.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <p className="mb-6 text-sm font-semibold text-[#D4AF37]">03</p>
            <h3 className="mb-3 text-xl font-semibold">Local expertise</h3>
            <p className="leading-7 text-slate-400">
              Discover remarkable places, stories and experiences most visitors
              never see.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <p className="mb-6 text-sm font-semibold text-[#D4AF37]">04</p>
            <h3 className="mb-3 text-xl font-semibold">Trusted worldwide</h3>
            <p className="leading-7 text-slate-400">
              Travel confidently through carefully selected local partners
              around the world.
            </p>
          </div>
        </div>
      </section>

      <section
        id="booking"
        className="mx-auto max-w-[1400px] px-6 py-24 md:px-12"
      >
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl">
          <div className="border-b border-white/10 px-6 py-8 md:px-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Start your journey
            </p>

            <h2 className="text-3xl font-semibold md:text-5xl">
              Where would you like to go?
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Book a private transfer or tell us about the journey you would
              like us to create.
            </p>
          </div>

          <form className="grid gap-5 p-6 md:grid-cols-2 md:p-10 lg:grid-cols-5">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">
                Service
              </span>

              <select className="h-14 w-full rounded-xl border border-white/10 bg-slate-950 px-4 text-white outline-none transition focus:border-[#D4AF37]">
                <option>Airport Transfer</option>
                <option>Private Tour</option>
                <option>Worldwide Holiday</option>
                <option>Custom Journey</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">
                Pick-up location
              </span>

              <input
                type="text"
                placeholder="Airport, hotel or address"
                className="h-14 w-full rounded-xl border border-white/10 bg-slate-950 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">
                Destination
              </span>

              <input
                type="text"
                placeholder="Where are you going?"
                className="h-14 w-full rounded-xl border border-white/10 bg-slate-950 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-[#D4AF37]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">
                Travel date
              </span>

              <input
                type="date"
                className="h-14 w-full rounded-xl border border-white/10 bg-slate-950 px-4 text-white outline-none transition focus:border-[#D4AF37]"
              />
            </label>

            <div className="flex items-end">
              <button
                type="submit"
                className="h-14 w-full rounded-xl bg-[#D4AF37] px-6 font-semibold text-[#081220] transition hover:opacity-90"
              >
                Plan My Journey
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}