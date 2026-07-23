import { NavLink } from 'react-router';
import { SectionEyebrow } from '../components/shared/SectionEyebrow';
import { RevealOnScroll } from '../components/shared/RevealOnScroll';
import { getPrivacyPolicyContent } from '../data/privacyPolicy';
import { useLanguage } from '../i18n/LanguageContext';

export function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const { eyebrow, title, intro, sections } = getPrivacyPolicyContent(language);

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <RevealOnScroll>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1 className="mt-4">{title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          {intro.before}
          <a href="https://www.restainup.it" className="text-ink underline underline-offset-2 hover:text-primary">
            {intro.linkLabel}
          </a>
          {intro.after}
        </p>

        <div className="mt-14 space-y-10">
          <div>
            <h2>{sections.contactInfo.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.contactInfo.p1}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {sections.contactInfo.p2Prefix}{' '}
              <a
                href={`mailto:${sections.contactInfo.email}`}
                className="text-ink underline underline-offset-2 hover:text-primary"
              >
                {sections.contactInfo.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2>{sections.purpose.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.purpose.p1}</p>
          </div>

          <div>
            <h2>{sections.dataNature.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.dataNature.p1}</p>
          </div>

          <div>
            <h2>{sections.processing.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.processing.p1}</p>
          </div>

          <div>
            <h2>{sections.recipients.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.recipients.p1}</p>
          </div>

          <div>
            <h2>{sections.retention.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.retention.p1}</p>
          </div>

          <div>
            <h2>{sections.rights.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.rights.p1}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
              {sections.rights.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">{sections.rights.p2}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {sections.rights.p3Prefix}
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-2 hover:text-primary"
              >
                {sections.rights.linkLabel}
              </a>
              {sections.rights.p3Suffix}
            </p>
          </div>

          <div>
            <h2>{sections.cookiePolicyRef.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {sections.cookiePolicyRef.prefix}{' '}
              <NavLink to="/cookie-policy" className="text-ink underline underline-offset-2 hover:text-primary">
                {sections.cookiePolicyRef.linkLabel}
              </NavLink>
              {sections.cookiePolicyRef.suffix}
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
