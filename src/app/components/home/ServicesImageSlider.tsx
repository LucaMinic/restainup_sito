import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from '../ui/carousel';
import { cn } from '../ui/utils';
import { useLanguage } from '../../i18n/LanguageContext';
import type { Language } from '../../i18n/LanguageContext';
import sviluppoWebApp from '../../../assets/Sviluppo Web & App.jpg';
import innovazioneRD from '../../../assets/Innovazione Tecnologica & R&D.jpg';
import consulenzaDigitale from '../../../assets/Consulenza digitale.jpg';

const AUTOROTATE_MS = 5000;

// Un'immagine rappresentativa per ciascuna delle 3 aree di intervento.
const slidesByLang: Record<Language, { title: string; image: string }[]> = {
  it: [
    { title: 'Sviluppo Web & App', image: sviluppoWebApp },
    { title: 'Innovazione Tecnologica', image: innovazioneRD },
    { title: 'Consulenza Digitale', image: consulenzaDigitale },
  ],
  en: [
    { title: 'Web & App Development', image: sviluppoWebApp },
    { title: 'Technology Innovation', image: innovazioneRD },
    { title: 'Digital Consulting', image: consulenzaDigitale },
  ],
};

export function ServicesImageSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const { language } = useLanguage();
  const slides = slidesByLang[language];
  const goToSlideLabel = language === 'en' ? 'Go to slide' : 'Vai alla slide';

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
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="aspect-[21/9] w-full object-cover"
                />
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
            aria-label={`${goToSlideLabel} ${index + 1}: ${slide.title}`}
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
