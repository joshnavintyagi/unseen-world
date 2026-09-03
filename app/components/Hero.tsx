export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#06111d]">
      <div className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[760px]">
        <img
          src="/images/hero.jpg"
          alt="Luxury private travel in Scotland"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark overlays for clear text and premium depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111d]/95 via-[#06111d]/68 to-[#06111d]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06111d] via-[#06111d]/15 to-black/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_45%,rgba(212,175,55,0.10),transparent_34%)]" />

        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute left-[-120px] top-[170px] h-[340px] w-[340px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1440px] items-center px-5 pb-36 pt-32 sm:min-h-[680px] sm:px-8 sm:pb-40 lg:min-h-[760px] lg:px-12 lg:pb-48">
          <div className="max-w-[760px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#D4AF37]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37] sm:text-xs">
                Scotland • United Kingdom • Worldwide
              </p>
            </div>

            <h1 className="font-serif text-[48px] font-medium leading-[0.98] tracking-[-0.035em] text-white sm:text-[66px] lg:text-[84px]">
              Luxury Travel
              <span className="mt-1 block text-[#D4AF37]">
                Made Effortless
              </span>
            </h1>

            <p className="mt-7 max-w-[620px] text-[16px] leading-7 text-white/85 sm:text-[19px] sm:leading-8">
              Airport transfers, private chauffeur services, unforgettable
              tours and carefully planned journeys across Scotland and beyond.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#D4AF37] px-7 font-semibold text-[#06111d] shadow-[0_15px_45px_rgba(212,175,55,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E7C84B]"
              >
                Plan My Journey
              </a>

              <a
                href="#services"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/25 bg-white/[0.06] px-7 font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
              <span>
                <span className="mr-2 text-[#D4AF37]">✓</span>
                Professional drivers
              </span>

              <span>
                <span className="mr-2 text-[#D4AF37]">✓</span>
                Private journeys
              </span>

              <span>
                <span className="mr-2 text-[#D4AF37]">✓</span>
                Personal support
              </span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#06111d] via-[#06111d]/75 to-transparent" />
      </div>
    </section>
  );
}