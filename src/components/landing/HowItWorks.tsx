import { MessageCircle, Settings, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Connect Your WhatsApp",
    description: "Link your clinic's WhatsApp Business account in just a few clicks. No technical skills needed — we'll walk you through it.",
    accent: "Takes about 5 minutes",
  },
  {
    number: "02",
    icon: Settings,
    title: "Choose Your Workflows",
    description: "Pick from ready-made templates for dental or dermatology clinics. Appointment booking, reminders, post-visit check-ins — all pre-built for you.",
    accent: "No coding, no complexity",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Let It Work While You Rest",
    description: "That's it. Your virtual receptionist is live. Watch bookings come in, no-shows drop, and your team breathe a little easier.",
    accent: "You've earned this",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[image:var(--gradient-surface)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Up and Running in One Afternoon
          </h2>
          <p className="text-lg text-muted-foreground">
            We know you're busy caring for patients. That's why we made setup so simple, you'll wonder why you waited.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block" />
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-8"
                >
                  {/* Step number circle */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-[image:var(--gradient-hero)] flex items-center justify-center shadow-lg shadow-primary/20">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-card rounded-2xl p-6 border border-border hover:shadow-soft transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-primary bg-accent px-2.5 py-1 rounded-full">
                        Step {step.number}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {step.accent}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
