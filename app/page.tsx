import BookingChoice from "./components/BookingChoice";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import BookingSearch from "./components/BookingSearch";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06111d]">
      <Header />

      <Hero />

<BookingChoice />

<section id="booking">
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