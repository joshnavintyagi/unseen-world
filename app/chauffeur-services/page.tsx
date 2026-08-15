import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingSearch from "../components/BookingSearch";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const services = [
  {
    title: "Executive Chauffeurs",
    text: "Professional chauffeurs for business meetings, VIP guests and executive travel.",
    icon: "🤵",
  },
  {
    title: "Hourly Hire",
    text: "Flexible chauffeur hire for shopping, events, sightseeing and city travel.",
    icon: "🕒",
  },
  {
    title: "Corporate Travel",
    text: "Reliable executive transport for conferences, meetings and airport connections.",
    icon: "💼",
  },
  {
    title: "Special Occasions",
    text: "Luxury chauffeur services for weddings, gala dinners and private events.",
    icon: "✨",
  },
];

export default function ChauffeurServicesPage() {
  return (
    <main className="min-h-screen bg-[#06111d] text-white overflow-x-hidden">
      <Header />

      <section className="relative min-h-[720px] overflow-hidden">
        <img
          src="/images/services/chauffeur-services.jpg"
          alt="Luxury Chauffeur"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06111d]/95 via-[#06111d]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06111d] via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-sm font-semibold">
              Chauffeur Services
            </p>

            <h1 className="mt-5 font-serif text-6xl leading-tight lg:text-7xl">
              Luxury Chauffeur
              <span className="block text-[#D4AF37]">
                Travel Without Compromise
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
              Executive chauffeur services for business, leisure, special
              occasions and private journeys across the UK with comfort,
              discretion and professionalism.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#booking"
                className="rounded-lg bg-[#D4AF37] px-7 py-4 font-semibold text-[#06111d]"
              >
                Book Chauffeur
              </a>

              <a
                href="#features"
                className="rounded-lg border border-white/20 px-7 py-4"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="booking"
        className="relative z-20 mx-auto -mt-20 max-w-7xl px-5"
      >
        <div className="rounded-3xl border border-[#D4AF37]/25 bg-[#111e2a] shadow-2xl">
          <BookingSearch />
        </div>
      </section>

      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm">
            Why Choose Us
          </p>

          <h2 className="mt-3 font-serif text-5xl">
            Chauffeur Excellence
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#D4AF37]/20 bg-[#091521] p-7 transition hover:-translate-y-2 hover:border-[#D4AF37]"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-6 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/25">
          <img
            src="/images/services/chauffeur-services.jpg"
            alt=""
            className="h-[520px] w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#0b1723] px-10 py-16 text-center">
          <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm">
            Travel in Style
          </p>

          <h2 className="mt-4 font-serif text-5xl">
            Reserve Your Chauffeur Today
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Executive travel, airport transfers, corporate journeys and luxury
            private hire tailored around your schedule.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#booking"
              className="rounded-lg bg-[#D4AF37] px-8 py-4 font-semibold text-[#06111d]"
            >
              Plan My Journey
            </a>

            <a
              href="https://wa.me/447856585000"
              className="rounded-lg border border-[#25D366] px-8 py-4 font-semibold text-[#25D366]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}