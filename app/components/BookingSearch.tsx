export default function BookingSearch() {
  return (
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
            Book a private transfer or tell us about the journey you would like
            us to create.
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
  );
}