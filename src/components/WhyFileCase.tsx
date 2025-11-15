import { FileText, Lock, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const reasons = [
  {
    icon: Lock,
    title: "Secure Documentation",
    description:
      "All reports are encrypted end-to-end and stored in secure FBI databases with multi-factor authentication.",
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description:
      "Priority cases receive immediate attention from specialized agents with average response time under 2 hours.",
  },
  {
    icon: Users,
    title: "Expert Analysis",
    description:
      "Your case is reviewed by experienced analysts and field agents with specialized training and resources.",
  },
  {
    icon: FileText,
    title: "Complete Tracking",
    description:
      "Real-time case tracking and updates throughout the investigation process with secure portal access.",
  },
];

const WhyFileCase = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why File a Case?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get professional support from the FBI's most advanced support
            infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={index}
                className="p-8 space-y-4 bg-card border-border hover:border-gold/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-lg shrink-0">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyFileCase;
