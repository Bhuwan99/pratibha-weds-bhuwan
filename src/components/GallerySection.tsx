import { PhotoGallery } from './PhotoGallery';
import galleryBackground from '@/assets/couple-3.jpg';

export const GallerySection = () => {
  return (
    <section 
      className="section-bg py-12 md:py-16"
      style={{ backgroundImage: `url(${galleryBackground})` }}
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-8 px-4">
          <span className="section-emoji">📸</span>
          <h2 className="section-title">Gallery</h2>
          <p className="text-muted-foreground text-sm mt-2">
            ❤️ Tap to like your favorite photos!
          </p>
        </div>
        
        {/* Photo Gallery */}
        <PhotoGallery />
        
        {/* Decorative divider */}
        <div className="ornate-divider px-4">
          <span className="text-xl">💖</span>
        </div>
      </div>
    </section>
  );
};
