import type { Language } from '../i18n/LanguageContext';

const it = {
  eyebrow: 'Contatti',
  title: 'Parliamo del tuo progetto',
  subtitle: 'Raccontaci cosa vuoi realizzare: ti rispondiamo il prima possibile.',
  successTitle: 'Messaggio inviato',
  successText: "Grazie, ti risponderemo al più presto all'indirizzo che ci hai lasciato.",
  form: {
    nomeLabel: 'Nome e cognome',
    emailLabel: 'Email',
    aziendaLabel: 'Azienda (opzionale)',
    messaggioLabel: 'Messaggio',
    submitLabel: 'Invia messaggio',
    loadingLabel: 'Invio in corso...',
  },
  privacy: {
    title: 'Informativa breve sulla privacy',
    text1:
      'I dati contrassegnati come obbligatori sono necessari per poterLe fornire le informazioni o i servizi richiesti. In loro assenza, non sarà possibile dare seguito al Suo messaggio.',
    text2Prefix: 'Per maggiori dettagli sulle modalità di trattamento e sui Suoi diritti,',
    linkLabel: 'clicca qui',
    text2Suffix: "per l'informativa estesa.",
  },
  error: {
    prefix: "Si è verificato un errore durante l'invio. Riprova più tardi o scrivici direttamente a",
    captchaMissing: 'Conferma di non essere un robot prima di inviare il messaggio.',
  },
  sidebar: {
    emailLabel: 'Email',
    officeLabel: 'Sede legale',
  },
  email: {
    subject: (nome: string) => `Nuovo contatto dal sito - ${nome}`,
    body: (params: { nome: string; azienda: string; email: string; messaggio: string }) =>
      `
Salve, sono ${params.nome}${params.azienda ? ` dallo Studio/Azienda ${params.azienda}` : ''}, la contatto tramite il form del sito Restainup.

Email: ${params.email}

Messaggio:
${params.messaggio}
      `.trim(),
  },
};

const en: typeof it = {
  eyebrow: 'Contact',
  title: "Let's talk about your project",
  subtitle: "Tell us what you'd like to build: we'll get back to you as soon as possible.",
  successTitle: 'Message sent',
  successText: "Thank you, we'll get back to you as soon as possible at the address you provided.",
  form: {
    nomeLabel: 'Full name',
    emailLabel: 'Email',
    aziendaLabel: 'Company (optional)',
    messaggioLabel: 'Message',
    submitLabel: 'Send message',
    loadingLabel: 'Sending...',
  },
  privacy: {
    title: 'Brief privacy notice',
    text1:
      "The data marked as mandatory is necessary to provide you with the information or services requested. Without it, we won't be able to follow up on your message.",
    text2Prefix: 'For more details on how your data is processed and your rights,',
    linkLabel: 'click here',
    text2Suffix: 'for the full privacy policy.',
  },
  error: {
    prefix: 'An error occurred while sending your message. Please try again later or email us directly at',
    captchaMissing: 'Please confirm the reCAPTCHA before sending your message.',
  },
  sidebar: {
    emailLabel: 'Email',
    officeLabel: 'Registered office',
  },
  email: {
    subject: (nome: string) => `New contact from the website - ${nome}`,
    body: (params: { nome: string; azienda: string; email: string; messaggio: string }) =>
      `
Hello, I'm ${params.nome}${params.azienda ? ` from ${params.azienda}` : ''}, contacting you through the Restainup website form.

Email: ${params.email}

Message:
${params.messaggio}
      `.trim(),
  },
};

const contattiContentByLang: Record<Language, typeof it> = { it, en };

export function getContattiContent(language: Language) {
  return contattiContentByLang[language];
}
