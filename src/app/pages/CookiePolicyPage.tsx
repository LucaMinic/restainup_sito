import { NavLink } from 'react-router';
import { SectionEyebrow } from '../components/shared/SectionEyebrow';
import { RevealOnScroll } from '../components/shared/RevealOnScroll';
import { getCookiePolicyContent } from '../data/cookiePolicy';
import { useLanguage } from '../i18n/LanguageContext';

export function CookiePolicyPage() {
  const { language } = useLanguage();
  const { eyebrow, title, introTop, introBottom, sections, definitionsHeading, definitions, browsers } =
    getCookiePolicyContent(language);

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <RevealOnScroll>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1 className="mt-4">{title}</h1>

        <div className="mt-8 space-y-4 text-lg text-muted-foreground">
          {introTop.map((p) => (
            <p key={p} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 space-y-4 text-muted-foreground">
          {introBottom.map((p) => (
            <p key={p} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-14 space-y-10">
          <div>
            <h2>{sections.necessary.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.necessary.p1}</p>
          </div>

          <div>
            <h2>{sections.other.heading}</h2>

            <h3 className="mt-6">{sections.other.measurementHeading}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{sections.other.measurementP1}</p>

            <h3 className="mt-6">{sections.other.statisticsHeading}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{sections.other.statisticsP1}</p>

            <div className="mt-5 rounded-xl border border-border bg-white p-6">
              <p className="font-medium text-ink">{sections.other.googleAnalytics.title}</p>
              <p className="mt-3 leading-relaxed text-muted-foreground">{sections.other.googleAnalytics.p1}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <span className="text-ink">{sections.other.googleAnalytics.dataLabel}</span>{' '}
                {sections.other.googleAnalytics.dataValue}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                <span className="text-ink">{sections.other.googleAnalytics.locationLabel}</span>{' '}
                {sections.other.googleAnalytics.locationValue}
              </p>
            </div>
          </div>

          <div>
            <h2>{sections.managePreferences.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.managePreferences.p1}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.managePreferences.p2}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.managePreferences.p3}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.managePreferences.p4}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.managePreferences.p5}</p>

            <h3 className="mt-6">{sections.managePreferences.browserSettingsHeading}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{sections.managePreferences.browserSettingsP1}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 leading-relaxed text-muted-foreground">
              {browsers.map((browser) => (
                <li key={browser}>{browser}</li>
              ))}
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.managePreferences.browserSettingsP2}</p>
          </div>

          <div>
            <h2>{sections.dataController.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.dataController.p1}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {sections.dataController.p2Prefix}{' '}
              <a
                href={`mailto:${sections.dataController.email}`}
                className="text-ink underline underline-offset-2 hover:text-primary"
              >
                {sections.dataController.email}
              </a>
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.dataController.p3}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.dataController.p4}</p>
          </div>

          <div>
            <h2>{definitionsHeading}</h2>
            <div className="mt-6 space-y-6">
              {definitions.map((definition) => (
                <div key={definition.term}>
                  <h3>{definition.term}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{definition.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2>{sections.legalReferences.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.legalReferences.p1}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.legalReferences.p2}</p>
            <p className="mt-4 font-mono text-sm text-muted-foreground">{sections.legalReferences.lastUpdate}</p>
          </div>

          <div className="border-t border-border pt-10">
            <h2>{sections.cookieNotice.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.cookieNotice.p1}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.cookieNotice.p2}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.cookieNotice.p3}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.cookieNotice.p4}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.cookieNotice.p5}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {sections.cookieNotice.p6Prefix}{' '}
              <NavLink to="/privacy-policy" className="text-ink underline underline-offset-2 hover:text-primary">
                {sections.cookieNotice.p6LinkLabel}
              </NavLink>
              .
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.cookieNotice.p7}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {sections.cookieNotice.p8Prefix}{' '}
              <a href="https://www.restainup.it" className="text-ink underline underline-offset-2 hover:text-primary">
                {sections.cookieNotice.p8Site}
              </a>
              .
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
