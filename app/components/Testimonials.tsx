export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-[#06111d] px-5 py-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[14px] border border-[#D4AF37]/45 bg-[#09141f] px-6 py-5 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">

            {/* TRUSTPILOT */}
            <div className="flex items-center gap-2">
              <span className="text-[28px] leading-none text-[#00b67a]">
                ★
              </span>

              <span className="text-[20px] font-semibold text-white">
                Trustpilot
              </span>
            </div>

            {/* STARS */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="flex h-9 w-9 items-center justify-center rounded-[2px] bg-[#00b67a] text-[19px] text-white"
                >
                  ★
                </span>
              ))}
            </div>

            {/* RATING */}
            <div className="text-center lg:text-left">
              <p className="text-[17px] font-semibold text-white">
                Excellent
              </p>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-[15px] font-medium text-white">
                4.9 out of 5
              </p>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-[15px] font-medium text-white">
                2,300+ Reviews
              </p>
            </div>

            {/* WORLDWIDE */}
            <div className="flex items-center gap-3 border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <span className="text-[26px] text-[#D4AF37]">
                ◎
              </span>

              <span className="text-[14px] font-medium text-white">
                Trusted worldwide
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}