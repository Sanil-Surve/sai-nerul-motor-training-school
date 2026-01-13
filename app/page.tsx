import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import AboutSection from "./components/AboutSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import Timetable from "./components/timetable";

const Index = () => {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <Timetable />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
