import Link from "next/link";

export default function LandingPage() {
  const whatsappMessage = encodeURIComponent(
    "Hello Unseen World, I need transport today or urgently. Please check availability."
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06111d] text-white">
      <img
        src="/images/services/worldwide-travel.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#06111d]/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#06111d]/90" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full max-w-[760px]">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <div className="text-left">
                <p className="text-[20px] font-medium tracking-[0.28em] text-white">
                  UNSEEN
                </p>

                <p className="mt-1 text-[10px] font-semibold tracking-[0.42em] text-[#D4AF37]">
                  WORLD
                </p>
              </div>

              <img
                src="/images/unseen-logo.png"
                alt="Unseen World"
                className="h-[88px] w-[88px] object-contain"
              />
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#D4AF37]">
              Private Travel, Beautifully Simple
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              How would you like to begin?
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
              Choose the option that best matches your journey.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            <a
              href={`https://wa.me/447856585000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[22px] border border-[#25D366]/55 bg-[#07111c]/90 p-6 text-center shadow-[0_22px_65px_rgba(0,0,0,0.45)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#25D366]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#25D366]/60 bg-[#25D366]/10 text-xl text-[#25D366]">
                ⚡
              </div>

              <h2 className="mt-5 font-serif text-2xl leading-tight">
                Travelling Today
                <span className="block">or Urgently?</span>
              </h2>

              <p className="mt-3 text-sm text-white/65">
                Need transport at short notice?
              </p>

              <span className="mt-6 flex min-h-[50px] items-center justify-center rounded-xl bg-[#25D366] px-5 font-semibold text-white transition group-hover:brightness-110">
                WhatsApp Us
              </span>
            </a>

            <Link
              href="/home"
              className="group rounded-[22px] border border-[#D4AF37]/55 bg-[#07111c]/90 p-6 text-center shadow-[0_22px_65px_rgba(0,0,0,0.45)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/10 text-xl text-[#D4AF37]">
                ◇
              </div>

              <h2 className="mt-5 font-serif text-2xl leading-tight">
                Planning Ahead?
              </h2>

              <p className="mt-3 text-sm text-white/65">
                Explore services and plan your complete journey.
              </p>

              <span className="mt-6 flex min-h-[50px] items-center justify-center rounded-xl bg-[#D4AF37] px-5 font-semibold text-[#06111d] transition group-hover:bg-[#E7C84B]">
                Enter Website →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}