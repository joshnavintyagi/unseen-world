import BookingSearch from "../components/BookingSearch";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PlanYourJourneyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06111d] text-white">
      <Header />

      <section className="mx-auto max-w-[1280px] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">
            Planning Ahead
          </p>

          <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
            Plan Your Journey
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Tell us the full details of your journey so we can prepare the most
            suitable travel solution and quotation.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-[#111e2a] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
          <BookingSearch />
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}