import { Check, X, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const ComparisonTable = () => {
  const { language } = useLanguage();
  const t = translations[language].comparison;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
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

        {/* Comparison table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-soft">
            {/* Header */}
            <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
              <div className="p-4 md:p-6">
                <span className="text-sm font-medium text-muted-foreground">{t.feature}</span>
              </div>
              <div className="p-4 md:p-6 text-center border-x border-border bg-accent/50">
                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-primary">{t.clinicBot}</span>
                </div>
              </div>
              <div className="p-4 md:p-6 text-center">
                <span className="text-sm font-medium text-muted-foreground">{t.genericTools}</span>
              </div>
            </div>
            
            {/* Rows */}
            {t.features.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${
                  index !== t.features.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="p-4 md:p-6">
                  <p className="text-sm font-medium text-foreground">{row.feature}</p>
                  <p className="text-xs text-muted-foreground mt-1 hidden sm:block">{row.emotion}</p>
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center border-x border-border bg-accent/30">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <X className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom note */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            {t.bottomNote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
