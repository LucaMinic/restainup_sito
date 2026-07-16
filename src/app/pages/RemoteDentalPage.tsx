import { ShieldCheck, Repeat, Puzzle } from 'lucide-react';
import { remoteDentalContent } from '../data/remoteDental';
import { SectionEyebrow } from '../components/shared/SectionEyebrow';
import { RevealOnScroll } from '../components/shared/RevealOnScroll';
import { DarkCtaBanner } from '../components/shared/DarkCtaBanner';
import { PlaceholderMedia } from '../components/shared/PlaceholderMedia';
import { BentoFeatureGrid } from '../components/shared/BentoFeatureGrid';

const icons = [ShieldCheck, Repeat, Puzzle];

export function RemoteDentalPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <RevealOnScroll>
          <SectionEyebrow>{remoteDentalContent.eyebrow}</SectionEyebrow>
          <h1 className="mt-4">{remoteDentalContent.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{remoteDentalContent.intro}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <PlaceholderMedia
            type="video"
            label={remoteDentalContent.video}
            photoId={48}
            className="aspect-video w-full rounded-xl"
          />
        </RevealOnScroll>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <BentoFeatureGrid items={remoteDentalContent.features} icons={icons} />
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <SectionEyebrow>{remoteDentalContent.howItWorks.eyebrow}</SectionEyebrow>
            <h2 className="mt-4">{remoteDentalContent.howItWorks.title}</h2>
          </RevealOnScroll>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {remoteDentalContent.howItWorks.steps.map((step, index) => (
              <RevealOnScroll key={step.title} delay={index * 0.08}>
                <span className="font-mono text-sm text-primary">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-3">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.text}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <DarkCtaBanner
        title={remoteDentalContent.cta.title}
        subtitle={remoteDentalContent.cta.subtitle}
        buttonLabel={remoteDentalContent.cta.buttonLabel}
        buttonPath={remoteDentalContent.cta.buttonPath}
      />
    </>
  );
}
