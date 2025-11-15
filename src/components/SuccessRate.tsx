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
    <section className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Success Record
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of agents and partners with proven results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center space-y-4 bg-card border-border hover:border-gold/50 transition-all duration-300"
              >
                <div className="flex justify-center">
                  <div className="p-4 bg-gold/10 rounded-full">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-gold">{stat.value}</div>
                <div className="text-xl font-semibold text-foreground">
                  {stat.label}
                </div>
                <p className="text-muted-foreground">{stat.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessRate;
