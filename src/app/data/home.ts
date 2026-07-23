import type { Language } from '../i18n/LanguageContext';

const it = {
  hero: {
    eyebrow: 'Gruppo APM — Digital Transformation',
    title: 'Sviluppiamo prodotti digitali che il tuo business usa davvero',
    subtitle:
      'Siti, app, e-commerce e strumenti su misura: uniamo sviluppo, innovazione tecnologica e consulenza per guidare la trasformazione digitale della tua azienda.',
    ctaLabel: 'Parliamo del tuo progetto',
    ctaPath: '/contatti',
  },
  valueProp: {
    eyebrow: 'Chi siamo',
    title: 'La trasformazione digitale, fatta bene',
    text: 'Restainup, società del Gruppo APM, ridisegna i processi aziendali e le interazioni con clienti, dipendenti e fornitori attraverso strumenti digitali su misura. Nuove piattaforme, processi rivisti, automazioni intelligenti: il risultato è più efficienza, nuovi modelli di business e un’esperienza migliore per chi lavora con voi ogni giorno.',
  },
  services: {
    eyebrow: 'Servizi',
    title: 'Le nostre aree di intervento',
    items: [
      {
        title: 'Sviluppo Web & App',
        text: 'Trasformiamo idee in app e interfacce digitali coinvolgenti e funzionali: dal concept al rilascio, lavoriamo a stretto contatto con voi per raggiungere davvero gli obiettivi del progetto.',
      },
      {
        title: 'Innovazione Tecnologica',
        text: 'Esploriamo e integriamo le tecnologie più avanzate — intelligenza artificiale, blockchain, IoT — per offrire soluzioni all’avanguardia che anticipano le esigenze del mercato.',
      },
      {
        title: 'Consulenza Digitale',
        text: 'Vi affianchiamo lungo tutto il percorso, dalla strategia alla pianificazione: un approccio collaborativo per capire le vostre esigenze e costruire soluzioni su misura.',
      },
    ],
  },
  cta: {
    title: 'Hai un progetto digitale in mente?',
    subtitle: 'Raccontaci la tua idea: troviamo insieme il modo migliore per realizzarla.',
    buttonLabel: 'Contattaci',
    buttonPath: '/contatti',
  },
};

const en: typeof it = {
  hero: {
    eyebrow: 'Gruppo APM — Digital Transformation',
    title: 'We build digital products your business actually uses',
    subtitle:
      'Websites, apps, e-commerce and custom tools: we combine development, technology innovation and consulting to drive your company\'s digital transformation.',
    ctaLabel: "Let's talk about your project",
    ctaPath: '/contatti',
  },
  valueProp: {
    eyebrow: 'About us',
    title: 'Digital transformation, done right',
    text: "Restainup, a Gruppo APM company, redesigns business processes and interactions with customers, employees and suppliers through custom digital tools. New platforms, revised processes, smart automation: the result is more efficiency, new business models and a better experience for everyone who works with you every day.",
  },
  services: {
    eyebrow: 'Services',
    title: 'Our areas of expertise',
    items: [
      {
        title: 'Web & App Development',
        text: 'We turn ideas into engaging, functional apps and digital interfaces: from concept to release, we work closely with you to truly achieve the project\'s goals.',
      },
      {
        title: 'Technology Innovation',
        text: 'We explore and integrate the most advanced technologies — artificial intelligence, blockchain, IoT — to deliver cutting-edge solutions that anticipate market needs.',
      },
      {
        title: 'Digital Consulting',
        text: 'We stand by you throughout the journey, from strategy to planning: a collaborative approach to understanding your needs and building tailor-made solutions.',
      },
    ],
  },
  cta: {
    title: 'Have a digital project in mind?',
    subtitle: "Tell us your idea: together we'll find the best way to make it happen.",
    buttonLabel: 'Contact us',
    buttonPath: '/contatti',
  },
};

const homeContentByLang: Record<Language, typeof it> = { it, en };

export function getHomeContent(language: Language) {
  return homeContentByLang[language];
}
