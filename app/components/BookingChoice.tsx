"use client";

export default function BookingChoice() {
  const scrollToBooking = () => {
    document
      .getElementById("booking")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#06111d] py-16">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-12 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            HOW WOULD YOU LIKE TO BOOK?
          </p>

          <h2 className="mt-4 text-4xl font-serif text-white">
            Choose the option that suits your journey
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Urgent */}

          <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#111c29] p-10 text-center shadow-xl">

            <div className="text-6xl">🚗</div>

            <h3 className="mt-6 text-3xl font-serif text-white">
              Travelling Today
              <br />
              or Urgently?
            </h3>

            <p className="mt-5 text-slate-300">
              Need transport at short notice?
            </p>

            <a
              href="https://wa.me/447856585000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-xl bg-[#25D366] px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
            >
              WhatsApp Us
            </a>

          </div>

          {/* Planning */}

          <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#111c29] p-10 text-center shadow-xl">

            <div className="text-6xl">📅</div>

            <h3 className="mt-6 text-3xl font-serif text-white">
              Planning Ahead?
            </h3>

            <p className="mt-5 text-slate-300">
              Airport transfers, chauffeur services,
              tours and worldwide travel.
            </p>

            <button
              onClick={scrollToBooking}
              className="mt-8 rounded-xl bg-[#D4AF37] px-8 py-4 text-lg font-semibold text-[#06111d] transition hover:scale-105"
            >
              Plan My Journey
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}