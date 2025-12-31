import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready for a Healthier Smile?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Don't wait to get the dental care you deserve. Book your appointment today 
            and take the first step towards a brighter, healthier smile.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book">
              <Button 
                variant="secondary" 
                size="xl"
                className="group"
              >
                <Calendar className="w-5 h-5" />
                Book an Appointment
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button 
                variant="hero-outline" 
                size="xl"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
