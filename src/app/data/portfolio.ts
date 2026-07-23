import type { Language } from '../i18n/LanguageContext';

// NOTA: nomi e descrizioni dei progetti sono esempi illustrativi (placeholder di contenuto,
// non case study reali). Sostituisci con i vostri progetti effettivi non appena disponibili.
const it = {
  eyebrow: 'Portfolio',
  title: 'Progetti realizzati',
  intro:
    'Una selezione dei progetti su cui abbiamo lavorato: siti, applicazioni ed e-commerce costruiti su misura per le esigenze di ogni cliente.',
  projects: [
    {
      name: 'Fiordaliso Boutique',
      description: 'E-commerce moda con showcase prodotti, filtri avanzati e checkout ottimizzato per mobile.',
      url: 'fiordalisoboutique.it',
      tag: 'E-commerce',
      image: '{{FOTO_PROGETTO_FIORDALISO}}',
      photoId: 21,
    },
    {
      name: 'Ristorante Da Lucio',
      description: 'Sito vetrina con menu digitale e sistema di prenotazione tavoli integrato.',
      url: 'ristorantedalucio.it',
      tag: 'Sito web',
      image: '{{FOTO_PROGETTO_DALUCIO}}',
      photoId: 225,
    },
    {
      name: 'MedicalCare',
      description: 'App per la prenotazione di visite mediche e la gestione dello storico paziente.',
      url: 'medicalcare-app.it',
      tag: 'App',
      image: '{{FOTO_PROGETTO_MEDICALCARE}}',
      photoId: 160,
    },
    {
      name: 'Studio Legale Bianchi',
      description: 'Sito istituzionale per uno studio legale, con area news e modulo di primo contatto.',
      url: 'studiolegalebianchi.it',
      tag: 'Sito web',
      image: '{{FOTO_PROGETTO_BIANCHI}}',
      photoId: 193,
    },
    {
      name: 'FitTrack',
      description: 'App di allenamento con piani personalizzati e monitoraggio dei progressi nel tempo.',
      url: 'fittrack-app.it',
      tag: 'App',
      image: '{{FOTO_PROGETTO_FITTRACK}}',
      photoId: 177,
    },
    {
      name: 'Agrifood Export',
      description: 'Portale B2B per la gestione ordini e il catalogo prodotti verso i mercati esteri.',
      url: 'agrifoodexport.it',
      tag: 'Piattaforma web',
      image: '{{FOTO_PROGETTO_AGRIFOOD}}',
      photoId: 300,
    },
  ],
  cta: {
    title: 'Il tuo progetto potrebbe essere il prossimo',
    subtitle: 'Raccontaci cosa vuoi costruire: valutiamo insieme la soluzione migliore.',
    buttonLabel: 'Contattaci',
    buttonPath: '/contatti',
  },
};

const en: typeof it = {
  eyebrow: 'Portfolio',
  title: 'Completed Projects',
  intro:
    'A selection of the projects we\'ve worked on: websites, applications and e-commerce stores built to each client\'s needs.',
  projects: [
    {
      name: 'Fiordaliso Boutique',
      description: 'Fashion e-commerce with product showcase, advanced filters and a mobile-optimized checkout.',
      url: 'fiordalisoboutique.it',
      tag: 'E-commerce',
      image: '{{FOTO_PROGETTO_FIORDALISO}}',
      photoId: 21,
    },
    {
      name: 'Ristorante Da Lucio',
      description: 'Showcase website with a digital menu and an integrated table booking system.',
      url: 'ristorantedalucio.it',
      tag: 'Website',
      image: '{{FOTO_PROGETTO_DALUCIO}}',
      photoId: 225,
    },
    {
      name: 'MedicalCare',
      description: 'App for booking medical appointments and managing patient history.',
      url: 'medicalcare-app.it',
      tag: 'App',
      image: '{{FOTO_PROGETTO_MEDICALCARE}}',
      photoId: 160,
    },
    {
      name: 'Studio Legale Bianchi',
      description: 'Corporate website for a law firm, with a news section and a first-contact form.',
      url: 'studiolegalebianchi.it',
      tag: 'Website',
      image: '{{FOTO_PROGETTO_BIANCHI}}',
      photoId: 193,
    },
    {
      name: 'FitTrack',
      description: 'Training app with personalized plans and long-term progress tracking.',
      url: 'fittrack-app.it',
      tag: 'App',
      image: '{{FOTO_PROGETTO_FITTRACK}}',
      photoId: 177,
    },
    {
      name: 'Agrifood Export',
      description: 'B2B portal for order management and product catalog for foreign markets.',
      url: 'agrifoodexport.it',
      tag: 'Web Platform',
      image: '{{FOTO_PROGETTO_AGRIFOOD}}',
      photoId: 300,
    },
  ],
  cta: {
    title: 'Your project could be next',
    subtitle: "Tell us what you'd like to build: we'll assess the best solution together.",
    buttonLabel: 'Contact us',
    buttonPath: '/contatti',
  },
};

const portfolioContentByLang: Record<Language, typeof it> = { it, en };

export function getPortfolioContent(language: Language) {
  return portfolioContentByLang[language];
}
