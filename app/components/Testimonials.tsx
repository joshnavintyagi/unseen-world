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
    trip: "Edinburgh and Highlands Tour",
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
      className="mx-auto max-w-[1400px] px-6 py-20 md:px-12"
    >
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
          Guest experiences
        </p>

        <h2 className="text-4xl font-semibold md:text-5xl">
          Journeys remembered for all the right reasons.
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          Thoughtful planning, personal service and unforgettable experiences
          from beginning to end.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <div className="mb-6 flex gap-1 text-[#D4AF37]">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <blockquote className="text-lg leading-8 text-slate-200">
              “{testimonial.quote}”
            </blockquote>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="font-semibold text-white">{testimonial.name}</p>

              <p className="mt-1 text-sm text-slate-400">
                {testimonial.trip}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}