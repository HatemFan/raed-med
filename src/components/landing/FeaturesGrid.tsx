import { 
  Calendar, 
  Bell, 
  MessageSquareText, 
  Clock, 
  Languages, 
  BarChart3 
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Appointment Automation",
    description: "Bookings handled while you sleep. Patients schedule themselves — no back-and-forth calls.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Gentle nudges that actually work. Reduce no-shows by up to 40% without lifting a finger.",
  },
  {
    icon: MessageSquareText,
    title: "Instant FAQ Replies",
    description: "\"What time do you close?\" answered in seconds. Your staff can focus on patients, not phones.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your clinic never sleeps. Patients get help at 2 AM without you losing sleep.",
  },
  {
    icon: Languages,
    title: "Arabic & English Support",
    description: "Seamless bilingual conversations. Every patient feels understood, in their own language.",
  },
  {
    icon: BarChart3,
    title: "Patient Insights",
    description: "Know what your patients need before they ask. Simple reports that help you care better.",
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features-grid" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-lg text-muted-foreground">
            We built exactly what clinics asked for — no bloated features, no confusing dashboards. Just tools that make your day easier.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
