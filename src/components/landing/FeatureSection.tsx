import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Check } from "lucide-react";

import featureChatMockup from "@/assets/feature-chat-mockup.png";
import featureDashboardMockup from "@/assets/feature-dashboard-mockup.png";
import featureSecurityMockup from "@/assets/feature-security-mockup.png";

const featureImages = [featureChatMockup, featureDashboardMockup, featureSecurityMockup];

interface FeatureRowProps {
  title: string;
  description: string;
  image: string;
  badge: string;
  reverse: boolean;
  isRTL: boolean;
}

const FeatureRow = ({ title, description, badge, image, reverse, isRTL }: FeatureRowProps) => {
  // In RTL mode, reverse the visual order
  const shouldReverse = isRTL ? !reverse : reverse;
  
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${shouldReverse ? 'lg:flex-row-reverse' : ''}`}>
      {/* Content */}
      <div className="flex-1 space-y-6">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          {badge}
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
        {/* Feature bullets - visual enhancement */}
        <div className="flex flex-wrap gap-3 pt-2">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image */}
      <div className="flex-1 relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-auto object-cover"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
        </div>
        {/* Decorative blur */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language].featureSection;

  const badges = language === 'en' 
    ? ['Smart Automation', 'Clinic-First Design', 'Enterprise Security']
    : ['أتمتة ذكية', 'تصميم للعيادات', 'أمان مؤسسي'];

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[image:var(--gradient-surface)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
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
        
        {/* Feature rows */}
        <div className="space-y-24 lg:space-y-32">
          {t.features.map((feature, index) => (
            <FeatureRow
              key={index}
              title={feature.title}
              description={feature.description}
              badge={badges[index]}
              image={featureImages[index]}
              reverse={index % 2 === 1}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
