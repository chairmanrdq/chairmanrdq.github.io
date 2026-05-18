"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: { src: string; alt: string; caption?: string; dataAiHint?: string }[];
  interval?: number;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, interval = 5000, className }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, goToNext]);

  if (!images || images.length === 0) {
    return (
      <div
        className={cn(
          'relative flex h-64 w-full items-center justify-center rounded-none bg-muted md:h-96',
          className,
        )}
      >
        <p className="text-muted-foreground text-sm">Lab photos will appear here.</p>
      </div>
    );
  }

  const currentAlt = images[currentImageIndex]?.alt ?? 'Lab photo';
  const currentCaption = images[currentImageIndex]?.caption;

  return (
    <div className="space-y-2">
      <div
        className={cn(
          'relative h-64 w-full overflow-hidden rounded-none border border-border shadow-xl group md:h-96',
          className,
        )}
        role="region"
        aria-roledescription="carousel"
        aria-label="Lab photo highlights"
      >
        <p className="sr-only" aria-live="polite">
          Slide {currentImageIndex + 1} of {images.length}: {currentAlt}
        </p>
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={cn(
              'absolute top-0 left-0 h-full w-full transition-opacity duration-1000 ease-in-out',
              index === currentImageIndex ? 'z-10 opacity-100' : 'z-0 opacity-0',
            )}
            aria-hidden={index !== currentImageIndex}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="rounded-none"
              data-ai-hint={image.dataAiHint}
              priority={index === 0}
              loading={index === 0 ? undefined : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-50" />
          </div>
        ))}

        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full bg-background/50 p-2 text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-background/80"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute top-1/2 right-2 z-20 -translate-y-1/2 rounded-full bg-background/50 p-2 text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-background/80"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    'h-2 w-2 rounded-full transition-all duration-300',
                    index === currentImageIndex
                      ? 'w-4 bg-primary'
                      : 'bg-background/50 hover:bg-background/80',
                  )}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {currentCaption ? (
        <p className="px-2 text-center text-sm text-muted-foreground" aria-live="polite">
          {currentCaption}
        </p>
      ) : null}
    </div>
  );
};

export default ImageCarousel;
