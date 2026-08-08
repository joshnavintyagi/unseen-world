export default function FinalCTA() {
  return (
    <section className="bg-[#06111d] px-5 pb-10 pt-3 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="overflow-hidden rounded-[16px] border border-[#D4AF37]/45 bg-[#0b1721]">
          <div className="grid min-h-[190px] md:grid-cols-[42%_58%]">

            {/* IMAGE */}
            <div className="relative hidden overflow-hidden md:block">
              <img
                src="/images/luxury-interior.jpg"
                alt="Luxury vehicle interior"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0b1721]/90" />
            </div>

            {/* CONTENT */}
            <div className="relative flex items-center px-7 py-9 sm:px-10 lg:px-12">
              <div>
                <h2 className="font-serif text-[32px] leading-tight text-white sm:text-[38px]">
                  Ready to travel beautifully?
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-[15px]">
                  Tell us where you&apos;re going and we&apos;ll take care of
                  the journey.
                </p>

                <a
                  href="#booking"
                  className="mt-5 inline-flex min-h-[48px] min-w-[180px] items-center justify-center gap-4 rounded-lg bg-[#D4AF37] px-7 text-sm font-semibold text-[#06111d] transition hover:bg-[#E7C84B]"
                >
                  Book Now
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}