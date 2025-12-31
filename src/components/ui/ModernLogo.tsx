import { Link } from 'react-router-dom';

interface ModernLogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ModernLogo = ({ showText = true, size = 'md' }: ModernLogoProps) => {
  const sizes = {
    sm: { container: 'w-10 h-10', text: 'text-lg', subtext: 'text-[10px]', title: 'text-lg' },
    md: { container: 'w-12 h-12', text: 'text-xl', subtext: 'text-xs', title: 'text-xl' },
    lg: { container: 'w-16 h-16', text: 'text-2xl', subtext: 'text-sm', title: 'text-2xl' },
  };

  const s = sizes[size];

  return (
    <Link to="/" className="flex items-center gap-3 group">
      {/* Animated Logo */}
      <div className={`${s.container} relative`}>
        {/* Outer ring with gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary opacity-100 group-hover:opacity-90 transition-opacity duration-300 animate-pulse-slow" />
        
        {/* Inner glow */}
        <div className="absolute inset-0.5 rounded-[14px] bg-gradient-to-br from-primary/80 to-secondary/80 blur-sm opacity-50" />
        
        {/* Main background */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-primary/90 shadow-lg group-hover:shadow-primary/40 transition-all duration-500">
          {/* Shine effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine" />
          </div>
        </div>
        
        {/* Logo text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-primary-foreground font-serif ${s.text} font-bold tracking-tight drop-shadow-sm`}>
            AB
          </span>
        </div>

        {/* Floating particles */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-300" />
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-300" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Text */}
      {showText && (
        <div className="hidden sm:block">
          <h1 className={`font-serif ${s.title} font-semibold text-foreground group-hover:text-primary transition-colors duration-300`}>
            <span className="bg-gradient-to-r from-foreground to-foreground group-hover:from-primary group-hover:to-secondary bg-clip-text group-hover:text-transparent transition-all duration-500">
              Al-Babr
            </span>
          </h1>
          <p className={`${s.subtext} text-muted-foreground group-hover:text-primary/70 transition-colors duration-300 tracking-wider uppercase`}>
            Dental Clinic
          </p>
        </div>
      )}
    </Link>
  );
};

export default ModernLogo;
