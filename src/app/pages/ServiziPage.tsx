import { Code2, Sparkles, MessageCircle } from 'lucide-react';
import { getServiziContent } from '../data/servizi';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionEyebrow } from '../components/shared/SectionEyebrow';
import { RevealOnScroll } from '../components/shared/RevealOnScroll';
import { DarkCtaBanner } from '../components/shared/DarkCtaBanner';
import digitalTransformationImg from '../../assets/digital transormation.jpg';

const icons = [Code2, Sparkles, MessageCircle];

export function ServiziPage() {
  const { language } = useLanguage();
  const serviziContent = getServiziContent(language);
  const imageAlt = language === 'en' ? 'Digital transformation' : 'Trasformazione digitale';

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <RevealOnScroll>
          <SectionEyebrow>{serviziContent.eyebrow}</SectionEyebrow>
          <h1 className="mt-4">{serviziContent.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{serviziContent.intro}</p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <img
            src={digitalTransformationImg}
            alt={imageAlt}
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
        </RevealOnScroll>
      </section>

      <section className="mx-auto max-w-6xl divide-y divide-border px-6 pb-20">
        {serviziContent.areas.map((area, index) => {
          const Icon = icons[index] ?? Code2;
          return (
            <RevealOnScroll key={area.title} delay={index * 0.06}>
              <div className="group -mx-6 grid gap-6 rounded-2xl px-6 py-12 transition-colors duration-300 hover:bg-accent/40 md:grid-cols-[minmax(0,240px)_1fr] md:gap-12">
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                    <Icon className="size-5 text-ink transition-colors duration-300 group-hover:text-primary-foreground" />
                  </span>
                  <h2 className="transition-transform duration-300 group-hover:translate-x-1 md:mt-1">{area.title}</h2>
                </div>
                <p className="max-w-2xl text-muted-foreground">{area.text}</p>
              </div>
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
