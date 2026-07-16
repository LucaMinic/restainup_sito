import { Image as ImageIcon, PlayCircle } from 'lucide-react';
import { cn } from '../ui/utils';

function seedFromLabel(label: string) {
  return label.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
}

export function PlaceholderMedia({
  label,
  type = 'image',
  photoId,
  className,
}: {
  label: string;
  type?: 'image' | 'video' | 'logo';
  /** ID Picsum scelto a mano per coerenza tematica con la sezione (vedi data/*.ts). */
  photoId?: number;
  className?: string;
}) {
  if (type === 'logo') {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-ink/20 bg-accent/60 text-ink/35',
          className,
        )}
      >
        <ImageIcon className="size-8" strokeWidth={1.5} />
        <span className="px-4 text-center font-mono text-[11px] uppercase tracking-wide">{label}</span>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden bg-accent', className)}>
      <img
        src={
          photoId !== undefined
            ? `https://picsum.photos/id/${photoId}/900/700`
            : `https://picsum.photos/seed/${seedFromLabel(label)}/900/700`
        }
        alt=""
        className="h-full w-full object-cover"
        loading="lazy"
      />
      {type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink/25">
          <span className="flex size-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <PlayCircle className="size-7 text-ink" strokeWidth={1.5} />
          </span>
        </div>
      )}
      <span className="absolute bottom-2 left-2 rounded bg-ink/70 px-2 py-0.5 font-mono text-[10px] text-white">
        {label}
      </span>
    </div>
  );
}
