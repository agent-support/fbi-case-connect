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
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            Trusted by FBI Personnel
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Hear from agents and analysts who rely on our support portal daily
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 bg-card border-border hover:border-gold/50 transition-all duration-300"
            >
              <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-gold opacity-50" />
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gold flex-shrink-0"
                />
                <div>
                  <div className="font-semibold text-foreground text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gold">{testimonial.role}</div>
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
