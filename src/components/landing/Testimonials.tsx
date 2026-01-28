import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I used to lose 3-4 patients a week to no-shows. Now? Maybe one a month. But honestly, the biggest change is how calm my mornings are. The bot handles the booking chaos, and I can actually focus on my patients when they're in the chair.",
    name: "Dr. Ahmed Hassan",
    role: "Dental Clinic Owner",
    location: "Dubai, UAE",
    avatar: "AH",
  },
  {
    quote: "Before ClinicBot, I was answering the same questions 50 times a day. 'What are your hours?' 'Do you accept walk-ins?' Now I actually have time to greet patients properly when they arrive. My stress level has dropped so much — my family noticed the difference.",
    name: "Fatima Al-Rashid",
    role: "Clinic Receptionist",
    location: "Riyadh, KSA",
    avatar: "FA",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Real Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            From Clinics Like Yours
          </h2>
          <p className="text-lg text-muted-foreground">
            We're proud to help healthcare teams reclaim their time — and their peace of mind.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-card rounded-3xl p-8 border border-border hover:shadow-card transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-[image:var(--gradient-hero)] flex items-center justify-center">
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
