import { motion, useReducedMotion } from 'motion/react';
import { BrowserFrame } from './BrowserFrame';
import { PlaceholderMedia } from '../shared/PlaceholderMedia';
import { cn } from '../ui/utils';

export function ProjectCard({
  name,
  description,
  url,
  tag,
  image,
  photoId,
  featured = false,
  large = false,
}: {
  name: string;
  description: string;
  url: string;
  tag: string;
  image: string;
  photoId?: number;
  featured?: boolean;
  large?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="group flex h-full flex-col">
      <motion.div
        className={cn('relative', large ? 'flex-1' : undefined)}
        whileHover={prefersReducedMotion ? undefined : { y: -4, rotate: -0.5 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <BrowserFrame url={url} className={large ? 'h-full' : undefined}>
          <PlaceholderMedia
            label={image}
            photoId={photoId}
            className={cn('w-full', large ? 'h-full' : 'aspect-[4/3]')}
          />
        </BrowserFrame>
        {featured && (
          <span className="absolute -top-2 -right-2 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-ink shadow-sm ring-1 ring-border">
            <span className="size-1.5 rounded-full bg-spark" />
            In evidenza
          </span>
        )}
      </motion.div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className={large ? 'text-lg' : 'text-base'}>{name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
          {tag}
        </span>
      </div>
    </div>
  );
}
