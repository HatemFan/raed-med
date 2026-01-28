import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[image:var(--gradient-hero)] flex items-center justify-center shadow-md">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">ClinicBot</span>
          </div>

          {/* Navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              How It Works
            </a>
            <a href="#security" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Security
            </a>
          </nav>

          {/* CTA */}
          <Button size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
