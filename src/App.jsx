import React from 'react';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import OurStorySection from './components/OurStorySection';
import FAQSection from './components/FAQSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TechStackSection from './components/TechStackSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SparkleParticles from './components/SparkleParticles';

const App = () => {
  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden">
      <CustomCursor />
      <div className="relative">
        <SparkleParticles area="hero" className="top-0 left-0 w-full h-[60vh]" />
        <HeroSection />
      </div>
      <AboutUsSection />
      <OurStorySection />
      <ServicesSection />
      <PortfolioSection />
      <TechStackSection />
      <WhyChooseUsSection />
      <FAQSection />
      <div className="relative">
        <ContactSection />
        <SparkleParticles area="footer" className="bottom-0 left-0 w-full h-[40vh]" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
