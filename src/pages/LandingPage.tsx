import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Landing/HeroSection";
import WhyUsSection from "@/components/Landing/WhyUsSection";
import AboutSection from "@/components/Landing/AboutSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <AboutSection />
    </div>
  );
};

export default LandingPage;