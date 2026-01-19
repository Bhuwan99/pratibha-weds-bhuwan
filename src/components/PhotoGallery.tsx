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

import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

// =====================================================
// 🖼️ GALLERY IMAGES - Replace these with your photos!
// =====================================================
const GALLERY_IMAGES = [
  { id: 1, src: gallery1, alt: 'Couple Photo 1' },
  { id: 2, src: gallery2, alt: 'Couple Photo 2' },
  { id: 3, src: gallery3, alt: 'Couple Photo 3' },
  { id: 4, src: gallery4, alt: 'Couple Photo 4' },
  { id: 6, src: gallery6, alt: 'Couple Photo 6' },
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

  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'center',
      containScroll: false,
      dragFree: true,
      slidesToScroll: 1,
      watchDrag: true,
      axis: 'x',
      skipSnaps: false,
    },
    [autoplayPlugin.current]
  );

  // Restart autoplay after manual interaction stops
  useEffect(() => {
    if (!emblaApi) return;

    let interactionTimeout: NodeJS.Timeout;

    const handlePointerDown = () => {
      autoplayPlugin.current?.stop();
      clearTimeout(interactionTimeout);
    };

    const handlePointerUp = () => {
      clearTimeout(interactionTimeout);
      interactionTimeout = setTimeout(() => {
        autoplayPlugin.current?.play();
      }, 2000);
    };

    emblaApi.on('pointerDown', handlePointerDown);
    emblaApi.on('pointerUp', handlePointerUp);

    return () => {
      clearTimeout(interactionTimeout);
      emblaApi.off('pointerDown', handlePointerDown);
      emblaApi.off('pointerUp', handlePointerUp);
    };
  }, [emblaApi]);

  // Save to localStorage whenever likes change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(likes));
    } catch (e) {
      console.error('Error saving likes to localStorage:', e);
    }
  }, [likes]);

  // Soft pink, blue, gold colors for confetti
  const triggerConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#E8A4B8', '#8BB8D0', '#D4A853', '#F0C987', '#B8D4E3'],
    });
  };

  const handleLike = useCallback((photoId: number) => {
    const currentLike = likes[photoId];
    const isFirstLike = !currentLike?.liked;

    // Trigger heart animation
    setAnimatingHeart(photoId);
    setTimeout(() => setAnimatingHeart(null), 400);

    // Show confetti on every click
    triggerConfetti();

    if (isFirstLike) {
      // First time liking - increment count
      setLikes(prev => ({
        ...prev,
        [photoId]: {
          liked: true,
          count: (prev[photoId]?.count || 0) + 1,
        },
      }));
    }
    // If already liked, just bounce animation and confetti (no count change)
  }, [likes]);

  return (
    <div className="w-full overflow-hidden relative z-20" style={{ touchAction: 'pan-y pinch-zoom' }}>
      <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing" style={{ touchAction: 'pan-x pan-y' }}>
        <div className="flex">
          {GALLERY_IMAGES.map((image) => {
            const photoLike = likes[image.id] || { liked: false, count: 0 };
            const isLiked = photoLike.liked;

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
                    decoding="async"
                    fetchPriority="low"
                  />
                  
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Heart button */}
                  <div className="absolute bottom-4 left-4">
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
