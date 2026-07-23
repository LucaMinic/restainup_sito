import { Code2, Sparkles, MessageCircle } from 'lucide-react';
import { getHomeContent } from '../../data/home';
import { useLanguage } from '../../i18n/LanguageContext';
import { SectionEyebrow } from '../shared/SectionEyebrow';
import { RevealOnScroll } from '../shared/RevealOnScroll';
import { BentoFeatureGrid } from '../shared/BentoFeatureGrid';
import { Parallax } from '../shared/Parallax';
import { ServicesImageSlider } from './ServicesImageSlider';

const icons = [Code2, Sparkles, MessageCircle];

export function ServicesPreview() {
  const { language } = useLanguage();
  const homeContent = getHomeContent(language);

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <RevealOnScroll>
        <SectionEyebrow>{homeContent.services.eyebrow}</SectionEyebrow>
        <h2 className="mt-4 max-w-xl">{homeContent.services.title}</h2>
      </RevealOnScroll>

      <div className="mt-12">
        <BentoFeatureGrid items={homeContent.services.items} icons={icons} variant="equal" />
      </div>

      <RevealOnScroll delay={0.1} className="mt-8">
        <Parallax offset={20}>
          <ServicesImageSlider />
        </Parallax>
      </RevealOnScroll>
    </section>
  );
}
