import { useState, useEffect, useRef, useCallback } from 'react';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// =====================================================
// 📸 HOW TO REPLACE IMAGES:
// =====================================================
// 1. Add your images to the src/assets/ folder
// 2. Import them at the top of this file:
//    import myPhoto from '@/assets/my-photo.jpg';
// 3. Replace the images in the GALLERY_IMAGES array below
// =====================================================

import couple1 from '@/assets/couple-1.jpg';
import couple2 from '@/assets/couple-2.jpg';
import couple3 from '@/assets/couple-3.jpg';
import couple4 from '@/assets/couple-4.jpg';
import couple5 from '@/assets/couple-5.jpg';
import couple6 from '@/assets/couple-6.jpg';

// =====================================================
// 🖼️ GALLERY IMAGES - Replace these with your photos!
// =====================================================
const GALLERY_IMAGES = [
  { id: 1, src: couple1, alt: 'Couple Photo 1' },
  { id: 2, src: couple2, alt: 'Couple Photo 2' },
  { id: 3, src: couple3, alt: 'Couple Photo 3' },
  { id: 4, src: couple4, alt: 'Couple Photo 4' },
  { id: 5, src: couple5, alt: 'Couple Photo 5' },
  { id: 6, src: couple6, alt: 'Couple Photo 6' },
];

const STORAGE_KEY = 'wedding_photo_likes';

interface PhotoLikes {
  [key: number]: {
    liked: boolean;
    count: number;
  };
}

const getInitialLikes = (): PhotoLikes => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error reading likes from localStorage:', e);
  }
  
  // Initialize with random counts for demo
  const initial: PhotoLikes = {};
  GALLERY_IMAGES.forEach((img) => {
    initial[img.id] = {
      liked: false,
      count: Math.floor(Math.random() * 50) + 10,
    };
  });
  return initial;
};

export const PhotoGallery = () => {
  const [likes, setLikes] = useState<PhotoLikes>(getInitialLikes);
  const [animatingHeart, setAnimatingHeart] = useState<number | null>(null);
  const [animatingCount, setAnimatingCount] = useState<number | null>(null);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'center',
      containScroll: false,
    },
    [autoplayPlugin.current]
  );

  // Save to localStorage whenever likes change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(likes));
    } catch (e) {
      console.error('Error saving likes to localStorage:', e);
    }
  }, [likes]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#D4A853', '#C17B7B', '#E8A4A4', '#FF7F50', '#FFD700'],
    });
  };

  const handleLike = useCallback((photoId: number) => {
    const currentLike = likes[photoId];
    const isFirstLike = !currentLike?.liked;

    // Trigger heart animation
    setAnimatingHeart(photoId);
    setTimeout(() => setAnimatingHeart(null), 400);

    if (isFirstLike) {
      // First time liking - show confetti and increment
      triggerConfetti();
      setAnimatingCount(photoId);
      setTimeout(() => setAnimatingCount(null), 300);

      setLikes(prev => ({
        ...prev,
        [photoId]: {
          liked: true,
          count: (prev[photoId]?.count || 0) + 1,
        },
      }));
    }
    // If already liked, just bounce animation (no count change)
  }, [likes]);

  return (
    <div className="w-full overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden touch-pan-x">
        <div className="flex">
          {GALLERY_IMAGES.map((image) => {
            const photoLike = likes[image.id] || { liked: false, count: 0 };
            const isLiked = photoLike.liked;
            const likeCount = photoLike.count;

            return (
              <div
                key={image.id}
                className="flex-none w-[85%] md:w-[60%] lg:w-[45%] px-2 md:px-4"
              >
                <div className="gallery-image-container aspect-[3/4] relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Heart button and count */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <button
                      onClick={() => handleLike(image.id)}
                      className={`heart-button ${isLiked ? 'heart-liked' : ''} ${
                        animatingHeart === image.id ? 'heart-bounce' : ''
                      }`}
                      aria-label={isLiked ? 'Liked' : 'Like this photo'}
                    >
                      <Heart
                        className={`w-7 h-7 transition-colors ${
                          isLiked ? 'text-white fill-white' : 'text-rose'
                        }`}
                      />
                    </button>
                    
                    <div 
                      className={`flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full ${
                        animatingCount === image.id ? 'count-pop' : ''
                      }`}
                    >
                      <Heart className="w-4 h-4 text-rose fill-rose" />
                      <span className="font-medium text-foreground">
                        {likeCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Scroll indicator dots */}
      <div className="flex justify-center gap-2 mt-4">
        {GALLERY_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary/60 transition-colors"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
