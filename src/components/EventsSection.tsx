import { EventCard } from './EventCard';
import eventsBackground from '@/assets/couple-2.jpg';

export const EventsSection = () => {
  return (
    <section 
      className="section-bg py-12 md:py-16 px-4"
      style={{ backgroundImage: `url(${eventsBackground})` }}
    >
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-8">
          <span className="section-emoji">🎉</span>
          <h2 className="section-title">Events</h2>
        </div>
        
        {/* Event cards */}
        <div className="space-y-6">
          {/* 
            ============================================
            📍 VENUE DETAILS - Replace with actual venue info!
            ============================================
          */}
          <EventCard
            emoji="🎶"
            title="Tilak & Sangeet"
            date="5th February 2026"
            description="Naachna gaana aur khushiyan! 💃🕺"
            venueName="Grand Celebration Hall"
            venueAddress="123 Wedding Avenue, Sector 21, New Delhi, 110001"
            delay="0.1"
          />
          
          <EventCard
            emoji="💍"
            title="Wedding"
            date="8th February 2026"
            description="Shaadi ka din! ❤️"
            venueName="Royal Palace Gardens"
            venueAddress="456 Marriage Lane, Civil Lines, New Delhi, 110054"
            delay="0.2"
          />
        </div>
        
        {/* Decorative divider */}
        <div className="ornate-divider">
          <span className="text-xl">✨</span>
        </div>
      </div>
    </section>
  );
};
