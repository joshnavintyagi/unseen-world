"use client";

export default function QuickBooking() {
  const message = encodeURIComponent(`Hi Unseen World,

I'd like a quote.

📍 Pick-up:
📍 Drop-off:
📅 Date:
🕒 Time:
👥 Passengers:
🚗 Vehicle:
🧳 Luggage:
🐾 Pet:
`);

  return (
    <section className="bg-[#06111d] px-6 py-12">
      <div className="mx-auto max-w-7xl rounded-3xl border border-[#D4AF37]/25 bg-[#091521] p-8">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Need a Quick Booking?
          </p>

          <h2 className="mt-3 font-serif text-4xl text-white">
            Book Your Journey Your Way
          </h2>

          <p className="mt-4 text-slate-300">
            Complete our booking form or send us an instant WhatsApp message.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <a
            href="#booking"
            className="rounded-2xl border border-[#D4AF37]/25 bg-[#07111c] p-8 transition hover:border-[#D4AF37]"
          >
            <div className="text-5xl">📝</div>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              Plan My Journey
            </h3>

            <p className="mt-3 text-slate-300">
              Perfect for airport transfers, chauffeur services, tours and worldwide travel.
            </p>

            <div className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black">
              Booking Form →
            </div>
          </a>

          <a
            href={`https://wa.me/447856585000?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-green-500/40 bg-[#07111c] p-8 transition hover:border-green-400"
          >
            <div className="text-5xl">💬</div>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              Instant WhatsApp
            </h3>

            <p className="mt-3 text-slate-300">
              Fast quotes, quick bookings and travel assistance.
            </p>

            <div className="mt-8 inline-flex rounded-full bg-green-500 px-6 py-3 font-semibold text-white">
              Open WhatsApp →
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}