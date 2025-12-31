import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Users, ArrowRight, Heart, Shield } from "lucide-react";
import drAhmedImage from "@/assets/dr-ahmed.jpg";

const stats = [
  { icon: Users, value: "1000+", label: "Happy Patients", color: "text-primary" },
  { icon: Award, value: "15+", label: "Years Experience", color: "text-amber-500" },
  { icon: GraduationCap, value: "5+", label: "Certifications", color: "text-emerald-500" },
];

const AboutPreview = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-card via-card to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl -z-10" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={drAhmedImage}
                alt="Dr. Ahmed - Dentist"
                className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
              
              {/* Name Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                  <p className="font-serif text-white text-xl font-bold">Dr. Ahmed</p>
                  <p className="text-white/80 text-sm">Lead Dentist & Founder</p>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-5 shadow-2xl border border-border hidden md:flex items-center gap-4 animate-float">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-serif font-bold text-2xl">15+ Years</p>
                <p className="text-sm text-muted-foreground">of Excellence</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4 bg-primary/10 px-4 py-1.5 rounded-full">
                About The Doctor
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                Meet Dr. Ahmed
                <span className="block text-primary mt-2">Your Smile Expert</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Dr. Ahmed is a highly skilled and compassionate dentist dedicated to providing 
                exceptional dental care. With over 15 years of experience, he combines the latest 
                dental technology with a gentle, patient-centered approach.
              </p>
              <p>
                His commitment to continuing education ensures that patients receive the most 
                advanced treatments available, all in a comfortable and welcoming environment.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Heart, text: "Patient-Centered Care" },
                { icon: Shield, text: "Safe & Sterile Environment" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <p className="font-serif text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button size="lg" className="group px-8 shadow-lg shadow-primary/20">
                Learn More About Dr. Ahmed
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
