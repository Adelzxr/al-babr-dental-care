import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Users, ArrowRight, Heart, Shield, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";

const drAhmedImage = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop&q=80";

const stats = [
  { icon: Users, value: "1000+", label: "Happy Patients", labelAr: "مرضى سعداء", color: "text-primary", gradient: "from-primary to-cyan-500" },
  { icon: Award, value: "15+", label: "Years Experience", labelAr: "سنوات الخبرة", color: "text-amber-500", gradient: "from-amber-400 to-yellow-500" },
  { icon: GraduationCap, value: "5+", label: "Certifications", labelAr: "شهادات", color: "text-emerald-500", gradient: "from-emerald-400 to-green-500" },
];

const AboutPreview = () => {
  const { language, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [countedStats, setCountedStats] = useState<string[]>(['0', '0', '0']);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const targets = [1000, 15, 5];
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCountedStats(targets.map((target, i) => {
              const value = Math.round(target * progress);
              return i === 0 ? `${value}+` : `${value}+`;
            }));
            if (step >= steps) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-card via-card to-muted/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Floating particles */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-primary/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute top-40 right-40 w-2 h-2 bg-secondary/30 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-4 h-4 border-2 border-primary/20 rotate-45 animate-spin-slow hidden lg:block" style={{ animationDuration: '25s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Decorative Elements with Animation */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-2xl animate-pulse-slow" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl -z-10 animate-float" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group hover:shadow-primary/20 transition-shadow duration-500">
              <img
                src={drAhmedImage}
                alt="Dr. Ahmed - Dentist"
                className="w-full h-[550px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent group-hover:from-foreground/40 transition-all duration-500" />
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shine" />
              </div>
              
              {/* Name Badge */}
              <div className="absolute bottom-6 left-6 right-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 group-hover:bg-white/15 transition-colors">
                  <p className="font-serif text-white text-xl font-bold">{language === 'ar' ? 'د. أحمد' : 'Dr. Ahmed'}</p>
                  <p className="text-white/80 text-sm">{language === 'ar' ? 'طبيب الأسنان الرئيسي والمؤسس' : 'Lead Dentist & Founder'}</p>
                </div>
              </div>
            </div>
            
            {/* Floating Card with Glow */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-5 shadow-2xl border border-border hidden md:flex items-center gap-4 animate-float hover:shadow-primary/20 transition-shadow duration-300 group/card">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-serif font-bold text-2xl">{language === 'ar' ? '+15 سنة' : '15+ Years'}</p>
                <p className="text-sm text-muted-foreground">{language === 'ar' ? 'من التميز' : 'of Excellence'}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4 bg-primary/10 px-4 py-1.5 rounded-full animate-bounce-subtle">
                <Sparkles className="w-4 h-4" />
                {t('about.title')}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                {language === 'ar' ? 'تعرف على د. أحمد' : 'Meet Dr. Ahmed'}
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2 animate-gradient bg-[length:200%_auto]">
                  {language === 'ar' ? 'خبير ابتسامتك' : 'Your Smile Expert'}
                </span>
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                {language === 'ar' 
                  ? 'الدكتور أحمد طبيب أسنان ماهر ورحيم مكرس لتقديم رعاية أسنان استثنائية. مع أكثر من 15 عامًا من الخبرة، يجمع بين أحدث تقنيات طب الأسنان ونهج لطيف يركز على المريض.'
                  : 'Dr. Ahmed is a highly skilled and compassionate dentist dedicated to providing exceptional dental care. With over 15 years of experience, he combines the latest dental technology with a gentle, patient-centered approach.'
                }
              </p>
              <p>
                {language === 'ar'
                  ? 'التزامه بالتعليم المستمر يضمن أن يتلقى المرضى أحدث العلاجات المتاحة، كل ذلك في بيئة مريحة وترحيبية.'
                  : 'His commitment to continuing education ensures that patients receive the most advanced treatments available, all in a comfortable and welcoming environment.'
                }
              </p>
            </div>

            {/* Features with Hover Animation */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Heart, text: language === 'ar' ? 'رعاية تركز على المريض' : 'Patient-Centered Care', color: 'hover:bg-pink-500/10 hover:border-pink-500/30' },
                { icon: Shield, text: language === 'ar' ? 'بيئة آمنة ومعقمة' : 'Safe & Sterile Environment', color: 'hover:bg-emerald-500/10 hover:border-emerald-500/30' },
              ].map((item) => (
                <div 
                  key={item.text} 
                  className={`flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2.5 border border-transparent transition-all duration-300 hover:scale-105 cursor-default ${item.color}`}
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-border">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center group cursor-default"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.gradient} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-serif text-3xl font-bold text-foreground">{countedStats[index]}</p>
                  <p className="text-sm text-muted-foreground">{language === 'ar' ? stat.labelAr : stat.label}</p>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button 
                size="lg" 
                className="group relative overflow-hidden px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('about.learnMore')}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
