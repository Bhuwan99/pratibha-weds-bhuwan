import { EventCard } from './EventCard';

export const EventsSection = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-lg mx-auto">
        {/* Section title */}
        <div className="text-center mb-8">
          <span className="section-emoji">🎉</span>
          <h2 className="section-title">Events</h2>
        </div>
        
        {/* Event cards */}
        <div className="space-y-4">
          <EventCard
            emoji="🎶"
            title="Tilak & Sangeet"
            date="5th February 2026"
            description="Naachna gaana aur khushiyan! 💃🕺"
            delay="0.1"
          />
          
          <EventCard
            emoji="💍"
            title="Wedding"
            date="8th February 2026"
            description="Shaadi ka din! ❤️"
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
