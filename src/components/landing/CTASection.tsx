import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "No credit card required",
    "Setup in under 5 minutes",
    "Free 14-day trial",
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground/30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary-foreground/30 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-primary-foreground/30 rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Clinic?
          </h2>
          
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of clinics across MENA that have already automated their patient communication.
          </p>
          
          {/* Benefits list */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground/90 text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <Button variant="hero-outline" size="lg" className="group">
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
