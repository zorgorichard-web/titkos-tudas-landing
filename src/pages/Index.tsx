import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import WhatYouLearnSection from "@/components/landing/WhatYouLearnSection";
import WhoIsItForSection from "@/components/landing/WhoIsItForSection";
import BonusSection from "@/components/landing/BonusSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import PriceSection from "@/components/landing/PriceSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhatYouLearnSection />
      <WhoIsItForSection />
      <BonusSection />
      <AuthoritySection />
      <PriceSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
