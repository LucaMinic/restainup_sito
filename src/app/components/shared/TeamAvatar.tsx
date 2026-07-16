import { cn } from '../ui/utils';

// Avatar a iniziali invece di una foto: per il team non usiamo foto stock generiche
// (rischiano di sembrare persone vere non collegate all'azienda). Da sostituire con foto reali.
const palette = ['bg-ink text-background', 'bg-accent text-ink', 'bg-secondary text-ink', 'bg-primary text-ink'];

export function TeamAvatar({
  name,
  index = 0,
  className,
}: {
  name: string;
  index?: number;
  className?: string;
}) {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        'flex items-center justify-center font-display text-3xl font-bold',
        palette[index % palette.length],
        className,
      )}
    >
      {initials}
    </div>
  );
}
