import { HeroBuild } from '../components/home/HeroBuild';
import { ValueProposition } from '../components/home/ValueProposition';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { CtaSection } from '../components/home/CtaSection';

export function HomePage() {
  return (
    <>
      <HeroBuild />
      <ValueProposition />
      <ServicesPreview />
      <CtaSection />
    </>
  );
}
