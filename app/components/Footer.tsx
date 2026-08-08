export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#050d16] px-5 pb-6 pt-10 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr]">

          {/* BRAND */}
          <div>
            <a href="#" className="inline-flex items-center">
              <div className="flex flex-col">
                <span className="text-[18px] font-medium tracking-[0.32em] text-white">
                  UNSEEN
                </span>

                <span className="mt-1 text-[10px] font-semibold tracking-[0.42em] text-[#D4AF37]">
                  WORLD
                </span>
              </div>

              <div className="-ml-1 flex h-[66px] w-[66px] items-center justify-center">
                <img
                  src="/images/unseen-logo.png"
                  alt="Unseen World"
                  className="h-[105px] w-[105px] max-w-none object-contain"
                />
              </div>
            </a>

            <p className="mt-3 max-w-[300px] text-[12px] leading-5 text-slate-400">
              Luxury airport transfers, chauffeur services, private tours
              and worldwide travel — beautifully arranged around you.
            </p>

            <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-[#D4AF37]">
              Private Travel · Beautifully Simple
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Services
            </h3>

            <div className="space-y-2.5 text-[12px] text-slate-300">
              <a href="#transfers" className="block transition hover:text-[#D4AF37]">
                Airport Transfers
              </a>

              <a href="#tours" className="block transition hover:text-[#D4AF37]">
                Chauffeur Services
              </a>

              <a href="#experiences" className="block transition hover:text-[#D4AF37]">
                Tours & Experiences
              </a>

              <a href="#holidays" className="block transition hover:text-[#D4AF37]">
                Worldwide Travel
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Company
            </h3>

            <div className="space-y-2.5 text-[12px] text-slate-300">
              <a href="#about" className="block transition hover:text-[#D4AF37]">
                About Us
              </a>

              <a href="#reviews" className="block transition hover:text-[#D4AF37]">
                Reviews
              </a>

              <a href="#booking" className="block transition hover:text-[#D4AF37]">
                Book a Journey
              </a>

              <a
                href="https://www.facebook.com/unseenworldtours/"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-[#D4AF37]"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Contact
            </h3>

            <div className="space-y-2.5 text-[12px] text-slate-300">
              <p>Scotland, United Kingdom</p>

              <a
                href="mailto:unseenworldtravel@gmail.com"
                className="block break-all transition hover:text-[#D4AF37]"
              >
                unseenworldtravel@gmail.com
              </a>

              <a
                href="tel:+447856585000"
                className="block transition hover:text-[#D4AF37]"
              >
                +44 7856 585000
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href="https://wa.me/447856585000?text=Hello%20Unseen%20World%2C%20I%27d%20like%20to%20discuss%20a%20journey."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-[#D4AF37] px-4 text-[12px] font-semibold text-[#06111d] transition hover:bg-[#E7C84B]"
              >
                WhatsApp
              </a>

              <a
                href="tel:+447856585000"
                className="inline-flex min-h-[40px] items-center justify-center rounded-lg border border-white/20 px-4 text-[12px] font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-9 flex flex-col gap-4 border-t border-white/10 pt-5 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Unseen World. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>

            <a href="#" className="transition hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}