import BookingSearch from "./components/BookingSearch";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#081220] text-white">
      <Header />
      <Hero />
      <BookingSearch />
      <Services />
      <WhyChoose />
    </main>
  );
}