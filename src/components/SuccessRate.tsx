import { TrendingUp, Shield, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: TrendingUp,
    value: "98.7%",
    label: "Case Resolution Rate",
    description: "Successfully resolved cases within 30 days",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Security Compliance",
    description: "Full encryption and data protection",
  },
  {
    icon: CheckCircle,
    value: "24/7",
    label: "Support Availability",
    description: "Round-the-clock assistance for critical cases",
  },
];

const SuccessRate = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            Our Success Record
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Trusted by thousands of agents and partners with proven results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-4 sm:p-6 md:p-8 text-center space-y-3 sm:space-y-4 bg-card border-border hover:border-gold/50 transition-all duration-300"
              >
                <div className="flex justify-center">
                  <div className="p-3 sm:p-4 bg-gold/10 rounded-full">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-gold" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold">{stat.value}</div>
                <div className="text-base sm:text-lg md:text-xl font-semibold text-foreground">
                  {stat.label}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">{stat.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessRate;
