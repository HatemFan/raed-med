import { ReactNode } from "react";
import { Sparkles, Building2, Shield } from "lucide-react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <div 
    className="group relative bg-[image:var(--gradient-card)] rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card"
    style={{ animationDelay: delay }}
  >
    {/* Glow effect on hover */}
    <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-4">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      icon: <Sparkles className="w-7 h-7 text-primary" />,
      title: "Goodbye Chaos, Hello Smart Reception",
      description: "Turn WhatsApp into a 24/7 receptionist. Automate bookings, answer FAQs, and cut no-shows by up to 40% — no training needed.",
    },
    {
      icon: <Building2 className="w-7 h-7 text-primary" />,
      title: "Built for Clinics. Not Just Another Chatbot.",
      description: "We've designed this tool specifically for Dental and Dermatology clinics. From post-treatment check-ins to annual cleaning reminders, every workflow is pre-built and ready to go. Plus, we're optimized for bilingual (Arabic/English) conversations and local patient habits in MENA.",
    },
    {
      icon: <Shield className="w-7 h-7 text-primary" />,
      title: "Protect Patient Trust with Privacy First",
      description: "Unlike generic tools, our platform was built from the ground up for medical-grade privacy. No more mixing personal chats with patient data. With enterprise-level encryption and secure separation, you stay compliant and professional at every step.",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[image:var(--gradient-surface)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything Your Clinic Needs
          </h2>
          <p className="text-lg text-muted-foreground">
            Purpose-built automation that understands healthcare, not just chat.
          </p>
        </div>
        
        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={`${index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
