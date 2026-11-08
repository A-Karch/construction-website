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
  demo: boolean;
  before: string;
  after: string;
  location: string;
  text: Localized<{ title: string; category: string; description: string; beforeAlt: string; afterAlt: string }>;
};

const services: Service[] = [
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
    id: 'apartment', demo: true, before: 'apartment-before.webp', after: 'apartment-after.webp', location: '',
    text: {
      et: { title: 'Valgusküllane korter', category: 'Korteri remont', description: 'Näide, kuidas taastatud seinad ja tammeparkett muudavad vana elutoa ilmet.', beforeAlt: 'Krohvimata seinte ja palja põrandaga elutuba', afterAlt: 'Tammeparketi ja heleda seinaviimistlusega elutuba' },
      ru: { title: 'Светлая квартира', category: 'Ремонт квартиры', description: 'Пример того, как восстановленные стены и дубовый паркет меняют интерьер старой гостиной.', beforeAlt: 'Гостиная с необработанными стенами и черновым полом', afterAlt: 'Гостиная с дубовым паркетом и светлыми стенами' },
      en: { title: 'A light-filled apartment', category: 'Apartment renovation', description: 'An example of how restored walls and oak parquet can transform an older living room.', beforeAlt: 'Living room with unfinished walls and bare floor', afterAlt: 'Living room with oak parquet and light walls' },
    },
  },
  {
    id: 'house', demo: true, before: 'house-before.webp', after: 'house-after.webp', location: '',
    text: {
      et: { title: 'Puitmaja uus ilme', category: 'Fassaad ja katus', description: 'Näide puitfassaadi ja katuse uuendamisest, mis säilitab maja algse mahu.', beforeAlt: 'Kulunud laudise ja katusega puitmaja', afterAlt: 'Uue puitvoodri ja tumeda valtskatusega maja' },
      ru: { title: 'Новый облик деревянного дома', category: 'Фасад и кровля', description: 'Пример обновления деревянного фасада и кровли с сохранением объёма дома.', beforeAlt: 'Деревянный дом с изношенной обшивкой и кровлей', afterAlt: 'Дом с новой деревянной обшивкой и тёмной фальцевой кровлей' },
      en: { title: 'A timber house renewed', category: 'Façade and roof', description: 'A façade and roof update that retains the original shape of the timber house.', beforeAlt: 'Timber house with weathered cladding and roof', afterAlt: 'House with renewed timber cladding and a dark standing-seam roof' },
    },
  },
];

// Set preview to false only after reviewing the launch checklist.
export const company = {
  preview: true,
  name: '',
  logo: '',
  phone: '',
  email: '',
  address: '',
  serviceAreas: [] as string[],
  registrationNumber: '',
  socialLinks: [] as { label: string; url: string }[],
  websiteDomain: '',
  searchConsoleVerification: '',
  formspreeId: '',
  privacyPolicy: null as Localized<[string, string][]> | null,
  hero: { image: 'hero.webp', mobile: 'hero-mobile.webp', social: 'social.jpg', demo: true },
  services,
  projects,
};
