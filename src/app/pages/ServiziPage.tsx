import { Code2, Sparkles, MessageCircle } from 'lucide-react';
import { serviziContent } from '../data/servizi';
import { SectionEyebrow } from '../components/shared/SectionEyebrow';
import { RevealOnScroll } from '../components/shared/RevealOnScroll';
import { DarkCtaBanner } from '../components/shared/DarkCtaBanner';
import { PlaceholderMedia } from '../components/shared/PlaceholderMedia';

const icons = [Code2, Sparkles, MessageCircle];

export function ServiziPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <RevealOnScroll>
          <SectionEyebrow>{serviziContent.eyebrow}</SectionEyebrow>
          <h1 className="mt-4">{serviziContent.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{serviziContent.intro}</p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <PlaceholderMedia label="{{FOTO_TEAM_AL_LAVORO}}" photoId={180} className="aspect-[4/3] w-full rounded-xl" />
        </RevealOnScroll>
      </section>

      <section className="mx-auto max-w-6xl divide-y divide-border px-6 pb-20">
        {serviziContent.areas.map((area, index) => {
          const Icon = icons[index] ?? Code2;
          return (
            <RevealOnScroll key={area.title} delay={index * 0.06} className="grid gap-6 py-12 md:grid-cols-[minmax(0,240px)_1fr] md:gap-12">
              <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4">
                <span className="flex size-11 items-center justify-center rounded-lg bg-accent">
                  <Icon className="size-5 text-ink" />
                </span>
                <h2 className="md:mt-1">{area.title}</h2>
              </div>
              <p className="max-w-2xl text-muted-foreground">{area.text}</p>
            </RevealOnScroll>
          );
        })}
      </section>

      <DarkCtaBanner
        title={serviziContent.cta.title}
        subtitle={serviziContent.cta.subtitle}
        buttonLabel={serviziContent.cta.buttonLabel}
        buttonPath={serviziContent.cta.buttonPath}
      />
    </>
  );
}
