import { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WEDDING_DATE = new Date('2026-02-08T00:00:00');

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  const calculateTimeLeft = useCallback(() => {
    const difference = WEDDING_DATE.getTime() - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, []);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const triggerConfetti = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);

    // Center burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4A853', '#E8B86D', '#C17B7B', '#E8A4A4', '#FF7F50'],
    });

    // Side bursts
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#D4A853', '#E8B86D', '#C17B7B'],
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#D4A853', '#E8B86D', '#C17B7B'],
      });
    }, 200);
  };

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <button
      onClick={triggerConfetti}
      className={`w-full cursor-pointer transition-transform duration-200 active:scale-95 ${
        isAnimating ? 'scale-105' : ''
      }`}
    >
      <div className="card-festive countdown-pulse p-6 md:p-8">
        <p className="text-center text-muted-foreground text-sm mb-4 font-medium">
          ✨ Tap to celebrate! ✨
        </p>
        
        <div className="flex justify-center gap-3 md:gap-4">
          <div className="countdown-box">
            <span className="font-display text-2xl md:text-4xl font-bold text-gold-shimmer">
              {formatNumber(timeLeft.days)}
            </span>
            <span className="text-xs md:text-sm text-muted-foreground mt-1">Days</span>
          </div>
          
          <span className="font-display text-2xl md:text-4xl font-bold text-primary self-center">:</span>
          
          <div className="countdown-box">
            <span className="font-display text-2xl md:text-4xl font-bold text-gold-shimmer">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-xs md:text-sm text-muted-foreground mt-1">Hours</span>
          </div>
          
          <span className="font-display text-2xl md:text-4xl font-bold text-primary self-center">:</span>
          
          <div className="countdown-box">
            <span className="font-display text-2xl md:text-4xl font-bold text-gold-shimmer">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-xs md:text-sm text-muted-foreground mt-1">Mins</span>
          </div>
          
          <span className="font-display text-2xl md:text-4xl font-bold text-primary self-center">:</span>
          
          <div className="countdown-box">
            <span className="font-display text-2xl md:text-4xl font-bold text-gold-shimmer">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="text-xs md:text-sm text-muted-foreground mt-1">Secs</span>
          </div>
        </div>
      </div>
    </button>
  );
};
