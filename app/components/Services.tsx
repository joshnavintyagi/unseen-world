"use client";

const services = [
  {
    id: "transfers",
    title: "Airport Transfers",
    bookingService: "Airport Transfer",
    description:
      "Private airport collections and drop-offs with professional drivers, flight monitoring and personal support.",
    image: "/images/services/airport-transfer.jpg",
    icon: "✈",
    number: "01",
  },
  {
    id: "chauffeur",
    title: "Chauffeur Services",
    bookingService: "Chauffeur Service",
    description:
      "Discreet chauffeur travel for business journeys, private occasions, events and hourly hire.",
    image: "/images/services/chauffeur-services.jpg",
    icon: "♙",
    number: "02",
  },
  {
    id: "experiences",
    title: "Tours & Experiences",
    bookingService: "Tours & Experiences",
    description:
      "Private tours and carefully planned experiences across Scotland, the Highlands and beyond.",
    image: "/images/services/tours-experiences.jpg",
    icon: "⌁",
    number: "03",
  },
  {
    id: "worldwide",
    title: "Worldwide Travel",
    bookingService: "Worldwide Travel",
    description:
      "Personalised holidays and international journeys arranged through our growing travel network.",
    image: "/images/services/worldwide-travel.jpg",
    icon: "◎",
    number: "04",
  },
];

export default function Services() {
  const selectService = (bookingService: string) => {
    window.dispatchEvent(
      new CustomEvent("select-booking-service", {
        detail: bookingService,
      })
    );

    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#06111d] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-[1380px]">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#D4AF37]/70" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#D4AF37]">
              Our Services
            </p>

            <span className="h-px w-10 bg-[#D4AF37]/70" />
          </div>

          <h2 className="mt-5 font-serif text-[38px] leading-tight text-white sm:text-5xl lg:text-[56px]">
            Travel, arranged around you
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-300 sm:text-base">
            From urgent airport journeys to carefully planned tours and
            worldwide travel, choose the service that best suits your needs.
          </p>
        </div>

        <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              role="button"
              tabIndex={0}
              aria-label={`Select ${service.title}`}
              onClick={() => selectService(service.bookingService)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  selectService(service.bookingService);
                }
              }}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[#091521] shadow-[0_22px_65px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/70 hover:shadow-[0_30px_80px_rgba(0,0,0,0.48)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/70"
            >
              <div className="relative h-[255px] overflow-hidden sm:h-[275px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.07]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06111d] via-[#06111d]/20 to-black/5" />

                <span className="absolute right-5 top-5 text-xs font-semibold tracking-[0.25em] text-white/65">
                  {service.number}
                </span>

                <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/75 bg-[#06111d]/85 text-xl text-[#D4AF37] shadow-[0_12px_30px_rgba(0,0,0,0.38)] backdrop-blur-md">
                  {service.icon}
                </div>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-7 pt-5">
                <h3 className="font-serif text-[25px] leading-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
                  {service.description}
                </p>

                <div className="mt-7 border-t border-white/[0.08] pt-5">
                  <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.13em] text-[#D4AF37]">
                    Book Now

                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
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