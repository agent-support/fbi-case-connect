import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import fbiBuildingBg from "@/assets/fbi-building.jpg";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center px-4 py-24 sm:py-32 pt-24 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${fbiBuildingBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
        <div className="flex justify-center mb-4 sm:mb-8">
          <div className="bg-background p-4 sm:p-8 rounded-lg">
            <img src="/fbi-seal.jpg" alt="FBI Seal" className="w-32 h-32 sm:w-48 sm:h-48 mx-auto object-cover rounded" />
          </div>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
            FBI Official
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gold leading-tight">
            Support Portal
          </h2>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
          Secure, encrypted platform for FBI agents, analysts, and authorized
          partners to access critical resources and support services.
        </p>

        <div className="pt-4 sm:pt-6">
          <Button 
            size="lg" 
            onClick={() => {
              // @ts-ignore - Jivo is loaded from external script
              if (window.jivo_api) {
                // @ts-ignore
                window.jivo_api.open();
              }
            }}
            className="bg-secondary hover:bg-secondary/80 text-foreground border border-border px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl transition-all hover:scale-105 w-full sm:w-auto"
          >
            <AlertTriangle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            File Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
