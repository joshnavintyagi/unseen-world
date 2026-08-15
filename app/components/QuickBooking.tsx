"use client";

export default function QuickBooking() {
  const scrollToPlanner = () => {
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello Unseen World,

I need transport urgently.

Please let me know your availability.

Thank you.`
    );

    window.open(
      `https://wa.me/447856585000?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="bg-[#06111d] py-20 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">

        <div className="mb-14 text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Choose Your Journey
          </p>

          <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
            How would you like to travel?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you need transport today or you're planning something
            special in advance, choose the option that best suits your journey.
          </p>

        </div>

        {/* CARD 1 */}

        <div className="rounded-[30px] border border-[#25D366]/30 bg-gradient-to-br from-[#0d1824] to-[#09131d] p-10 shadow-[0_25px_80px_rgba(0,0,0,.45)]">

          <div className="flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/10 text-3xl">
              🚗
            </div>

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#25D366]">
                Travelling Today or Urgently?
              </p>

              <h3 className="mt-2 font-serif text-3xl text-white">
                Need transport at short notice?
              </h3>

            </div>

          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Chat directly with our reservations team for immediate assistance.
            We'll confirm availability, provide an instant quotation and help
            arrange your journey as quickly as possible.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-[#25D366] text-xl">✓</div>
              <h4 className="mt-3 font-semibold text-white">
                Fast Response
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Speak directly with our team.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-[#25D366] text-xl">✓</div>
              <h4 className="mt-3 font-semibold text-white">
                Instant Availability
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                We'll confirm vehicle availability immediately.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-[#25D366] text-xl">✓</div>
              <h4 className="mt-3 font-semibold text-white">
                Immediate Quote
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Receive a quotation in minutes.
              </p>
            </div>

          </div>

          <button
            onClick={openWhatsApp}
            className="mt-10 w-full rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-semibold text-white transition hover:brightness-110"
          >
            Chat on WhatsApp
          </button>

        </div>

        <div className="my-12 flex items-center gap-6">

          <div className="h-px flex-1 bg-white/10" />

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            OR
          </span>

          <div className="h-px flex-1 bg-white/10" />

        </div>
                {/* CARD 2 */}

        <div className="rounded-[30px] border border-[#D4AF37]/30 bg-gradient-to-br from-[#111c29] to-[#0a131d] p-10 shadow-[0_25px_80px_rgba(0,0,0,.45)]">

          <div className="flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10 text-3xl">
              📅
            </div>

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                Planning Ahead?
              </p>

              <h3 className="mt-2 font-serif text-3xl text-white">
                Tell us about your journey
              </h3>

            </div>

          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Planning an airport transfer, chauffeur service, private tour or
            worldwide holiday? Complete our detailed journey planner so we can
            recommend the right vehicle and prepare the best quotation for your
            requirements.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-[#D4AF37] text-xl">✓</div>
              <h4 className="mt-3 font-semibold text-white">
                Airport Transfers
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Flight details, meet &amp; greet and luggage requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-[#D4AF37] text-xl">✓</div>
              <h4 className="mt-3 font-semibold text-white">
                Chauffeur Services
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Executive travel, weddings, events and business journeys.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-[#D4AF37] text-xl">✓</div>
              <h4 className="mt-3 font-semibold text-white">
                Tours &amp; Experiences
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Private sightseeing and bespoke travel experiences.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-[#D4AF37] text-xl">✓</div>
              <h4 className="mt-3 font-semibold text-white">
                Worldwide Travel
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Holidays, cruises and tailor-made international travel.
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={scrollToPlanner}
            className="mt-10 w-full rounded-2xl border border-[#D4AF37] px-8 py-5 text-lg font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#06111d]"
          >
            Plan My Journey ↓
          </button>

        </div>

      </div>
    </section>
  );
}