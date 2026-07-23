import { getHomeContent } from '../../data/home';
import { useLanguage } from '../../i18n/LanguageContext';
import { DarkCtaBanner } from '../shared/DarkCtaBanner';

export function CtaSection() {
  const { language } = useLanguage();
  const homeContent = getHomeContent(language);

  return (
    <DarkCtaBanner
      title={homeContent.cta.title}
      subtitle={homeContent.cta.subtitle}
      buttonLabel={homeContent.cta.buttonLabel}
      buttonPath={homeContent.cta.buttonPath}
    />
  );
}
