import { NavLink } from 'react-router';
import {
  Monitor,
  Smartphone,
  Camera,
  Stethoscope,
  ShieldCheck,
  Archive,
  Euro,
  CheckCircle2,
} from 'lucide-react';
import { remoteDentalContent } from '../data/remoteDental';
import { SectionEyebrow } from '../components/shared/SectionEyebrow';
import { RevealOnScroll } from '../components/shared/RevealOnScroll';
import { DarkCtaBanner } from '../components/shared/DarkCtaBanner';
import { BentoFeatureGrid } from '../components/shared/BentoFeatureGrid';
import { Button } from '../components/ui/button';
import remoteDentalVideo from '../../assets/remote dental video ok.mp4';

const ecosystemIcons = [Monitor, Smartphone, Camera];
const clinicalIcons = [Stethoscope, ShieldCheck, Archive, Euro];

export function RemoteDentalPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <RevealOnScroll>
          <SectionEyebrow>{remoteDentalContent.eyebrow}</SectionEyebrow>
          <h1 className="mt-4">{remoteDentalContent.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{remoteDentalContent.intro}</p>
          <div className="mt-8">
            <Button asChild size="lg">
              <NavLink to={remoteDentalContent.heroCta.path}>{remoteDentalContent.heroCta.label}</NavLink>
            </Button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <video
            src={remoteDentalVideo}
            className="aspect-video w-full rounded-xl object-cover"
            controls
            playsInline
          />
        </RevealOnScroll>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <RevealOnScroll>
          <SectionEyebrow>{remoteDentalContent.ecosystem.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 max-w-2xl">{remoteDentalContent.ecosystem.title}</h2>
        </RevealOnScroll>
        <div className="mt-10">
          <BentoFeatureGrid items={remoteDentalContent.ecosystem.items} icons={ecosystemIcons} />
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <SectionEyebrow>{remoteDentalContent.clinicalSolution.eyebrow}</SectionEyebrow>
            <h2 className="mt-4 max-w-2xl">{remoteDentalContent.clinicalSolution.title}</h2>
          </RevealOnScroll>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {remoteDentalContent.clinicalSolution.items.map((item, index) => {
              const Icon = clinicalIcons[index] ?? clinicalIcons[0];
              return (
                <RevealOnScroll key={item.title} delay={index * 0.06}>
                  <span className="flex size-11 items-center justify-center rounded-lg bg-white">
                    <Icon className="size-5 text-ink" />
                  </span>
                  <h3 className="mt-4">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.text}</p>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <RevealOnScroll>
          <SectionEyebrow>{remoteDentalContent.value.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 max-w-2xl">{remoteDentalContent.value.title}</h2>
        </RevealOnScroll>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {remoteDentalContent.value.blocks.map((block, index) => (
            <RevealOnScroll key={block.title} delay={index * 0.08}>
              <h3>{block.title}</h3>
              <p className="mt-3 text-muted-foreground">{block.text}</p>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
          {remoteDentalContent.value.highlights.map((highlight, index) => (
            <RevealOnScroll key={highlight} delay={index * 0.06}>
              <span className="font-mono text-sm text-primary">{String(index + 1).padStart(2, '0')}</span>
              <p className="mt-2">{highlight}</p>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          {[remoteDentalContent.advantages.studio, remoteDentalContent.advantages.paziente].map((group, groupIndex) => (
            <RevealOnScroll key={group.title} delay={groupIndex * 0.08}>
              <h3>{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <RevealOnScroll>
          <SectionEyebrow>{remoteDentalContent.howItWorks.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 max-w-2xl">{remoteDentalContent.howItWorks.title}</h2>
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
      </section>

      <RevealOnScroll className="mx-auto max-w-3xl px-6 pb-20 text-center">
        <p className="text-xl">{remoteDentalContent.tagline}</p>
      </RevealOnScroll>

      <DarkCtaBanner
        title={remoteDentalContent.cta.title}
        subtitle={remoteDentalContent.cta.subtitle}
        buttonLabel={remoteDentalContent.cta.buttonLabel}
        buttonPath={remoteDentalContent.cta.buttonPath}
      />
    </>
  );
}
