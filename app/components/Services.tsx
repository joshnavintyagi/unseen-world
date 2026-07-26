const services = [
  {
    id: "transfers",
    title: "Airport Transfers",
    description:
      "Luxury airport transfers across the UK with professional drivers and fixed pricing.",
  },
  {
    id: "tours",
    title: "Private Tours",
    description:
      "Tailor-made private tours across Scotland, England and beyond, designed around your interests.",
  },
  {
    id: "holidays",
    title: "Worldwide Holidays",
    description:
      "Discover handpicked holidays through our trusted travel partners around the world.",
  },
  {
    id: "experiences",
    title: "AI Trip Planner",
    description:
      "Tell us your dream trip and let Unseen AI build the perfect itinerary for you.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
      <h2 className="mb-12 text-center text-4xl font-semibold">
        Travel services, designed around you.
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            id={service.id}
            key={service.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>

            <p className="leading-7 text-slate-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}