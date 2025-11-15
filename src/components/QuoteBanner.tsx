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
    <div className={`py-8 sm:py-12 md:py-16 px-4 border-y ${bgClass}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
          <Quote className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 ${quoteColor} opacity-50`} />
          <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground italic leading-relaxed px-4">
            "{quote}"
          </blockquote>
          {author && (
            <cite className="text-sm sm:text-base md:text-lg text-muted-foreground not-italic">
              — {author}
            </cite>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteBanner;
