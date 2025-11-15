import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";
import agent3 from "@/assets/agent-3.jpg";
import agent4 from "@/assets/agent-4.jpg";

const testimonials = [
  {
    name: "Special Agent Michael Patterson",
    role: "Cyber Crimes Division",
    image: agent1,
    quote: "The support portal has revolutionized how we handle critical cases. Response times are faster, documentation is seamless, and the secure platform gives us peace of mind when dealing with classified information.",
  },
  {
    name: "Senior Analyst Sarah Chen",
    role: "Intelligence Analysis Unit",
    image: agent2,
    quote: "As an analyst working with sensitive data daily, this portal has become indispensable. The encryption standards and streamlined reporting process have significantly improved our operational efficiency.",
  },
  {
    name: "Supervisory Agent Robert Martinez",
    role: "Field Operations",
    image: agent3,
    quote: "In 25 years with the Bureau, I've never seen a more comprehensive support system. The 24/7 availability and expert assistance have been crucial for our field operations and case management.",
  },
  {
    name: "Special Agent Jessica Williams",
    role: "Counter-Intelligence",
    image: agent4,
    quote: "The portal's security protocols and rapid response capabilities have enhanced our ability to act on time-sensitive intelligence. It's an essential tool for modern law enforcement operations.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted by FBI Personnel
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from agents and analysts who rely on our support portal daily
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 space-y-6 bg-card border-border hover:border-gold/50 transition-all duration-300"
            >
              <Quote className="h-10 w-10 text-gold opacity-50" />
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gold">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
