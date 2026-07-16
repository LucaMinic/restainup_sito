import { homeContent } from '../../data/home';
import { SectionEyebrow } from '../shared/SectionEyebrow';
import { RevealOnScroll } from '../shared/RevealOnScroll';
import { PlaceholderMedia } from '../shared/PlaceholderMedia';

export function ValueProposition() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
      <RevealOnScroll>
        <SectionEyebrow>{homeContent.valueProp.eyebrow}</SectionEyebrow>
        <h2 className="mt-4">{homeContent.valueProp.title}</h2>
        <p className="mt-5 text-lg text-muted-foreground">{homeContent.valueProp.text}</p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <PlaceholderMedia label="{{FOTO_TEAM_O_UFFICIO}}" photoId={0} className="aspect-[4/3] w-full rounded-xl" />
      </RevealOnScroll>
    </section>
  );
}
