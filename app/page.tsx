import BookingSearch from "./components/BookingSearch";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import StorySection from "./components/StorySection";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#081220] text-white">
      <Header />
      <Hero />
      <BookingSearch />
      <Services />
      <Destinations />
      <StorySection />
      <Testimonials />
<WhyChoose />
<FinalCTA />
<Footer />
    </main>
  );
}