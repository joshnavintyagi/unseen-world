import BookingSearch from "../components/BookingSearch";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Header from "../components/Header";

const features = [
  {
    title: "Flight Monitoring",
    description:
      "We monitor your flight and adjust collection times for delayed or early arrivals.",
    icon: "✈",
  },
  {
    title: "Meet & Greet",
    description:
      "Professional meet and greet service with assistance for your luggage.",
    icon: "🤝",
  },
  {
    title: "Fixed Pricing",
    description:
      "No hidden charges. Your quotation is agreed before travel.",
    icon: "£",
  },
  {
    title: "Door to Door",
    description:
      "Private transfers between airports, hotels, homes and businesses.",
    icon: "🚘",
  },
];

const faqs = [
  {
    question: "What happens if my flight is delayed?",
    answer:
      "Provide your flight number when booking and we'll monitor the flight before collection.",
  },
  {
    question: "Can I travel with luggage, children or pets?",
    answer:
      "Yes. Please tell us your luggage requirements, child seats and pets during booking.",
  },
  {
    question: "Can I book long-distance journeys?",
    answer:
      "Yes. Airport transfers, city-to-city travel and private long-distance journeys are available.",
  },
  {
    question: "Where will I meet my driver?",
    answer:
      "Your booking confirmation will include your meeting point and collection instructions.",
  },
];

export default function AirportTransfersPage() {
  return (
    <main className="min-h-screen bg-[#06111d] text-white">
      <Header />

      <section className="relative min-h-[620px] overflow-hidden">
        <img
          src="/images/services/airport-transfer.jpg"
          alt="Airport Transfer"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06111d]/95 via-[#06111d]/70 to-transparent" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 pt-24">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-sm font-semibold">
              Premium Airport Transfers
            </p>

            <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight">
              Arrive in Comfort
              <span className="block text-[#D4AF37]">
                Travel with Confidence
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-8">
              Reliable private airport transfers with professional drivers,
              premium vehicles and fixed quotations.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#airport-booking"
                className="rounded-lg bg-[#D4AF37] px-7 py-3 font-semibold text-[#06111d]"
              >
                Book Your Transfer
              </a>

              <a
                href="#airport-benefits"
                className="rounded-lg border border-white/20 px-7 py-3 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="airport-booking"
        className="relative z-20 mx-auto -mt-20 max-w-7xl px-4"
      >
        <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-[#111e2a] shadow-2xl">
          <BookingSearch />
        </div>
      </section>

      <section
        id="airport-benefits"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-xs font-semibold">
            The Unseen World Standard
          </p>

          <h2 className="mt-3 font-serif text-4xl">
            Why Choose Us
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-[#091521] p-6"
            >
              <div className="text-3xl">{feature.icon}</div>

              <h3 className="mt-5 text-lg font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
            <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 font-serif text-4xl">
              Before Your Journey
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Tell us your journey details, passenger numbers, luggage and any
              additional requirements. We'll confirm availability before your
              booking is completed.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-[#091521] p-5"
              >
                <summary className="cursor-pointer list-none font-semibold">
                  <div className="flex items-center justify-between">
                    <span>{faq.question}</span>

                    <span className="text-[#D4AF37] text-xl transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 border-t border-white/10 pt-4 text-slate-300 leading-6">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#111e2a] to-[#091521] px-8 py-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Ready To Travel?
          </p>

          <h2 className="mt-3 font-serif text-4xl">
            Book Your Airport Transfer Today
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Receive a quotation and travel with confidence.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#airport-booking"
              className="rounded-lg bg-[#D4AF37] px-7 py-3 font-semibold text-[#06111d]"
            >
              Plan My Journey
            </a>

            <a
              href="https://wa.me/447856585000"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#25D366] px-7 py-3 font-semibold text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}