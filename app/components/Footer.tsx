export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06101c]">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <p className="text-xl font-medium tracking-[0.34em] text-white">
                  UNSEEN
                </p>

                <p className="mt-1 text-sm font-semibold tracking-[0.4em] text-[#D4AF37]">
                  WORLD
                </p>
              </div>

              <img
                src="/images/unseen-logo.png"
                alt="Unseen World"
                className="h-[86px] w-[86px] object-contain"
              />
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Private transfers, tailor-made tours, worldwide holidays and
              intelligent travel planning — designed around you.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Explore
            </h3>

            <div className="space-y-3 text-sm text-slate-300">
              <a
                href="#transfers"
                className="block transition hover:text-[#D4AF37]"
              >
                Airport Transfers
              </a>

              <a
                href="#tours"
                className="block transition hover:text-[#D4AF37]"
              >
                Private Tours
              </a>

              <a
                href="#experiences"
                className="block transition hover:text-[#D4AF37]"
              >
                Experiences
              </a>

              <a
                href="#holidays"
                className="block transition hover:text-[#D4AF37]"
              >
                Worldwide Holidays
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Company
            </h3>

            <div className="space-y-3 text-sm text-slate-300">
              <a
                href="#about"
                className="block transition hover:text-[#D4AF37]"
              >
                About Unseen World
              </a>

              <a
                href="#reviews"
                className="block transition hover:text-[#D4AF37]"
              >
                Guest Reviews
              </a>

              <a
                href="#booking"
                className="block transition hover:text-[#D4AF37]"
              >
                Plan My Journey
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
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-slate-300">
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

            {/* CONTACT BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/447856585000?text=Hello%20Unseen%20World%2C%20I%27d%20like%20to%20discuss%20a%20journey."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#081220] transition hover:bg-[#E7C84B]"
              >
                WhatsApp Us
              </a>

              <a
                href="tel:+447856585000"
                className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Unseen World. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
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