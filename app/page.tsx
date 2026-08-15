import BookingSearch from "./components/BookingSearch";
import Destinations from "./components/Destinations";
import FinalCTA from "./components/FinalCTA";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuickBooking from "./components/QuickBooking";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06111d]">
      <Header />

      <Hero />

      <QuickBooking />

      <section id="booking" className="scroll-mt-24 bg-[#06111d]">
        <BookingSearch />
      </section>

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