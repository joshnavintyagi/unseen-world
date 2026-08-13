"use client";

const services = [
  {
    id: "transfers",
    title: "Airport Transfers",
    bookingService: "Airport Transfer",
    description:
      "Reliable and comfortable private transfers to and from airports across the UK.",
    image: "/images/services/airport-transfer.jpg",
    icon: "✈",
  },
  {
    id: "chauffeur",
    title: "Chauffeur Services",
    bookingService: "Chauffeur Service",
    description:
      "Discreet professional chauffeur service for business, events and private travel.",
    image: "/images/services/chauffeur-services.jpg",
    icon: "♙",
  },
  {
    id: "experiences",
    title: "Tours & Experiences",
    bookingService: "Tours & Experiences",
    description:
      "Discover extraordinary destinations through tailor-made private tours and experiences.",
    image: "/images/services/tours-experiences.jpg",
    icon: "⌁",
  },
  {
    id: "worldwide",
    title: "Worldwide Travel",
    bookingService: "Worldwide Travel",
    description:
      "Carefully planned worldwide journeys through our trusted travel network.",
    image: "/images/services/worldwide-travel.jpg",
    icon: "◎",
  },
];

export default function Services() {
  const selectService = (bookingService: string) => {
    window.dispatchEvent(
      new CustomEvent("select-booking-service", {
        detail: bookingService,
      })
    );

    document
      .getElementById("booking")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

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
              key={service.id}
              id={service.id}
              role="button"
              tabIndex={0}
              onClick={() => selectService(service.bookingService)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  selectService(service.bookingService);
                }
              }}
              className="group cursor-pointer overflow-hidden rounded-[18px] border border-[#D4AF37]/25 bg-[#091521] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_20px_45px_rgba(212,175,55,0.18)]"
            >
              <div className="relative h-[205px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                
              </div>

              <div className="relative px-5 pb-5">
                <div className="-mt-7 mb-3 flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#D4AF37] bg-[#07111c] text-xl text-[#D4AF37] shadow-[0_8px_25px_rgba(0,0,0,0.4)]">
                  {service.icon}
                </div>

                <h3 className="text-[18px] font-medium text-white">
                  {service.title}
                </h3>

                <p className="mt-2 min-h-[64px] text-[13px] leading-[1.65] text-slate-300">
                  {service.description}
                </p>

                <div className="mt-5">
  <span className="inline-flex items-center gap-2 font-semibold text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1">
    Book Now
    <span>→</span>
  </span>
</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}