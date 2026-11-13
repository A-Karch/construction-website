import { company, languages, type Language, type Service } from './company';
import { copy } from './copy';

export type Page = keyof typeof copy.et.pages;
export type Route = Page | Service;

export const services = company.services.filter((service) => company.preview || service.confirmed);
export const projects = company.projects;
export const pages: Page[] = ['home', 'services', 'works', 'about', 'contact', 'privacy', 'missing'];
export const navigation = ['home', 'services', 'works', 'about', 'contact'] as const;
export const navLabels = {
  et: ['Avaleht', 'Teenused', 'Projektid', 'Meist', 'Kontakt'],
  ru: ['Главная', 'Услуги', 'Портфолио', 'О компании', 'Контакты'],
  en: ['Home', 'Services', 'Portfolio', 'About us', 'Contact'],
};
export const languageNames = { et: 'Eesti', ru: 'Русский', en: 'English' };

export function routePath(lang: Language, route: Route) {
  const section = copy[lang].pages.services[0];
  const slug = typeof route === 'string' ? copy[lang].pages[route][0] : section + '/' + route.text[lang].slug;
  return '/' + lang + '/' + (slug ? slug + '/' : '');
}

export function metadata(lang: Language, route: Route) {
  if (typeof route !== 'string') {
    const { title, summary } = route.text[lang];
    return { title, description: summary };
  }
  const [, title, description] = copy[lang].pages[route];
  return { title, description };
}

export function alternates(route: Route) {
  return [...languages.map((lang) => [lang, routePath(lang, route)] as const), ['x-default', routePath('et', route)] as const];
}
