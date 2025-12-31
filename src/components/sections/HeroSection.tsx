import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern dental clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-background">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium">Trusted by 1000+ Patients</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-slide-up">
            Al-Babr
            <span className="block text-primary mt-2">Dental Clinic</span>
          </h1>

          <p className="text-xl md:text-2xl opacity-90 mb-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Dr. Ahmed – Dentist
          </p>

          <p className="text-lg opacity-80 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Experience exceptional dental care with a gentle, personalized approach. 
            Your smile is our passion, your comfort is our priority.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {["Gentle Care", "Modern Technology", "Flexible Hours"].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm opacity-90">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/book">
              <Button variant="hero" size="xl" className="group">
                Book an Appointment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="hero-outline" size="xl">
                Meet Dr. Ahmed
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
