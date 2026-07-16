import type { LucideIcon } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { cn } from '../ui/utils';

// Pensata per esattamente 3 elementi: il primo diventa il tile grande/scuro,
// gli altri due si dispongono accanto, più piccoli e chiari (schema bento).
export function BentoFeatureGrid({
  items,
  icons,
  images,
}: {
  items: { title: string; text: string }[];
  icons: LucideIcon[];
  /** ID Picsum per il tile grande, allineati per indice (opzionale: senza, resta sfondo pieno). */
  images?: (number | undefined)[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-3 md:grid-rows-2">
      {items.map((item, index) => {
        const featured = index === 0;
        const Icon = icons[index] ?? icons[0];
        const photoId = images?.[index];

        return (
          <RevealOnScroll
            key={item.title}
            delay={index * 0.08}
            className={cn(featured && 'md:col-span-2 md:row-span-2')}
          >
            <div
              className={cn(
                'relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-2xl p-8',
                featured ? 'text-background' : 'border border-border bg-white p-6',
              )}
            >
              {featured &&
                (photoId !== undefined ? (
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
                  'relative flex items-center justify-center rounded-lg',
                  featured ? 'size-12 bg-background/10' : 'size-10 bg-accent',
                )}
              >
                <Icon className={cn(featured ? 'size-6 text-primary' : 'size-5 text-ink')} />
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
