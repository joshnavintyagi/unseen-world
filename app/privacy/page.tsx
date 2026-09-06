import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Unseen World travel, chauffeur and journey services.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>

            <p className="mt-4 text-sm text-slate-400">
              Last updated: 5 September 2026
            </p>

            <p className="mt-6 text-base leading-7 text-slate-300">
              Your privacy matters to us. This Privacy Policy explains how
              Unseen World Limited collects, uses, shares and protects personal
              information when you use our website, contact us or ask us to
              arrange travel services.
            </p>
          </div>

          <div className="mt-10 rounded-[26px] border border-white/10 bg-[#0b1724]/75 p-6 shadow-2xl shadow-black/10 md:p-10">
            <div className="space-y-10 text-sm leading-7 text-slate-300">

              <section>
                <h2 className="text-xl font-semibold text-white">
                  1. Who we are
                </h2>

                <p className="mt-3">
                  Unseen World is operated by Unseen World Limited, a company
                  registered in Scotland.
                </p>

                <p className="mt-3">
                  For the purposes of applicable UK data protection law,
                  Unseen World Limited is responsible for the personal
                  information described in this Privacy Policy.
                </p>

                <p className="mt-3">
                  You can contact us about privacy or data protection matters
                  using the contact details at the end of this policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  2. Information we may collect
                </h2>

                <p className="mt-3">
                  The information we collect depends on how you interact with
                  us and the services you request. It may include:
                </p>

                <ul className="mt-4 space-y-2 pl-5">
                  <li>• Your name and contact details.</li>
                  <li>• Your email address and mobile number.</li>
                  <li>
                    • Pick-up locations, destinations, travel dates and times.
                  </li>
                  <li>
                    • Passenger numbers and information relevant to the journey.
                  </li>
                  <li>
                    • Luggage requirements and information about special items.
                  </li>
                  <li>
                    • Flight, airline or other ticketed travel information.
                  </li>
                  <li>
                    • Child-seat, pet-travel or accessibility requirements you
                    choose to provide.
                  </li>
                  <li>
                    • Messages, enquiries and other information you provide
                    when communicating with us.
                  </li>
                  <li>
                    • Technical information that may be generated when you use
                    our website, where applicable.
                  </li>
                </ul>

                <p className="mt-4">
                  Please only provide information about another person where
                  you are authorised to do so and where that information is
                  relevant to the requested service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  3. Why we use your information
                </h2>

                <p className="mt-3">
                  We may use personal information to:
                </p>

                <ul className="mt-4 space-y-2 pl-5">
                  <li>• Respond to enquiries and quotation requests.</li>
                  <li>• Review and arrange requested journeys.</li>
                  <li>
                    • Coordinate airport transfers, chauffeur services, tours,
                    experiences and other travel arrangements.
                  </li>
                  <li>
                    • Communicate with you before, during or after a journey.
                  </li>
                  <li>
                    • Provide information to relevant service providers where
                    necessary to fulfil your request.
                  </li>
                  <li>• Provide customer support.</li>
                  <li>
                    • Maintain appropriate business, accounting and transaction
                    records.
                  </li>
                  <li>
                    • Protect our website, customers and business from misuse,
                    fraud or security threats.
                  </li>
                  <li>
                    • Improve our services and the customer experience.
                  </li>
                  <li>• Comply with applicable legal obligations.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  4. Our lawful bases for using personal information
                </h2>

                <p className="mt-3">
                  Depending on the circumstances, we may process your personal
                  information because it is necessary:
                </p>

                <ul className="mt-4 space-y-2 pl-5">
                  <li>
                    • To take steps at your request before entering into a
                    contract or to perform a contract with you.
                  </li>
                  <li>
                    • To comply with a legal obligation that applies to us.
                  </li>
                  <li>
                    • For our legitimate interests, where those interests are
                    not overridden by your rights and interests.
                  </li>
                  <li>
                    • Where you have given consent and consent is the
                    appropriate lawful basis.
                  </li>
                </ul>

                <p className="mt-4">
                  Our legitimate interests may include responding to customer
                  enquiries, operating and improving our services, maintaining
                  appropriate business records, preventing misuse and
                  protecting the security of our business and website.
                </p>

                <p className="mt-3">
                  Where we rely on consent, you may withdraw that consent at
                  any time. Withdrawal does not affect processing that was
                  lawful before consent was withdrawn.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  5. Information needed to arrange your journey
                </h2>

                <p className="mt-3">
                  Certain information is necessary for us to respond to an
                  enquiry or arrange a requested service. For example, we may
                  need your contact details, pick-up location, destination,
                  date and time of travel and other relevant journey
                  information.
                </p>

                <p className="mt-3">
                  If required information is not provided, we may be unable to
                  provide a quotation, arrange the journey or deliver the
                  requested service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  6. Sharing your information
                </h2>

                <p className="mt-3">
                  We may share relevant personal information where reasonably
                  necessary to arrange or provide the service you have
                  requested.
                </p>

                <p className="mt-3">
                  Depending on your journey, recipients may include drivers,
                  chauffeur or transport providers, tour and activity
                  providers, accommodation or travel providers and other
                  partners involved in delivering your requested arrangements.
                </p>

                <p className="mt-3">
                  We may also use trusted technology and professional service
                  providers that help us operate our website, communications
                  and business systems.
                </p>

                <p className="mt-3">
                  We may disclose information where required by law or where
                  reasonably necessary to establish, exercise or defend legal
                  rights.
                </p>

                <p className="mt-3 font-medium text-white">
                  We do not sell your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  7. International travel and data transfers
                </h2>

                <p className="mt-3">
                  Unseen World may arrange travel and services outside the
                  United Kingdom. Where your requested arrangements involve an
                  overseas provider, relevant information may need to be shared
                  with organisations located outside the UK.
                </p>

                <p className="mt-3">
                  Where UK data protection law requires safeguards for an
                  international transfer, we will take appropriate steps
                  applicable to the circumstances of that transfer.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  8. How long we keep your information
                </h2>

                <p className="mt-3">
                  We keep personal information only for as long as reasonably
                  necessary for the purpose for which it was collected and for
                  any applicable legal, accounting, tax, dispute-resolution or
                  legitimate business requirements.
                </p>

                <p className="mt-3">
                  The appropriate retention period may vary depending on the
                  type of information, the service provided, our relationship
                  with you and any legal requirements that apply.
                </p>

                <p className="mt-3">
                  When information is no longer required, we will take
                  appropriate steps to delete it or otherwise dispose of it
                  securely.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  9. Security
                </h2>

                <p className="mt-3">
                  We take reasonable organisational and technical measures to
                  protect personal information against unauthorised access,
                  accidental loss, misuse, alteration or disclosure.
                </p>

                <p className="mt-3">
                  No website, internet transmission or electronic storage
                  system can be guaranteed to be completely secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  10. Your data protection rights
                </h2>

                <p className="mt-3">
                  Depending on the circumstances and the lawful basis on which
                  your information is processed, UK data protection law may
                  give you rights including:
                </p>

                <ul className="mt-4 space-y-2 pl-5">
                  <li>
                    • The right to request access to personal information we
                    hold about you.
                  </li>
                  <li>
                    • The right to ask us to correct inaccurate or incomplete
                    information.
                  </li>
                  <li>
                    • The right to request deletion of your personal
                    information in certain circumstances.
                  </li>
                  <li>
                    • The right to request restriction of processing in certain
                    circumstances.
                  </li>
                  <li>
                    • The right to object to certain processing.
                  </li>
                  <li>
                    • The right to data portability where the legal
                    requirements for that right apply.
                  </li>
                  <li>
                    • The right to withdraw consent where processing is based
                    on consent.
                  </li>
                </ul>

                <div className="mt-5 rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/5 p-4">
                  <p className="font-semibold text-white">
                    Your right to object
                  </p>

                  <p className="mt-2">
                    Where we process your personal information on the basis of
                    legitimate interests, you may have the right to object to
                    that processing. Please contact us if you wish to exercise
                    this right.
                  </p>
                </div>

                <p className="mt-4">
                  These rights are not absolute and may depend on the
                  circumstances. We may need to verify your identity before
                  responding to a request.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  11. Complaints
                </h2>

                <p className="mt-3">
                  If you have concerns about how we use your personal
                  information, please contact us first so that we can try to
                  resolve the matter.
                </p>

                <p className="mt-3">
                  You also have the right to raise a complaint with the UK
                  Information Commissioner&apos;s Office (ICO), the UK
                  supervisory authority for data protection.
                </p>

                <a
                  href="https://ico.org.uk/make-a-complaint/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block font-semibold text-[#D4AF37] transition hover:text-[#e5c653]"
                >
                  Visit the Information Commissioner&apos;s Office
                </a>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  12. Cookies and website technologies
                </h2>

                <p className="mt-3">
                  Our website may use cookies and similar technologies for
                  website functionality and, where applicable, other purposes
                  described in our Cookie Policy.
                </p>

                <p className="mt-3">
                  Where consent is required before using non-essential cookies
                  or similar technologies, we will request that consent before
                  using them.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  13. Third-party websites and services
                </h2>

                <p className="mt-3">
                  Our website may contain links to or interact with third-party
                  websites and services. Those organisations may process
                  personal information under their own privacy policies.
                </p>

                <p className="mt-3">
                  We encourage you to review the privacy information provided
                  by third parties when using their services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  14. Automated decision-making
                </h2>

                <p className="mt-3">
                  We do not currently use solely automated decision-making that
                  produces legal or similarly significant effects on customers
                  in connection with journey enquiries submitted through this
                  website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  15. Changes to this Privacy Policy
                </h2>

                <p className="mt-3">
                  We may update this Privacy Policy when our services,
                  technology or legal obligations change. The latest version
                  will be published on this page and the date above will be
                  updated where appropriate.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">
                  16. Contact us
                </h2>

                <p className="mt-3">
                  If you have questions about this Privacy Policy, how your
                  information is used or wish to exercise a data protection
                  right, please contact:
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