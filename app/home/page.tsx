import FloatingWhatsApp from "../components/FloatingWhatsApp";
import BookingSearch from "../components/BookingSearch";
import Destinations from "../components/Destinations";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhyChoose from "../components/WhyChoose";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06111d]">
      <Header />

      <div className="relative">
        <Hero />

        <section
          id="booking"
          className="relative z-30 -mt-20 scroll-mt-24 sm:-mt-24 lg:-mt-28"
        >
          <BookingSearch />
        </section>
      </div>

      <Services />
      <Destinations />
      <Testimonials />
      <WhyChoose />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}