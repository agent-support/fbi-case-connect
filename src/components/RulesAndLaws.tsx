import { Scale, BookOpen, Gavel, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import crimePrevention from "@/assets/crime-prevention.jpg";

const laws = [
  {
    icon: Scale,
    title: "18 U.S.C. § 1030 - Computer Fraud",
    description: "Criminalizes unauthorized access to protected computers and systems, including FBI databases and secure communications.",
    penalty: "Up to 20 years imprisonment for aggravated offenses",
  },
  {
    icon: Gavel,
    title: "18 U.S.C. § 2701 - Stored Communications",
    description: "Protects the privacy of stored wire and electronic communications, ensuring secure handling of digital evidence.",
    penalty: "Fines and imprisonment up to 5 years",
  },
  {
    icon: BookOpen,
    title: "Privacy Act of 1974",
    description: "Governs the collection, use, and dissemination of personal information by federal agencies, including the FBI.",
    penalty: "Civil penalties and potential criminal charges",
  },
  {
    icon: AlertCircle,
    title: "18 U.S.C. § 641 - Public Property Theft",
    description: "Applies to theft or misuse of government records, documents, and information systems.",
    penalty: "Fines and imprisonment up to 10 years",
  },
];

const guidelines = [
  "Access only information necessary for your official duties",
  "Report any suspected security incidents immediately",
  "Never share login credentials or authentication tokens",
  "Follow proper protocols for handling classified information",
  "Maintain CJIS Security Policy compliance at all times",
  "Use secure channels for all sensitive communications",
];

const RulesAndLaws = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
            <Gavel className="h-5 w-5 text-gold" />
            <span className="text-gold font-semibold">Legal Framework</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            FBI Rules & Federal Laws
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            "Justice is the constant and perpetual wish to render everyone their due." - Understanding the legal framework that governs our operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {laws.map((law, index) => {
            const Icon = law.icon;
            return (
              <Card
                key={index}
                className="p-8 space-y-4 bg-card border-border hover:border-gold/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-lg shrink-0">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {law.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {law.description}
                    </p>
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-gold font-semibold">
                        {law.penalty}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-card border-gold/30">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Operational Guidelines
            </h3>
            <p className="text-muted-foreground">
              All personnel accessing this portal must adhere to the following guidelines:
            </p>
            <ul className="space-y-3">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                  <span className="text-muted-foreground">{guideline}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                Violation of these guidelines may result in administrative action, suspension of access privileges, and/or criminal prosecution under applicable federal laws.
              </p>
            </div>
          </div>
        </Card>

        {/* Crime Prevention Image */}
        <div className="mt-8 sm:mt-12 md:mt-16 rounded-2xl overflow-hidden">
          <img 
            src={crimePrevention} 
            alt="Crime Prevention - Stay Safe" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default RulesAndLaws;
