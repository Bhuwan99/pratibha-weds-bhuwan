import { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WEDDING_DATE = new Date('2026-02-08T00:00:00');

// Soft pink, blue, gold colors for confetti
const CONFETTI_COLORS = ['#E8A4B8', '#8BB8D0', '#D4A853', '#F0C987', '#B8D4E3'];

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
      particleCount: 40,
      spread: 70,
      origin: { y: 0.6 },
      colors: CONFETTI_COLORS,
    });

    // Side bursts
    setTimeout(() => {
      confetti({
        particleCount: 25,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: CONFETTI_COLORS,
      });
      confetti({
        particleCount: 25,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: CONFETTI_COLORS,
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
      aria-label="Tap to celebrate! Countdown to wedding"
    >
      {/* Sleek countdown container */}
      <div className="countdown-bounce">
        <div className="countdown-sleek countdown-pulse">
          <div className="flex justify-center items-center gap-2 md:gap-3">
            <div className="countdown-unit-sleek">
              <span className="countdown-number-sleek" style={{ fontFamily: "'Lora', serif" }}>
                {formatNumber(timeLeft.days)}
              </span>
              <span className="countdown-label-sleek" style={{ fontFamily: "'Lora', serif" }}>Days</span>
            </div>
            
            <span className="countdown-separator">:</span>
            
            <div className="countdown-unit-sleek">
              <span className="countdown-number-sleek" style={{ fontFamily: "'Lora', serif" }}>
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="countdown-label-sleek" style={{ fontFamily: "'Lora', serif" }}>Hours</span>
            </div>
            
            <span className="countdown-separator">:</span>
            
            <div className="countdown-unit-sleek">
              <span className="countdown-number-sleek" style={{ fontFamily: "'Lora', serif" }}>
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="countdown-label-sleek" style={{ fontFamily: "'Lora', serif" }}>Mins</span>
            </div>
            
            <span className="countdown-separator">:</span>
            
            <div className="countdown-unit-sleek">
              <span className="countdown-number-sleek" style={{ fontFamily: "'Lora', serif" }}>
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="countdown-label-sleek" style={{ fontFamily: "'Lora', serif" }}>Secs</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};
