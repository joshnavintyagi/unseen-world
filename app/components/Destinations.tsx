const destinations = [
  { name: "Edinburgh", image: "/images/destinations/edinburgh-4.jpg" },
  { name: "Glasgow", image: "/images/destinations/glasgow-4.jpg" },
  { name: "Highlands", image: "/images/destinations/highlands-3.jpg" },
  { name: "London", image: "/images/destinations/london-4.jpg" },
  { name: "Manchester", image: "/images/destinations/manchester.jpg" },
  { name: "Dubai", image: "/images/destinations/dubai.jpg" },
  { name: "Paris", image: "/images/destinations/paris.jpg" },
  { name: "Rome", image: "/images/destinations/rome.jpg" },
  { name: "New York", image: "/images/destinations/new-york.jpg" },
  { name: "Singapore", image: "/images/destinations/singapore.jpg" },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="relative w-full overflow-hidden bg-[#06111d] px-4 py-20 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-[1380px]">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-8 bg-[#D4AF37]/70 sm:w-12" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] sm:text-[11px] sm:tracking-[0.32em]">
              Popular Destinations
            </p>

            <span className="h-px w-8 bg-[#D4AF37]/70 sm:w-12" />
          </div>

          <h2 className="mt-5 font-serif text-[36px] leading-tight text-white sm:text-5xl lg:text-[56px]">
            Where would you like to go?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-300">
            From Scotland&apos;s breathtaking landscapes to world-famous
            cities, begin your next journey with Unseen World.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {destinations.map((destination) => (
            <a
              key={destination.name}
              href="#booking"
              className="group relative mx-auto block h-[290px] w-full max-w-[408px] overflow-hidden rounded-[24px] border border-white/10 bg-[#091521] shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/70 hover:shadow-[0_28px_80px_rgba(0,0,0,0.45)] sm:max-w-none"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06111d] via-transparent to-black/10" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-[28px] text-white">
                  {destination.name}
                </h3>

                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#D4AF37]">
                  Explore

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}