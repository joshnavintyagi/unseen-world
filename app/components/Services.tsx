const services = [
  {
    id: "transfers",
    number: "01",
    title: "Airport Transfers",
    description:
      "Luxury airport transfers across the UK with professional drivers and fixed pricing.",
  },
  {
    id: "tours",
    number: "02",
    title: "Private Tours",
    description:
      "Tailor-made private tours across Scotland, England and beyond, designed around your interests.",
  },
  {
    id: "holidays",
    number: "03",
    title: "Worldwide Holidays",
    description:
      "Discover handpicked holidays through our trusted travel partners around the world.",
  },
  {
    id: "experiences",
    number: "04",
    title: "AI Trip Planner",
    description:
      "Tell us your dream trip and let Unseen AI build the perfect itinerary for you.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="mb-8 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
          Travel your way
        </p>

        <h2 className="text-3xl font-semibold md:text-4xl">
          Travel services, designed around you.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            id={service.id}
            key={service.title}
            className="group rounded-[22px] border border-white/10 bg-white/[0.05] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:bg-white/[0.07]"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37]">
                {service.number}
              </span>

              <span className="text-lg text-slate-500 transition group-hover:text-[#D4AF37]">
                ↗
              </span>
            </div>

            <h3 className="mb-3 text-xl font-semibold text-white">
              {service.title}
            </h3>

            <p className="text-sm leading-6 text-slate-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}