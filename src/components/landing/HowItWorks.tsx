import { MessageCircle, Settings, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const icons = [MessageCircle, Settings, Sparkles];

const HowItWorks = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language].howItWorks;

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[image:var(--gradient-surface)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className={`absolute ${isRTL ? "right-8" : "left-8"} top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block`} />
            
            <div className="space-y-12">
              {t.steps.map((step, index) => {
                const Icon = icons[index];
                const stepNumber = String(index + 1).padStart(2, "0");
                
                return (
                  <div
                    key={index}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-8"
                  >
                    {/* Step number circle */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-[image:var(--gradient-hero)] flex items-center justify-center shadow-lg shadow-primary/20">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-card rounded-2xl p-6 border border-border hover:shadow-soft transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-primary bg-accent px-2.5 py-1 rounded-full">
                          {language === "ar" ? `خطوة ${stepNumber}` : `Step ${stepNumber}`}
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
