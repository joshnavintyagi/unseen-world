const experiences = [
  {
    title: "Highland Adventures",
    category: "Scenic journeys",
    description:
      "Explore dramatic glens, hidden lochs, ancient castles and unforgettable Highland roads.",
    duration: "1–5 days",
    image: "/images/destinations/highlands-1.jpg",
    href: "#booking",
  },
  {
    title: "Whisky Experiences",
    category: "Taste Scotland",
    description:
      "Visit celebrated distilleries, meet local experts and discover the stories behind Scotland’s finest whisky.",
    duration: "Full-day tours",
    image: "/images/destinations/highlands-2.jpg",
    href: "#booking",
  },
  {
    title: "Castles & Scottish History",
    category: "Heritage",
    description:
      "Journey through centuries of royal history, legendary battles and Scotland’s most remarkable castles.",
    duration: "Private day tours",
    image: "/images/destinations/edinburgh-1.jpg",
    href: "#booking",
  },
  {
    title: "Glenfinnan & Film Locations",
    category: "Iconic Scotland",
    description:
      "Experience the Glenfinnan Viaduct and spectacular landscapes made famous by film and television.",
    duration: "Full-day experience",
    image: "/images/destinations/highlands-3.jpg",
    href: "#booking",
  },
  {
    title: "London Highlights",
    category: "Capital experiences",
    description:
      "Discover royal landmarks, historic streets, the Thames and London’s most recognisable sights.",
    duration: "Half or full day",
    image: "/images/destinations/london-1.jpg",
    href: "#booking",
  },
  {
    title: "Bespoke Luxury Journeys",
    category: "Designed for you",
    description:
      "Create a completely personalised journey built around your interests, pace and preferred experiences.",
    duration: "Tailor-made",
    image: "/images/destinations/london-3.jpg",
    href: "#booking",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="mx-auto max-w-[1400px] px-6 py-24 md:px-12"
    >
      <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Unforgettable experiences
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            More than a tour. A story worth telling.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Discover private experiences shaped around remarkable places,
            authentic stories and the way you want to travel.
          </p>
        </div>

        <a
          href="#booking"
          className="inline-flex w-fit items-center gap-3 border-b border-[#D4AF37] pb-2 font-semibold text-[#D4AF37] transition hover:gap-5"
        >
          Create your experience
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience) => (
          <article
            key={experience.title}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] transition duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/60"
          >
            <div className="relative h-[290px] overflow-hidden">
              <img
                src={experience.image}
                alt={experience.title}
                className="h-full w-full object-cover transition duration-[1000ms] ease-out group-hover:scale-110 group-hover:saturate-[1.15]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081220] via-[#081220]/20 to-transparent" />

              <div className="absolute left-5 top-5">
                <span className="rounded-full border border-white/20 bg-[#081220]/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  {experience.category}
                </span>
              </div>
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-semibold text-white">
                {experience.title}
              </h3>

              <p className="mt-4 min-h-[84px] leading-7 text-slate-300">
                {experience.description}
              </p>

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                <p className="text-sm text-slate-400">{experience.duration}</p>

                <a
                  href={experience.href}
                  className="inline-flex items-center gap-2 font-semibold text-[#D4AF37] transition group-hover:gap-3"
                >
                  View experience
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}