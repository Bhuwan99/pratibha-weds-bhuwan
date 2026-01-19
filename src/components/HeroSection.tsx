import { CountdownTimer } from './CountdownTimer';
import { useEffect, useState } from 'react';
import heroImage from '@/assets/hero.jpg';
import prabhuLogoHero from '@/assets/prabhu-logo-hero.png';

export const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section 
      className="hero-bg flex flex-col items-center justify-center px-4 py-12 md:py-16 relative"
      style={{ 
        backgroundImage: imageLoaded ? `url(${heroImage})` : 'none',
        backgroundPosition: 'calc(50% - 10px) center',
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* PraBhu Logo at Top - Outside centered content */}
      <div 
        className="absolute top-12 md:top-6 lg:top-8 z-20 fade-in-up"
        style={{ 
          left: 'calc(50% - 40px)',
        }}
      >
        <img 
          src={prabhuLogoHero} 
          alt="PraBhu Logo" 
          className="h-20 md:h-28 lg:h-32 w-auto"
          style={{ 
            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4))',
            opacity: 0.95
          }}
        />
      </div>

      {/* Content wrapper - sits above the overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full">
        {/* Pratibha Weds Bhuwan */}
        <div className="text-center mb-8 fade-in-up">
          <div className="text-white" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2)' }}>
            <div className="text-5xl md:text-7xl lg:text-8xl font-light mb-2" style={{ fontFamily: "'Lora', serif", letterSpacing: '0.05em', lineHeight: '1.3', fontWeight: '300' }}>
              Pratibha
            </div>
            <div className="text-white/90 my-3 text-2xl md:text-3xl lg:text-4xl font-light italic" style={{ fontFamily: "'Lora', serif", letterSpacing: '0.2em', fontWeight: '300' }}>
              weds
            </div>
            <div className="text-5xl md:text-7xl lg:text-8xl font-light mt-2" style={{ fontFamily: "'Lora', serif", letterSpacing: '0.05em', lineHeight: '1.3', fontWeight: '300' }}>
              Bhuwan
            </div>
          </div>
        </div>
        
        {/* Wedding Date */}
        <p className="text-center text-white/95 font-display font-light text-2xl md:text-3xl lg:text-4xl mb-8 fade-in-up delay-200" style={{ fontFamily: "'Lora', serif", letterSpacing: '0.1em', fontWeight: '300', textShadow: '0 2px 6px rgba(0, 0, 0, 0.3)' }}>
          8th February 2026
        </p>
        
        {/* Countdown */}
        <div className="w-full max-w-lg fade-in-up delay-300">
          <CountdownTimer />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 fade-in-up delay-500">
        <a 
          href="#meet-the-couple" 
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300 group"
          aria-label="Scroll down"
        >
          <div className="scroll-indicator">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="group-hover:translate-y-1 transition-transform duration-300"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};
