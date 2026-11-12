import type { ReactNode } from 'react';
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BrickWall, Building2, Check, ClipboardList, Hammer,
  House, Info, Layers, MapPin, Menu, PaintRoller, Phone, Ruler,
} from 'lucide-react';
import { company, languages, type Language, type Service } from './company';
import { copy } from './copy';
import { languageNames, metadata, navigation, navLabels, projects, routePath, services, type Route } from './routes';

type Context = {
  lang: Language;
  route: Route;
  url: (route: Route) => string;
  media: (file: string) => string;
  t: typeof copy.et;
};

const serviceIcons = { building: Building2, renovation: House, interior: PaintRoller, facade: BrickWall, roof: Layers, rebuild: Hammer };
const approachIcons = [ClipboardList, Ruler, Check];

const phone = company.phone ? 'tel:' + company.phone.replace(/[\s()-]/g, '') : '';
const email = company.email ? 'mailto:' + company.email : '';
const formEndpoint = !company.preview && company.formspreeId ? 'https://formspree.io/f/' + company.formspreeId : '';

function Brand({ ctx }: { ctx: Context }) {
  return <a className="brand" href={ctx.url('home')}>
    <img src={ctx.media(company.logo || 'mark.svg')} width="42" height="42" alt="" />
    <span><strong>{company.name || ctx.t.brand}</strong><small>{ctx.t.sector}</small></span>
  </a>;
}

function NavLinks({ ctx }: { ctx: Context }) {
  return navigation.map((route, index) => {
    const active = ctx.route === route || (route === 'services' && typeof ctx.route !== 'string');
    return <a key={route} href={ctx.url(route)} aria-current={active ? 'page' : undefined}>{navLabels[ctx.lang][index]}</a>;
  });
}

function Header({ ctx, base }: { ctx: Context; base: string }) {
  const { t, lang, route } = ctx;
  return <>
    <a className="skip" href="#main">{t.skip}</a>
    {company.preview && <div className="preview-strip"><div className="wrap"><span>{t.preview}</span>{t.previewText}</div></div>}
    <header className="site-header">
      <div className="wrap header-grid">
        <Brand ctx={ctx} />
        <nav className="desktop-nav" aria-label={t.nav}><NavLinks ctx={ctx} /></nav>
        <div className="header-actions">
          <nav className="language-nav" aria-label={t.language}>
            {languages.map((language) => <a key={language} lang={language} hrefLang={language} href={base + routePath(language, route)}
              aria-label={language.toUpperCase() + ' · ' + languageNames[language]} aria-current={language === lang ? 'page' : undefined}>{language.toUpperCase()}</a>)}
          </nav>
          {phone && <a className="header-phone" href={phone} aria-label={t.call + ' ' + company.phone}><Phone size={16} />{company.phone}</a>}
          <a className="btn btn-small header-quote" href={ctx.url('contact') + '#quote'}>{t.quote}<ArrowUpRight size={16} /></a>
          <details className="mobile-menu">
            <summary aria-label={t.menu}><Menu size={23} /></summary>
            <nav aria-label={t.nav}><NavLinks ctx={ctx} /><a className="btn" href={ctx.url('contact') + '#quote'}>{t.quote}<ArrowUpRight size={17} /></a></nav>
          </details>
        </div>
      </div>
    </header>
  </>;
}

function SectionHeading({ label, title, intro, action }: { label: string; title: string; intro?: string; action?: ReactNode }) {
  return <div className="section-heading">
    <div><p className="kicker">{label}</p><h2>{title}</h2>{intro && <p className="lead">{intro}</p>}</div>
    {action}
  </div>;
}

function Services({ ctx }: { ctx: Context }) {
  return <div className="service-grid">
    {services.map((service, index) => {
      const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Hammer;
      const text = service.text[ctx.lang];
      return <article className="service-card" key={service.id}>
        <a href={ctx.url(service)}>
          <div className="service-card-top"><Icon size={26} strokeWidth={1.65} /><span>{String(index + 1).padStart(2, '0')}</span></div>
          <h3>{text.title}</h3>
          <p>{text.summary}</p>
          <span className="service-more">{ctx.t.learn}<ArrowUpRight size={17} /></span>
        </a>
      </article>;
    })}
  </div>;
}

function Gallery({ ctx, portfolio = false }: { ctx: Context; portfolio?: boolean }) {
  const { t } = ctx;
  if (!projects.length) return <p className="muted">{t.empty}</p>;
  return <div className={portfolio ? 'project-grid portfolio-grid' : 'project-grid'}>
    {projects.map((project, index) => {
      const text = project.text[ctx.lang];
      const service = services.find((item) => item.id === project.serviceId);
      const height = project.imageHeight ?? 512;
      return <article className={portfolio && index === 0 ? 'project-card project-featured' : 'project-card'} key={project.id}>
        <div className="project-pair">
          <figure><img src={ctx.media(project.before)} alt={text.beforeAlt} width="768" height={height} loading="lazy" decoding="async" /><figcaption>{t.before}</figcaption></figure>
          <figure><img src={ctx.media(project.after)} alt={text.afterAlt} width="768" height={height} loading="lazy" decoding="async" /><figcaption>{t.after}</figcaption></figure>
        </div>
        <div className="project-copy">
          <div>
            <p className="project-type">{text.category}{project.demo && <span>{t.demo}</span>}</p>
            {portfolio ? <h2>{text.title}</h2> : <h3>{text.title}</h3>}
          </div>
          <div>
            <p>{text.description}</p>
            {text.scope?.length ? <ul className="project-scope">{text.scope.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            {project.location && <p className="project-place"><MapPin size={15} />{project.location}</p>}
            {portfolio && service && <div className="project-actions">
              <a className="text-link" href={ctx.url(service)}>{t.relatedWork}<ArrowUpRight size={16} /></a>
              <a className="text-link" href={ctx.url('contact') + '?service=' + service.id + '#quote'}>{t.similarProject}<ArrowRight size={16} /></a>
            </div>}
          </div>
        </div>
      </article>;
    })}
  </div>;
}

function FacadeFeature({ ctx }: { ctx: Context }) {
  const service = services.find((item) => item.id === 'facade');
  const project = projects.find((item) => item.serviceId === 'facade');
  if (!service || !project) return null;
  return <section className="facade-feature">
    <div className="wrap facade-grid">
      <figure>
        <img src={ctx.media(project.after)} alt={project.text[ctx.lang].afterAlt} width="768" height={project.imageHeight ?? 512} loading="lazy" decoding="async" />
        {project.demo && <figcaption>{ctx.t.demo}</figcaption>}
      </figure>
      <div className="facade-copy">
        <p className="kicker">{service.text[ctx.lang].title}</p>
        <h2>{ctx.t.facadeTitle}</h2>
        <p className="lead">{ctx.t.facadeText}</p>
        <a className="text-link" href={ctx.url(service)}>{ctx.t.learn}<ArrowUpRight size={18} /></a>
      </div>
    </div>
  </section>;
}

function Questions({ ctx }: { ctx: Context }) {
  return <section className="section questions">
    <div className="wrap faq-grid">
      <div><p className="kicker">{ctx.t.sector}</p><h2>{ctx.t.faqTitle}</h2></div>
      <div className="faq-list">{ctx.t.faq.map(([question, answer]) =>
        <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </div>
  </section>;
}

function Approach({ ctx }: { ctx: Context }) {
  const { t } = ctx;
  return <section className="approach section">
    <div className="wrap approach-grid">
      <div><p className="kicker">{company.name || t.section.about}</p><h2>{t.approachTitle}</h2><p className="lead">{ctx.route === 'about' ? t.approachText : t.aboutIntro}</p>
        {ctx.route !== 'about' && <a className="text-link approach-link" href={ctx.url('about')}>{t.pages.about[1]}<ArrowUpRight size={17} /></a>}
      </div>
      <ul>{t.approach.map(([title, detail], index) => {
        const Icon = approachIcons[index];
        return <li key={title}><span className="approach-icon"><Icon size={21} /></span><div><h3>{title}</h3><p>{detail}</p></div></li>;
      })}</ul>
    </div>
  </section>;
}

function Process({ ctx }: { ctx: Context }) {
  return <section className="section process">
    <div className="wrap">
      <SectionHeading label={ctx.t.section.process} title={ctx.t.processTitle} />
      <ol className="steps">{ctx.t.steps.map(([title, detail], i) =>
        <li key={title}><span className="step-number" aria-hidden="true">0{i + 1}</span><h3>{title}</h3><p>{detail}</p></li>)}</ol>
    </div>
  </section>;
}

function Details({ ctx, compact = false }: { ctx: Context; compact?: boolean }) {
  const values = [
    phone && <a href={phone}>{company.phone}</a>,
    email && <a href={email}>{company.email}</a>,
    company.address,
    company.serviceAreas.join(', '),
    company.registrationNumber,
  ];
  return <dl className="business-details">
    {company.contactPerson[ctx.lang] && <div><dt>{ctx.t.contactPerson}</dt><dd>{company.contactPerson[ctx.lang]}</dd></div>}
    {ctx.t.details.map((name, i) => values[i] && !(compact && i === 2) ?
      <div key={name}><dt>{name}</dt><dd>{values[i]}</dd></div> : null)}
  </dl>;
}

function QuoteForm({ ctx }: { ctx: Context }) {
  const { t, lang } = ctx;
  const f = t.form;
  return <form id="quote" className="quote-form" action={formEndpoint || undefined} method={formEndpoint ? 'post' : undefined}
    data-enquiry={formEndpoint ? '' : undefined} data-sending={f.sending} data-success={f.success} data-error={f.error}
    data-required-message={f.invalidRequired} data-email-message={f.invalidEmail}>
    <h2>{f.title}</h2>
    {!formEndpoint && <p id="form-offline" className="form-note"><Info size={18} />{f.disabled}</p>}
    <p className="form-required">{f.required}</p>
    <fieldset disabled={!formEndpoint} aria-describedby={formEndpoint ? undefined : 'form-offline'}>
      <input type="hidden" name="language" value={lang} />
      <div className="form-grid">
        <label>{f.name} *<input name="name" required autoComplete="name" maxLength={120} /></label>
        <label>{f.phone} *<input name="phone" type="tel" autoComplete="tel" required maxLength={45} /></label>
        <label>{f.email} *<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
        <label>{f.work} *<select name="work" required defaultValue=""><option value="" disabled>{f.choose}</option>
          {services.map((service) => <option key={service.id} data-service-id={service.id} value={service.text[lang].title}>{service.text[lang].title}</option>)}
          <option>{f.other}</option>
        </select></label>
      </div>
      <label>{f.message} *<textarea name="message" required rows={4} maxLength={3000} aria-describedby="message-hint" /></label>
      <p id="message-hint" className="form-hint">{f.hint}</p>
      <div className="honeypot" hidden><label>_gotcha<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="consent"><input id="privacy-read" type="checkbox" name="privacy_acknowledged" value="yes" required aria-describedby="privacy-form-link" />
        <span><label htmlFor="privacy-read">{f.consent} <span className="sr-only">{f.privacyLink}</span> *</label>{' '}
          <a id="privacy-form-link" href={ctx.url('privacy')}>{f.privacyLink}</a></span>
      </div>
      <button className="btn" type="submit">{f.submit}<ArrowRight size={18} /></button>
    </fieldset>
    <p className="form-status" role="status" aria-live="polite"></p>
  </form>;
}

function Contact({ ctx, page = false }: { ctx: Context; page?: boolean }) {
  const { t } = ctx;
  return <section className="contact-band section">
    <div className="wrap contact-grid">
      <div className="contact-intro">
        <p className="kicker">{t.section.contact}</p>{page ? <h1>{t.contactTitle}</h1> : <h2>{t.contactTitle}</h2>}
        <p className="lead">{t.contactText}</p>
        <Details ctx={ctx} />
      </div>
      <QuoteForm ctx={ctx} />
    </div>
  </section>;
}

function Home({ ctx }: { ctx: Context }) {
  const { t } = ctx;
  return <>
    <section className="hero">
      <picture className="hero-photo">
        <source media="(max-width: 650px)" srcSet={ctx.media(company.hero.mobile || company.hero.image)} />
        <img src={ctx.media(company.hero.image)} alt={t.heroAlt} width="1536" height="1024" fetchPriority="high" />
      </picture>
      <div className="hero-shade"></div>
      <div className="wrap hero-content">
        <p className="kicker">{t.homeHero[2]}</p>
        <h1>{t.homeHero[0]}</h1>
        <p className="hero-lead">{t.homeHero[1]}</p>
        <div className="hero-actions">
          <a className="btn" href={ctx.url('contact') + '#quote'}>{t.quote}<ArrowUpRight size={19} /></a>
          {phone ? <a className="btn btn-outline" href={phone}><Phone size={17} />{t.call}</a>
            : <a className="btn btn-outline" href={ctx.url('works')}>{t.allWorks}<ArrowRight size={17} /></a>}
        </div>
      </div>
      <div className="wrap hero-foot">
        <a href="#services" aria-label={t.section.services}><ArrowDown size={20} /></a>
        {company.hero.demo && <span>{t.imageNote}</span>}
      </div>
    </section>
    <section id="services" className="section services-section">
      <div className="wrap">
        <SectionHeading label={t.section.services} title={t.pages.services[1]} intro={company.preview ? t.serviceNote : undefined}
          action={<a className="text-link" href={ctx.url('services')}>{t.allServices}<ArrowUpRight size={17} /></a>} />
        <Services ctx={ctx} />
      </div>
    </section>
    <FacadeFeature ctx={ctx} />
    <Approach ctx={ctx} />
    <section className="section gallery-section">
      <div className="wrap">
        <SectionHeading label={t.section.works} title={t.pages.works[1]}
          action={<a className="text-link" href={ctx.url('works')}>{t.allWorks}<ArrowUpRight size={17} /></a>} />
        <Gallery ctx={ctx} />
      </div>
    </section>
    <Process ctx={ctx} />
    <Questions ctx={ctx} />
    <Contact ctx={ctx} />
  </>;
}

function PageHeading({ ctx, label, title, description }: { ctx: Context; label: string; title: string; description: string }) {
  return <div className="page-heading"><div className="wrap">
    <a className="back-link" href={ctx.url('home')}><ArrowLeft size={16} />{ctx.t.back}</a>
    <p className="kicker">{label}</p><h1>{title}</h1><p className="lead">{description}</p>
  </div></div>;
}

function ServicePage({ ctx, service }: { ctx: Context; service: Service }) {
  const { t } = ctx;
  const { title, summary, intro, scope, additionalScope } = service.text[ctx.lang];
  const project = projects.find((item) => item.serviceId === service.id);
  return <>
    <PageHeading ctx={ctx} label={t.section.services} title={title} description={summary} />
    <div className="section wrap detail-grid">
      <article className="detail-copy">
        {company.preview && !service.confirmed && <p className="form-note"><Info size={18} />{t.serviceNote}</p>}
        <p className="lead">{intro}</p>
        <h2>{t.scope}</h2>
        <ul>{scope.map((item) => <li key={item}><Check size={19} />{item}</li>)}</ul>
        {additionalScope && <section>
          <h2>{additionalScope.title}</h2>
          <ol>{additionalScope.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>}
        <a className="btn" href={ctx.url('contact') + '?service=' + service.id + '#quote'}>{t.quote}<ArrowUpRight size={17} /></a>
      </article>
      <aside className="detail-aside"><h2>{t.allServices}</h2>
        <ul>{services.map((item) => <li key={item.id}><a href={ctx.url(item)} aria-current={item === service ? 'page' : undefined}>{item.text[ctx.lang].title}<ArrowRight size={15} /></a></li>)}</ul>
        {project && <figure className="service-example">
          <img src={ctx.media(project.after)} alt={project.text[ctx.lang].afterAlt} width="768" height={project.imageHeight ?? 512} loading="lazy" decoding="async" />
          <figcaption>{project.demo ? t.demo : project.text[ctx.lang].title}</figcaption>
        </figure>}
      </aside>
    </div>
  </>;
}

function PageBody({ ctx }: { ctx: Context }) {
  const { route, t } = ctx;
  if (typeof route !== 'string') return <ServicePage ctx={ctx} service={route} />;
  if (route === 'home') return <Home ctx={ctx} />;
  if (route === 'contact') return <Contact ctx={ctx} page />;
  const { title, description } = metadata(ctx.lang, route);
  if (route === 'missing') return <div className="wrap error-page">
    <p className="kicker">404</p><h1>{title}</h1><p className="lead">{t.missing}</p>
    <div className="hero-actions"><a className="btn" href={ctx.url('home')}>{t.back}<ArrowRight size={18} /></a>
      <a className="text-link" href={ctx.url('services')}>{t.allServices}<ArrowUpRight size={17} /></a></div>
  </div>;
  const label = route === 'privacy' ? t.sector : t.section[route];
  return <>
    <PageHeading ctx={ctx} label={route === 'about' ? title : label} title={route === 'about' ? company.name || title : title} description={route === 'services' ? t.overview : description} />
    {route === 'services' && <section className="section wrap" aria-label={t.allServices}>
      {company.preview && <p className="provisional">{t.serviceNote}</p>}<Services ctx={ctx} />
    </section>}
    {route === 'works' && <section className="section wrap" aria-label={t.section.works}>
      <Gallery ctx={ctx} portfolio />
    </section>}
    {route === 'about' && <>
      {company.contactPerson[ctx.lang] && <section className="wrap profile">
        <div><p className="kicker">{t.contactPerson}</p><h2>{company.contactPerson[ctx.lang]}</h2><p className="lead">{t.aboutIntro}</p></div>
        <a className="text-link" href={ctx.url('contact')}>{t.section.contact}<ArrowUpRight size={17} /></a>
      </section>}
      <Approach ctx={ctx} /><Process ctx={ctx} />
    </>}
    {route === 'privacy' && <div className="section wrap privacy">
      {company.preview && <p className="form-note"><Info size={18} />{t.privacyDraft}</p>}
      {(company.privacyPolicy?.[ctx.lang] ?? t.policy).map(([heading, paragraph]) => <section key={heading}><h2>{heading}</h2><p>{paragraph}</p></section>)}
      <Details ctx={ctx} />
    </div>}
  </>;
}

function Footer({ ctx }: { ctx: Context }) {
  const { t } = ctx;
  return <footer className="footer">
    <div className="wrap footer-grid">
      <div><Brand ctx={ctx} /><p>{t.pages.about[2]}</p>
        {company.socialLinks.length > 0 && <ul className="social-links">{company.socialLinks.map(({ label, url }) =>
          <li key={url}><a href={url}>{label}<ArrowUpRight size={15} /></a></li>)}</ul>}
      </div>
      <nav aria-label={t.nav}><NavLinks ctx={ctx} /></nav>
      <Details ctx={ctx} compact />
    </div>
    <div className="wrap footer-bottom"><span>© {company.name || t.brand}</span><a href={ctx.url('privacy')}>{t.pages.privacy[1]}</a></div>
  </footer>;
}

export function App({ lang, route, base }: { lang: Language; route: Route; base: string }) {
  const ctx: Context = { lang, route, url: (page) => base + routePath(lang, page), media: (file) => base + '/media/' + file, t: copy[lang] };
  return <>
    <Header ctx={ctx} base={base} />
    <main id="main" tabIndex={-1}><PageBody ctx={ctx} /></main>
    <Footer ctx={ctx} />
    {phone && <a className="mobile-call" href={phone} aria-label={ctx.t.call + ' ' + company.phone}><Phone size={23} /></a>}
  </>;
}
