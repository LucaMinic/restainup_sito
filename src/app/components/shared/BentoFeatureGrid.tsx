import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { cn } from '../ui/utils';

// Variante 'bento': il primo elemento diventa il tile grande/scuro, gli altri
// due si dispongono accanto, più piccoli e chiari.
// Variante 'equal': tre card affiancate con lo stesso peso visivo, senza sfondi scuri.
export function BentoFeatureGrid({
  items,
  icons,
  images,
  visuals,
  variant = 'bento',
}: {
  items: { title: string; text: string }[];
  icons: LucideIcon[];
  /** ID Picsum per il tile grande, allineati per indice (opzionale: senza, resta sfondo pieno). */
  images?: (number | undefined)[];
  /** Grafica custom per il tile grande, allineata per indice: ha priorità su `images`. */
  visuals?: (ReactNode | undefined)[];
  variant?: 'bento' | 'equal';
}) {
  return (
    <div className={cn('grid gap-5', variant === 'bento' ? 'md:grid-cols-3 md:grid-rows-2' : 'md:grid-cols-3')}>
      {items.map((item, index) => {
        const featured = variant === 'bento' && index === 0;
        const Icon = icons[index] ?? icons[0];
        const photoId = images?.[index];
        const visual = visuals?.[index];

        return (
          <RevealOnScroll
            key={item.title}
            delay={index * 0.08}
            className={cn(featured && 'md:col-span-2 md:row-span-2')}
          >
            <div
              className={cn(
                'relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-2xl p-8 transition-all duration-300 ease-out',
                featured ? 'text-background' : 'border border-border bg-white p-6',
                variant === 'equal' &&
                  'group hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10',
              )}
            >
              {variant === 'equal' && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-primary/0 blur-2xl transition-colors duration-500 group-hover:bg-primary/25"
                />
              )}
              {featured &&
                (visual !== undefined ? (
                  <>
                    <div className="absolute inset-0 bg-ink" />
                    {visual}
                  </>
                ) : photoId !== undefined ? (
                  <>
                    <img
                      src={`https://picsum.photos/id/${photoId}/1200/900`}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-ink" />
                    <Icon
                      className="pointer-events-none absolute -right-6 -bottom-6 size-40 text-background/5"
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                  </>
                ))}
              <span
                className={cn(
                  'relative flex items-center justify-center rounded-lg transition-all duration-300',
                  featured ? 'size-12 bg-background/10' : 'size-10 bg-accent',
                  variant === 'equal' && 'group-hover:scale-110 group-hover:bg-primary',
                )}
              >
                <Icon
                  className={cn(
                    'transition-colors duration-300',
                    featured ? 'size-6 text-primary' : 'size-5 text-ink',
                    variant === 'equal' && 'group-hover:text-primary-foreground',
                  )}
                />
              </span>
              <div className="relative">
                <h3 className={cn(featured && 'text-background', featured ? 'text-2xl' : undefined)}>
                  {item.title}
                </h3>
                <p className={cn('mt-2', featured ? 'text-background/70' : 'text-muted-foreground')}>
                  {item.text}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        );
      })}
    </div>
  );
}
