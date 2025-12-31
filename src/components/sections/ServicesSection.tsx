import { Smile, ShieldCheck, Sparkles, Heart, Stethoscope, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Smile,
    title: "General Dentistry",
    titleAr: "طب الأسنان العام",
    description: "Comprehensive dental exams, cleanings, and preventive care to maintain your oral health.",
    descriptionAr: "فحوصات شاملة للأسنان والتنظيف والرعاية الوقائية للحفاظ على صحة فمك.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    glowColor: "group-hover:shadow-blue-500/20",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    titleAr: "تبييض الأسنان",
    description: "Professional whitening treatments to restore your bright, confident smile.",
    descriptionAr: "علاجات تبييض احترافية لاستعادة ابتسامتك المشرقة والواثقة.",
    color: "from-amber-400 to-yellow-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    glowColor: "group-hover:shadow-amber-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Dental Implants",
    titleAr: "زراعة الأسنان",
    description: "Permanent solutions for missing teeth that look, feel, and function like natural teeth.",
    descriptionAr: "حلول دائمة للأسنان المفقودة تبدو وتعمل مثل الأسنان الطبيعية.",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    glowColor: "group-hover:shadow-emerald-500/20",
  },
  {
    icon: Heart,
    title: "Cosmetic Dentistry",
    titleAr: "تجميل الأسنان",
    description: "Transform your smile with veneers, bonding, and other cosmetic procedures.",
    descriptionAr: "حوّل ابتسامتك مع الفينير والترابط وإجراءات التجميل الأخرى.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    glowColor: "group-hover:shadow-pink-500/20",
  },
  {
    icon: Stethoscope,
    title: "Root Canal",
    titleAr: "علاج قناة الجذر",
    description: "Painless root canal treatments to save damaged teeth and relieve discomfort.",
    descriptionAr: "علاجات قناة الجذر غير المؤلمة لإنقاذ الأسنان التالفة وتخفيف الانزعاج.",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    glowColor: "group-hover:shadow-purple-500/20",
  },
  {
    icon: Clock,
    title: "Emergency Care",
    titleAr: "الرعاية الطارئة",
    description: "Prompt attention for dental emergencies when you need immediate help.",
    descriptionAr: "اهتمام فوري لحالات طوارئ الأسنان عندما تحتاج إلى مساعدة عاجلة.",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    glowColor: "group-hover:shadow-red-500/20",
  },
];

const ServicesSection = () => {
  const { language, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Animated Background Decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 to-transparent rounded-full blur-3xl" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-32 right-20 w-4 h-4 border-2 border-primary/20 rotate-45 animate-spin-slow hidden lg:block" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-40 left-20 w-6 h-6 border-2 border-secondary/20 rounded-full animate-float hidden lg:block" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4 bg-primary/10 px-4 py-1.5 rounded-full animate-bounce-subtle">
            {t('services.title')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6 bg-gradient-to-r from-foreground via-foreground to-primary/70 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            {t('services.subtitle')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {language === 'ar' 
              ? 'نقدم مجموعة كاملة من خدمات طب الأسنان باستخدام أحدث التقنيات للحفاظ على ابتسامتك صحية وجميلة.'
              : 'We offer a full range of dental services using the latest technology to keep your smile healthy and beautiful.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-card p-8 rounded-2xl border ${service.borderColor} shadow-lg hover:shadow-2xl ${service.glowColor} transition-all duration-500 hover:-translate-y-3 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient bg-[length:200%_auto]" />
              
              {/* Hover Background Effect */}
              <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-2xl">
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-shine" />
              </div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-white drop-shadow-md" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {language === 'ar' ? service.titleAr : service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                  {language === 'ar' ? service.descriptionAr : service.description}
                </p>
              </div>
              
              {/* Arrow indicator on hover */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-14 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link to="/book">
            <Button 
              size="lg" 
              className="group relative overflow-hidden px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                {language === 'ar' ? 'احجز زيارتك اليوم' : 'Book Your Visit Today'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
