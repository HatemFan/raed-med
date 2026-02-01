import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const FAQ = () => {
  const { language } = useLanguage();
  const t = translations[language].faq;

  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary/30">
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

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {t.items.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-soft transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left rtl:text-right text-foreground font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Still have questions */}
          <div className="text-center mt-12 p-8 bg-card rounded-2xl border border-border">
            <p className="text-foreground font-medium mb-2">
              {t.stillHaveQuestions}
            </p>
            <p className="text-muted-foreground text-sm">
              {t.contactUs}{" "}
              <a href="mailto:hello@clinicbot.com" className="text-primary hover:underline">
                hello@clinicbot.com
              </a>{" "}
              {t.replyTime}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
