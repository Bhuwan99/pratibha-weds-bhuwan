import { CountdownTimer } from './CountdownTimer';

// =====================================================
// 👫 COUPLE NAMES - Replace with actual names!
// =====================================================
const BRIDE_NAME = "Priya";
const GROOM_NAME = "Rahul";
// =====================================================

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-16">
      {/* Decorative top element */}
      <div className="text-4xl md:text-5xl mb-4 animate-float">
        💍
      </div>
      
      {/* Names */}
      <div className="text-center mb-8 fade-in-up">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gold-shimmer mb-2">
          {BRIDE_NAME}
        </h1>
        <div className="flex items-center justify-center gap-4 my-3">
          <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <span className="text-2xl md:text-3xl">💕</span>
          <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gold-shimmer">
          {GROOM_NAME}
        </h1>
      </div>
      
      {/* Wedding announcement */}
      <p className="text-center text-muted-foreground text-lg md:text-xl mb-2 fade-in-up delay-100">
        Hum shaadi kar rahe hain! 🎊
      </p>
      <p className="text-center text-foreground font-medium text-xl md:text-2xl mb-8 fade-in-up delay-200">
        8th February 2026
      </p>
      
      {/* Countdown */}
      <div className="w-full max-w-lg fade-in-up delay-300">
        <CountdownTimer />
      </div>
      
      {/* Scroll indicator */}
      <div className="mt-12 flex flex-col items-center text-muted-foreground animate-bounce">
        <span className="text-sm mb-2">Scroll karein</span>
        <span className="text-2xl">👇</span>
      </div>
    </section>
  );
};
