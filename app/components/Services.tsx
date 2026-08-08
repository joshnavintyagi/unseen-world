"use client";
const services = [
  {
    id: "transfers",
    title: "Airport Transfers",
    bookingService: "Airport Transfer",
    description:
      "Reliable and comfortable private transfers to and from airports across the UK.",
    image: "/images/destinations/edinburgh-1.jpg",
    icon: "✈",
  },
  {
    id: "tours",
    title: "Chauffeur Services",
    bookingService: "Custom Journey",
    description:
      "Discreet professional chauffeur service for business, events and private travel.",
    image: "/images/destinations/london-1.jpg",
    icon: "♙",
  },
  {
    id: "experiences",
    title: "Tours & Experiences",
    bookingService: "Private Tour",
    description:
      "Discover extraordinary destinations through tailor-made private tours and experiences.",
    image: "/images/destinations/highlands-1.jpg",
    icon: "⌁",
  },
  {
    id: "holidays",
    title: "Worldwide Travel",
    bookingService: "Worldwide Holiday",
    description:
      "Carefully planned worldwide journeys through our trusted travel network.",
    image: "/images/destinations/london-2.jpg",
    icon: "◎",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#06111d] px-5 py-10 sm:px-8 sm:py-12 lg:px-12"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-7 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Our Services
          </p>

          <h2 className="mt-2 font-serif text-[30px] leading-tight text-white sm:text-4xl">
            Premium Travel Services
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              id={service.id}
              key={service.title}
              className="group overflow-hidden rounded-[16px] border border-[#D4AF37]/30 bg-[#091521] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/70"
            >
              <div className="relative h-[185px] overflow-hidden sm:h-[200px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#091521] via-transparent to-black/10" />
              </div>

              <div className="relative px-5 pb-5">
                <div className="-mt-7 mb-3 flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#D4AF37] bg-[#07111c] text-xl text-[#D4AF37] shadow-[0_8px_25px_rgba(0,0,0,0.4)]">
                  {service.icon}
                </div>

                <h3 className="text-[18px] font-medium text-white">
                  {service.title}
                </h3>

                <p className="mt-2 text-[13px] leading-[1.65] text-slate-300 lg:min-h-[64px]">
                  {service.description}
                </p>

                <a
  href={`#booking?service=${encodeURIComponent(service.bookingService)}`}
  onClick={(event) => {
    event.preventDefault();

    window.dispatchEvent(
      new CustomEvent("select-booking-service", {
        detail: service.bookingService,
      })
    );

    document
      .getElementById("booking")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }}
  className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#D4AF37] transition hover:text-[#E7C84B]"
>
                  Book Now
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}