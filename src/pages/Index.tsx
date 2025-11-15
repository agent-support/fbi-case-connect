import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SuccessRate from "@/components/SuccessRate";
import WhyFileCase from "@/components/WhyFileCase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SuccessRate />
      <WhyFileCase />
    </div>
  );
};

export default Index;
