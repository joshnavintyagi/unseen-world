const destinations = [
  { name: "London", image: "/images/destinations/london-4.jpg" },
  { name: "Edinburgh", image: "/images/destinations/edinburgh-4.jpg" },
  { name: "Glasgow", image: "/images/destinations/glasgow-4.jpg" },
  { name: "Manchester", image: "/images/destinations/manchester.jpg" },
  { name: "Dubai", image: "/images/destinations/dubai.jpg" },
  { name: "Paris", image: "/images/destinations/paris.jpg" },
  { name: "Rome", image: "/images/destinations/rome.jpg" },
  { name: "New York", image: "/images/destinations/new-york.jpg" },
  { name: "Singapore", image: "/images/destinations/singapore.jpg" },
  { name: "Bangkok", image: "/images/destinations/bangkok.jpg" },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="bg-[#06111d] px-5 pb-12 pt-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Popular Destinations →
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {destinations.map((destination) => (
            <a
              key={destination.name}
              href="#booking"
              className="group relative h-[120px] overflow-hidden rounded-[12px] border border-white/15 bg-[#091521] sm:h-[135px]"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 px-3 pb-2.5 text-center">
                <h3 className="text-sm font-medium text-white sm:text-base">
                  {destination.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}