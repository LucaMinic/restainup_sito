import { getChiSiamoContent } from '../data/chiSiamo';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionEyebrow } from '../components/shared/SectionEyebrow';
import { RevealOnScroll } from '../components/shared/RevealOnScroll';
import { DarkCtaBanner } from '../components/shared/DarkCtaBanner';
import { MethodWheel } from '../components/chiSiamo/MethodWheel';
import { TeamCollective } from '../components/chiSiamo/TeamCollective';
import { Button } from '../components/ui/button';
import gruppoApmLogo from '../../assets/logo gruppo apm.png';
import personeImg from '../../assets/persone.jpg';

export function ChiSiamoPage() {
  const { language } = useLanguage();
  const chiSiamoContent = getChiSiamoContent(language);
  const imageAlt = language === 'en' ? 'People working together on a project' : 'Persone al lavoro insieme su un progetto';

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <RevealOnScroll>
          <SectionEyebrow>{chiSiamoContent.eyebrow}</SectionEyebrow>
          <h1 className="mt-4">{chiSiamoContent.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{chiSiamoContent.intro}</p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <img
            src={personeImg}
            alt={imageAlt}
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
        </RevealOnScroll>
      </section>

      <MethodWheel />

      <TeamCollective />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <RevealOnScroll className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <SectionEyebrow>{chiSiamoContent.groupApm.eyebrow}</SectionEyebrow>
            <h2 className="mt-4 max-w-lg">{chiSiamoContent.groupApm.title}</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">{chiSiamoContent.groupApm.text}</p>
          </div>
          <div className="flex w-fit flex-col items-center gap-4">
            <a
              href={chiSiamoContent.groupApm.logoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-opacity hover:opacity-70"
              aria-label={chiSiamoContent.groupApm.linkAriaLabel}
            >
              <img src={gruppoApmLogo} alt="Gruppo APM" className="h-14 w-auto sm:h-16" />
            </a>
            <Button asChild variant="outline" size="sm">
              <a href={chiSiamoContent.groupApm.logoUrl} target="_blank" rel="noopener noreferrer">
                {chiSiamoContent.groupApm.linkLabel}
              </a>
            </Button>
          </div>
        </RevealOnScroll>
      </section>

      <DarkCtaBanner
        title={chiSiamoContent.cta.title}
        subtitle={chiSiamoContent.cta.subtitle}
        buttonLabel={chiSiamoContent.cta.buttonLabel}
        buttonPath={chiSiamoContent.cta.buttonPath}
      />
    </>
  );
}
