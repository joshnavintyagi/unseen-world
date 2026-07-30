const destinations = [
  {
    name: "Scottish Highlands",
    location: "Scotland",
    description:
      "Journey through dramatic glens, mountain passes and landscapes that feel untouched by time.",
    duration: "1–5 day private tours",
    badge: "Most popular",
    image:
      "https://images.unsplash.com/photo-ZUyHjjZfPok?auto=format&fit=crop&w=1800&q=95",
    imagePosition: "center",
  },
  {
    name: "London",
    location: "England",
    description:
      "Experience famous landmarks, elegant neighbourhoods and hidden corners of Britain’s capital.",
    duration: "Half-day and full-day tours",
    badge: "Iconic city",
    image:
      "https://images.unsplash.com/photo-9JGtBULxClA?auto=format&fit=crop&w=1800&q=95",
    imagePosition: "center",
  },
  {
    name: "Edinburgh",
    location: "Scotland",
    description:
      "Discover castle views, atmospheric streets and centuries of stories across Scotland’s capital.",
    duration: "Private city experiences",
    badge: "Guest favourite",
    image:
      "https://images.unsplash.com/photo-nWkt_TNAhG4?auto=format&fit=crop&w=1800&q=95",
    imagePosition: "center",
  },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="mx-auto max-w-[1400px] px-6 py-24 md:px-12"
    >
      <div className="mb-14 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
          Signature destinations
        </p>

        <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
          Journeys that stay with you forever.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Private journeys through Britain’s most inspiring landscapes,
          historic cities and unforgettable places.
        </p>
      </div>

      <div className="grid gap-7 lg:grid-cols-3">
        {destinations.map((destination) => (
          <article
            key={destination.name}
            className="group relative min-h-[570px] overflow-hidden rounded-[32px] border border-white/15 bg-slate-900 shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/70"
          >
            <img
              src={destination.image}
              alt={`${destination.name} private travel experience`}
              style={{ objectPosition: destination.imagePosition }}
              className="absolute inset-0 h-full w-full object-cover contrast-[1.05] saturate-[1.12] transition duration-[1200ms] ease-out group-hover:scale-105 group-hover:saturate-[1.22]"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#020914]/95" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020914]/80 via-transparent to-transparent" />

            <div className="absolute left-6 top-6 z-10">
              <span className="rounded-full border border-white/25 bg-[#081220]/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                {destination.badge}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 p-7 md:p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#E7C84B]">
                {destination.location}
              </p>

              <h3 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                {destination.name}
              </h3>

              <p className="mt-4 min-h-[84px] text-base leading-7 text-slate-200">
                {destination.description}
              </p>

              <div className="mt-6 border-t border-white/20 pt-5">
                <p className="mb-5 text-sm font-medium text-slate-300">
                  {destination.duration}
                </p>

                <a
                  href="#booking"
                  className="inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#081220] transition duration-300 hover:scale-105 hover:bg-[#E7C84B]"
                >
                  Explore tour
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/10" />
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-y border-white/10 py-6 text-sm text-slate-400">
        <span>Private chauffeur service</span>
        <span className="hidden text-[#D4AF37] sm:inline">◆</span>
        <span>Tailor-made itineraries</span>
        <span className="hidden text-[#D4AF37] sm:inline">◆</span>
        <span>Local destination experts</span>
      </div>
    </section>
  );
}