import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Users, ArrowRight } from "lucide-react";
import drAhmedImage from "@/assets/dr-ahmed.jpg";

const stats = [
  { icon: Users, value: "1000+", label: "Happy Patients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: GraduationCap, value: "5+", label: "Certifications" },
];

const AboutPreview = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={drAhmedImage}
                alt="Dr. Ahmed - Dentist"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-xl border border-border hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Award className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-lg">15+ Years</p>
                  <p className="text-sm text-muted-foreground">of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About The Doctor</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Meet Dr. Ahmed
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dr. Ahmed is a highly skilled and compassionate dentist dedicated to providing 
              exceptional dental care. With over 15 years of experience, he combines the latest 
              dental technology with a gentle, patient-centered approach.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His commitment to continuing education ensures that patients receive the most 
              advanced treatments available, all in a comfortable and welcoming environment.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="font-serif text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="outline" size="lg" className="group">
                Learn More About Dr. Ahmed
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
