import { chiSiamoContent } from '../data/chiSiamo';
import { SectionEyebrow } from '../components/shared/SectionEyebrow';
import { RevealOnScroll } from '../components/shared/RevealOnScroll';
import { DarkCtaBanner } from '../components/shared/DarkCtaBanner';
import { PlaceholderMedia } from '../components/shared/PlaceholderMedia';
import { TeamAvatar } from '../components/shared/TeamAvatar';

export function ChiSiamoPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <RevealOnScroll className="max-w-2xl">
          <SectionEyebrow>{chiSiamoContent.eyebrow}</SectionEyebrow>
          <h1 className="mt-4">{chiSiamoContent.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{chiSiamoContent.intro}</p>
        </RevealOnScroll>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <RevealOnScroll>
          <SectionEyebrow>{chiSiamoContent.method.eyebrow}</SectionEyebrow>
          <h2 className="mt-4">{chiSiamoContent.method.title}</h2>
        </RevealOnScroll>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {chiSiamoContent.method.steps.map((step, index) => (
            <RevealOnScroll key={step.title} delay={index * 0.06}>
              <span className="font-mono text-sm text-primary">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-3">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.text}</p>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <SectionEyebrow>{chiSiamoContent.team.eyebrow}</SectionEyebrow>
            <h2 className="mt-4">{chiSiamoContent.team.title}</h2>
          </RevealOnScroll>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {chiSiamoContent.team.members.map((member, index) => (
              <RevealOnScroll key={member.name} delay={index * 0.06}>
                <TeamAvatar name={member.name} index={index} className="aspect-square w-full rounded-xl" />
                <h3 className="mt-4 text-base">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <RevealOnScroll className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <SectionEyebrow>{chiSiamoContent.groupApm.eyebrow}</SectionEyebrow>
            <h2 className="mt-4 max-w-lg">{chiSiamoContent.groupApm.title}</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">{chiSiamoContent.groupApm.text}</p>
          </div>
          <PlaceholderMedia type="logo" label={chiSiamoContent.groupApm.logo} className="h-28 w-48" />
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
