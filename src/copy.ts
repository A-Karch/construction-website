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
  whatsapp: string;
  photos: string;
  viewPhoto: string;
  closePhoto: string;
  similarProject: string;
  relatedWork: string;
  facadeTitle: string;
  facadeText: string;
  aboutIntro: string;
  faqTitle: string;
  faq: [string, string][];
  overview: string;
  homeHero: [string, string, string];
  heroAlt: string;
  imageNote: string;
  section: { services: string; works: string; about: string; process: string; contact: string };
  serviceNote: string;
  scope: string;
  empty: string;
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
    invalidRequired: string; invalidEmail: string;
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
      works: ['tood', 'Projektid', 'Fotod katuseehitusest, siseseinte plaatimisest ning puitterrassi ja astmete paigaldusest.'],
      about: ['meist', 'Meist', 'Ehituse, fassaaditööde ja remondi kavandamine Eestis. Täpsustame tööde ulatust ja järjekorda enne alustamist.'],
      contact: ['kontakt', 'Kontakt ja hinnapäring', 'Vaata kontaktandmeid ning loe, milline info aitab sinu ehitus- või remondiprojekti hinnata.'],
      privacy: ['privaatsus', 'Privaatsuspoliitika', 'Kuidas käsitletakse ehituspäringute andmeid ja salvestatakse keelevalik.'],
      missing: ['404', 'Lehte ei leitud', 'Valitud leht puudub. Mine avalehele või vaata ehitusteenuseid.'],
    },
    brand: 'Ehitusettevõte',
    sector: 'EHITUS JA RENOVEERIMINE',
    preview: 'Demo',
    previewText: 'Veebilehe eelvaade.',
    skip: 'Liigu põhisisu juurde',
    nav: 'Põhinavigatsioon',
    language: 'Keel',
    menu: 'Menüü',
    quote: 'Küsi pakkumist',
    call: 'Helista meile',
    learn: 'Vaata lähemalt',
    allServices: 'Kõik teenused',
    allWorks: 'Vaata projekte',
    whatsapp: 'Kirjuta WhatsAppis',
    photos: 'fotot',
    viewPhoto: 'Vaata fotot suuremalt',
    closePhoto: 'Sulge foto',
    similarProject: 'Arutame sarnast projekti',
    relatedWork: 'Vaata tööde kirjeldust',
    facadeTitle: 'Fassaadi soojustamine ja viimistlus',
    facadeText: 'Soojustusplaadid, armeeritud krohvikiht ja viimistluskrohv moodustavad tervikliku süsteemi. Enne lahenduse valikut vaatame üle aluspinna, sokli ja aknaümbrused.',
    aboutIntro: 'DISILENA OÜ tegeleb ehituse, fassaadide ja remondiga Eestis. Alustame sinu soovidest ja hoone seisukorrast ning paneme nende põhjal paika tööde ulatuse ja järjekorra.',
    faqTitle: 'Enne tööde alustamist',
    faq: [
      ['Mida hinnapäringusse kirjutada?', 'Lisa objekti asukoht, tööde kirjeldus, ligikaudne pindala ja soovitud ajaraam. Märgi ka, kas ruume kasutatakse tööde ajal.'],
      ['Millest sõltub tööde hind?', 'Hinda mõjutavad tööde maht, aluspinna seisukord, materjalid ja ligipääs objektile. Pakkumises tuleb täpsustada, millised tööd ja materjalid hinna sisse kuuluvad.'],
      ['Kuidas valida fassaadi soojustust?', 'Sobiv lahendus sõltub seina ehitusest, aluspinnast ja hoone projektist. Arutame soojustust koos sokli, aknaümbruste ja viimistlusega.'],
      ['Kas remonti saab jagada etappideks?', 'Jah, etappide võimalust saab arutada tööde planeerimisel. Oluline on arvestada ruumide kasutamise, tolmu tekitavate tööde ja järgmiste etappide eeldustega.'],
    ],
    overview: 'Vali töö, millest soovid rohkem teada. Konkreetne tööde ulatus sõltub hoone seisukorrast ja projektist.',
    homeHero: ['Professionaalsed ehitus- ja renoveerimistööd Eestis', 'Sisekrohvimine MP 75-ga, maalritööd ja laeliistude paigaldus. Samuti fassaadi-, remondi- ja katusetööd.', 'KATUS · KROHV · VIIMISTLUS'],
    heroAlt: 'Maja paigaldatud metallkatuse ja ehitustellingutega',
    imageNote: 'Illustratiivne pilt',
    section: { services: 'MIDA TEEME', works: 'MEIE TÖÖD', about: 'MEIE LÄHENEMINE', process: 'TÖÖDE KÄIK', contact: 'VÕTA ÜHENDUST' },
    serviceNote: 'Teenuste nimekiri on esialgne.',
    scope: 'Mida töö võib hõlmata',
    empty: 'Projektide fotod lisatakse hiljem.',
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
      invalidRequired: 'Täida see väli.', invalidEmail: 'Sisesta kehtiv e-posti aadress.',
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
      works: ['raboty', 'Портфолио', 'Фотографии кровельных работ, внутренней обшивки стен и деревянной террасы со ступенями.'],
      about: ['o-kompanii', 'О компании', 'Строительство, фасадные работы и ремонт в Эстонии. Объём и порядок работ обсуждаем до начала проекта.'],
      contact: ['kontakty', 'Контакты и запрос сметы', 'Контактные данные и список сведений, которые помогут оценить ваш проект строительства или ремонта.'],
      privacy: ['konfidencialnost', 'Политика конфиденциальности', 'Как обрабатываются данные из заявок и сохраняется выбор языка.'],
      missing: ['404', 'Страница не найдена', 'Откройте главную страницу или список строительных услуг.'],
    },
    brand: 'Строительная компания',
    sector: 'СТРОИТЕЛЬСТВО И РЕМОНТ',
    preview: 'Демо',
    previewText: 'Предпросмотр сайта.',
    skip: 'Перейти к содержанию',
    nav: 'Основная навигация',
    language: 'Язык',
    menu: 'Меню',
    quote: 'Запросить смету',
    call: 'Позвонить нам',
    learn: 'Подробнее',
    allServices: 'Все услуги',
    allWorks: 'Смотреть проекты',
    whatsapp: 'Написать в WhatsApp',
    photos: 'фото',
    viewPhoto: 'Увеличить фото',
    closePhoto: 'Закрыть фото',
    similarProject: 'Обсудить похожий проект',
    relatedWork: 'Подробнее об этих работах',
    facadeTitle: 'Утепление и отделка фасадов',
    facadeText: 'Утеплитель, армированный штукатурный слой и декоративная отделка работают как единая система. Перед выбором решения осматриваем основание, цоколь и примыкания к окнам.',
    aboutIntro: 'DISILENA OÜ — строительство, фасадные работы и ремонт в Эстонии. Начинаем с ваших пожеланий и состояния объекта, затем определяем объём и последовательность работ.',
    faqTitle: 'Перед началом работ',
    faq: [
      ['Что указать в запросе сметы?', 'Напишите, где находится объект, какие работы нужны, примерную площадь и желаемые сроки. Укажите, будете ли вы пользоваться помещением во время ремонта.'],
      ['От чего зависит стоимость?', 'На цену влияют объём работ, состояние основания, материалы и доступ к объекту. В предложении важно перечислить работы и материалы, которые входят в стоимость.'],
      ['Как подобрать утепление фасада?', 'Решение зависит от конструкции стены, состояния основания и проекта здания. Утепление рассматриваем вместе с устройством цоколя, оконных примыканий и финишной отделкой.'],
      ['Можно ли разбить ремонт на этапы?', 'Возможность работать по этапам обсуждаем при планировании. Учитываем использование помещений, пыльные работы и то, какие работы нужно закончить перед следующим этапом.'],
    ],
    overview: 'Выберите интересующий вид работ. Конкретный объём зависит от состояния объекта и требований проекта.',
    homeHero: ['Профессиональное строительство и ремонт в Эстонии', 'Внутренняя штукатурка МП-75, малярные работы и поклейка галтелей. Фасады, ремонт и кровельные работы.', 'КРОВЛЯ · ШТУКАТУРКА · ОТДЕЛКА'],
    heroAlt: 'Дом с установленной металлической кровлей и строительными лесами',
    imageNote: 'Иллюстрация',
    section: { services: 'ЧЕМ ЗАНИМАЕМСЯ', works: 'НАШИ РАБОТЫ', about: 'НАШ ПОДХОД', process: 'ЭТАПЫ РАБОТЫ', contact: 'СВЯЖИТЕСЬ С НАМИ' },
    serviceNote: 'Предварительный перечень услуг.',
    scope: 'Что может входить в работы',
    empty: 'Фотографии объектов появятся позже.',
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
      invalidRequired: 'Заполните это поле.', invalidEmail: 'Укажите корректный адрес электронной почты.',
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
      works: ['projects', 'Portfolio', 'Photos of roof installation, interior wall boarding and a timber terrace with steps.'],
      about: ['about', 'About us', 'Building, façade work and renovation in Estonia, with the scope and sequence agreed before work starts.'],
      contact: ['contact', 'Contact and quote requests', 'Find contact details and see what to include when asking for an estimate for construction or renovation.'],
      privacy: ['privacy', 'Privacy policy', 'How enquiries are handled and how the site stores your choice of language.'],
      missing: ['404', 'Page not found', 'Return to the homepage or browse construction services.'],
    },
    brand: 'Construction Company',
    sector: 'CONSTRUCTION & RENOVATION',
    preview: 'Demo',
    previewText: 'Website preview.',
    skip: 'Skip to content',
    nav: 'Main navigation',
    language: 'Language',
    menu: 'Menu',
    quote: 'Request a quote',
    call: 'Call us',
    learn: 'Learn more',
    allServices: 'All services',
    allWorks: 'View projects',
    whatsapp: 'Chat on WhatsApp',
    photos: 'photos',
    viewPhoto: 'Enlarge photo',
    closePhoto: 'Close photo',
    similarProject: 'Discuss a similar project',
    relatedWork: 'Explore this type of work',
    facadeTitle: 'External wall insulation and finishing',
    facadeText: 'Insulation boards, reinforced render and the decorative finish work together as one system. We review the substrate, plinth and window junctions before choosing an approach.',
    aboutIntro: 'DISILENA OÜ brings together construction, façade work and renovation in Estonia. We start with your plans and the condition of the property, then work out the scope and sequence.',
    faqTitle: 'Before work begins',
    faq: [
      ['What should I include in a quote request?', 'Tell us the location, the work you need, the approximate area and your preferred timeframe. Mention whether the property will be occupied during the work.'],
      ['What affects the price?', 'The scope, existing surfaces, materials and access to the site all affect the price. The quote should specify which work and materials are included.'],
      ['How is façade insulation chosen?', 'The choice depends on the wall construction, substrate and building design. We consider insulation alongside plinth details, window junctions and the final finish.'],
      ['Can renovation be carried out in stages?', 'Phasing can be discussed during planning. It needs to account for occupied rooms, dusty work and the tasks that must be finished before the next stage.'],
    ],
    overview: 'Choose a type of work to explore. The scope depends on the condition of the property and the requirements of your project.',
    homeHero: ['Professional construction and renovation in Estonia', 'MP 75 interior plastering, painting and ceiling cornices. Façade work, renovation and roofing.', 'ROOFING · PLASTERING · FINISHING'],
    heroAlt: 'House with an installed metal roof and scaffolding',
    imageNote: 'Illustrative image',
    section: { services: 'WHAT WE DO', works: 'OUR WORK', about: 'OUR APPROACH', process: 'THE PROCESS', contact: 'GET IN TOUCH' },
    serviceNote: 'Provisional list of services.',
    scope: 'What the work may include',
    empty: 'Project photos will be added later.',
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
      invalidRequired: 'Complete this field.', invalidEmail: 'Enter a valid email address.',
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
