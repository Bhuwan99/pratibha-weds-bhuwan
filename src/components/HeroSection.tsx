import { CountdownTimer } from './CountdownTimer';
import heroImage from '@/assets/couple-1.jpg';

export const HeroSection = () => {
  return (
    <section 
      className="hero-bg flex flex-col items-center justify-center px-4 py-12 md:py-16"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Content wrapper - sits above the overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full">
        {/* Logo */}
        <div className="text-center mb-6 fade-in-up">
          <h1 className="logo-text text-5xl md:text-7xl lg:text-8xl text-gold-shimmer">
            PraBhu
          </h1>
        </div>
        
        {/* Sanskrit Line */}
        <div className="text-center mb-2 fade-in-up delay-100">
          <p className="font-display text-lg md:text-2xl text-foreground/90 tracking-wide">
            परस्परं समर्पितौ
          </p>
        </div>
        
        {/* Hindi Meaning */}
        <div className="text-center mb-10 fade-in-up delay-200">
          <p className="text-sm md:text-base text-muted-foreground font-light">
            एक-दूसरे को समर्पित
          </p>
        </div>
        
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-10 fade-in-up delay-200">
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <span className="text-2xl md:text-3xl">💍</span>
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        
        {/* Wedding Date */}
        <p className="text-center text-foreground font-display font-medium text-xl md:text-2xl mb-8 fade-in-up delay-300">
          8th February 2026
        </p>
        
        {/* Countdown */}
        <div className="w-full max-w-lg fade-in-up delay-400">
          <CountdownTimer />
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-12 flex flex-col items-center text-muted-foreground animate-bounce">
          <span className="text-sm mb-2">Scroll karein</span>
          <span className="text-2xl">👇</span>
        </div>
      </div>
    </section>
  );
};
