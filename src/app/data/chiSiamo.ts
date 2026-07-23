import type { Language } from '../i18n/LanguageContext';

const it = {
  eyebrow: 'Chi siamo',
  title: 'Le persone che costruiscono con voi',
  intro:
    'Restainup nasce per accompagnare le aziende nella trasformazione digitale con lo stesso approccio che mettiamo in ogni progetto: ascolto, rigore tecnico e un rapporto diretto con chi ci affida il proprio lavoro.',
  method: {
    eyebrow: 'Metodo',
    title: 'Come lavoriamo',
    steps: [
      {
        title: 'Ascolto',
        text: 'Partiamo sempre dal contesto reale: obiettivi, vincoli e persone coinvolte, prima di proporre qualsiasi soluzione.',
      },
      {
        title: 'Progettazione',
        text: 'Definiamo architettura, design e roadmap in modo condiviso, così ogni scelta tecnica resta leggibile anche a chi tecnico non è.',
      },
      {
        title: 'Sviluppo',
        text: 'Costruiamo per iterazioni brevi e verificabili, con aggiornamenti frequenti invece di un’unica consegna a fine progetto.',
      },
      {
        title: 'Supporto',
        text: 'Restiamo al fianco del cliente anche dopo il rilascio, con manutenzione e consulenza continua.',
      },
    ],
  },
  team: {
    eyebrow: 'Team',
    title: 'Un team, tutte le competenze del Gruppo',
    intro:
      'Dietro Restainup non ci sono ruoli isolati, ma una squadra di competenze che lavora in sinergia con l’intero Gruppo APM. Seguiamo ogni progetto internamente, dall’idea alla manutenzione: specializzazioni diverse, un’unica squadra.',
    pillars: [
      { label: '100% in-house' },
      { label: 'Sinergia con tutto il Gruppo' },
      { label: 'Competenze integrate' },
    ],
    steps: [
      {
        title: 'Ideazione',
        text: 'Analizziamo il contesto e definiamo la direzione giusta.',
      },
      {
        title: 'Prototipazione',
        text: 'Diamo forma concreta alle idee prima di scrivere codice.',
      },
      {
        title: 'Sviluppo',
        text: 'Costruiamo la soluzione per iterazioni rapide e verificabili.',
      },
      {
        title: 'Manutenzione ed evoluzione',
        text: 'Restiamo al fianco del prodotto anche oltre il rilascio.',
      },
    ],
  },
  groupApm: {
    eyebrow: 'Gruppo APM',
    title: 'Parte di una rete più ampia',
    text: 'Restainup è una società del Gruppo APM: un legame che ci permette di affiancare alle competenze digitali una rete di esperienze e settori differenti, mettendola a disposizione di ogni cliente che lavora con noi.',
    logoUrl: 'https://www.gruppoapm.com/',
    linkLabel: 'Scopri di più su Gruppo APM',
    linkAriaLabel: 'Vai al sito di Gruppo APM (si apre in una nuova scheda)',
  },
  cta: {
    title: 'Vuoi conoscerci meglio?',
    subtitle: 'Raccontaci il tuo progetto: troviamo insieme il modo migliore per iniziare a lavorarci.',
    buttonLabel: 'Contattaci',
    buttonPath: '/contatti',
  },
};

const en: typeof it = {
  eyebrow: 'About Us',
  title: 'The people who build with you',
  intro:
    'Restainup was created to guide companies through digital transformation with the same approach we bring to every project: listening, technical rigor and a direct relationship with those who trust us with their work.',
  method: {
    eyebrow: 'Method',
    title: 'How we work',
    steps: [
      {
        title: 'Listening',
        text: 'We always start from the real context: goals, constraints and the people involved, before proposing any solution.',
      },
      {
        title: 'Design',
        text: 'We define architecture, design and roadmap together, so every technical choice stays clear even to non-technical people.',
      },
      {
        title: 'Development',
        text: 'We build in short, verifiable iterations, with frequent updates instead of a single delivery at the end of the project.',
      },
      {
        title: 'Support',
        text: 'We stay by the client\'s side even after release, with ongoing maintenance and consulting.',
      },
    ],
  },
  team: {
    eyebrow: 'Team',
    title: 'One team, all the skills of the Group',
    intro:
      "Behind Restainup there are no isolated roles, but a team of skills working in synergy with the entire Gruppo APM. We follow every project in-house, from idea to maintenance: different specializations, one single team.",
    pillars: [
      { label: '100% in-house' },
      { label: 'Synergy with the whole Group' },
      { label: 'Integrated skills' },
    ],
    steps: [
      {
        title: 'Ideation',
        text: 'We analyze the context and define the right direction.',
      },
      {
        title: 'Prototyping',
        text: 'We give concrete shape to ideas before writing code.',
      },
      {
        title: 'Development',
        text: 'We build the solution through fast, verifiable iterations.',
      },
      {
        title: 'Maintenance & Evolution',
        text: 'We stay by the product\'s side well beyond release.',
      },
    ],
  },
  groupApm: {
    eyebrow: 'Gruppo APM',
    title: 'Part of a wider network',
    text: 'Restainup is a Gruppo APM company: a bond that lets us pair digital expertise with a network of experience and industries, making it available to every client who works with us.',
    logoUrl: 'https://www.gruppoapm.com/',
    linkLabel: 'Learn more about Gruppo APM',
    linkAriaLabel: 'Go to the Gruppo APM website (opens in a new tab)',
  },
  cta: {
    title: 'Want to get to know us better?',
    subtitle: "Tell us about your project: together we'll find the best way to get started.",
    buttonLabel: 'Contact us',
    buttonPath: '/contatti',
  },
};

const chiSiamoContentByLang: Record<Language, typeof it> = { it, en };

export function getChiSiamoContent(language: Language) {
  return chiSiamoContentByLang[language];
}
