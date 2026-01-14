import { ReactNode } from 'react';

interface EventCardProps {
  emoji: string;
  title: string;
  date: string;
  description?: string;
  delay?: string;
}

export const EventCard = ({ emoji, title, date, description, delay = '0' }: EventCardProps) => {
  return (
    <div 
      className={`event-card fade-in-up`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl md:text-5xl flex-shrink-0 animate-float">
          {emoji}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-primary font-medium text-lg">
            {date}
          </p>
          {description && (
            <p className="text-muted-foreground text-sm mt-2">
              {description}
            </p>
          )}
        </div>
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
