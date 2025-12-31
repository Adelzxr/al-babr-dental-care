import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ModernLogo from "@/components/ui/ModernLogo";

const Footer = () => {
  const { language, t } = useLanguage();

  const quickLinks = [
    { name: language === 'ar' ? 'الرئيسية' : 'Home', path: "/" },
    { name: language === 'ar' ? 'عن الطبيب' : 'About Dr. Ahmed', path: "/about" },
    { name: language === 'ar' ? 'حجز موعد' : 'Book Appointment', path: "/book" },
    { name: language === 'ar' ? 'نصائح طبية' : 'Dental Advice', path: "/advice" },
    { name: language === 'ar' ? 'اتصل بنا' : 'Contact Us', path: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-foreground to-slate-900 text-background relative overflow-hidden">
      {/* Animated Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      
      {/* Floating shapes */}
      <div className="absolute top-40 left-20 w-3 h-3 border border-primary/20 rotate-45 animate-spin-slow hidden lg:block" style={{ animationDuration: '30s' }} />
      <div className="absolute bottom-40 right-40 w-2 h-2 bg-secondary/20 rounded-full animate-float hidden lg:block" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                <span className="text-white font-serif text-xl font-bold relative z-10">AB</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text">
                  {language === 'ar' ? 'البابر' : 'Al-Babr'}
                </h3>
                <p className="text-sm text-white/60">{language === 'ar' ? 'عيادة أسنان' : 'Dental Clinic'}</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              {language === 'ar' 
                ? 'نقدم رعاية أسنان استثنائية بلمسة لطيفة. ابتسامتك أولويتنا، راحتك وعدنا.'
                : 'Providing exceptional dental care with a gentle touch. Your smile is our priority, your comfort our promise.'
              }
            </p>
            {/* Social Links with Hover Animation */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 group-hover:animate-bounce-subtle" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full animate-pulse-slow" />
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.path} style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-primary hover:translate-x-2 transition-all inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full animate-pulse-slow" />
              {language === 'ar' ? 'معلومات الاتصال' : 'Contact Info'}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 group cursor-default">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/50">{language === 'ar' ? 'اتصل بنا' : 'Call us'}</p>
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">+123 456 7890</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70 group cursor-default">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/50">{language === 'ar' ? 'راسلنا' : 'Email us'}</p>
                  <a href="mailto:info@albabr-dental.com" className="hover:text-primary transition-colors">info@albabr-dental.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70 group cursor-default">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/50">{language === 'ar' ? 'زورنا' : 'Visit us'}</p>
                  <span>{language === 'ar' ? '123 شارع الرعاية الصحية، المنطقة الطبية' : '123 Healthcare Street, Medical District'}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full animate-pulse-slow" />
              {t('contact.hours')}
            </h4>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-colors duration-300">
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-white/70 pb-3 border-b border-white/10">
                  <span>{language === 'ar' ? 'الاثنين - الجمعة' : 'Mon - Fri'}</span>
                  <span className="text-white font-medium">9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex items-center justify-between text-white/70 pb-3 border-b border-white/10">
                  <span>{language === 'ar' ? 'السبت' : 'Saturday'}</span>
                  <span className="text-white font-medium">9:00 AM - 3:00 PM</span>
                </li>
                <li className="flex items-center justify-between text-white/70">
                  <span>{language === 'ar' ? 'الأحد' : 'Sunday'}</span>
                  <span className="text-red-400 font-medium">{language === 'ar' ? 'مغلق' : 'Closed'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} {language === 'ar' ? 'عيادة البابر لطب الأسنان. جميع الحقوق محفوظة.' : 'Al-Babr Dental Clinic. All rights reserved.'}
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <Link to="/admin" className="hover:text-primary transition-colors hover:scale-105 transform">
              {language === 'ar' ? 'الإدارة' : 'Admin'}
            </Link>
            <a href="#" className="hover:text-primary transition-colors">{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
            <a href="#" className="hover:text-primary transition-colors">{language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
