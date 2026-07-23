import type { Language } from '../i18n/LanguageContext';

const it = {
  eyebrow: 'Legal',
  title: 'Cookie Policy',
  introTop: [
    "Questo documento contiene informazioni in merito alle tecnologie che consentono a questa Applicazione di raggiungere gli scopi descritti di seguito. Tali tecnologie permettono al Titolare di raccogliere e salvare informazioni (per esempio tramite l'utilizzo di Cookie) o di utilizzare risorse (per esempio eseguendo uno script) sul dispositivo dell'Utente quando quest'ultimo interagisce con questa Applicazione.",
  ],
  introBottom: [
    'Per semplicità, in questo documento tali tecnologie sono sinteticamente definite "Strumenti di Tracciamento", salvo vi sia ragione di differenziare. Per esempio, sebbene i Cookie possano essere usati in browser sia web sia mobili, sarebbe fuori luogo parlare di Cookie nel contesto di applicazioni per dispositivi mobili, dal momento che si tratta di Strumenti di Tracciamento che richiedono la presenza di un browser. Per questo motivo, all\'interno di questo documento il temine Cookie è utilizzato solo per indicare in modo specifico quel particolare tipo di Strumento di Tracciamento.',
    "Alcune delle finalità per le quali vengono impiegati Strumenti di Tracciamento potrebbero, inoltre richiedere il consenso dell'Utente. Se viene prestato il consenso, esso può essere revocato liberamente in qualsiasi momento seguendo le istruzioni contenute in questo documento.",
    'Questa Applicazione utilizza Strumenti di Tracciamento gestiti direttamente dal Titolare (comunemente detti Strumenti di Tracciamento "di prima parte") e Strumenti di Tracciamento che abilitano servizi forniti da terzi (comunemente detti Strumenti di Tracciamento "di terza parte"). Se non diversamente specificato all\'interno di questo documento, tali terzi hanno accesso ai rispettivi Strumenti di Tracciamento.',
    'Durata e scadenza dei Cookie e degli altri Strumenti di Tracciamento simili possono variare a seconda di quanto impostato dal Titolare o da ciascun fornitore terzo. Alcuni di essi scadono al termine della sessione di navigazione dell\'Utente.',
    "In aggiunta a quanto specificato nella descrizione di ciascuna delle categorie di seguito riportate, gli Utenti possono ottenere informazioni più dettagliate ed aggiornate sulla durata, così come qualsiasi altra informazione rilevante – quale la presenza di altri Strumenti di Tracciamento – nelle privacy policy dei rispettivi fornitori terzi (tramite i link messi a disposizione) o contattando il Titolare.",
  ],
  sections: {
    necessary: {
      heading:
        'Attività strettamente necessarie a garantire il funzionamento di questa Applicazione e la fornitura del Servizio',
      p1: 'Questa Applicazione utilizza Cookie comunemente detti "tecnici" o altri Strumenti di Tracciamento analoghi per svolgere attività strettamente necessarie a garantire il funzionamento o la fornitura del Servizio.',
    },
    other: {
      heading: "Altre attività che prevedono l'utilizzo di Strumenti di Tracciamento",
      measurementHeading: 'Misurazione',
      measurementP1:
        "Questa Applicazione utilizza Strumenti di Tracciamento per misurare il traffico e analizzare il comportamento degli Utenti con l'obiettivo di migliorare il Servizio.",
      statisticsHeading: 'Statistica',
      statisticsP1:
        'I servizi contenuti nella presente sezione permettono al Titolare del Trattamento di monitorare e analizzare i dati di traffico e servono a tener traccia del comportamento dell\'Utente.',
      googleAnalytics: {
        title: 'Google Analytics (Google Ireland Limited)',
        p1: "Google Analytics è un servizio di analisi web fornito da Google Ireland Limited (\"Google\"). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l'utilizzo di questa Applicazione, compilare report e condividerli con gli altri servizi sviluppati da Google. Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del proprio network pubblicitario.",
        dataLabel: 'Dati Personali trattati:',
        dataValue: 'Cookie e Dati di utilizzo.',
        locationLabel: 'Luogo del trattamento:',
        locationValue: 'Irlanda – Privacy Policy – Opt Out. Soggetto aderente al Privacy Shield.',
      },
    },
    managePreferences: {
      heading: 'Come gestire le preferenze e prestare o revocare il consenso',
      p1: 'Esistono vari modi per gestire le preferenze relative agli Strumenti di Tracciamento e per prestare o revocare il consenso, ove necessario:',
      p2: "Gli Utenti possono gestire le preferenze relative agli Strumenti di Tracciamento direttamente tramite le impostazioni dei propri dispositivi – per esempio, possono impedire l'uso o l'archiviazione di Strumenti di Tracciamento.",
      p3: "In aggiunta, ogni qualvolta l'utilizzo di Strumenti di Tracciamento dipenda da consenso, l'Utente può prestare o revocare tale consenso impostando le proprie preferenze all'interno dell'informativa sui cookie o aggiornando tali preferenze tramite il widget delle impostazioni di tracciamento, se presente.",
      p4: 'Grazie ad apposite funzioni del browser o del dispositivo è anche possibile rimuovere Strumenti di Tracciamento precedentemente salvati. Altri Strumenti di Tracciamento presenti nella memoria locale del browser possono essere rimossi cancellando la cronologia di navigazione.',
      p5: 'Per quanto riguarda Strumenti di Tracciamento di terza parte, gli Utenti possono gestire le preferenze e revocare il consenso visitando il relativo link di opt out (qualora disponibile), utilizzando gli strumenti descritti nella privacy policy della terza parte o contattandola direttamente.',
      browserSettingsHeading: 'Individuare le impostazioni relative agli Strumenti di Tracciamento',
      browserSettingsP1: 'Gli Utenti possono, per esempio, trovare informazioni su come gestire i Cookie in alcuni dei browser più diffusi:',
      browserSettingsP2:
        'Gli Utenti possono inoltre gestire alcuni Strumenti di Tracciamento per applicazioni mobili disattivandoli tramite le apposite impostazioni del dispositivo, quali le impostazioni di pubblicità per dispositivi mobili o le impostazioni relative al tracciamento in generale (gli Utenti possono consultare le impostazioni del dispositivo per individuare quella pertinente).',
    },
    dataController: {
      heading: 'Titolare del Trattamento dei Dati',
      p1: 'Resta in up Srl Cap. Soc.: € 100.000 | Sede Legale Milano Via Savona n. 2/A | CF 09958630965 P.IVA 09958630965 | REA Mi 2124381',
      p2Prefix: 'Indirizzo email del Titolare:',
      email: 'privacy@restainup.it',
      p3: "Dal momento che l'uso di Strumenti di Tracciamento di terza parte su questa Applicazione non può essere completamente controllato dal Titolare, ogni riferimento specifico a Strumenti di Tracciamento di terza parte è da considerarsi indicativo. Per ottenere informazioni complete, gli Utenti sono gentilmente invitati a consultare la privacy policy dei rispettivi servizi terzi elencati in questo documento.",
      p4: "Data l'oggettiva complessità di identificazione delle tecnologie di tracciamento, gli Utenti sono invitati a contattare il Titolare qualora volessero ricevere ulteriori informazioni in merito all'utilizzo di tali tecnologie su questa Applicazione.",
    },
    legalReferences: {
      heading: 'Riferimenti legali',
      p1: 'La presente informativa privacy è redatta sulla base di molteplici ordinamenti legislativi, inclusi gli artt. 13 e 14 del Regolamento (UE) 2016/679.',
      p2: 'Ove non diversamente specificato, questa informativa privacy riguarda esclusivamente questa Applicazione.',
      lastUpdate: 'Ultima modifica: 18/06/2021',
    },
    cookieNotice: {
      heading: 'Informativa sui cookie',
      p1: 'Questo sito web utilizza i cookie. Utilizziamo i cookie per personalizzare contenuti ed annunci, per fornire funzionalità dei social media e per analizzare il nostro traffico. Condividiamo inoltre informazioni sul modo in cui utilizza il nostro sito con i nostri partner che si occupano di analisi dei dati web, pubblicità e social media, i quali potrebbero combinarle con altre informazioni che ha fornito loro o che hanno raccolto dal suo utilizzo dei loro servizi.',
      p2: "I cookie sono piccoli file di testo che possono essere utilizzati dai siti web per rendere più efficiente l'esperienza per l'utente.",
      p3: 'La legge afferma che possiamo memorizzare i cookie sul suo dispositivo se sono strettamente necessari per il funzionamento di questo sito. Per tutti gli altri tipi di cookie abbiamo bisogno del suo permesso.',
      p4: 'Questo sito utilizza diversi tipi di cookie. Alcuni cookie sono collocate da servizi di terzi che compaiono sulle nostre pagine.',
      p5: 'In qualsiasi momento è possibile modificare o revocare il proprio consenso dalla Dichiarazione dei cookie sul nostro sito Web.',
      p6Prefix: 'Scopra di più su chi siamo, come può contattarci e come trattiamo i dati personali nella nostra',
      p6LinkLabel: 'Informativa sulla privacy',
      p7: 'Specifica l\'ID del tuo consenso e la data di quando ci hai contattati per quanto riguarda il tuo consenso.',
      p8Prefix: 'Il tuo consenso si applica ai seguenti siti web:',
      p8Site: 'www.restainup.it',
    },
  },
  definitionsHeading: 'Definizioni e riferimenti legali',
  definitions: [
    {
      term: 'Dati Personali (o Dati)',
      text: 'Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale, renda identificata o identificabile una persona fisica.',
    },
    {
      term: 'Dati di Utilizzo',
      text: 'Sono le informazioni raccolte automaticamente attraverso questa Applicazione (anche da applicazioni di parti terze integrate in questa Applicazione), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall’Utente che si connette con questa Applicazione, gli indirizzi in notazione URI (Uniform Resource Identifier), l’orario della richiesta, il metodo utilizzato nell’inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all’itinerario seguito all’interno dell’Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all’ambiente informatico dell’Utente.',
    },
    {
      term: 'Utente',
      text: 'L’individuo che utilizza questa Applicazione che, salvo ove diversamente specificato, coincide con l’Interessato.',
    },
    {
      term: 'Interessato',
      text: 'La persona fisica cui si riferiscono i Dati Personali.',
    },
    {
      term: 'Responsabile del Trattamento (o Responsabile)',
      text: 'La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.',
    },
    {
      term: 'Titolare del Trattamento (o Titolare)',
      text: 'La persona fisica o giuridica, l’autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questa Applicazione. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di questa Applicazione.',
    },
    {
      term: 'Questa Applicazione',
      text: 'Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.',
    },
    {
      term: 'Servizio',
      text: 'Il Servizio fornito da questa Applicazione così come definito nei relativi termini (se presenti) su questo sito/applicazione.',
    },
    {
      term: 'Unione Europea (o UE)',
      text: 'Salvo ove diversamente specificato, ogni riferimento all’Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell’Unione Europea e dello Spazio Economico Europeo.',
    },
    {
      term: 'Cookie',
      text: 'I Cookie sono Strumenti di Tracciamento che consistono in piccole porzioni di dati conservate all’interno del browser dell’Utente.',
    },
    {
      term: 'Strumento di Tracciamento',
      text: 'Per Strumento di Tracciamento s’intende qualsiasi tecnologia – es. Cookie, identificativi univoci, web beacons, script integrati, e-tag e fingerprinting – che consenta di tracciare gli Utenti, per esempio raccogliendo o salvando informazioni sul dispositivo dell’Utente.',
    },
  ],
  browsers: ['Google Chrome', 'Mozilla Firefox', 'Apple Safari', 'Microsoft Internet Explorer', 'Microsoft Edge', 'Brave', 'Opera'],
};

const en: typeof it = {
  eyebrow: 'Legal',
  title: 'Cookie Policy',
  introTop: [
    'This document contains information about the technologies that allow this Application to achieve the purposes described below. These technologies allow the Data Controller to collect and store information (for example through the use of Cookies) or to use resources (for example by running a script) on the device of the User while they interact with this Application.',
  ],
  introBottom: [
    'For simplicity, this document refers to these technologies collectively as "Tracking Tools", unless there is a reason to differentiate. For example, while Cookies can be used in both web and mobile browsers, it would be inaccurate to talk about Cookies in the context of mobile applications, as they are Tracking Tools that require the presence of a browser. For this reason, within this document the term Cookie is only used to specifically identify that particular type of Tracking Tool.',
    'Some of the purposes for which Tracking Tools are used may also require the User\'s consent. Where consent is given, it may be freely withdrawn at any time following the instructions provided in this document.',
    'This Application uses Tracking Tools managed directly by the Data Controller (commonly referred to as "first-party" Tracking Tools) and Tracking Tools that enable services provided by third parties (commonly referred to as "third-party" Tracking Tools). Unless otherwise specified within this document, such third parties have access to their respective Tracking Tools.',
    'The duration and expiration of Cookies and other similar Tracking Tools may vary depending on what is set by the Data Controller or each third-party provider. Some of them expire at the end of the User\'s browsing session.',
    'In addition to what is specified in the description of each of the categories below, Users can obtain more detailed and up-to-date information on duration, as well as any other relevant information — such as the presence of other Tracking Tools — in the privacy policies of the respective third-party providers (via the links provided) or by contacting the Data Controller.',
  ],
  sections: {
    necessary: {
      heading: 'Activities strictly necessary for the operation of this Application and the provision of the Service',
      p1: 'This Application uses so-called "technical" Cookies or other similar Tracking Tools to carry out activities that are strictly necessary for the operation or provision of the Service.',
    },
    other: {
      heading: 'Other activities involving the use of Tracking Tools',
      measurementHeading: 'Measurement',
      measurementP1: 'This Application uses Tracking Tools to measure traffic and analyze User behavior with the goal of improving the Service.',
      statisticsHeading: 'Statistics',
      statisticsP1: 'The services contained in this section allow the Data Controller to monitor and analyze traffic data and are used to keep track of User behavior.',
      googleAnalytics: {
        title: 'Google Analytics (Google Ireland Limited)',
        p1: 'Google Analytics is a web analytics service provided by Google Ireland Limited ("Google"). Google uses the Personal Data collected to track and examine the use of this Application, compile reports and share them with other services developed by Google. Google may use the Personal Data to contextualize and personalize the ads of its own advertising network.',
        dataLabel: 'Personal Data processed:',
        dataValue: 'Cookies and Usage Data.',
        locationLabel: 'Place of processing:',
        locationValue: 'Ireland – Privacy Policy – Opt Out. Privacy Shield participant.',
      },
    },
    managePreferences: {
      heading: 'How to manage preferences and grant or withdraw consent',
      p1: 'There are various ways to manage preferences related to Tracking Tools and to grant or withdraw consent, where necessary:',
      p2: 'Users can manage preferences related to Tracking Tools directly through their own device settings — for example, they can prevent the use or storage of Tracking Tools.',
      p3: 'In addition, whenever the use of Tracking Tools depends on consent, the User can grant or withdraw such consent by setting their preferences within the cookie notice or by updating those preferences via the tracking settings widget, if present.',
      p4: 'Thanks to specific browser or device functions, it is also possible to remove previously saved Tracking Tools. Other Tracking Tools stored in the browser\'s local memory can be removed by clearing the browsing history.',
      p5: 'Regarding third-party Tracking Tools, Users can manage preferences and withdraw consent by visiting the relevant opt-out link (where available), using the tools described in the third party\'s privacy policy, or by contacting the third party directly.',
      browserSettingsHeading: 'Locating Tracking Tool settings',
      browserSettingsP1: 'For example, Users can find information on how to manage Cookies in some of the most widely used browsers:',
      browserSettingsP2: 'Users may also manage some Tracking Tools for mobile applications by disabling them via the relevant device settings, such as advertising settings for mobile devices or general tracking settings (Users can check their device settings to locate the relevant one).',
    },
    dataController: {
      heading: 'Data Controller',
      p1: 'Resta in up Srl, Share Capital: €100,000 | Registered Office Milan, Via Savona n. 2/A | Tax Code 09958630965, VAT No. 09958630965 | REA Mi 2124381',
      p2Prefix: 'Data Controller email address:',
      email: 'privacy@restainup.it',
      p3: 'Since the use of third-party Tracking Tools on this Application cannot be fully controlled by the Data Controller, any specific reference to third-party Tracking Tools is to be considered indicative. For complete information, Users are kindly invited to consult the privacy policy of the respective third-party services listed in this document.',
      p4: 'Given the objective complexity involved in identifying tracking technologies, Users are invited to contact the Data Controller should they wish to receive further information on the use of such technologies on this Application.',
    },
    legalReferences: {
      heading: 'Legal References',
      p1: 'This privacy notice is drafted on the basis of multiple legislative frameworks, including Articles 13 and 14 of Regulation (EU) 2016/679.',
      p2: 'Unless otherwise specified, this privacy notice exclusively concerns this Application.',
      lastUpdate: 'Last updated: 18/06/2021',
    },
    cookieNotice: {
      heading: 'Cookie Notice',
      p1: 'This website uses cookies. We use cookies to personalize content and ads, to provide social media features and to analyze our traffic. We also share information about how you use our site with our web analytics, advertising and social media partners, who may combine it with other information you have provided to them or that they have collected from your use of their services.',
      p2: 'Cookies are small text files that websites can use to make the user experience more efficient.',
      p3: 'The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission.',
      p4: 'This site uses several types of cookies. Some cookies are placed by third-party services that appear on our pages.',
      p5: 'You can change or withdraw your consent at any time from the Cookie Declaration on our website.',
      p6Prefix: 'Learn more about who we are, how you can contact us and how we process personal data in our',
      p6LinkLabel: 'Privacy Policy',
      p7: 'Specify your consent ID and the date on which you contacted us regarding your consent.',
      p8Prefix: 'Your consent applies to the following websites:',
      p8Site: 'www.restainup.it',
    },
  },
  definitionsHeading: 'Definitions and Legal References',
  definitions: [
    {
      term: 'Personal Data (or Data)',
      text: 'Any information that, directly or indirectly, also in connection with any other information, including a personal identification number, allows for a natural person to be identified or identifiable.',
    },
    {
      term: 'Usage Data',
      text: 'Information collected automatically through this Application (or through third-party services employed in this Application), including: the IP addresses or domain names of the computers used by the User connecting to this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method used to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server\'s response (successful outcome, error, etc.), the country of origin, the browser and operating system features used by the visitor, the various time details of the visit (e.g. the time spent on each page) and the details about the path followed within the Application, with particular reference to the sequence of pages visited, and other parameters about the device operating system and/or the User\'s IT environment.',
    },
    {
      term: 'User',
      text: 'The individual using this Application who, unless otherwise specified, coincides with the Data Subject.',
    },
    {
      term: 'Data Subject',
      text: 'The natural person to whom the Personal Data refers.',
    },
    {
      term: 'Data Processor (or Processor)',
      text: 'The natural or legal person, public authority, agency or other body which processes personal data on behalf of the Data Controller, as described in this privacy policy.',
    },
    {
      term: 'Data Controller (or Controller)',
      text: 'The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the owner of this Application.',
    },
    {
      term: 'This Application',
      text: 'The hardware or software tool by which the Personal Data of Users is collected and processed.',
    },
    {
      term: 'Service',
      text: 'The service provided by this Application as described in the relative terms (if available) on this site/application.',
    },
    {
      term: 'European Union (or EU)',
      text: 'Unless otherwise specified, all references made within this document to the European Union include all current member states of the European Union and the European Economic Area.',
    },
    {
      term: 'Cookie',
      text: 'Cookies are Tracking Tools consisting of small sets of data stored in the User\'s browser.',
    },
    {
      term: 'Tracking Tool',
      text: 'Tracking Tool refers to any technology — e.g. Cookies, unique identifiers, web beacons, embedded scripts, e-tags and fingerprinting — that enables the tracking of Users, for example by collecting or storing information on the User\'s device.',
    },
  ],
  browsers: ['Google Chrome', 'Mozilla Firefox', 'Apple Safari', 'Microsoft Internet Explorer', 'Microsoft Edge', 'Brave', 'Opera'],
};

const cookiePolicyContentByLang: Record<Language, typeof it> = { it, en };

export function getCookiePolicyContent(language: Language) {
  return cookiePolicyContentByLang[language];
}
