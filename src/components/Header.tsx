import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src="/fbi-seal.jpg" alt="FBI Seal" className="h-10 w-10 sm:h-12 sm:w-12 rounded object-cover" />
          <div>
            <h1 className="text-base sm:text-xl font-bold text-foreground leading-tight">FBI Official</h1>
            <p className="text-xs sm:text-sm text-gold font-semibold leading-tight">Support Portal</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
          <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
