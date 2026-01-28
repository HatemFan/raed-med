import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar, Bell } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-surface)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-accent-foreground">Trusted by 100+ MENA Clinics</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Transform WhatsApp Into Your{" "}
            <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">
              Smartest Staff Member
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Automate bookings, reduce no-shows, and keep patient data secure — all through one powerful tool made for clinics.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="w-full sm:w-auto group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Watch Demo
            </Button>
          </div>
          
          {/* Floating cards showcase */}
          <div className="relative max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {/* Main phone mockup */}
            <div className="relative mx-auto w-72 h-[500px] bg-card rounded-[3rem] shadow-card border border-border p-3">
              <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden flex flex-col">
                {/* Status bar */}
                <div className="h-8 bg-primary/5 flex items-center justify-center">
                  <div className="w-20 h-5 bg-foreground/10 rounded-full" />
                </div>
                
                {/* Chat header */}
                <div className="px-4 py-3 border-b border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[image:var(--gradient-hero)] flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Dental Care Clinic</p>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>
                
                {/* Chat messages */}
                <div className="flex-1 p-4 space-y-3 overflow-hidden">
                  <div className="flex justify-start">
                    <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-foreground">Hi! I'd like to book a teeth cleaning appointment 🦷</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm">Of course! I have slots available tomorrow at 10 AM or 3 PM. Which works for you?</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-foreground">10 AM please!</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm">Perfect! ✅ You're booked for tomorrow at 10 AM. I'll send a reminder 24 hours before.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating notification cards */}
            <div className="absolute -left-4 sm:-left-16 top-20 bg-card rounded-2xl shadow-card border border-border p-4 animate-float hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Appointment Booked</p>
                  <p className="text-xs text-muted-foreground">Tomorrow at 10:00 AM</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-4 sm:-right-16 top-40 bg-card rounded-2xl shadow-card border border-border p-4 animate-float hidden sm:block" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Reminder Sent</p>
                  <p className="text-xs text-muted-foreground">No-shows reduced by 40%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
