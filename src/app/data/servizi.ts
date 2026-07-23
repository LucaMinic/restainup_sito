import type { Language } from '../i18n/LanguageContext';

const it = {
  eyebrow: 'Servizi',
  title: 'Cosa facciamo',
  intro:
    'Restainup, società del Gruppo APM, guida la trasformazione digitale delle aziende: ridefiniamo i processi aziendali e le interazioni con clienti, dipendenti e fornitori attraverso strumenti digitali su misura. Nuove piattaforme, processi rivisti, automazioni al posto di operazioni manuali: il risultato è più efficienza, nuovi modelli di business e un’esperienza migliore per tutti gli attori coinvolti.',
  areas: [
    {
      title: 'Sviluppo Web & App',
      text: 'Sviluppiamo app e interfacce digitali che trasformano un’idea in un prodotto reale, coinvolgente e facile da usare. Dal concept al rilascio lavoriamo fianco a fianco con voi, per essere sicuri che ogni scelta tecnica rispecchi la vostra visione e porti al risultato che vi siete prefissati. Scegliamo tecnologie e metodologie in base al progetto, non il contrario: l’obiettivo è una soluzione su misura, costruita per le esigenze specifiche della vostra azienda.',
    },
    {
      title: 'Innovazione Tecnologica',
      text: 'Restiamo all’avanguardia dell’innovazione tecnologica, esplorando e integrando nei nostri progetti le tecnologie più promettenti: realtà aumentata, intelligenza artificiale, blockchain, soluzioni IoT. Non lo facciamo per moda, ma per offrirvi soluzioni che anticipano le esigenze del mercato invece di rincorrerle. È il modo in cui la nostra curiosità per l’innovazione diventa un vantaggio concreto per voi.',
    },
    {
      title: 'Consulenza Digitale',
      text: 'Non vi lasciamo soli dopo la consegna: la nostra filosofia è la collaborazione continua, lungo tutto il percorso del progetto. Offriamo consulenza strategica per aiutarvi a mettere a fuoco la visione e pianificare i passi verso i vostri obiettivi digitali, con un approccio che parte sempre dall’ascolto delle esigenze reali di chi lavora con noi.',
    },
  ],
  cta: {
    title: 'Vuoi capire da dove iniziare?',
    subtitle: 'Raccontaci il tuo progetto: ti aiutiamo a individuare l’area di intervento più utile per te.',
    buttonLabel: 'Contattaci',
    buttonPath: '/contatti',
  },
};

const en: typeof it = {
  eyebrow: 'Services',
  title: 'What we do',
  intro:
    "Restainup, a Gruppo APM company, drives the digital transformation of businesses: we redefine business processes and interactions with customers, employees and suppliers through custom digital tools. New platforms, revised processes, automation in place of manual work: the result is more efficiency, new business models and a better experience for everyone involved.",
  areas: [
    {
      title: 'Web & App Development',
      text: "We develop apps and digital interfaces that turn an idea into a real, engaging and easy-to-use product. From concept to release we work side by side with you, to make sure every technical choice reflects your vision and delivers the result you set out to achieve. We choose technologies and methodologies based on the project, not the other way around: the goal is a tailor-made solution, built for your company's specific needs.",
    },
    {
      title: 'Technology Innovation',
      text: "We stay at the forefront of technology innovation, exploring and integrating the most promising technologies into our projects: augmented reality, artificial intelligence, blockchain, IoT solutions. We don't do it for trend's sake, but to offer you solutions that anticipate market needs instead of chasing them. It's how our curiosity for innovation becomes a concrete advantage for you.",
    },
    {
      title: 'Digital Consulting',
      text: "We don't leave you on your own after delivery: our philosophy is continuous collaboration, throughout the entire project journey. We offer strategic consulting to help you focus your vision and plan the steps towards your digital goals, with an approach that always starts by listening to the real needs of those who work with us.",
    },
  ],
  cta: {
    title: 'Want to understand where to start?',
    subtitle: "Tell us about your project: we'll help you identify the area that's most useful for you.",
    buttonLabel: 'Contact us',
    buttonPath: '/contatti',
  },
};

const serviziContentByLang: Record<Language, typeof it> = { it, en };

export function getServiziContent(language: Language) {
  return serviziContentByLang[language];
}
