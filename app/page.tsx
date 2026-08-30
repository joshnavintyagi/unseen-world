import Link from "next/link";

export default function LandingPage() {
  const whatsappMessage = encodeURIComponent(
    "Hello Unseen World, I need transport today or urgently. Please check availability."
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#06111d] text-white">
      <img
        src="/images/landing-hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#020914]/45" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,12,24,0.18)_0%,rgba(3,12,24,0.48)_58%,rgba(3,12,24,0.76)_100%)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#020914]/20 via-transparent to-[#020914]/80" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[920px] flex-col items-center px-5 py-7 sm:px-8 sm:py-10">
        <div className="flex items-center justify-center">
          <div className="text-left">
            <p className="text-[26px] font-medium leading-none tracking-[0.25em] text-white sm:text-[34px]">
              UNSEEN
            </p>

            <p className="mt-2 text-[12px] font-semibold leading-none tracking-[0.48em] text-[#D4AF37] sm:text-[16px]">
              WORLD
            </p>
          </div>

          <img
            src="/images/unseen-logo.png"
            alt="Unseen World"
            className="ml-3 h-[96px] w-[96px] object-contain sm:ml-4 sm:h-[130px] sm:w-[130px]"
          />
        </div>

        <div className="mt-2 w-full text-center sm:mt-4">
          <h1 className="mx-auto max-w-[760px] font-serif text-[39px] leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl lg:text-[58px]">
            How would you like to begin?
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 sm:mt-5 sm:text-base">
            Choose the option that best matches your journey.
          </p>
        </div>

        <div className="mt-5 grid w-full max-w-[860px] items-stretch gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-5">
          <a
            href={`https://wa.me/447856585000?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[215px] flex-col rounded-[22px] border border-[#25D366]/75 bg-[#06111d]/94 p-5 text-center shadow-[0_28px_85px_rgba(0,0,0,0.55)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#25D366] sm:min-h-[260px] sm:p-6"
          >
            <div className="mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#25D366]/70 bg-[#25D366]/10 text-xl text-[#25D366] sm:h-12 sm:w-12">
              ⚡
            </div>

            <div className="flex flex-1 flex-col justify-center py-3">
              <h2 className="font-serif text-[22px] leading-tight sm:text-2xl">
                Travelling Today
                <span className="block">or Urgently?</span>
              </h2>

              <p className="mt-3 text-sm text-white/65">
                Need transport at short notice?
              </p>
            </div>

            <span className="flex min-h-[48px] w-full shrink-0 items-center justify-center rounded-xl bg-[#25D366] px-5 font-semibold text-white transition group-hover:brightness-110">
              WhatsApp Us
            </span>
          </a>

          <Link
            href="/home"
            className="group flex min-h-[215px] flex-col rounded-[22px] border border-[#D4AF37]/80 bg-[#06111d]/94 p-5 text-center shadow-[0_28px_85px_rgba(0,0,0,0.55)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37] sm:min-h-[260px] sm:p-6"
          >
            <div className="mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/70 bg-[#D4AF37]/10 text-xl text-[#D4AF37] sm:h-12 sm:w-12">
              ◇
            </div>

            <div className="flex flex-1 flex-col justify-center py-3">
              <h2 className="font-serif text-[22px] leading-tight sm:text-2xl">
                Planning Ahead?
              </h2>

              <p className="mt-3 text-sm text-white/65">
                Explore services and plan your complete journey.
              </p>
            </div>

            <span className="flex min-h-[48px] w-full shrink-0 items-center justify-center rounded-xl bg-[#D4AF37] px-5 font-semibold text-[#06111d] transition group-hover:bg-[#E7C84B]">
              Enter Website →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}