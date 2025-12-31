import { Link } from 'react-router-dom';
import logoImage from '@/assets/logo.png';

interface ModernLogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ModernLogo = ({ showText = true, size = 'md' }: ModernLogoProps) => {
  const sizes = {
    sm: { container: 'w-10 h-10', title: 'text-lg', subtext: 'text-[10px]' },
    md: { container: 'w-12 h-12', title: 'text-xl', subtext: 'text-xs' },
    lg: { container: 'w-16 h-16', title: 'text-2xl', subtext: 'text-sm' },
  };

  const s = sizes[size];

  return (
    <Link to="/" className="flex items-center gap-3 group">
      {/* Modern Logo Image with Effects */}
      <div className={`${s.container} relative`}>
        {/* Glow effect background */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse-slow" />
        
        {/* Logo container with border */}
        <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-0.5 group-hover:from-primary/20 group-hover:to-secondary/20 dark:group-hover:from-primary/30 dark:group-hover:to-secondary/30 transition-all duration-500">
          {/* Inner container */}
          <div className="w-full h-full rounded-[14px] bg-background/80 dark:bg-background/60 backdrop-blur-sm overflow-hidden group-hover:bg-background/90 dark:group-hover:bg-background/80 transition-all duration-500">
            {/* Logo Image */}
            <img 
              src={logoImage} 
              alt="Al-Bader Dental Clinic Logo" 
              className="w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Shine effect overlay */}
            <div className="absolute inset-0 overflow-hidden rounded-[14px]">
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent skew-x-12 group-hover:animate-shine" />
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-300 shadow-lg shadow-primary/50" />
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-br from-secondary to-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-300 shadow-lg shadow-secondary/50" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Text */}
      {showText && (
        <div className="hidden sm:block">
          <h1 className={`font-serif ${s.title} font-semibold text-foreground group-hover:text-primary transition-colors duration-300`}>
            <span className="bg-gradient-to-r from-foreground to-foreground group-hover:from-primary group-hover:to-secondary bg-clip-text group-hover:text-transparent transition-all duration-500">
              Al-Bader
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
