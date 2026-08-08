const reasons = [
  {
    icon: "♙",
    title: "Executive Chauffeurs",
    description:
      "Experienced, licensed and dedicated to your comfort and safety.",
  },
  {
    icon: "✈",
    title: "Flight Monitoring",
    description:
      "We monitor your flight in real time for a seamless airport experience.",
  },
  {
    icon: "♧",
    title: "Meet & Greet",
    description:
      "Your chauffeur will be waiting for you, ready to assist.",
  },
  {
    icon: "◇",
    title: "Luxury Fleet",
    description:
      "A carefully selected fleet for a smooth and stylish journey.",
  },
  {
    icon: "◎",
    title: "Worldwide Coverage",
    description:
      "Private travel services in cities and destinations around the world.",
  },
  {
    icon: "◴",
    title: "Available 24/7",
    description:
      "We're here to help, anytime, day or night, every day.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="about"
      className="bg-[#06111d] px-5 pb-10 pt-7 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1280px]">

        <div className="mb-8 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
            Why Choose Unseen World
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-9 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className={`px-3 text-center sm:px-5 ${
                index !== reasons.length - 1
                  ? "lg:border-r lg:border-white/10"
                  : ""
              }`}
            >
              <div className="mx-auto mb-3 flex h-[46px] w-[46px] items-center justify-center text-[29px] text-[#D4AF37]">
                {reason.icon}
              </div>

              <h3 className="text-[13px] font-semibold text-white">
                {reason.title}
              </h3>

              <p className="mx-auto mt-2 max-w-[175px] text-[11px] leading-[1.65] text-slate-300">
                {reason.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}