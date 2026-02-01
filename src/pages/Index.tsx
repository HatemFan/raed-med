import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import FeatureSection from "@/components/landing/FeatureSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import ComparisonTable from "@/components/landing/ComparisonTable";
import FAQ from "@/components/landing/FAQ";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <FeatureSection />
        <FeaturesGrid />
        <HowItWorks />
        <Testimonials />
        <ComparisonTable />
        <FAQ />
        <CTASection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
