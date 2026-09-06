import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for Unseen World travel, chauffeur and journey services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#081220] text-white">
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Unseen World
            </p>

            <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
              Terms &amp; Conditions
            </h1>

            <p className="mt-4 text-sm text-slate-400">
              Last updated: 5 September 2026
            </p>

            <p className="mt-6 text-base leading-7 text-slate-300">
              These Terms &amp; Conditions explain the basis on which Unseen
              World Limited provides, arranges and facilitates travel-related
              services. Please read them carefully before confirming a booking.
            </p>
          </div>

          <div className="mt-10 rounded-[26px] border border-white/10 bg-[#0b1724]/75 p-6 shadow-2xl shadow-black/10 md:p-10">
            <div className="space-y-10 text-sm leading-7 text-slate-300">
              <section>
                <h2 className="text-xl font-semibold text-white">
                  1. About Unseen World
                </h2>

                <p className="mt-3">
                  Unseen World is operated by Unseen World Limited, a company
                  registered in Scotland.
                </p>

                <p className="mt-3">
                  We provide and arrange services including airport transfers,
                  chauffeur services, private journeys, tours, experiences and
                  other travel-related arrangements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  2. Enquiries and bookings
                </h2>

                <p className="mt-3">
                  Submitting an enquiry through our website, WhatsApp, telephone,
                  email or another communication channel does not by itself
                  create a confirmed booking.
                </p>

                <p className="mt-3">
                  A booking is confirmed only when Unseen World has accepted
                  the requested arrangements and communicated confirmation to
                  you.
                </p>

                <p className="mt-3">
                  Availability, vehicle type, itinerary, timings and pricing may
                  be subject to confirmation before a booking is accepted.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  3. Information you provide
                </h2>

                <p className="mt-3">
                  You are responsible for providing accurate and complete
                  information relevant to your booking, including contact
                  details, pick-up and destination information, dates, times,
                  passenger numbers, luggage requirements and any flight or
                  other travel details requested.
                </p>

                <p className="mt-3">
                  Please tell us about unusual luggage, oversized items,
                  accessibility requirements, child-seat requirements, pets or
                  other circumstances that may affect the vehicle or service
                  required.
                </p>

                <p className="mt-3">
                  We are not responsible for problems caused by materially
                  incorrect or incomplete information supplied to us.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  4. Prices and quotations
                </h2>

                <p className="mt-3">
                  Prices and quotations are based on the information available
                  when they are provided and may be subject to availability and
                  confirmation.
                </p>

                <p className="mt-3">
                  If your requested journey or requirements change, the price
                  may also change. This may include changes to the route,
                  additional stops, waiting time, passenger numbers, luggage,
                  vehicle requirements or other material booking details.
                </p>

                <p className="mt-3">
                  Any additional charges that become necessary because of a
                  customer-requested change will be communicated where
                  reasonably practicable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  5. Payment
                </h2>

                <p className="mt-3">
                  Payment requirements, accepted payment methods and any
                  payment deadline will be communicated as part of the booking
                  process.
                </p>

                <p className="mt-3">
                  Where payment is required before travel, a booking may remain
                  unconfirmed until the required payment has been received or
                  otherwise authorised.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  6. Cancellations and changes
                </h2>

                <p className="mt-3">
                  If you need to change or cancel a booking, please contact us
                  as soon as possible.
                </p>

                <p className="mt-3">
                  Cancellation or amendment terms may vary depending on the
                  service, timing of the request and any third-party provider
                  involved. Applicable conditions will be communicated during
                  the booking process where relevant.
                </p>

                <p className="mt-3">
                  Some third-party travel products, tickets, accommodation,
                  tours or other arrangements may be non-refundable or subject
                  to supplier cancellation charges.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  7. Airport and flight transfers
                </h2>

                <p className="mt-3">
                  Where flight details are provided, we may use them to help
                  coordinate an airport transfer. Customers remain responsible
                  for providing accurate flight information and informing us of
                  known changes where reasonably possible.
                </p>

                <p className="mt-3">
                  Flight delays, cancellations, immigration procedures, baggage
                  collection, airport restrictions, road conditions and other
                  circumstances outside our reasonable control may affect
                  collection or journey times.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  8. Pick-up times and waiting
                </h2>

                <p className="mt-3">
                  Customers should be ready at the agreed pick-up location at
                  the confirmed time.
                </p>

                <p className="mt-3">
                  Where waiting time exceeds any allowance included in the
                  confirmed booking, additional waiting charges may apply.
                  Where applicable, these will depend on the circumstances and
                  the service being provided.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  9. Vehicles
                </h2>

                <p className="mt-3">
                  Vehicle images and descriptions on our website are
                  representative of the relevant vehicle category. Unless a
                  specific vehicle has expressly been guaranteed as part of
                  your confirmed booking, an equivalent vehicle may be
                  provided.
                </p>

                <p className="mt-3">
                  Passenger and luggage capacity varies by vehicle
                  configuration. Customers must provide accurate passenger and
                  luggage information so that a suitable vehicle can be
                  arranged.
                </p>

                <p className="mt-3">
                  Where the information supplied exceeds the safe or lawful
                  capacity of the vehicle arranged, an alternative or
                  additional vehicle may be required and additional charges may
                  apply.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  10. Passenger conduct
                </h2>

                <p className="mt-3">
                  Passengers must behave lawfully and reasonably and must not
                  endanger the driver, other passengers, the vehicle or other
                  road users.
                </p>

                <p className="mt-3">
                  Smoking or unlawful activity is not permitted in vehicles.
                  A driver or service provider may refuse or discontinue a
                  journey where passenger behaviour presents a safety risk or
                  involves unlawful, threatening, abusive or seriously
                  disruptive conduct.
                </p>

                <p className="mt-3">
                  Customers may be responsible for reasonable cleaning or
                  repair costs resulting from damage or exceptional soiling
                  caused by passengers in their party, subject to the
                  circumstances and applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  11. Children and child seats
                </h2>

                <p className="mt-3">
                  If a child seat or other child-travel requirement is needed,
                  please tell us when making your enquiry so that the
                  requirement can be reviewed as part of the booking.
                </p>

                <p className="mt-3">
                  The responsible accompanying adult remains responsible for
                  providing accurate information about the child and for
                  complying with applicable requirements relating to the
                  journey.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  12. Pets and assistance animals
                </h2>

                <p className="mt-3">
                  Please tell us in advance if you intend to travel with a pet
                  so that an appropriate service can be considered.
                </p>

                <p className="mt-3">
                  Assistance animals will be handled in accordance with
                  applicable legal requirements. Please provide relevant
                  information when making your booking so appropriate
                  arrangements can be made.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  13. Third-party travel providers
                </h2>

                <p className="mt-3">
                  Some services may be supplied or fulfilled by independent
                  transport operators, accommodation providers, tour operators,
                  activity providers or other travel suppliers.
                </p>

                <p className="mt-3">
                  Where a third party provides part of your arrangements, that
                  provider may have additional terms and conditions applicable
                  to its service. We will provide or identify relevant supplier
                  terms where required and reasonably available.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  14. Events outside our reasonable control
                </h2>

                <p className="mt-3">
                  Travel can be affected by circumstances outside reasonable
                  control, including severe weather, road closures, traffic
                  disruption, accidents, flight disruption, strikes, public
                  authority actions, security incidents and other exceptional
                  events.
                </p>

                <p className="mt-3">
                  Where this happens, we will take reasonable steps appropriate
                  to the circumstances, but journey times and arrangements
                  cannot always be guaranteed.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  15. Our responsibility
                </h2>

                <p className="mt-3">
                  Nothing in these Terms &amp; Conditions excludes or limits
                  liability where doing so would be unlawful, including
                  liability that cannot legally be excluded or restricted.
                </p>

                <p className="mt-3">
                  Subject to applicable law, we are not responsible for losses
                  that were not reasonably foreseeable when the booking was
                  confirmed or that arise from circumstances outside our
                  reasonable control.
                </p>

                <p className="mt-3">
                  Nothing in these terms affects any statutory rights you may
                  have as a consumer.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  16. Website information
                </h2>

                <p className="mt-3">
                  We aim to keep information on our website accurate and
                  current. Images, descriptions, itineraries and other content
                  may nevertheless be illustrative and may change.
                </p>

                <p className="mt-3">
                  Website content does not constitute a confirmed booking or a
                  guarantee of availability unless we expressly confirm the
                  relevant arrangements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  17. Privacy
                </h2>

                <p className="mt-3">
                  We process personal information in accordance with our
                  Privacy Policy.
                </p>

                <Link
                  href="/privacy"
                  className="mt-3 inline-block font-semibold text-[#D4AF37] transition hover:text-[#e5c653]"
                >
                  Read our Privacy Policy
                </Link>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  18. Changes to these terms
                </h2>

                <p className="mt-3">
                  We may update these Terms &amp; Conditions as our services,
                  business or legal requirements change.
                </p>

                <p className="mt-3">
                  The terms applicable to a confirmed booking will be those
                  communicated or otherwise applicable when that booking is
                  made, subject to any later changes agreed with you or
                  required by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  19. Governing law
                </h2>

                <p className="mt-3">
                  These Terms &amp; Conditions are governed by the laws of
                  Scotland, subject to any mandatory consumer protections or
                  rights that apply to you.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  20. Contact us
                </h2>

                <p className="mt-3">
                  If you have a question about a booking or these Terms &amp;
                  Conditions, please contact:
                </p>

                <div className="mt-5 rounded-xl border border-white/10 bg-slate-950/50 p-5">
                  <p className="font-semibold text-white">
                    Unseen World Limited
                  </p>

                  <p className="mt-3">
                    Email:{" "}
                    <a
                      href="mailto:unseenworldtravel@gmail.com"
                      className="text-[#D4AF37] hover:text-[#e5c653]"
                    >
                      unseenworldtravel@gmail.com
                    </a>
                  </p>

                  <p className="mt-1">
                    Telephone / WhatsApp:{" "}
                    <a
                      href="tel:+447856585000"
                      className="text-[#D4AF37] hover:text-[#e5c653]"
                    >
                      +44 7856 585000
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/home"
              className="text-sm font-semibold text-[#D4AF37] transition hover:text-[#e5c653]"
            >
              ← Back to home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}