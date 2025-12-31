import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-foreground to-slate-900 text-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="text-white font-serif text-xl font-bold">AB</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">Al-Babr</h3>
                <p className="text-sm text-white/60">Dental Clinic</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              Providing exceptional dental care with a gentle touch. Your smile is our priority, your comfort our promise.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
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
                    className="text-white/70 hover:text-primary hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Call us</p>
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">+123 456 7890</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Email us</p>
                  <a href="mailto:info@albabr-dental.com" className="hover:text-primary transition-colors">info@albabr-dental.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Visit us</p>
                  <span>123 Healthcare Street, Medical District</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
              Working Hours
            </h4>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-white/70 pb-3 border-b border-white/10">
                  <span>Mon - Fri</span>
                  <span className="text-white font-medium">9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex items-center justify-between text-white/70 pb-3 border-b border-white/10">
                  <span>Saturday</span>
                  <span className="text-white font-medium">9:00 AM - 3:00 PM</span>
                </li>
                <li className="flex items-center justify-between text-white/70">
                  <span>Sunday</span>
                  <span className="text-red-400 font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Al-Babr Dental Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <Link to="/admin" className="hover:text-primary transition-colors">
              Admin
            </Link>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
