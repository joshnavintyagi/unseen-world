const testimonials = [
  {
    quote:
      "From the airport collection to our Highland tour, everything felt effortless and beautifully organised.",
    name: "Amelia R.",
    trip: "Private Scotland Journey",
  },
  {
    quote:
      "The service was personal, professional and far beyond what we expected. We discovered places we would never have found ourselves.",
    name: "Daniel M.",
    trip: "Edinburgh & Highlands Tour",
  },
  {
    quote:
      "Our transfer was punctual, comfortable and completely stress-free. A genuinely premium experience.",
    name: "Sophia K.",
    trip: "Luxury Airport Transfer",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="mx-auto max-w-[1400px] px-6 py-24 md:px-12"
    >
      <div className="mb-10 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
          Guest Experiences
        </p>

        <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
          Journeys remembered for all the right reasons.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Thoughtful planning, personal service and unforgettable experiences
          from beginning to end.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="group flex min-h-[300px] flex-col rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-white/[0.06]"
          >
            <div
              className="mb-6 flex gap-1 text-lg text-[#D4AF37]"
              aria-label="5 out of 5 stars"
            >
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <blockquote className="flex-1 text-lg leading-8 text-slate-200">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div className="mt-7 border-t border-white/10 pt-5">
              <p className="font-semibold text-white">
                {testimonial.name}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {testimonial.trip}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
        <span>Private journeys</span>
        <span className="text-[#D4AF37]">◆</span>
        <span>Personal service</span>
        <span className="text-[#D4AF37]">◆</span>
        <span>Designed around you</span>
      </div>
    </section>
  );
}