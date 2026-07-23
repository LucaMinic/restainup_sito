export function WebAppShowcase() {
  return (
    <div className="pointer-events-none absolute -right-6 -bottom-10 w-64 rotate-[5deg]" aria-hidden="true">
      <div className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted/60 px-3 py-2">
          <span className="size-2 rounded-full bg-ink/15" />
          <span className="size-2 rounded-full bg-ink/15" />
          <span className="size-2 rounded-full bg-ink/15" />
        </div>
        <div className="space-y-2.5 p-4">
          <div className="h-3 w-2/3 rounded-full bg-lime" />
          <div className="h-2 w-full rounded-full bg-ink/10" />
          <div className="h-2 w-5/6 rounded-full bg-ink/10" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-10 rounded-md bg-accent" />
            <div className="h-10 rounded-md bg-accent" />
            <div className="h-10 rounded-md bg-lime/40" />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-9 -left-9 w-28 -rotate-[12deg] overflow-hidden rounded-2xl border-4 border-ink bg-white shadow-2xl">
        <div className="space-y-1.5 p-2.5">
          <div className="h-2 w-1/2 rounded-full bg-ink/20" />
          <div className="h-9 w-full rounded-md bg-lime" />
          <div className="h-2 w-full rounded-full bg-ink/10" />
          <div className="h-2 w-2/3 rounded-full bg-ink/10" />
        </div>
      </div>
    </div>
  );
}
