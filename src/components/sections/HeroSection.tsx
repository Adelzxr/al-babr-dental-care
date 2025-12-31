import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle, Phone, Sparkles, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import TypewriterText from "@/components/ui/TypewriterText";
import heroImage from "@/assets/hero-dental.jpg";
import { useState } from "react";

const HeroSection = () => {
  const { t } = useLanguage();
  const [showTitle1, setShowTitle1] = useState(false);
  const [showTitle2, setShowTitle2] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern dental clinic interior"
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50 dark:from-slate-950/95 dark:via-slate-950/80 dark:to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent dark:from-slate-950/30" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 right-10 lg:right-20 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse-slow" />

      {/* Geometric Shapes */}
      <div className="absolute top-32 right-1/4 w-4 h-4 border-2 border-primary/30 rotate-45 animate-spin-slow hidden lg:block" style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-40 right-20 w-6 h-6 border-2 border-secondary/30 rounded-full animate-bounce hidden lg:block" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/50 rounded-full animate-ping hidden lg:block" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Trust Badge with Glow */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8 animate-fade-in shadow-lg group hover:bg-white/15 transition-all duration-300 cursor-default">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" 
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <TypewriterText 
              text={t('hero.trusted')} 
              speed={30} 
              delay={500}
              className="text-sm font-medium ml-1"
              onComplete={() => setShowTitle1(true)}
            />
          </div>

          {/* Main Title with Typewriter */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            {showTitle1 ? (
              <span className="text-white dark:text-slate-100 block animate-slide-up">
                <TypewriterText 
                  text={t('hero.title1')} 
                  speed={80}
                  className="text-white dark:text-slate-100"
                  onComplete={() => setShowTitle2(true)}
                />
              </span>
            ) : (
              <span className="text-white/20 dark:text-slate-100/20 block">{t('hero.title1')}</span>
            )}
            {showTitle2 ? (
              <span className="block mt-2 animate-slide-up">
                <TypewriterText 
                  text={t('hero.title2')} 
                  speed={80}
                  className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent"
                />
              </span>
            ) : (
              <span className="block mt-2 text-primary/20">{t('hero.title2')}</span>
            )}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 dark:text-slate-100/90 mb-3 animate-slide-up font-medium" style={{ animationDelay: "0.1s" }}>
            {t('hero.clinic')}
          </p>

          <p className="text-lg text-white/70 dark:text-slate-200/80 mb-8 leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {t('hero.description')}
          </p>

          {/* Features with Hover Effects */}
          <div className="flex flex-wrap gap-x-4 gap-y-3 mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {[
              { icon: Sparkles, text: t('hero.gentleCare'), color: 'group-hover:text-yellow-400' },
              { icon: Zap, text: t('hero.modernTech'), color: 'group-hover:text-blue-400' },
              { icon: Phone, text: t('hero.support'), color: 'group-hover:text-green-400' }
            ].map((feature, index) => (
              <div 
                key={feature.text} 
                className="group flex items-center gap-2 text-sm text-white/80 dark:text-slate-100/90 bg-white/5 dark:bg-white/10 backdrop-blur-sm rounded-full px-4 py-2.5 border border-white/10 dark:border-white/20 hover:bg-white/10 dark:hover:bg-white/15 hover:border-white/20 dark:hover:border-white/30 transition-all duration-300 cursor-default hover:scale-105"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <feature.icon className={`w-4 h-4 text-secondary dark:text-secondary transition-colors duration-300 ${feature.color}`} />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons with Enhanced Effects */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/book">
              <Button 
                size="xl" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-secondary shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-1 hover:scale-105 text-white px-8"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('nav.book')}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="xl" 
                className="group border-2 border-white/30 dark:border-white/40 bg-white/5 dark:bg-white/10 backdrop-blur-sm text-white dark:text-slate-100 hover:bg-white/10 dark:hover:bg-white/15 hover:border-white/50 dark:hover:border-white/60 hover:scale-105 transition-all duration-300 px-8"
              >
                <span className="group-hover:text-primary dark:group-hover:text-primary transition-colors">{t('hero.meetDoctor')}</span>
              </Button>
            </Link>
          </div>

          {/* Quick Contact with Pulse */}
          <div className="mt-10 flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/30 rounded-full animate-ping" />
              <div className="relative w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30 hover:bg-secondary/30 transition-colors duration-300">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
            </div>
            <div>
              <p className="text-white/60 dark:text-slate-200/70 text-sm">{t('hero.callUs')}</p>
              <a href="tel:+1234567890" className="text-white dark:text-slate-100 font-semibold text-lg hover:text-primary dark:hover:text-primary transition-colors">
                +123 456 7890
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 hover:border-primary/50 transition-colors">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
