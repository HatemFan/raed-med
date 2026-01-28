import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is my patient data really secure?",
    answer: "Absolutely — this is our top priority. We use enterprise-level encryption (the same banks use), and patient data is completely separated from your personal WhatsApp. We're built for healthcare compliance from day one, not as an afterthought. Your patients' trust is everything, and we treat it that way.",
  },
  {
    question: "How long does setup actually take?",
    answer: "Most clinics are up and running in under an afternoon. Seriously. You connect your WhatsApp Business account, pick your workflows (appointment booking, reminders, FAQs), and you're done. No developers needed, no complex training. We've designed it so even the least tech-savvy team member can handle it.",
  },
  {
    question: "Will this work for my patients in MENA?",
    answer: "Yes! We built ClinicBot specifically for clinics in the Middle East. That means full Arabic support, understanding of local patient habits, and compliance with regional regulations. Your patients can switch between Arabic and English mid-conversation — we handle it smoothly.",
  },
  {
    question: "What happens if something goes wrong?",
    answer: "You'll never be left hanging. Our support team understands clinics (many of us come from healthcare backgrounds). If anything feels off, you reach a real person who gets what you're dealing with — not a generic help desk reading from a script. We're here to make your life easier, not harder.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            We've Got Answers
          </h2>
          <p className="text-lg text-muted-foreground">
            The questions we hear most from clinic owners like you — answered honestly.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-soft transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-6">
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
              Still have questions?
            </p>
            <p className="text-muted-foreground text-sm">
              We'd love to hear from you. Drop us a message at{" "}
              <a href="mailto:hello@clinicbot.com" className="text-primary hover:underline">
                hello@clinicbot.com
              </a>{" "}
              — we reply within a few hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
