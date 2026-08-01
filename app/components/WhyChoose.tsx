const reasons = [
  {
    number: "01",
    title: "Luxury service",
    description:
      "Travel in comfort with professional drivers and carefully selected vehicles.",
  },
  {
    number: "02",
    title: "Tailor-made journeys",
    description:
      "Every tour and travel experience is thoughtfully designed around you.",
  },
  {
    number: "03",
    title: "Local expertise",
    description:
      "Discover remarkable places, stories and experiences most visitors never see.",
  },
  {
    number: "04",
    title: "Trusted worldwide",
    description:
      "Travel confidently through carefully selected local partners around the world.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1400px] px-6 py-24 md:px-12"
    >
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        {/* Heading */}
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            The Unseen World Difference
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            Why choose
            <br />
            Unseen World?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Personal service, local knowledge and carefully designed journeys
            from your first enquiry to your final destination.
          </p>

          <a
            href="#booking"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081220]"
          >
            Start your journey
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Reasons */}
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group min-h-[220px] rounded-[26px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-white/[0.06]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37]">
                  {reason.number}
                </span>

                <span className="text-[#D4AF37]/50 transition duration-300 group-hover:text-[#D4AF37]">
                  ◆
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white">
                {reason.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}