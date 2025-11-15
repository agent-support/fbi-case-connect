import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuoteBanner from "@/components/QuoteBanner";
import SuccessRate from "@/components/SuccessRate";
import WhyFileCase from "@/components/WhyFileCase";
import Testimonials from "@/components/Testimonials";
import Privacy from "@/components/Privacy";
import RulesAndLaws from "@/components/RulesAndLaws";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <QuoteBanner 
        quote="The FBI's mission is to protect the American people and uphold the Constitution of the United States."
        author="FBI Mission Statement"
        variant="accent"
      />
      
      <SuccessRate />
      
      <QuoteBanner 
        quote="Fidelity, Bravery, Integrity - these values define the FBI and guide our commitment to justice."
        author="FBI Core Values"
      />
      
      <WhyFileCase />
      
      <Testimonials />
      
      <QuoteBanner 
        quote="In the face of adversity, the FBI stands as a guardian of freedom and democracy."
        variant="accent"
      />
      
      <Privacy />
      
      <RulesAndLaws />
      
      <QuoteBanner 
        quote="Justice delayed is justice denied, but justice rushed is justice crushed."
        author="Legal Principle"
      />
    </div>
  );
};

export default Index;
