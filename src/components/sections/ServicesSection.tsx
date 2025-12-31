import { Smile, ShieldCheck, Sparkles, Heart, Stethoscope, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Smile,
    title: "General Dentistry",
    description: "Comprehensive dental exams, cleanings, and preventive care to maintain your oral health.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional whitening treatments to restore your bright, confident smile.",
    color: "from-amber-400 to-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth that look, feel, and function like natural teeth.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    icon: Heart,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and other cosmetic procedures.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
  },
  {
    icon: Stethoscope,
    title: "Root Canal",
    description: "Painless root canal treatments to save damaged teeth and relieve discomfort.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    icon: Clock,
    title: "Emergency Care",
    description: "Prompt attention for dental emergencies when you need immediate help.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4 bg-primary/10 px-4 py-1.5 rounded-full">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Comprehensive Dental Care
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a full range of dental services using the latest technology 
            to keep your smile healthy and beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-card p-8 rounded-2xl border ${service.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Background Effect */}
              <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
              
              {/* Arrow indicator on hover */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link to="/book">
            <Button size="lg" className="group px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40">
              Book Your Visit Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
