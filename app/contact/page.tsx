import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#081220] text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
          Contact Unseen World
        </p>

        <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
          Tell us how we can help.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
          Whether you need an airport transfer, chauffeur service, private tour,
          worldwide travel planning or a custom journey, our team is here to help.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-white">
              WhatsApp
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              For urgent journeys, same-day requests or quick questions, message us
              directly on WhatsApp.
            </p>

            <a
              href="https://wa.me/447856585000"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#081220] transition hover:bg-[#e5c653]"
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-white">
              Plan your journey
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              If you are planning ahead, send us your journey details through our
              booking form and we will review your requirements.
            </p>

            <Link
              href="/home#booking"
              className="mt-6 inline-flex rounded-xl border border-[#D4AF37]/60 px-5 py-3 text-sm font-semibold text-[#D4AF37] transition hover:border-[#D4AF37]"
            >
              Start Your Journey
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-slate-950/50 p-6">
          <h2 className="text-lg font-semibold text-white">
            Unseen World
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Premium airport transfers, chauffeur services, tours, experiences and
            worldwide travel planning.
          </p>

          <p className="mt-4 text-sm text-slate-300">
            WhatsApp: +44 7856 585000
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/home"
            className="text-sm font-semibold text-[#D4AF37] hover:text-[#e5c653]"
          >
            ← Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}