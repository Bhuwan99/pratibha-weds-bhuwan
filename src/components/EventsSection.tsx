import { EventCard } from './EventCard';
import eventsBackground from '@/assets/background-1.jpg';

export const EventsSection = () => {
  return (
    <section 
      className="section-bg curved-finish py-12 md:py-16 px-4"
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
            venueName="Ramayan Banquet, The Meridian"
            venueAddress="4TH FLOOR, opposite Big Bazaar, Baguiati, Kolkata - 700059"
            mapsUrl="https://maps.app.goo.gl/Ad9vUUMzNpoxCFsNA"
            delay="0.1"
          />
          
          <EventCard
            emoji="💍"
            title="Wedding"
            date="8th February 2026"
            description="Shaadi ka din! ❤️"
            venueName="Barsana Banquet"
            venueAddress="SHRACHI SYNTHESIS BUSINESS PARK, Action Area I, Newtown, New Town, Kolkata - 700161"
            mapsUrl="https://maps.app.goo.gl/bXYsENMJ7XnWXWdp9"
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
