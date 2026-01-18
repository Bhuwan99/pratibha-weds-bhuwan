import { HeroSection } from '@/components/HeroSection';
import { MeetTheCoupleSection } from '@/components/MeetTheCoupleSection';
import { EventsSection } from '@/components/EventsSection';
import { GallerySection } from '@/components/GallerySection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MeetTheCoupleSection />
      <EventsSection />
      <GallerySection />
      <Footer />
    </main>
  );
};

export default Index;
