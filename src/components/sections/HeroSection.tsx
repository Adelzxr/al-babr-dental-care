import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle, Phone, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern dental clinic interior"
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 lg:right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-background">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8 animate-fade-in shadow-lg">
            <div className="flex -space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </div>
            <span className="text-sm font-medium ml-1">Trusted by 1000+ Happy Patients</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-slide-up">
            <span className="text-white">Your Smile,</span>
            <span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent mt-2">
              Our Priority
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-3 animate-slide-up font-medium" style={{ animationDelay: "0.1s" }}>
            Al-Babr Dental Clinic
          </p>

          <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Experience exceptional dental care with Dr. Ahmed. We combine modern technology 
            with a gentle, personalized approach for your comfort.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {[
              { icon: Sparkles, text: "Gentle Care" },
              { icon: CheckCircle, text: "Modern Technology" },
              { icon: Phone, text: "24/7 Support" }
            ].map((feature) => (
              <div key={feature.text} className="flex items-center gap-2 text-sm text-white/80 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <feature.icon className="w-4 h-4 text-secondary" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/book">
              <Button size="xl" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 text-white px-8">
                Book Appointment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="xl" className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 px-8">
                Meet Dr. Ahmed
              </Button>
            </Link>
          </div>

          {/* Quick Contact */}
          <div className="mt-10 flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
              <Phone className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Call us anytime</p>
              <a href="tel:+1234567890" className="text-white font-semibold text-lg hover:text-primary transition-colors">
                +123 456 7890
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
