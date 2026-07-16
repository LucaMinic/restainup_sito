import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from '../ui/carousel';
import { PlaceholderMedia } from '../shared/PlaceholderMedia';
import { cn } from '../ui/utils';

const AUTOROTATE_MS = 5000;

// Un'immagine rappresentativa per ciascuna delle 3 aree di intervento.
const slides = [
  { title: 'Sviluppo Web & App', photoId: 1, label: '{{FOTO_SVILUPPO_WEB_APP}}' },
  { title: 'Innovazione Tecnologica & R&D', photoId: 36, label: '{{FOTO_INNOVAZIONE_RD}}' },
  { title: 'Consulenza Digitale', photoId: 22, label: '{{FOTO_CONSULENZA_DIGITALE}}' },
];

export function ServicesImageSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
    api.on('select', () => setSelected(api.selectedScrollSnap()));
  }, [api]);

  // Riparte da capo a ogni cambio slide, sia automatico che manuale (click, frecce, drag).
  useEffect(() => {
    if (!api || prefersReducedMotion) return;
    const interval = setInterval(() => api.scrollNext(), AUTOROTATE_MS);
    return () => clearInterval(interval);
  }, [api, prefersReducedMotion, selected]);

  return (
    <div>
      <Carousel opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.title}>
              <div className="relative overflow-hidden rounded-2xl">
                <PlaceholderMedia label={slide.label} photoId={slide.photoId} className="aspect-[21/9] w-full" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
                  <p className="font-display text-lg text-background">{slide.title}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3" />
        <CarouselNext className="right-3" />
      </Carousel>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Vai alla slide ${index + 1}: ${slide.title}`}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              'h-1.5 rounded-full transition-all',
              index === selected ? 'w-6 bg-primary' : 'w-1.5 bg-ink/20',
            )}
          />
        ))}
      </div>
    </div>
  );
}
