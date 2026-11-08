import type { Localized } from './company';

type PageText = [slug: string, title: string, description: string];

type Copy = {
  pages: Record<'home' | 'services' | 'works' | 'about' | 'contact' | 'privacy' | 'missing', PageText>;
  brand: string;
  sector: string;
  preview: string;
  previewText: string;
  skip: string;
  nav: string;
  language: string;
  menu: string;
  quote: string;
  call: string;
  learn: string;
  allServices: string;
  allWorks: string;
  overview: string;
  homeHero: [string, string, string];
  heroAlt: string;
  imageNote: string;
  section: { services: string; works: string; about: string; process: string; contact: string };
  serviceNote: string;
  scope: string;
  projectNote: string;
  demo: string;
  empty: string;
  before: string;
  after: string;
  approachTitle: string;
  approachText: string;
  approach: [string, string][];
  processTitle: string;
  steps: [string, string][];
  contactTitle: string;
  contactText: string;
  contactPerson: string;
  details: [string, string, string, string, string];
  form: {
    title: string; name: string; phone: string; email: string; work: string; choose: string; other: string;
    message: string; hint: string; consent: string; privacyLink: string; submit: string;
    disabled: string; sending: string; success: string; error: string; required: string;
  };
  privacyDraft: string;
  policy: [string, string][];
  missing: string;
  back: string;
};

export const copy: Localized<Copy> = {
  et: {
    pages: {
      home: ['', 'Ehitus- ja renoveerimistööd Eestis', 'Ehitus, remont ja siseviimistlus Eestis. Tutvu tööde liikide ja näidetega ning vaata, kuidas ehitusprojekti kavandada.'],
      services: ['teenused', 'Ehitusteenused', 'Üldehituse, koduremondi, siseviimistluse, fassaadi, katuse ja rekonstrueerimise tööde ülevaade.'],
      works: ['tood', 'Projektid', 'Vaata enne ja pärast, kuidas võiksid muutuda soojustatud kivimaja, remonditud korter ning uue fassaadi ja katusega puitmaja.'],
      about: ['meist', 'Meist', 'Ehituse, fassaaditööde ja remondi kavandamine Eestis. Täpsustame tööde ulatust ja järjekorda enne alustamist.'],
      contact: ['kontakt', 'Kontakt ja hinnapäring', 'Vaata kontaktandmeid ning loe, milline info aitab sinu ehitus- või remondiprojekti hinnata.'],
      privacy: ['privaatsus', 'Privaatsuspoliitika', 'Kuidas käsitletakse ehituspäringute andmeid ja salvestatakse keelevalik.'],
      missing: ['404', 'Lehte ei leitud', 'Valitud leht puudub. Mine avalehele või vaata ehitusteenuseid.'],
    },
    brand: 'Ehitusettevõte',
    sector: 'EHITUS JA RENOVEERIMINE',
    preview: 'Demo',
    previewText: 'Projektipildid on illustratiivsed.',
    skip: 'Liigu põhisisu juurde',
    nav: 'Põhinavigatsioon',
    language: 'Keel',
    menu: 'Menüü',
    quote: 'Küsi pakkumist',
    call: 'Helista meile',
    learn: 'Vaata lähemalt',
    allServices: 'Kõik teenused',
    allWorks: 'Vaata projekte',
    overview: 'Vali töö, millest soovid rohkem teada. Konkreetne tööde ulatus sõltub hoone seisukorrast ja projektist.',
    homeHero: ['Professionaalsed ehitus- ja renoveerimistööd Eestis', 'Fassaadi soojustamine, kodu remont ja siseviimistlus. Lepime tööde ulatuse kokku enne alustamist.', 'EHITUS · FASSAADID · REMONT'],
    heroAlt: 'Mändide vahel asuv moodne puitmaja tumeda katusega',
    imageNote: 'Illustratiivne pilt',
    section: { services: 'MIDA TEEME', works: 'ENNE JA PÄRAST', about: 'MEIE LÄHENEMINE', process: 'TÖÖDE KÄIK', contact: 'VÕTA ÜHENDUST' },
    serviceNote: 'Teenuste nimekiri on esialgne.',
    scope: 'Mida töö võib hõlmata',
    projectNote: 'Näidisprojektide enne ja pärast pildid on loodud tehisintellektiga.',
    demo: 'NÄIDISPROJEKT',
    empty: 'Projektide fotod lisatakse hiljem.',
    before: 'Enne',
    after: 'Pärast',
    approachTitle: 'Selged kokkulepped enne töö algust',
    approachText: 'Hea lähteülesanne kirjeldab nii soovitud tulemust kui ka seda, millised tööd hinnapakkumisse kuuluvad. Nii on lihtsam võrrelda lahendusi ja hinnata muudatuste mõju.',
    approach: [
      ['Tööde piiritlus', 'Paneme kirja tööd, materjalid ja otsused, mis tuleb enne alustamist teha.'],
      ['Etappide järjekord', 'Vaatame, millised tööd peavad valmima enne järgmise etapi algust.'],
      ['Muudatuste arutamine', 'Kui töö käigus ilmneb uus asjaolu, arutame selle mõju mahule ja ajakavale.'],
    ],
    processTitle: 'Kuidas töö käib',
    steps: [
      ['Võta ühendust', 'Kirjelda lühidalt objekti ja soovitud tulemust.'],
      ['Arutame projekti', 'Täpsustame tööde ulatust, olemasolevat olukorda ja ajaraami.'],
      ['Koostame pakkumise', 'Paneme kokku tööde kirjelduse ja hinna.'],
      ['Teeme tööd', 'Viime kokkulepitud tööd ellu ning vaatame tulemuse koos üle.'],
    ],
    contactTitle: 'Räägime sinu projektist',
    contactText: 'Lisa päringusse objekti asukoht, tööde lühikirjeldus ja soovitud ajaraam.',
    contactPerson: 'Projektide kontakt',
    details: ['Telefon', 'E-post', 'Aadress', 'Teeninduspiirkond', 'Registrikood'],
    form: {
      title: 'Hinnapäring', name: 'Nimi', phone: 'Telefon', email: 'E-post', work: 'Töö liik', choose: 'Vali töö liik', other: 'Muu töö või mitu tööliiki',
      message: 'Sõnum', hint: 'Kirjelda objekti ja soovitud töid. Ära lisa tundlikke andmeid.',
      consent: 'Olen tutvunud', privacyLink: 'privaatsuspoliitikaga', submit: 'Saada päring',
      disabled: 'Vorm ei ole ühendatud. Päringut ei saa siin praegu saata.', sending: 'Saadame päringut…',
      success: 'Päring saadeti. Aitäh!', error: 'Päringu saatmine ei õnnestunud. Proovi uuesti või kasuta kontaktandmeid.', required: 'Tärniga väljad on kohustuslikud.',
    },
    privacyDraft: 'Privaatsuspoliitika kavand. Vastutava töötleja andmed, õiguslikud alused ja säilitustähtajad tuleb enne vormi avamist kinnitada.',
    policy: [
      ['Vastutav töötleja', 'Isikuandmeid töötleb allpool toodud ettevõte. Andmete kohta saad esitada küsimusi ettevõtte e-posti aadressil.'],
      ['Päringu andmed ja eesmärk', 'Päring sisaldab nime, telefoni, e-posti aadressi, töö liiki ja sõnumit. Kasutame neid andmeid vastamiseks, projekti arutamiseks ja pakkumise koostamiseks.'],
      ['Vormiteenus', 'Ühendatud vormi korral edastatakse päring töötlemiseks Formspree kaudu. Teenuse tingimused, andmete asukoht ja võimalikud edastused tuleb üle vaadata enne vormi avamist.'],
      ['Keelevalik ja majutus', 'Brauserisse salvestatakse valitud keel. Veebimajutuse teenus võib tavapäraseks käitamiseks ja turvalisuseks töödelda tehnilisi päringuandmeid.'],
      ['Sinu õigused', 'Võid küsida juurdepääsu andmetele, nende parandamist või kustutamist ning seaduses ette nähtud juhtudel töötlemise piiramist või andmete ülekandmist. Kaebuse saab esitada Andmekaitse Inspektsioonile.'],
    ],
    missing: 'Sellel aadressil pole lehte. Vali avaleht või tutvu tööde loeteluga.',
    back: 'Tagasi avalehele',
  },
  ru: {
    pages: {
      home: ['', 'Строительство и ремонт в Эстонии', 'Строительные и ремонтные работы в Эстонии. Виды работ, примеры до и после, этапы подготовки строительного проекта.'],
      services: ['uslugi', 'Строительные услуги', 'Общестроительные работы, ремонт, внутренняя отделка, фасады, кровля и реконструкция.'],
      works: ['raboty', 'Портфолио', 'Утепление каменного дома, ремонт квартиры и обновление деревянного фасада. Посмотрите, как могут измениться объекты после работ.'],
      about: ['o-kompanii', 'О компании', 'Строительство, фасадные работы и ремонт в Эстонии. Объём и порядок работ обсуждаем до начала проекта.'],
      contact: ['kontakty', 'Контакты и запрос сметы', 'Контактные данные и список сведений, которые помогут оценить ваш проект строительства или ремонта.'],
      privacy: ['konfidencialnost', 'Политика конфиденциальности', 'Как обрабатываются данные из заявок и сохраняется выбор языка.'],
      missing: ['404', 'Страница не найдена', 'Откройте главную страницу или список строительных услуг.'],
    },
    brand: 'Строительная компания',
    sector: 'СТРОИТЕЛЬСТВО И РЕМОНТ',
    preview: 'Демо',
    previewText: 'Изображения проектов иллюстративные.',
    skip: 'Перейти к содержанию',
    nav: 'Основная навигация',
    language: 'Язык',
    menu: 'Меню',
    quote: 'Запросить смету',
    call: 'Позвонить нам',
    learn: 'Подробнее',
    allServices: 'Все услуги',
    allWorks: 'Смотреть проекты',
    overview: 'Выберите интересующий вид работ. Конкретный объём зависит от состояния объекта и требований проекта.',
    homeHero: ['Профессиональное строительство и ремонт в Эстонии', 'Утепление фасадов, ремонт домов и квартир, внутренняя отделка. Согласовываем объём работ до начала проекта.', 'СТРОИТЕЛЬСТВО · ФАСАДЫ · РЕМОНТ'],
    heroAlt: 'Современный деревянный дом с тёмной крышей среди сосен',
    imageNote: 'Иллюстрация',
    section: { services: 'ЧЕМ ЗАНИМАЕМСЯ', works: 'ДО И ПОСЛЕ', about: 'НАШ ПОДХОД', process: 'ЭТАПЫ РАБОТЫ', contact: 'СВЯЖИТЕСЬ С НАМИ' },
    serviceNote: 'Предварительный перечень услуг.',
    scope: 'Что может входить в работы',
    projectNote: 'Изображения «до и после» в примерах проектов созданы с помощью ИИ.',
    demo: 'ПРИМЕР ПРОЕКТА',
    empty: 'Фотографии объектов появятся позже.',
    before: 'До',
    after: 'После',
    approachTitle: 'Договариваемся об объёме до начала работ',
    approachText: 'В задании стоит описать желаемый результат и перечислить работы, которые должны войти в смету. Это помогает сравнить решения и оценить последствия изменений.',
    approach: [
      ['Объём работ', 'Фиксируем работы, материалы и решения, которые нужно принять перед началом.'],
      ['Очередность этапов', 'Определяем, какие работы нужно закончить перед переходом к следующему этапу.'],
      ['Обсуждение изменений', 'Если возникают новые обстоятельства, обсуждаем, как они повлияют на объём и сроки.'],
    ],
    processTitle: 'Как мы работаем',
    steps: [
      ['Вы связываетесь с нами', 'Кратко опишите объект и результат, который хотите получить.'],
      ['Обсуждаем проект', 'Уточняем объём работ, состояние объекта и желаемые сроки.'],
      ['Готовим предложение', 'Составляем перечень работ и рассчитываем стоимость.'],
      ['Выполняем работы', 'Выполняем согласованные работы и вместе осматриваем результат.'],
    ],
    contactTitle: 'Обсудим ваш проект',
    contactText: 'Укажите местоположение объекта, краткое описание работ и желаемые сроки.',
    contactPerson: 'Контакт по проектам',
    details: ['Телефон', 'Электронная почта', 'Адрес', 'Регион обслуживания', 'Регистрационный номер'],
    form: {
      title: 'Запрос сметы', name: 'Имя', phone: 'Телефон', email: 'Электронная почта', work: 'Вид работ', choose: 'Выберите вид работ', other: 'Другой вид или несколько видов работ',
      message: 'Сообщение', hint: 'Опишите объект и нужные работы. Не указывайте чувствительные данные.',
      consent: 'Я ознакомился(-ась) с', privacyLink: 'политикой конфиденциальности', submit: 'Отправить запрос',
      disabled: 'Форма не подключена. Сейчас отправить запрос через сайт нельзя.', sending: 'Отправляем запрос…',
      success: 'Запрос отправлен. Спасибо!', error: 'Не удалось отправить запрос. Повторите попытку или воспользуйтесь контактными данными.', required: 'Поля со звёздочкой обязательны.',
    },
    privacyDraft: 'Проект политики. До запуска формы необходимо подтвердить данные оператора, правовые основания обработки и сроки хранения.',
    policy: [
      ['Оператор персональных данных', 'Данные обрабатывает компания, указанная ниже. Вопросы об обработке можно направить на её электронную почту.'],
      ['Данные заявки и цель обработки', 'Заявка включает имя, телефон, электронную почту, вид работ и сообщение. Эти сведения используются, чтобы ответить, обсудить проект и подготовить предложение.'],
      ['Сервис форм', 'Если форма подключена, заявка передаётся через Formspree. Перед подключением нужно проверить условия сервиса, расположение данных и возможную передачу в другие страны.'],
      ['Язык и хостинг', 'Браузер сохраняет выбранный язык. Хостинг может обрабатывать технические данные запросов для работы и безопасности сайта.'],
      ['Ваши права', 'Вы можете запросить доступ, исправление или удаление данных, а в предусмотренных законом случаях — ограничение обработки или переносимость данных. Жалобу можно подать в Инспекцию по защите данных Эстонии.'],
    ],
    missing: 'По этому адресу нет страницы. Вернитесь на главную или откройте список услуг.',
    back: 'На главную',
  },
  en: {
    pages: {
      home: ['', 'Construction and renovation in Estonia', 'Construction and renovation in Estonia. Explore building services, before and after examples and the steps involved in planning a project.'],
      services: ['services', 'Construction services', 'Explore general construction, home renovation, interior finishing, façade work, roofing and reconstruction.'],
      works: ['projects', 'Portfolio', 'Explore before and after examples of rendered wall insulation, an apartment renovation and a timber house with renewed cladding and roofing.'],
      about: ['about', 'About us', 'Building, façade work and renovation in Estonia, with the scope and sequence agreed before work starts.'],
      contact: ['contact', 'Contact and quote requests', 'Find contact details and see what to include when asking for an estimate for construction or renovation.'],
      privacy: ['privacy', 'Privacy policy', 'How enquiries are handled and how the site stores your choice of language.'],
      missing: ['404', 'Page not found', 'Return to the homepage or browse construction services.'],
    },
    brand: 'Construction Company',
    sector: 'CONSTRUCTION & RENOVATION',
    preview: 'Demo',
    previewText: 'Project images are illustrative.',
    skip: 'Skip to content',
    nav: 'Main navigation',
    language: 'Language',
    menu: 'Menu',
    quote: 'Request a quote',
    call: 'Call us',
    learn: 'Learn more',
    allServices: 'All services',
    allWorks: 'View projects',
    overview: 'Choose a type of work to explore. The scope depends on the condition of the property and the requirements of your project.',
    homeHero: ['Professional construction and renovation in Estonia', 'External wall insulation, home renovations and interior finishing. We agree the scope before work starts.', 'CONSTRUCTION · FAÇADES · RENOVATION'],
    heroAlt: 'Modern timber house with a dark roof among pine trees',
    imageNote: 'Illustrative image',
    section: { services: 'WHAT WE DO', works: 'BEFORE & AFTER', about: 'OUR APPROACH', process: 'THE PROCESS', contact: 'GET IN TOUCH' },
    serviceNote: 'Provisional list of services.',
    scope: 'What the work may include',
    projectNote: 'The before and after images in these project examples were generated with AI.',
    demo: 'ILLUSTRATIVE PROJECT',
    empty: 'Project photos will be added later.',
    before: 'Before',
    after: 'After',
    approachTitle: 'Agree the scope before work starts',
    approachText: 'A clear brief describes the result you want and the work the quote should cover. That makes it easier to compare options and understand the impact of changes.',
    approach: [
      ['Scope of work', 'Record the work, materials and decisions needed before starting.'],
      ['Sequence of work', 'Identify what needs to be finished before the next stage starts.'],
      ['Discussing changes', 'If something new comes up during the work, discuss how it affects the scope and schedule.'],
    ],
    processTitle: 'How we work',
    steps: [
      ['Get in touch', 'Tell us a little about the property and the result you want.'],
      ['Discuss the project', 'We clarify the scope, existing conditions and preferred timeframe.'],
      ['Prepare a quote', 'We put together a description of the work and the price.'],
      ['Carry out the work', 'We complete the agreed work and review the result with you.'],
    ],
    contactTitle: 'Let’s talk about your project',
    contactText: 'Include the property’s location, a short description of the work and your preferred timeframe.',
    contactPerson: 'Project contact',
    details: ['Phone', 'Email', 'Address', 'Service area', 'Registration number'],
    form: {
      title: 'Quote request', name: 'Name', phone: 'Phone', email: 'Email', work: 'Type of work', choose: 'Choose a type of work', other: 'Other or multiple types of work',
      message: 'Message', hint: 'Describe the property and the work you need. Leave out sensitive information.',
      consent: 'I have read the', privacyLink: 'privacy policy', submit: 'Send enquiry',
      disabled: 'The form is offline. Enquiries cannot be submitted here yet.', sending: 'Sending your enquiry…',
      success: 'Your enquiry was sent. Thank you!', error: 'Your enquiry could not be sent. Try again or use the contact details.', required: 'Fields marked with an asterisk are required.',
    },
    privacyDraft: 'Draft policy. Confirm the data controller, legal basis and retention periods before enabling the form.',
    policy: [
      ['Data controller', 'The company listed below handles personal data. You can contact the company by email with questions about how your data is used.'],
      ['Enquiry data and purpose', 'An enquiry contains your name, phone number, email, type of work and message. This information is used to reply, discuss the project and prepare a quote.'],
      ['Form provider', 'When the form is connected, enquiries are processed through Formspree. Review its terms, data locations and any transfers before enabling the form.'],
      ['Language preference and hosting', 'Your browser stores the selected language. The hosting service may process technical request data to operate and secure the website.'],
      ['Your rights', 'You can request access, correction or deletion and, where applicable, restriction of processing or data portability. You can lodge a complaint with the Estonian Data Protection Inspectorate.'],
    ],
    missing: 'There is no page at this address. Return to the homepage or browse the services.',
    back: 'Back to home',
  },
};
