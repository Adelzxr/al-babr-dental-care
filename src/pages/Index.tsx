import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutPreview from "@/components/sections/AboutPreview";
import CTASection from "@/components/sections/CTASection";
import AdvicePreview from "@/components/sections/AdvicePreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutPreview />
        <AdvicePreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
