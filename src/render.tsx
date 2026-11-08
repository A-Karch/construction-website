import { renderToStaticMarkup } from 'react-dom/server';
import { App } from './App';
import { company, languages, type Language } from './company';
import { copy } from './copy';
import { alternates, metadata, pages, routePath, services, type Route } from './routes';

type BuildSettings = {
  base: string;
  siteUrl: string;
  script: string;
  styles: string[];
  pagesPreview: boolean;
};

function schema(lang: Language, route: Route, settings: BuildSettings) {
  const { siteUrl } = settings;
  const url = siteUrl + routePath(lang, route);
  const name = company.name || copy[lang].brand;
  const site = { '@type': 'WebSite', '@id': siteUrl + '/#website', name, url: siteUrl + '/', inLanguage: languages };
  const business = {
    '@type': 'GeneralContractor',
    '@id': siteUrl + '/#business',
    name,
    url: siteUrl + '/',
    logo: siteUrl + '/media/' + (company.logo || 'mark.svg'),
    telephone: company.phone,
    email: company.email,
    address: company.address ? { '@type': 'PostalAddress', streetAddress: company.address, addressCountry: 'EE' } : undefined,
    areaServed: company.serviceAreas.map((area) => ({ '@type': 'Place', name: area })),
    identifier: company.registrationNumber,
    sameAs: company.socialLinks.map((link) => link.url),
  };
  const graph: object[] = [site];
  if (!company.preview) graph.push(business);
  if (route !== 'home') {
    const entries: Route[] = typeof route === 'string' ? ['home', route] : ['home', 'services', route];
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: entries.map((item, index) => ({
        '@type': 'ListItem', position: index + 1, name: metadata(lang, item).title, item: siteUrl + routePath(lang, item),
      })),
    });
  }
  graph.push({
    '@type': 'WebPage',
    '@id': url + '#page',
    url,
    name: metadata(lang, route).title,
    description: metadata(lang, route).description,
    inLanguage: lang,
    isPartOf: { '@id': site['@id'] },
    ...(company.preview ? {} : { about: { '@id': business['@id'] } }),
  });
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c');
}

const ogLocales = { et: 'et_EE', ru: 'ru_RU', en: 'en_GB' };

function render(lang: Language, route: Route, settings: BuildSettings, root = false) {
  const { base, siteUrl, script, styles } = settings;
  const title = metadata(lang, route).title + (company.name ? ' | ' + company.name : '');
  const { description } = metadata(lang, route);
  const url = siteUrl + routePath(lang, route);
  const noindex = route === 'missing' || company.preview || !siteUrl;
  const links = route !== 'missing' && siteUrl ? alternates(route) : [];
  return '<!doctype html>\n' + renderToStaticMarkup(
    <html lang={lang}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#202420" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content={noindex ? 'noindex,follow' : 'index,follow'} />
        {company.searchConsoleVerification && !company.preview && <meta name="google-site-verification" content={company.searchConsoleVerification} />}
        {route !== 'missing' && siteUrl && <link rel="canonical" href={url} />}
        {links.map(([locale, path]) => <link key={locale} rel="alternate" hrefLang={locale} href={siteUrl + path} />)}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={company.name || copy[lang].brand} />
        <meta property="og:locale" content={ogLocales[lang]} />
        {languages.filter((locale) => locale !== lang).map((locale) => <meta key={locale} property="og:locale:alternate" content={ogLocales[locale]} />)}
        {route !== 'missing' && siteUrl && <>
          <meta property="og:url" content={url} />
          <meta property="og:image" content={siteUrl + '/media/' + company.hero.social} />
          <meta property="og:image:alt" content={copy[lang].heroAlt} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema(lang, route, settings) }} />
        </>}
        <link rel="icon" href={base + '/media/' + (company.logo || 'mark.svg')} />
        {styles.map((style) => <link rel="stylesheet" key={style} href={base + '/' + style} />)}
        <script type="module" src={base + '/' + script}></script>
      </head>
      <body data-site-root={root ? base : undefined}><App lang={lang} route={route} base={base} /></body>
    </html>,
  ) + '\n';
}

function xml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}

export function generate(settings: BuildSettings) {
  const { siteUrl } = settings;
  if (settings.pagesPreview && !company.preview) {
    throw new Error('GitHub Pages is configured for the illustrative preview. Build the commercial site on a compatible host.');
  }
  if (company.formspreeId && !/^[a-z0-9]+$/i.test(company.formspreeId)) throw new Error('Use the Formspree form ID without the URL.');
  if (!company.preview && (!siteUrl || !company.name || !company.phone || !company.email || !company.registrationNumber ||
      !company.serviceAreas.length || !services.length || !languages.every((lang) => company.privacyPolicy?.[lang].length))) {
    throw new Error('Complete the company configuration and the approved privacy policy before switching off preview.');
  }
  const output: Record<string, string> = {};
  const sitemap: string[] = [];
  for (const lang of languages) {
    for (const route of [...pages, ...services]) {
      const path = routePath(lang, route);
      const file = path.slice(1) + 'index.html';
      if (output[file]) throw new Error('Duplicate route ' + path);
      output[file] = render(lang, route, settings);
      if (siteUrl && route !== 'missing') {
        const links = alternates(route).map(([locale, url]) => `<xhtml:link rel="alternate" hreflang="${locale}" href="${xml(siteUrl + url)}"/>`);
        sitemap.push(`  <url><loc>${xml(siteUrl + path)}</loc>${links.join('')}</url>`);
      }
    }
  }
  output['index.html'] = render('et', 'home', settings, true);
  output['404.html'] = render('et', 'missing', settings);
  output['sitemap.xml'] = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + sitemap.join('\n') + '\n</urlset>\n';
  output['robots.txt'] = 'User-agent: *\nAllow: /\n' + (siteUrl && !company.preview ? 'Sitemap: ' + siteUrl + '/sitemap.xml\n' : '');
  return output;
}

export const configuredDomain = company.websiteDomain;
