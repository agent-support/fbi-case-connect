import { Quote } from "lucide-react";

interface QuoteBannerProps {
  quote: string;
  author?: string;
  variant?: "default" | "accent";
}

const QuoteBanner = ({ quote, author, variant = "default" }: QuoteBannerProps) => {
  const bgClass = variant === "accent" ? "bg-gold/10 border-gold/30" : "bg-card/50 border-border";
  const quoteColor = variant === "accent" ? "text-gold" : "text-gold";
  
  return (
    <div className={`py-16 px-4 border-y ${bgClass}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-4">
          <Quote className={`h-12 w-12 ${quoteColor} opacity-50`} />
          <blockquote className="text-2xl md:text-3xl font-semibold text-foreground italic leading-relaxed">
            "{quote}"
          </blockquote>
          {author && (
            <cite className="text-lg text-muted-foreground not-italic">
              — {author}
            </cite>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteBanner;
