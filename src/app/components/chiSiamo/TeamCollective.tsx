import { Building2, Code2, Lightbulb, PenTool, Puzzle, RefreshCw, Share2 } from 'lucide-react';
import { motion } from 'motion/react';
import { getChiSiamoContent } from '../../data/chiSiamo';
import { useLanguage } from '../../i18n/LanguageContext';
import { SectionEyebrow } from '../shared/SectionEyebrow';
import { RevealOnScroll } from '../shared/RevealOnScroll';
import competenzeGruppoImg from '../../../assets/competenze gruppo.jpg';

const EASE = [0.22, 1, 0.36, 1] as const;

const pillarIcons = [Building2, Share2, Puzzle];
const stepIcons = [Lightbulb, PenTool, Code2, RefreshCw];

// Sostituisce l'elenco nominativo del team con una lettura più istituzionale:
// una squadra unica, trasversale al Gruppo, che segue l'intera filiera del progetto.
export function TeamCollective() {
  const { language } = useLanguage();
  const { team } = getChiSiamoContent(language);
  const imageAlt =
    language === 'en'
      ? 'Group skills coming together like puzzle pieces'
      : 'Competenze del Gruppo che si integrano come tasselli';

  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <RevealOnScroll>
              <SectionEyebrow>{team.eyebrow}</SectionEyebrow>
              <h2 className="mt-4">{team.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{team.intro}</p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1} className="mt-6 flex flex-wrap gap-3">
              {team.pillars.map((pillar, index) => {
                const Icon = pillarIcons[index] ?? pillarIcons[0];
                return (
                  <span
                    key={pillar.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-ink"
                  >
                    <Icon className="size-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                    {pillar.label}
                  </span>
                );
              })}
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.15}>
            <img
              src={competenzeGruppoImg}
              alt={imageAlt}
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
          </RevealOnScroll>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-6 hidden h-px origin-left bg-border lg:block"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: EASE }}
          />

          {team.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? stepIcons[0];
            return (
              <RevealOnScroll key={step.title} delay={index * 0.08}>
                <div className="group relative flex flex-col items-start transition-transform duration-300 hover:-translate-y-1">
                  <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary">
                    <Icon
                      className="size-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground"
                      strokeWidth={1.75}
                    />
                  </span>
                  <span className="mt-4 font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
