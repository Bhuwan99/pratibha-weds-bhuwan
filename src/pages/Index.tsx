import { HeroSection } from '@/components/HeroSection';
import { EventsSection } from '@/components/EventsSection';
import { GallerySection } from '@/components/GallerySection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EventsSection />
      <GallerySection />
      <Footer />
    </main>
  );
};

export default Index;
