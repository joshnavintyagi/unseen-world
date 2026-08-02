export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] px-8 py-16 text-center md:px-16 md:py-20">
        
        {/* subtle glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Your journey starts here
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Where would you like to go next?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Tell us where you want to go and how you like to travel.
            We&apos;ll help create a journey built around you.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#booking"
              className="rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#081220] transition hover:bg-[#E7C84B]"
            >
              Plan My Journey
            </a>

            <a
              href="#transfers"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}