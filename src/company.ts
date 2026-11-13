export const languages = ['et', 'ru', 'en'] as const;
export type Language = typeof languages[number];
export type Localized<T = string> = Record<Language, T>;

type ServiceText = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  scope: string[];
  additionalScope?: { title: string; steps: string[] };
};
export type Service = {
  id: string;
  confirmed: boolean;
  text: Localized<ServiceText>;
};
type Project = {
  id: string;
  serviceId: string;
  location: string;
  photos: { file: string; width: number; height: number; alt: Localized }[];
  text: Localized<{ title: string; category: string; description: string; scope: string[] }>;
};

const services: Service[] = [
  {
    id: 'plastering', confirmed: true,
    text: {
      et: { slug: 'sisekrohvimine-mp75', title: 'Sisekrohvimine MP 75', summary: 'Siseseinte ja lagede krohvimine Knauf MP 75 kipskrohviga.', intro: 'Sisekrohvimine tasandab seinte ja lagede pinda enne järgnevat viimistlust. Enne MP 75 paigaldamist hinnatakse aluspinna sobivust, määratakse vajalik ettevalmistus ning lepitakse kokku viimistluse järgmised etapid.', scope: ['Aluspinna ülevaatus ja ettevalmistamine', 'Nurkade ja liitekohtade ettevalmistus', 'MP 75 krohvi paigaldamine ja tasandamine', 'Pinna ettevalmistus järgmiseks viimistlusetapiks'] },
      ru: { slug: 'vnutrennyaya-shtukaturka-mp75', title: 'Внутренняя штукатурка МП-75', summary: 'Штукатурка внутренних стен и потолков гипсовой смесью Knauf MP 75.', intro: 'Внутренняя штукатурка выравнивает стены и потолки перед последующей отделкой. Перед нанесением MP 75 оцениваем основание, определяем нужную подготовку и согласовываем следующие этапы работ.', scope: ['Осмотр и подготовка основания', 'Подготовка углов и примыканий', 'Нанесение и выравнивание штукатурки MP 75', 'Подготовка поверхности к следующему этапу отделки'] },
      en: { slug: 'interior-plastering-mp75', title: 'Interior plastering with MP 75', summary: 'Interior wall and ceiling plastering with Knauf MP 75 gypsum plaster.', intro: 'Interior plastering levels walls and ceilings before subsequent finishing. Before applying MP 75, we assess the substrate, identify the preparation required and agree the next finishing stages.', scope: ['Inspecting and preparing the substrate', 'Preparing corners and junctions', 'Applying and levelling MP 75 plaster', 'Preparing the surface for the next finishing stage'] },
    },
  },
  {
    id: 'painting', confirmed: true,
    text: {
      et: { slug: 'maalritood', title: 'Maalritööd', summary: 'Seinte ja lagede ettevalmistamine, pahteldamine ning värvimine.', intro: 'Maalritööde ulatus sõltub aluspinna seisukorrast ja soovitud viimistlusest. Vaatame üle pinna parandamise vajaduse ning lepime kokku värvitooni, materjalid ja kaetavad pinnad.', scope: ['Ruumide ja säilitatavate pindade kaitsmine', 'Pahteldamine ja lihvimine vastavalt vajadusele', 'Kruntimine ning seinte ja lagede värvimine', 'Liitekohtade ja servade viimistlemine'] },
      ru: { slug: 'malyarnye-raboty', title: 'Малярные работы', summary: 'Подготовка, шпаклевание и окраска стен и потолков.', intro: 'Объём малярных работ зависит от состояния основания и выбранного финишного покрытия. Осматриваем поверхности, определяем подготовку, согласовываем оттенки и материалы.', scope: ['Защита помещения и сохраняемых поверхностей', 'Шпаклевание и шлифование по состоянию основания', 'Грунтование и окраска стен и потолков', 'Отделка примыканий и краёв'] },
      en: { slug: 'painting', title: 'Painting and decorating', summary: 'Preparing, filling and painting interior walls and ceilings.', intro: 'The scope of painting depends on the substrate and the chosen finish. We inspect the surfaces, identify the preparation needed and agree the colours and materials.', scope: ['Protecting the room and retained surfaces', 'Filling and sanding as required', 'Priming and painting walls and ceilings', 'Finishing edges and junctions'] },
    },
  },
  {
    id: 'cornices', confirmed: true,
    text: {
      et: { slug: 'laeliistude-paigaldus', title: 'Laeliistude paigaldus', summary: 'Dekoratiivsete laeliistude liimimine seinte ja lagede liitekohtadesse.', intro: 'Laeliistud viimistlevad seina ja lae liitekoha. Enne paigaldust lepime kokku liistu profiili ja materjali ning vaatame üle aluspinna ja nurgad.', scope: ['Liistu profiili ja materjali valik', 'Liitekoha ettevalmistamine ja mõõtmine', 'Liistude lõikamine ning liimimine', 'Nurkade ja liitekohtade viimistlemine'] },
      ru: { slug: 'pokleyka-galteley', title: 'Поклейка галтелей', summary: 'Монтаж декоративных потолочных галтелей на стыках стен и потолка.', intro: 'Галтели оформляют примыкание стены к потолку. До монтажа согласовываем профиль и материал, проверяем основание и углы помещения.', scope: ['Подбор профиля и материала галтелей', 'Подготовка и разметка примыканий', 'Подрезка и приклеивание галтелей', 'Отделка углов и стыков'] },
      en: { slug: 'ceiling-cornices', title: 'Ceiling cornice installation', summary: 'Fitting decorative ceiling coving at wall and ceiling junctions.', intro: 'Ceiling cornices finish the junction between the wall and ceiling. Before installation, we agree the profile and material and inspect the substrate and room corners.', scope: ['Choosing the cornice profile and material', 'Preparing and marking the junctions', 'Cutting and bonding the cornices', 'Finishing corners and joints'] },
    },
  },
  {
    id: 'facade', confirmed: false,
    text: {
      et: {
        slug: 'fassaaditood',
        title: 'Fassaaditööd',
        summary: 'Fassaadi uuendamine ja soojustamine krohvitud soojusisolatsiooni liitsüsteemiga (SILS).',
        intro: 'Fassaadi uuendamisel hinnatakse olemasolevat välisviimistlust ja aluspinna seisukorda. Krohvitud soojusisolatsiooni liitsüsteemi puhul kinnitatakse soojustus välisseinale ja kaetakse armeeritud krohvikihiga. Lahendus valitakse seina ehituse ning sokli ja aknaümbruste seisukorra järgi.',
        scope: ['Olemasoleva välisviimistluse hindamine', 'Voodri parandamine või vahetamine vastavalt lahendusele', 'Aknaümbruste ja sokli liitekohtade viimistlemine'],
        additionalScope: {
          title: 'Krohvitud soojustussüsteemi tööetapid',
          steps: [
            'Aluspinna ettevalmistamine ning sokli ja aknaümbruste liitekohtade läbivaatamine',
            'Soojustusplaatide paigaldamine valitud süsteemi järgi',
            'Aluskrohvikihi pealekandmine ja armeerimisvõrgu paigaldamine krohvikihti',
            'Viimistluskrohvi pealekandmine ja liitekohtade viimistlemine',
          ],
        },
      },
      ru: {
        slug: 'fasadnie-raboty',
        title: 'Фасадные работы',
        summary: 'Обновление фасадов и «мокрый фасад» с утеплением, армированием и декоративной штукатуркой.',
        intro: 'Перед обновлением фасада осматривают существующую отделку и основание. В системе «мокрый фасад» утеплитель крепят к наружной стене и покрывают армированным штукатурным слоем. Решение подбирают с учётом устройства стены и состояния цоколя и примыканий к окнам.',
        scope: ['Оценка существующей наружной отделки', 'Ремонт или замена облицовки по проекту', 'Отделка примыканий к окнам и цоколю'],
        additionalScope: {
          title: 'Этапы устройства мокрого фасада',
          steps: [
            'Подготовка основания и проверка примыканий к цоколю и окнам',
            'Монтаж плит утеплителя по требованиям выбранной системы',
            'Нанесение базового штукатурного слоя с армирующей сеткой',
            'Нанесение декоративной штукатурки и финишная отделка примыканий',
          ],
        },
      },
      en: {
        slug: 'facade-work',
        title: 'Façade work',
        summary: 'Façade renovation and rendered external wall insulation (ETICS), from insulation boards to the decorative finish.',
        intro: 'A façade renovation starts with an inspection of the existing finish and substrate. In a rendered external wall insulation system, insulation is fixed to the outside of the wall and covered with reinforced render. The choice of system depends on the wall assembly and the condition of plinth and window junctions.',
        scope: ['Assessing the existing exterior finish', 'Repairing or replacing cladding as specified', 'Finishing window and plinth junctions'],
        additionalScope: {
          title: 'Stages of rendered external wall insulation',
          steps: [
            'Preparing the substrate and reviewing plinth and window junctions',
            'Installing insulation boards to suit the selected system',
            'Applying the base render coat and embedding reinforcing mesh',
            'Applying the decorative render and finishing the junctions',
          ],
        },
      },
    },
  },
  {
    id: 'building', confirmed: false,
    text: {
      et: { slug: 'uldehitus', title: 'Üldehitustööd', summary: 'Hoone põhikonstruktsioonid, vaheseinad ja ehitusetappide koordineerimine.', intro: 'Üldehituse lähtepunkt on projekt ning olemasoleva hoone või krundi seisukord. Tööde järjekord aitab planeerida materjalide tarneid ja järgmiste tegijate ligipääsu.', scope: ['Olemasolevate konstruktsioonide ja projekti ülevaatus', 'Karkassid ja vaheseinad vastavalt projektile', 'Järgmisteks ehitusetappideks vajalikud ettevalmistused'] },
      ru: { slug: 'obshchestroitelnie-raboty', title: 'Общестроительные работы', summary: 'Основные конструкции здания, перегородки и координация этапов строительства.', intro: 'Объём общестроительных работ определяют по проекту и состоянию здания или участка. Последовательность этапов помогает спланировать поставку материалов и доступ смежных подрядчиков.', scope: ['Изучение проекта и осмотр существующих конструкций', 'Каркасы и перегородки по проекту', 'Подготовка объекта к следующим этапам'] },
      en: { slug: 'general-construction', title: 'General construction', summary: 'Core building structures, partitions and coordination between stages of construction.', intro: 'General construction starts with the drawings and the condition of the building or site. The order of work helps determine when materials should arrive and when other trades can start.', scope: ['Reviewing drawings and existing structures', 'Framing and partitions in line with the design', 'Preparing the site for subsequent trades'] },
    },
  },
  {
    id: 'renovation', confirmed: false,
    text: {
      et: { slug: 'korterite-ja-majade-remont', title: 'Korterite ja majade remont', summary: 'Eluruumide värskendamine üksikust toast kuni terve koduni.', intro: 'Remondi kavandamisel tasub eristada töid, mis lahendavad kulumise või niiskuse probleeme, ja töid, mis muudavad ruumi välimust. Kasutusel oleva kodu puhul saab arutada tööde jagamist etappideks.', scope: ['Lammutatavate ja säilitatavate pindade määramine', 'Seinte ja põrandate parandamine', 'Tööde planeerimine ruumide ja etappide kaupa'] },
      ru: { slug: 'remont-kvartir-i-domov', title: 'Ремонт квартир и домов', summary: 'Обновление жилых помещений от одной комнаты до всего дома.', intro: 'При планировании ремонта полезно отделить устранение износа и сырости от косметического обновления. Если в доме продолжают жить, работы можно обсудить по комнатам и этапам.', scope: ['Определение поверхностей, которые нужно демонтировать или сохранить', 'Восстановление стен и полов', 'Планирование работ по помещениям и этапам'] },
      en: { slug: 'home-and-apartment-renovation', title: 'Home and apartment renovation', summary: 'Updating living spaces, from a single room to a whole property.', intro: 'A renovation plan distinguishes wear or moisture problems from changes to the look of a room. For an occupied home, it also helps to discuss which areas can be worked on in stages.', scope: ['Identifying surfaces to remove and retain', 'Repairing walls and floors', 'Sequencing work by room and stage'] },
    },
  },
  {
    id: 'interior', confirmed: false,
    text: {
      et: { slug: 'siseviimistlus', title: 'Siseviimistlus', summary: 'Seinte, lagede ja põrandate ettevalmistus ning viimistlemine.', intro: 'Viimistluse kvaliteet sõltub aluspinnast ja detailidest, mida hiljem enam näha ei ole. Materjalide valikul tasub arvestada ruumi koormuse, valguse ja hooldusvajadusega.', scope: ['Aluspinna tasandamine ja ettevalmistus', 'Seinte ja lagede värvimine', 'Põrandakatete, liistude ja liitekohtade viimistlus'] },
      ru: { slug: 'vnutrennyaya-otdelka', title: 'Внутренняя отделка', summary: 'Подготовка и финишная отделка стен, потолков и полов.', intro: 'Качество отделки зависит от подготовки основания и деталей, которые после ремонта скрыты. Материалы стоит подбирать с учётом освещения, нагрузки на поверхности и ухода за ними.', scope: ['Выравнивание и подготовка основания', 'Окраска стен и потолков', 'Укладка напольных покрытий и оформление стыков'] },
      en: { slug: 'interior-finishing', title: 'Interior finishing', summary: 'Surface preparation and finishing for walls, ceilings and floors.', intro: 'A lasting finish depends on the substrate and details that will eventually be covered. Materials should suit the room’s light, everyday wear and maintenance needs.', scope: ['Levelling and preparing surfaces', 'Painting walls and ceilings', 'Fitting floor finishes, trim and junction details'] },
    },
  },
  {
    id: 'roof', confirmed: false,
    text: {
      et: { slug: 'katusetood', title: 'Katusetööd', summary: 'Katusekatte ja veesüsteemi parandamine või uuendamine.', intro: 'Katuse tööde ulatus sõltub nii kattematerjalist kui ka selle all oleva konstruktsiooni seisukorrast. Koos kattega tuleb üle vaadata vee äravool ja läbiviikude ümbrus.', scope: ['Katte, läbiviikude ja ligipääsu ülevaatus', 'Katte parandamine või vahetamine', 'Vihmavee äravoolu ja liiteplekkide lahendamine'] },
      ru: { slug: 'krovelnie-raboty', title: 'Кровельные работы', summary: 'Ремонт или обновление кровельного покрытия и водостоков.', intro: 'Объём кровельных работ зависит от покрытия и состояния конструкции под ним. Вместе с кровлей осматривают водоотвод и места, где через покрытие проходят трубы и вентиляция.', scope: ['Осмотр покрытия, проходок и доступа к крыше', 'Ремонт или замена кровельного покрытия', 'Устройство водоотвода и примыканий'] },
      en: { slug: 'roofing', title: 'Roofing', summary: 'Repairing or replacing roof coverings and rainwater goods.', intro: 'The scope of roofing work depends on both the covering and the structure below it. Drainage and the areas around vents or other penetrations should be considered alongside the covering itself.', scope: ['Reviewing the covering, penetrations and access', 'Repairing or replacing the roof covering', 'Addressing drainage and flashing details'] },
    },
  },
  {
    id: 'rebuild', confirmed: false,
    text: {
      et: { slug: 'rekonstrueerimine', title: 'Rekonstrueerimine ja renoveerimine', summary: 'Olemasoleva hoone kohandamine uue kasutuse ja vajadustega.', intro: 'Rekonstrueerimine võib muuta hoone ruumijaotust või tehnilisi omadusi. Enne tööde kavandamist tuleb selgitada, millised konstruktsioonid säilivad ning kas on vaja projekteerimist või kooskõlastusi.', scope: ['Säilitatavate konstruktsioonide ja uue vajaduse kaardistamine', 'Projekti ning tööetappide läbivaatamine', 'Ümberehituse ja taastamise tööde kokkuleppimine'] },
      ru: { slug: 'rekonstrukciya-i-renovaciya', title: 'Реконструкция и реновация', summary: 'Приспособление существующего здания к новым задачам.', intro: 'Реконструкция может менять планировку или технические характеристики здания. До начала работ важно выяснить, какие конструкции сохраняются, и определить потребность в проектировании и согласованиях.', scope: ['Определение сохраняемых конструкций и новых требований', 'Разбор проекта и последовательности этапов', 'Согласование объёма переустройства и восстановления'] },
      en: { slug: 'reconstruction', title: 'Reconstruction and refurbishment', summary: 'Adapting an existing building to a new use or different needs.', intro: 'Reconstruction can change the layout or technical performance of a building. Before planning the work, establish what will be retained and whether design work or approvals are needed.', scope: ['Identifying retained structures and new requirements', 'Reviewing the design and sequence of work', 'Agreeing the scope of alterations and repairs'] },
    },
  },
];

const projects: Project[] = [
  {
    id: 'standing-seam-roof', serviceId: 'roof', location: '',
    text: {
      et: { title: 'Valtskatuse paigaldus', category: 'Katusetööd', description: 'Maja katuse ehitusetapid sarikatest roovituse ja metallkatte paigaldamiseni.', scope: ['Katusekonstruktsioon', 'Roovitus', 'Metallkate'] },
      ru: { title: 'Монтаж фальцевой кровли', category: 'Кровельные работы', description: 'Этапы устройства кровли дома — от стропильной конструкции и обрешётки до монтажа металлического покрытия.', scope: ['Стропильная конструкция', 'Обрешётка', 'Металлическая кровля'] },
      en: { title: 'Standing-seam roof installation', category: 'Roofing', description: 'Stages of a house roof, from the roof structure and battens to installation of the metal covering.', scope: ['Roof structure', 'Battens', 'Metal roofing'] },
    },
    photos: [
      { file: 'roof-completed.webp', width: 1600, height: 721, alt: { et: 'Paigaldatud tume metallkatus ja maja ees olevad tellingud', ru: 'Установленная металлическая кровля и строительные леса перед домом', en: 'Installed dark metal roof and scaffolding in front of the house' } },
      { file: 'roof-structure.webp', width: 1600, height: 720, alt: { et: 'Maja katuse sarikakonstruktsioon ehituse ajal', ru: 'Стропильная конструкция дома в процессе строительства', en: 'The roof structure during construction' } },
      { file: 'roof-overview.webp', width: 1600, height: 720, alt: { et: 'Osaliselt paigaldatud metallkattega maja üldvaade', ru: 'Общий вид дома с частично установленным кровельным покрытием', en: 'House with the metal roof covering partly installed' } },
      { file: 'roof-detail.webp', width: 1600, height: 720, alt: { et: 'Puidust roovitus ja paigaldatavad metallkatuse paanid', ru: 'Деревянная обрешётка и монтаж металлических кровельных панелей', en: 'Timber battens and metal roofing panels being installed' } },
      { file: 'roof-reflection-clean.webp', width: 1600, height: 720, alt: { et: 'Roovituse ja metallkatte liitumine katuse ehitamisel', ru: 'Обрешётка и металлическое покрытие на скате кровли', en: 'Battens and metal covering on the roof slope' } },
      { file: 'roof-side.webp', width: 1600, height: 721, alt: { et: 'Maja külgvaade katusekatte paigaldamise ajal', ru: 'Вид дома сбоку в процессе монтажа кровли', en: 'Side view of the house during roof installation' } },
    ],
  },
  {
    id: 'interior-boarding', serviceId: 'interior', location: '',
    text: {
      et: { title: 'Siseseinte plaatimine', category: 'Sisetööd', description: 'Kõrge kaldlaega ruumi siseseinte ehitus ja kipsplaatide paigaldamine.', scope: ['Seinaplaadid', 'Kipsplaat', 'Aknaümbrused'] },
      ru: { title: 'Внутренняя обшивка стен', category: 'Внутренние работы', description: 'Устройство внутренней обшивки и монтаж гипсокартона в помещении с высоким наклонным потолком.', scope: ['Обшивка стен', 'Монтаж гипсокартона', 'Оконные проёмы'] },
      en: { title: 'Interior wall boarding', category: 'Interior work', description: 'Internal wall boarding and plasterboard installation in a room with a high sloping ceiling.', scope: ['Wall boarding', 'Plasterboard', 'Window openings'] },
    },
    photos: [
      { file: 'interior-front.webp', width: 1600, height: 800, alt: { et: 'Kipsplaatide paigaldus kõrges ruumis', ru: 'Монтаж гипсокартона в помещении с высоким потолком', en: 'Plasterboard installation in a room with a high ceiling' } },
      { file: 'interior-wide.webp', width: 1600, height: 800, alt: { et: 'Seinaplaadid ja aknaavad sisetööde käigus', ru: 'Обшивка стен и оконные проёмы в процессе внутренних работ', en: 'Wall boarding and window openings during interior work' } },
      { file: 'interior-portrait.webp', width: 700, height: 1400, alt: { et: 'Tellingud ning seinale paigaldatavad kipsplaadid', ru: 'Строительные подмости и гипсокартонная обшивка стены', en: 'Access tower and plasterboard wall lining' } },
    ],
  },
  {
    id: 'timber-terrace', serviceId: 'building', location: '',
    text: {
      et: { title: 'Puitterrass ja trepiastmed', category: 'Puidutööd', description: 'Soonelise terrassilaua paigaldus koos astmete ja nurgaühendustega.', scope: ['Terrassilaud', 'Trepiastmed', 'Nurgaühendused'] },
      ru: { title: 'Деревянная терраса и ступени', category: 'Работы с деревом', description: 'Укладка рифлёной террасной доски, устройство ступеней и оформление угловых стыков.', scope: ['Террасная доска', 'Ступени', 'Угловые стыки'] },
      en: { title: 'Timber terrace and steps', category: 'Timber work', description: 'Grooved decking boards with matching steps and mitred corner joints.', scope: ['Decking boards', 'Steps', 'Corner joints'] },
    },
    photos: [
      { file: 'terrace-detail.webp', width: 1600, height: 800, alt: { et: 'Terrassi nurk ja astmete laudise ühendused', ru: 'Угол деревянной террасы и стыки настила ступеней', en: 'Terrace corner and decking joints on the steps' } },
      { file: 'terrace-overview.webp', width: 700, height: 1400, alt: { et: 'Maja sissepääsu puidust terrass ja astmed', ru: 'Деревянная терраса со ступенями у входа в дом', en: 'Timber terrace and steps at the house entrance' } },
    ],
  },
];

// Set preview to false only after reviewing the launch checklist.
export const company = {
  preview: true,
  name: 'DISILENA OÜ',
  logo: 'disilena-mark.svg',
  contactPerson: { et: 'Silvestr Boiku', ru: 'Сильвестр Бойку', en: 'Silvestr Boiku' } as Localized,
  phone: '+372 5427 0045',
  whatsapp: '+372 5427 0045',
  email: '',
  address: '',
  serviceAreas: [] as string[],
  registrationNumber: '',
  socialLinks: [] as { label: string; url: string }[],
  websiteDomain: '',
  searchConsoleVerification: '',
  formspreeId: '',
  privacyPolicy: null as Localized<[string, string][]> | null,
  hero: { image: 'portfolio/roof-completed.webp', mobile: 'portfolio/roof-completed.webp', social: 'disilena-social.jpg', width: 1600, height: 721, demo: false },
  services,
  projects,
};
