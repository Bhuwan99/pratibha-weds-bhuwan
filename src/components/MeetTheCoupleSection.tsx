import { useEffect, useRef, useState } from 'react';
import couple4 from '@/assets/background-3.jpg';
import bridePhoto from '@/assets/meet-the-bride.jpg';
import groomPhoto from '@/assets/meet-the-groom.jpg';

interface PersonCardProps {
  name: string;
  role: string;
  emoji: string;
  parents?: string;
  delay?: string;
  photo?: string;
  flipPhoto?: boolean;
}

const PersonCard = ({ name, role, emoji, parents, delay = '0', photo, flipPhoto = false }: PersonCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`event-card ${isVisible ? 'slide-in-view' : 'opacity-0'} overflow-hidden`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col items-center text-center">
        {/* Photo */}
        {photo && (
          <div className="w-full mb-4 rounded-xl overflow-hidden aspect-[3/4] max-w-[280px] mx-auto">
            <img
              src={photo}
              alt={name}
              className={`w-full h-full object-cover ${flipPhoto ? 'scale-x-[-1]' : ''}`}
              loading="lazy"
            />
          </div>
        )}
        
        {/* Emoji */}
        <div className="text-5xl md:text-6xl mb-4" role="img" aria-label={role}>
          {emoji}
        </div>
        
        {/* Name */}
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4" spellCheck={false}>
          {name}
        </h3>
        
        {/* Parents */}
        {parents && (
          <p className="text-muted-foreground text-sm md:text-base mt-2 leading-relaxed">
            {parents}
          </p>
        )}
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div 
          className="absolute -top-8 -right-8 w-16 h-16 rotate-45"
          style={{ background: 'var(--gradient-festive)', opacity: 0.2 }}
        />
      </div>
    </div>
  );
};

export const MeetTheCoupleSection = () => {
  return (
    <section
      id="meet-the-couple"
      className="section-bg curved-finish py-12 md:py-16 px-4"
      style={{ backgroundImage: `url(${couple4})` }}
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-8">
          <span className="section-emoji">👫</span>
          <h2 className="section-title">Meet the Couple</h2>
        </div>
        
        {/* Bride and Groom Cards */}
        {/* Mobile: flex-col (stacked, bride first) | Desktop: flex-row (side by side) */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Bride - appears first on mobile, left on desktop */}
          <div className="flex-1">
            <PersonCard
              name="Pratibha"
              role="The Bride"
              emoji="👰"
              parents="Daughter of Smt Poonam - Shri Shreepal Jaiswal"
              delay="0.1"
              photo={bridePhoto}
            />
          </div>
          
          {/* Groom - appears second on mobile, right on desktop */}
          <div className="flex-1">
            <PersonCard
              name="Bhuwan"
              role="The Groom"
              emoji="🤵"
              parents="Son of Smt Rekha - Shri Ashok Kumar Agarwal"
              delay="0.2"
              photo={groomPhoto}
            />
          </div>
        </div>
        
        {/* Decorative divider */}
        <div className="ornate-divider mt-8">
          <span className="text-xl">💕</span>
        </div>
      </div>
    </section>
  );
};