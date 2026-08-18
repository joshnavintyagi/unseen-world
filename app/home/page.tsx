import BookingSearch from "../components/BookingSearch";
import Destinations from "../components/Destinations";
import FinalCTA from "../components/FinalCTA";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhyChoose from "../components/WhyChoose";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06111d]">
      <Header />

      <div className="relative">
        <Hero />

        <div className="relative z-30 -mt-20 sm:-mt-24 lg:-mt-28">
          <BookingSearch />
        </div>
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