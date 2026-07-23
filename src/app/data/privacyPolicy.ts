import type { Language } from '../i18n/LanguageContext';

const it = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  intro: {
    before: "La presente informativa è resa ai sensi dell'art. 13 del Regolamento UE 679/2016 a chi accede al sito web della Società Resta in up S.r.l. (",
    linkLabel: 'www.restainup.it',
    after: ') e compila il form "contatti" autorizzando la stessa Società al trattamento dei propri dati personali.',
  },
  sections: {
    contactInfo: {
      heading: 'Informazioni di contatto',
      p1: 'Titolare del trattamento per la protezione dei dati è la Società Resta in up S.r.l. con sede legale in Milano, Via Savona n. 2/A | CF 09958630965 P.IVA 9958630965.',
      p2Prefix: "Per ogni chiarimento o esercizio dei diritti dell'utente il Titolare può essere contattato al seguente indirizzo mail:",
      email: 'privacy@restainup.it',
    },
    purpose: {
      heading: 'Finalità del trattamento e Base giuridica',
      p1: "I dati personali forniti dagli utenti sono utilizzati al solo fine di elaborare e dare seguito alle loro richieste, e sono trattati lecitamente per dar corso all'esecuzione di misure precontrattuali (art. 6 par. 1 lett. b) del Regolamento 679/2016).",
    },
    dataNature: {
      heading: 'Natura del conferimento dei dati e conseguente di un eventuale rifiuto',
      p1: "Il conferimento dei dati è facoltativo. Il rifiuto a fornire i dati comporta l'impossibilità di elaborare e dar seguito alle richieste pervenute.",
    },
    processing: {
      heading: 'Modalità del Trattamento',
      p1: "Nell'ambito della finalità sopra indicata, il trattamento dei Suoi dati avverrà con strumenti elettronici, nel rispetto delle disposizioni normative in materia di Trattamento dei dati personali, adottando le misure di sicurezza adeguate. Il Trattamento dei Suoi dati sarà gestito da personale appositamente formato ed istruito.",
    },
    recipients: {
      heading: 'Destinatari dei dati',
      p1: 'I dati personali forniti dagli utenti non verranno in alcun modo diffusi a terzi. Potranno essere comunicati a dipendenti e collaboratori del Titolare che li tratteranno nel rispetto delle istruzioni impartite dal Titolare stesso.',
    },
    retention: {
      heading: 'Conservazione dei dati',
      p1: 'I dati personali degli utenti saranno trattati per il tempo necessario ad adempiere alla finalità indicata.',
    },
    rights: {
      heading: "Diritti dell'interessato",
      p1: 'Ai sensi degli articoli 13, comma 2, e da 15 a 21 del Regolamento, La informiamo che in merito al trattamento dei Suoi dati personali Lei potrà esercitare i seguenti diritti:',
      list: [
        "L'accesso, nei casi previsti;",
        "La rettifica dei dati inesatti e l'integrazione di quelli incompleti;",
        'La cancellazione dei dati;',
        'La limitazione di trattamento;',
        "L'opposizione al trattamento.",
      ],
      p2: 'Tutti i diritti elencati potranno da Lei essere esercitati scrivendo all\'indirizzo di posta elettronica sopra citato.',
      p3Prefix: 'Nel caso ritenga che il trattamento dei Suoi dati violi le disposizioni contenute nel Regolamento, Lei ha diritto di opporre reclamo al Garante per la protezione dei dati personali (',
      linkLabel: 'www.garanteprivacy.it',
      p3Suffix: ').',
    },
    cookiePolicyRef: {
      heading: 'Cookie Policy',
      prefix: 'Questa Applicazione fa utilizzo di Strumenti di Tracciamento. Per saperne di più, l\'Utente può consultare la',
      linkLabel: 'Cookie Policy',
      suffix: '.',
    },
  },
};

const en: typeof it = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  intro: {
    before: 'This notice is provided pursuant to Article 13 of EU Regulation 679/2016 to anyone who accesses the website of Resta in up S.r.l. (',
    linkLabel: 'www.restainup.it',
    after: ') and fills in the "contact" form, thereby authorizing the Company to process their personal data.',
  },
  sections: {
    contactInfo: {
      heading: 'Contact Information',
      p1: 'The Data Controller for data protection is Resta in up S.r.l., with registered office in Milan, Via Savona n. 2/A | Tax Code 09958630965, VAT No. 9958630965.',
      p2Prefix: 'For any clarification or to exercise your rights as a user, the Data Controller can be contacted at the following email address:',
      email: 'privacy@restainup.it',
    },
    purpose: {
      heading: 'Purpose of Processing and Legal Basis',
      p1: 'The personal data provided by users is used solely to process and follow up on their requests, and is lawfully processed to carry out pre-contractual measures (Art. 6(1)(b) of Regulation 679/2016).',
    },
    dataNature: {
      heading: 'Nature of Data Provision and Consequences of Refusal',
      p1: 'Providing data is optional. Refusing to provide data makes it impossible to process and follow up on the requests received.',
    },
    processing: {
      heading: 'Processing Methods',
      p1: 'For the purpose indicated above, your data will be processed using electronic tools, in compliance with the regulatory provisions on the processing of personal data, adopting adequate security measures. The processing of your data will be handled by staff specifically trained and instructed for this purpose.',
    },
    recipients: {
      heading: 'Data Recipients',
      p1: 'The personal data provided by users will never be disclosed to third parties. It may be communicated to employees and collaborators of the Data Controller, who will process it in compliance with the instructions given by the Data Controller.',
    },
    retention: {
      heading: 'Data Retention',
      p1: "Users' personal data will be processed for the time necessary to fulfill the purpose indicated.",
    },
    rights: {
      heading: 'Rights of the Data Subject',
      p1: 'Pursuant to Articles 13(2) and 15 to 21 of the Regulation, we inform you that with regard to the processing of your personal data you may exercise the following rights:',
      list: [
        'Access, where applicable;',
        'Rectification of inaccurate data and completion of incomplete data;',
        'Erasure of data;',
        'Restriction of processing;',
        'Objection to processing.',
      ],
      p2: 'All the rights listed above may be exercised by writing to the email address mentioned above.',
      p3Prefix: 'If you believe that the processing of your data violates the provisions contained in the Regulation, you have the right to lodge a complaint with the Data Protection Authority (',
      linkLabel: 'www.garanteprivacy.it',
      p3Suffix: ').',
    },
    cookiePolicyRef: {
      heading: 'Cookie Policy',
      prefix: 'This Application uses Tracking Tools. To learn more, the User can consult the',
      linkLabel: 'Cookie Policy',
      suffix: '.',
    },
  },
};

const privacyPolicyContentByLang: Record<Language, typeof it> = { it, en };

export function getPrivacyPolicyContent(language: Language) {
  return privacyPolicyContentByLang[language];
}
