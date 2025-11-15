import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import fbiLogo from "@/assets/fbi-logo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={fbiLogo} alt="FBI Logo" className="h-12 w-12 rounded" />
          <div>
            <h1 className="text-xl font-bold text-foreground">FBI Official</h1>
            <p className="text-sm text-gold font-semibold">Support Portal</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
