import { getPortfolioContent } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionEyebrow } from '../components/shared/SectionEyebrow';
import { RevealOnScroll } from '../components/shared/RevealOnScroll';
import { DarkCtaBanner } from '../components/shared/DarkCtaBanner';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { isBentoLarge } from '../components/shared/bento';
import { cn } from '../components/ui/utils';

export function PortfolioPage() {
  const { language } = useLanguage();
  const portfolioContent = getPortfolioContent(language);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <RevealOnScroll className="max-w-2xl">
          <SectionEyebrow>{portfolioContent.eyebrow}</SectionEyebrow>
          <h1 className="mt-4">{portfolioContent.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{portfolioContent.intro}</p>
        </RevealOnScroll>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          {portfolioContent.projects.map((project, index) => {
            const large = isBentoLarge(index);
            return (
              <RevealOnScroll
                key={project.name}
                delay={(index % 3) * 0.08}
                className={cn('h-full', large && 'md:col-span-2 md:row-span-2')}
              >
                <ProjectCard {...project} featured={index === 0} large={large} />
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      <DarkCtaBanner
        title={portfolioContent.cta.title}
        subtitle={portfolioContent.cta.subtitle}
        buttonLabel={portfolioContent.cta.buttonLabel}
        buttonPath={portfolioContent.cta.buttonPath}
      />
    </>
  );
}
