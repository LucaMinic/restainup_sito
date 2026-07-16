import type { ReactNode } from 'react';
import { cn } from '../ui/utils';

export function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm', className)}>
      <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
        </div>
        <div className="ml-2 flex-1 truncate rounded border border-border/60 bg-white px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
          {url}
        </div>
      </div>
      <div className="relative flex-1">{children}</div>
    </div>
  );
}
