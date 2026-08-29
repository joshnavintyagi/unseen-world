import Link from "next/link";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#06111d] text-white">
      <Header />

      <section className="mx-auto flex min-h-[75vh] max-w-3xl items-center px-6 pb-20 pt-32">
        <div className="w-full rounded-3xl border border-[#D4AF37]/25 bg-[#0d1826] p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.4)] sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-4xl text-[#D4AF37]">
            ✓
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.32em] text-[#D4AF37]">
            Enquiry Received
          </p>

          <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
            Thank you for choosing Unseen World
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
            We have received your journey details. Our team will review your
            request and contact you to confirm availability and the final
            quotation.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#08131f] p-5 text-left">
            <h2 className="font-semibold text-white">What happens next?</h2>

            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <p>
                <span className="mr-2 text-[#D4AF37]">1.</span>
                We review your journey requirements.
              </p>

              <p>
                <span className="mr-2 text-[#D4AF37]">2.</span>
                We confirm availability and provide the final quotation.
              </p>

              <p>
                <span className="mr-2 text-[#D4AF37]">3.</span>
                Your booking is confirmed after payment is arranged.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/5 p-5">
            <p className="text-sm leading-6 text-slate-200">
              Travelling today or urgently? Contact our team on WhatsApp for a
              faster response.
            </p>

            <a
              href="https://wa.me/447856585000?text=Hello%20Unseen%20World%2C%20I%20have%20submitted%20a%20journey%20enquiry%20and%20need%20urgent%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex min-h-[50px] items-center justify-center rounded-xl bg-[#25D366] px-6 font-semibold text-white transition hover:brightness-110"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/home"
              className="rounded-xl bg-[#D4AF37] px-7 py-3 font-semibold text-[#06111d] transition hover:bg-[#E7C84B]"
            >
              Return to Website
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-white/15 px-7 py-3 font-semibold text-white transition hover:border-[#D4AF37]"
            >
              Back to Start
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}