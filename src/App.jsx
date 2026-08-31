import SmokeBackground from "./components/SmokeBackground";
import FloatingSpookyThings from "./components/FloatingSpookyThings";
import SplashGate from "./components/SplashGate";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Story from "./sections/Story";
import Attractions from "./sections/Attractions";
import HoursTickets from "./sections/HoursTickets";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import LocationContact from "./sections/LocationContact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <SmokeBackground />
      <FloatingSpookyThings />

      <SplashGate>
        <Navbar />
        <main>
          <Hero />
          <Story />
          <Attractions />
          <HoursTickets />
          <Gallery />
          <Testimonials />
          <FAQ />
          <LocationContact />
        </main>
        <Footer />
      </SplashGate>
    </>
  );
}
