export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#06111d]">
      <div className="relative min-h-[590px] sm:min-h-[650px] lg:min-h-[720px]">
        <img
          src="/images/hero.jpg"
          alt="Luxury private travel in Scotland"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06111d]/95 via-[#06111d]/50 to-[#06111d]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06111d]/90 via-[#06111d]/10 to-[#06111d]/20" />

        <div className="relative mx-auto flex min-h-[590px] max-w-[1440px] items-center px-5 pb-32 pt-28 sm:min-h-[650px] sm:px-8 sm:pb-36 lg:min-h-[720px] lg:px-12 lg:pb-44">
          <div className="max-w-[680px]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#D4AF37] sm:text-sm">
              Private Travel, Beautifully Simple
            </p>

            <h1 className="font-serif text-[50px] font-medium leading-[0.96] tracking-[-0.025em] text-white sm:text-[64px] lg:text-[78px]">
              Luxury Travel
              <br />
              Made Effortless
            </h1>

            <p className="mt-6 max-w-[570px] text-[16px] leading-7 text-white/90 sm:text-[18px]">
              Airport transfers, chauffeur services and bespoke journeys
              across the world.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06111d] via-[#06111d]/65 to-transparent" />
      </div>
    </section>
  );
}