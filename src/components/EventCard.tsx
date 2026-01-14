import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

interface EventCardProps {
  emoji: string;
  title: string;
  date: string;
  description?: string;
  venueName: string;
  venueAddress: string;
  delay?: string;
}

export const EventCard = ({ 
  emoji, 
  title, 
  date, 
  description, 
  venueName,
  venueAddress,
  delay = '0' 
}: EventCardProps) => {
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

  const handleGetDirections = () => {
    const encodedAddress = encodeURIComponent(venueAddress);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      ref={cardRef}
      className={`event-card ${isVisible ? 'slide-in-view' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Event Header */}
      <div className="flex items-start gap-4">
        <span className="text-4xl md:text-5xl" role="img" aria-label={title}>
          {emoji}
        </span>
        <div className="flex-1">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-primary font-medium text-base md:text-lg mt-1">
            {date}
          </p>
          {description && (
            <p className="text-muted-foreground text-sm mt-2">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Venue Details */}
      <div className="venue-card">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-medium text-foreground text-sm md:text-base">
              {venueName}
            </p>
            <p className="text-muted-foreground text-xs md:text-sm mt-1">
              {venueAddress}
            </p>
          </div>
        </div>
        
        {/* Get Directions Button */}
        <button 
          onClick={handleGetDirections}
          className="directions-btn mt-4 w-full justify-center"
          aria-label={`Get directions to ${venueName}`}
        >
          <MapPin className="w-4 h-4" />
          <span>📍 Get Directions</span>
        </button>
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
