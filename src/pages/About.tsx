import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, GraduationCap, Users, Heart, CheckCircle, Calendar } from "lucide-react";

const drAhmedImage = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop&q=80";

const qualifications = [
  "Doctor of Dental Surgery (DDS)",
  "Advanced Cosmetic Dentistry Certification",
  "Implantology Specialist Training",
  "Member of International Dental Association",
  "Continuing Education in Modern Dentistry",
];

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Every treatment plan is tailored to your unique needs and comfort level.",
  },
  {
    icon: Award,
    title: "Excellence in Practice",
    description: "Commitment to the highest standards of dental care and patient satisfaction.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Staying updated with the latest advancements in dental technology and techniques.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={drAhmedImage}
                    alt="Dr. Ahmed - Dentist"
                    className="w-full h-[600px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-xl border border-border hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                      <Users className="w-7 h-7 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-2xl">1000+</p>
                      <p className="text-sm text-muted-foreground">Happy Patients</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">About Dr. Ahmed</span>
                <h1 className="font-serif text-4xl md:text-5xl font-bold">
                  Dedicated to Your Smile
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With over 15 years of experience in dentistry, Dr. Ahmed has built a reputation 
                  for providing exceptional care with a gentle, compassionate approach. His passion 
                  for dental health drives him to continuously expand his knowledge and skills.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At Al-Babr Dental Clinic, we believe that every patient deserves personalized 
                  attention and the highest quality of care. Dr. Ahmed takes the time to understand 
                  your concerns, explain treatment options, and ensure you feel comfortable throughout 
                  your dental journey.
                </p>

                <div className="pt-4">
                  <Link to="/book">
                    <Button variant="default" size="xl">
                      <Calendar className="w-5 h-5" />
                      Book a Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="section-padding bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-center mb-10">
                Qualifications & Certifications
              </h2>
              <div className="space-y-4">
                {qualifications.map((qualification, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-medium">{qualification}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-center mb-10">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-card rounded-xl shadow-md"
                >
                  <div className="w-16 h-16 rounded-full bg-accent mx-auto flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
