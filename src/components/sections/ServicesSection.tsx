import { Smile, ShieldCheck, Sparkles, Heart, Stethoscope, Clock } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "General Dentistry",
    description: "Comprehensive dental exams, cleanings, and preventive care to maintain your oral health.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional whitening treatments to restore your bright, confident smile.",
  },
  {
    icon: ShieldCheck,
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth that look, feel, and function like natural teeth.",
  },
  {
    icon: Heart,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and other cosmetic procedures.",
  },
  {
    icon: Stethoscope,
    title: "Root Canal",
    description: "Painless root canal treatments to save damaged teeth and relieve discomfort.",
  },
  {
    icon: Clock,
    title: "Emergency Care",
    description: "Prompt attention for dental emergencies when you need immediate help.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-muted-foreground">
            We offer a full range of dental services to keep your smile healthy and beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-medical bg-card p-6 rounded-xl group hover:scale-[1.02] transition-transform"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
