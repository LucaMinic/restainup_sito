import { NavLink } from 'react-router';
import { Button } from '../ui/button';
import { RevealOnScroll } from './RevealOnScroll';

export function DarkCtaBanner({
  title,
  subtitle,
  buttonLabel,
  buttonPath,
}: {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonPath: string;
}) {
  return (
    <section className="bg-ink py-24">
      <RevealOnScroll className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-background">{title}</h2>
        <p className="max-w-xl text-background/70">{subtitle}</p>
        <Button asChild size="lg">
          <NavLink to={buttonPath}>{buttonLabel}</NavLink>
        </Button>
      </RevealOnScroll>
    </section>
  );
}
