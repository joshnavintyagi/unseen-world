const trustPoints = [
  {
    title: "Professional Drivers",
    description: "Carefully selected drivers focused on comfort and service.",
    icon: "◇",
  },
  {
    title: "Personal Support",
    description: "Direct assistance before, during and after your journey.",
    icon: "◎",
  },
  {
    title: "Flexible Journeys",
    description: "Airport transfers, hourly hire, tours and private travel.",
    icon: "↗",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#06111d] px-4 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[850px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.04] blur-[140px]" />

      <div className="relative mx-auto w-full max-w-[1380px]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#D4AF37]/70" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#D4AF37]">
              Travel With Confidence
            </p>

            <span className="h-px w-10 bg-[#D4AF37]/70" />
          </div>

          <h2 className="mt-5 font-serif text-[38px] leading-tight text-white sm:text-5xl lg:text-[56px]">
            Service built around your journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-300 sm:text-base">
            From your first enquiry to your final destination, our focus is on
            reliable service, clear communication and a comfortable experience.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1100px] gap-5 md:grid-cols-3">
          {trustPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-[24px] border border-white/10 bg-[#091521] p-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/[0.07] text-xl text-[#D4AF37]">
                {point.icon}
              </div>

              <h3 className="mt-5 font-serif text-2xl text-white">
                {point.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {point.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-[1100px] rounded-[24px] border border-[#D4AF37]/35 bg-[#09141f] px-6 py-7 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                Unseen World
              </p>

              <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                Private travel, personally arranged
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-300">
              We are building our reputation journey by journey. Verified
              customer reviews will appear here as bookings are completed.
            </p>

            <a
              href="#booking"
              className="flex min-h-[50px] shrink-0 items-center justify-center rounded-xl bg-[#D4AF37] px-7 font-semibold text-[#06111d] transition hover:bg-[#E7C84B]"
            >
              Plan My Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}