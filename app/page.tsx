import BookingSearch from "./components/BookingSearch";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#081220] text-white">
      <Header />
      <Hero />
      <BookingSearch />

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

      <section
        id="about"
        className="mx-auto max-w-[1400px] px-6 py-20 md:px-12"
      >
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
    </main>
  );
}