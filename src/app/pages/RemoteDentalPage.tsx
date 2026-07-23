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
  BadgeCheck,
} from 'lucide-react';
import { getRemoteDentalContent } from '../data/remoteDental';
import { useLanguage } from '../i18n/LanguageContext';
import { SectionEyebrow } from '../components/shared/SectionEyebrow';
import { RevealOnScroll } from '../components/shared/RevealOnScroll';
import { DarkCtaBanner } from '../components/shared/DarkCtaBanner';
import { Button } from '../components/ui/button';
import remoteDentalVideo from '../../assets/remote dental video ok.mp4';
import soluzioneImg from '../../assets/soluzione.png';
import webappImg from '../../assets/webapp.png';
import appImg from '../../assets/app.png';
import remoteDentalConnectImg from '../../assets/remote dental connect.png';
import remoteDentalLogo from '../../assets/logo remote dental.png';
import studioMedicoImg from '../../assets/studio medico.jfif';

const ecosystemIcons = [Monitor, Smartphone, Camera];
const ecosystemPhotosByLang = {
  it: [
    { src: webappImg, alt: 'Web App Remote Dental su desktop' },
    { src: appImg, alt: 'App Remote Dental su smartphone' },
    { src: remoteDentalConnectImg, alt: 'Device Remote Dental Connect con telecamera intra-orale' },
  ],
  en: [
    { src: webappImg, alt: 'Remote Dental Web App on desktop' },
    { src: appImg, alt: 'Remote Dental App on smartphone' },
    { src: remoteDentalConnectImg, alt: 'Remote Dental Connect device with intra-oral camera' },
  ],
};
const clinicalIcons = [Stethoscope, ShieldCheck, Archive, Euro];

export function RemoteDentalPage() {
  const { language } = useLanguage();
  const remoteDentalContent = getRemoteDentalContent(language);
  const ecosystemPhotos = ecosystemPhotosByLang[language];
  const soluzioneAlt =
    language === 'en'
      ? 'The Remote Dental solution: web app, app and connected device'
      : 'La soluzione Remote Dental: web app, app e device connesso';
  const studioMedicoAlt = language === 'en' ? 'Dental Practice' : 'Studio medico';

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pt-20 pb-4 md:grid-cols-2 md:items-center md:pt-28 md:pb-5">
        <RevealOnScroll>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-ink">
              <BadgeCheck className="size-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
              {remoteDentalContent.badge}
            </span>
          </div>
          <SectionEyebrow className="mt-5">{remoteDentalContent.eyebrow}</SectionEyebrow>
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
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <RevealOnScroll>
            <img src={remoteDentalLogo} alt="Remote Dental" className="mx-auto h-32 w-auto sm:h-40" />
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <img
              src={soluzioneImg}
              alt={soluzioneAlt}
              className="-mt-4 mx-auto w-full"
            />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="mt-10">
            <SectionEyebrow className="justify-center">{remoteDentalContent.ecosystem.eyebrow}</SectionEyebrow>
            <h2 className="mt-4">{remoteDentalContent.ecosystem.title}</h2>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {remoteDentalContent.ecosystem.items.map((item, index) => {
            const Icon = ecosystemIcons[index] ?? ecosystemIcons[0];
            const photo = ecosystemPhotos[index] ?? ecosystemPhotos[0];
            return (
              <RevealOnScroll key={item.title} delay={index * 0.08}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-secondary/30 p-6">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                      <Icon className="size-5 text-ink transition-colors duration-300 group-hover:text-primary-foreground" />
                    </span>
                    <h3>{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
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

      <section className="mx-auto max-w-6xl px-6 py-16">
        <RevealOnScroll>
          <img
            src={studioMedicoImg}
            alt={studioMedicoAlt}
            className="aspect-[21/9] w-full rounded-2xl object-cover"
          />
        </RevealOnScroll>
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
