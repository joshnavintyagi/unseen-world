import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function BookingSummaryPage() {
  return (
    <main className="min-h-screen bg-[#06111d] text-white">
      <Header />

      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="rounded-3xl border border-yellow-500/20 bg-[#0d1826] shadow-xl overflow-hidden">

          <div className="border-b border-white/10 px-8 py-6">
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-400">
              Final Step
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              Booking Summary
            </h1>

            <p className="mt-2 text-white/70">
              Please review your journey before submitting your enquiry.
            </p>
          </div>

          <div className="p-8 space-y-6">

            <SummaryRow
              label="Journey Type"
              value="Airport Transfer"
            />

            <SummaryRow
              label="Pickup"
              value="Edinburgh Airport"
            />

            <SummaryRow
              label="Destination"
              value="The Balmoral Hotel"
            />

            <SummaryRow
              label="Travel Date"
              value="21 August 2026"
            />

            <SummaryRow
              label="Travel Time"
              value="14:30"
            />

            <SummaryRow
              label="Passengers"
              value="2 Adults"
            />

            <SummaryRow
              label="Vehicle"
              value="Executive Saloon"
            />

            <SummaryRow
              label="Extras"
              value="Meet & Greet • Flight Monitoring"
            />

            <div className="border-t border-white/10 pt-6">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-white/60">
                    Estimated Price
                  </p>

                  <h2 className="text-4xl font-bold text-yellow-400">
                    £85
                  </h2>
                </div>

                <p className="text-sm text-white/50">
                  Final price confirmed after review.
                </p>

              </div>

            </div>

          </div>

          <div className="border-t border-white/10 p-8 flex flex-col md:flex-row gap-4 justify-between">

            <Link
              href="/plan-your-journey"
              className="rounded-xl border border-white/20 px-6 py-3 text-center hover:bg-white/5 transition"
            >
              ← Back
            </Link>

            <Link
              href="/thank-you"
              className="rounded-xl bg-yellow-500 px-8 py-3 text-center font-semibold text-black hover:bg-yellow-400 transition"
            >
              Submit Enquiry →
            </Link>

          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b border-white/5 pb-4">

      <span className="text-white/60">
        {label}
      </span>

      <span className="font-medium text-right">
        {value}
      </span>

    </div>
  );
}