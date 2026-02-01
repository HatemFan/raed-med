import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const Testimonials = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.items.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-3xl p-8 border border-border hover:shadow-card transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 rtl:left-auto rtl:right-8 w-8 h-8 rounded-full bg-[image:var(--gradient-hero)] flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>
              
              {/* Quote text */}
              <blockquote className="text-foreground leading-relaxed mb-6 pt-2">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
