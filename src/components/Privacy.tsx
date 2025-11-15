import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const privacyPoints = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "All data transmitted through the portal is protected with military-grade AES-256 encryption, ensuring complete confidentiality of sensitive information.",
  },
  {
    icon: Lock,
    title: "Secure Authentication",
    description: "Multi-factor authentication and biometric verification ensure only authorized personnel can access the portal and its resources.",
  },
  {
    icon: Eye,
    title: "Privacy Compliance",
    description: "Full compliance with Federal Privacy Act, CJIS Security Policy, and FBI internal security protocols. Your data is never shared without proper authorization.",
  },
  {
    icon: FileCheck,
    title: "Data Retention",
    description: "All case files and communications are retained according to federal guidelines and automatically archived with strict access controls and audit trails.",
  },
];

const Privacy = () => {
  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
            <Shield className="h-5 w-5 text-gold" />
            <span className="text-gold font-semibold">Privacy & Security</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Security is Our Priority
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            "The FBI is committed to protecting the privacy and constitutional rights of all Americans while safeguarding national security."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {privacyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card
                key={index}
                className="p-8 space-y-4 bg-card border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-lg shrink-0">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-background border-gold/30">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Privacy Statement</h3>
            <p className="text-muted-foreground leading-relaxed">
              This portal operates under the authority of the Federal Bureau of Investigation and is subject to monitoring and recording. By accessing this system, you consent to such monitoring. Unauthorized access or use is strictly prohibited and may result in criminal prosecution under 18 U.S.C. § 1030.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All information submitted through this portal is protected under the Privacy Act of 1974 and the Freedom of Information Act. Personal information is collected only for legitimate law enforcement purposes and is maintained in accordance with federal regulations.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Privacy;
