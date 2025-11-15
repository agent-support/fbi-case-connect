import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import fbiLogo from "@/assets/fbi-logo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-8">
          <div className="bg-background p-8 rounded-lg">
            <img src={fbiLogo} alt="FBI Seal" className="w-48 h-48 mx-auto" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            FBI Official
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gold">
            Support Portal
          </h2>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Secure, encrypted platform for FBI agents, analysts, and authorized
          partners to access critical resources and support services.
        </p>

        <div className="pt-6">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/80 text-foreground border border-border px-8 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105"
          >
            <AlertTriangle className="mr-2 h-5 w-5" />
            File Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
