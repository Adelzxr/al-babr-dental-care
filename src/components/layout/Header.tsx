import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import ModernLogo from "@/components/ui/ModernLogo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.advice'), path: "/advice" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Modern Logo */}
          <ModernLogo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {/* Animated underline */}
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 ${
                    isActive(link.path) ? "w-1/2" : "w-0 group-hover:w-1/2"
                  }`} 
                />
              </Link>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="relative p-2.5 rounded-xl bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 group overflow-hidden"
              aria-label="Toggle language"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-1.5">
                <Languages className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">{language}</span>
              </div>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 group overflow-hidden"
              aria-label="Toggle theme"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 transition-transform group-hover:rotate-12" />
                ) : (
                  <Sun className="w-5 h-5 transition-transform group-hover:rotate-45" />
                )}
              </div>
            </button>

            {/* Phone - Hidden on mobile */}
            <a 
              href="tel:+1234567890" 
              className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted/50"
            >
              <Phone className="w-4 h-4" />
              <span>+123 456 7890</span>
            </a>

            {/* Book Button - Hidden on mobile */}
            <Link to="/book" className="hidden md:block">
              <Button 
                variant="default" 
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-secondary shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <span className="relative z-10">{t('nav.book')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all animate-slide-up ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/book" 
              onClick={() => setIsMenuOpen(false)} 
              className="mt-2 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <Button variant="default" className="w-full bg-gradient-to-r from-primary to-secondary" size="lg">
                {t('nav.book')}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

