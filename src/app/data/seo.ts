import type { Language } from '../i18n/LanguageContext';
import personeImg from '../../assets/persone.jpg';
import digitalTransformationImg from '../../assets/digital transormation.jpg';
import competenzeGruppoImg from '../../assets/competenze gruppo.jpg';
import studioMedicoImg from '../../assets/studio medico.jfif';

// Pilotato da VITE_SITE_ORIGIN (vedi .env per il default GitHub Pages e
// build-aruba.sh per l'override sul dominio Aruba). SITE_URL combina l'origin
// con il base path corrente di Vite, così torna corretto in entrambi i flussi
// (sottocartella su GH Pages, radice su Aruba) senza doppio slash.
export const SITE_ORIGIN = import.meta.env.VITE_SITE_ORIGIN ?? 'https://lucaminic.github.io';
export const SITE_URL = `${SITE_ORIGIN}${import.meta.env.BASE_URL.replace(/\/$/, '')}`;
export const SITE_NAME = 'Restainup';

export type PageSeo = {
  title: string;
  description: string;
  image?: string;
};

const pageSeoByLang: Record<Language, Record<string, PageSeo>> = {
  it: {
    '/': {
      title: 'Restainup — Sviluppo Web, App e Trasformazione Digitale',
      description:
        'Restainup progetta siti, app, e-commerce e strumenti su misura per guidare la trasformazione digitale della tua azienda. Scopri i nostri servizi.',
      image: personeImg,
    },
    '/servizi': {
      title: 'Servizi — Sviluppo Web & App, Innovazione e Consulenza Digitale | Restainup',
      description:
        'Sviluppo Web & App, Innovazione Tecnologica e Consulenza Digitale: le aree di intervento di Restainup per la trasformazione digitale della tua azienda.',
      image: digitalTransformationImg,
    },
    '/portfolio': {
      title: 'Portfolio — Progetti Realizzati | Restainup',
      description:
        'Una selezione dei progetti realizzati da Restainup: siti, applicazioni ed e-commerce costruiti su misura per le esigenze di ogni cliente.',
      image: personeImg,
    },
    '/chi-siamo': {
      title: 'Chi Siamo — Il Team e il Metodo di Lavoro | Restainup',
      description:
        'Restainup accompagna le aziende nella trasformazione digitale con ascolto, rigore tecnico e un rapporto diretto. Scopri il team e il nostro metodo di lavoro.',
      image: competenzeGruppoImg,
    },
    '/remote-dental': {
      title: 'Remote Dental — Teleodontoiatria Certificata per lo Studio Medico | Restainup',
      description:
        "Remote Dental è la soluzione integrata di Teleodontoiatria che consente allo Studio Medico di monitorare e seguire i pazienti a distanza, in modo certificato e conforme al GDPR.",
      image: studioMedicoImg,
    },
    '/contatti': {
      title: 'Contatti — Parliamo del Tuo Progetto | Restainup',
      description:
        'Raccontaci cosa vuoi realizzare: contatta Restainup per parlare del tuo progetto digitale, ti rispondiamo il prima possibile.',
      image: personeImg,
    },
    '/privacy-policy': {
      title: 'Privacy Policy | Restainup',
      description:
        'Informativa sul trattamento dei dati personali degli utenti del sito Restainup, ai sensi del Regolamento UE 679/2016 (GDPR).',
    },
    '/cookie-policy': {
      title: 'Cookie Policy | Restainup',
      description: "Informativa sull'uso dei cookie e delle tecnologie di tracciamento sul sito Restainup.",
    },
  },
  en: {
    '/': {
      title: 'Restainup — Web & App Development, Digital Transformation',
      description:
        "Restainup designs websites, apps, e-commerce and custom tools to drive your company's digital transformation. Discover our services.",
      image: personeImg,
    },
    '/servizi': {
      title: 'Services — Web & App Development, Innovation and Digital Consulting | Restainup',
      description:
        "Web & App Development, Technology Innovation and Digital Consulting: Restainup's areas of expertise for your company's digital transformation.",
      image: digitalTransformationImg,
    },
    '/portfolio': {
      title: 'Portfolio — Completed Projects | Restainup',
      description:
        "A selection of the projects completed by Restainup: websites, applications and e-commerce stores built to each client's needs.",
      image: personeImg,
    },
    '/chi-siamo': {
      title: 'About Us — Our Team and Way of Working | Restainup',
      description:
        'Restainup guides companies through digital transformation with listening, technical rigor and a direct relationship. Discover our team and our method.',
      image: competenzeGruppoImg,
    },
    '/remote-dental': {
      title: 'Remote Dental — Certified Teledentistry for the Dental Practice | Restainup',
      description:
        'Remote Dental is the integrated Teledentistry solution that lets the Dental Practice monitor and follow up patients remotely, in a certified, GDPR-compliant way.',
      image: studioMedicoImg,
    },
    '/contatti': {
      title: "Contact — Let's Talk About Your Project | Restainup",
      description:
        "Tell us what you'd like to build: contact Restainup to talk about your digital project, we'll get back to you as soon as possible.",
      image: personeImg,
    },
    '/privacy-policy': {
      title: 'Privacy Policy | Restainup',
      description:
        'Information on the processing of personal data of Restainup website users, pursuant to EU Regulation 679/2016 (GDPR).',
    },
    '/cookie-policy': {
      title: 'Cookie Policy | Restainup',
      description: 'Information on the use of cookies and tracking technologies on the Restainup website.',
    },
  },
};

export function getPageSeo(language: Language, pathname: string): PageSeo {
  const table = pageSeoByLang[language];
  return table[pathname] ?? table['/'];
}
