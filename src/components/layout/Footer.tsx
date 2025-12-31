import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">AB</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">Al-Babr</h3>
                <p className="text-sm opacity-70">Dental Clinic</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Providing exceptional dental care with a gentle touch. Your smile is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Dr. Ahmed", path: "/about" },
                { name: "Book Appointment", path: "/book" },
                { name: "Dental Advice", path: "/advice" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm opacity-80">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-start gap-3 text-sm opacity-80">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@albabr-dental.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Healthcare Street, Medical District</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Working Hours</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Mon - Fri: 9:00 AM - 7:00 PM</span>
              </li>
              <li className="pl-6">Sat: 9:00 AM - 3:00 PM</li>
              <li className="pl-6">Sun: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Al-Babr Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
