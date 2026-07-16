import { homeContent } from '../../data/home';
import { DarkCtaBanner } from '../shared/DarkCtaBanner';

export function CtaSection() {
  return (
    <DarkCtaBanner
      title={homeContent.cta.title}
      subtitle={homeContent.cta.subtitle}
      buttonLabel={homeContent.cta.buttonLabel}
      buttonPath={homeContent.cta.buttonPath}
    />
  );
}
