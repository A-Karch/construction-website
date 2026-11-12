import './site.css';

try {
  const language = document.documentElement.lang;
  const saved = localStorage.getItem('site-language');
  const defaultRoot = document.body.dataset.siteRoot;
  if (defaultRoot !== undefined && (saved === 'ru' || saved === 'en')) {
    location.replace(defaultRoot + '/' + saved + '/' + location.search + location.hash);
  } else {
    localStorage.setItem('site-language', language);
  }
} catch {
  // Explicit language links still work with storage disabled.
}

const menu = document.querySelector<HTMLDetailsElement>('.mobile-menu');
menu?.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || !menu.open) return;
  menu.open = false;
  menu.querySelector('summary')?.focus();
});

const form = document.querySelector<HTMLFormElement>('.quote-form');
if (form) {
  const requestedService = new URLSearchParams(location.search).get('service');
  const work = form.querySelector<HTMLSelectElement>('select[name=work]');
  const requestedOption = work && Array.from(work.options).find((option) => option.dataset.serviceId === requestedService);
  if (requestedOption) {
    work.value = requestedOption.value;
    document.querySelectorAll<HTMLAnchorElement>('.language-nav a').forEach((link) => {
      const url = new URL(link.href);
      url.searchParams.set('service', requestedOption.dataset.serviceId || '');
      url.hash = 'quote';
      link.href = url.href;
    });
  }
  form.addEventListener('invalid', (event) => {
    const field = event.target;
    if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement)) return;
    if (field.validity.valueMissing) field.setCustomValidity(form.dataset.requiredMessage || '');
    else if (field.validity.typeMismatch) field.setCustomValidity(form.dataset.emailMessage || '');
  }, true);
  form.addEventListener('input', (event) => {
    const field = event.target;
    if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) {
      field.setCustomValidity('');
    }
  });
}

if (form?.hasAttribute('data-enquiry')) {
  const button = form.querySelector<HTMLButtonElement>('button[type=submit]');
  const status = form.querySelector<HTMLElement>('[role=status]');
  let sending = false;
  form.addEventListener('submit', async (event) => {
    if (!button || !status) return;
    event.preventDefault();
    if (sending) return;
    sending = true;
    button.disabled = true;
    status.dataset.kind = 'pending';
    status.textContent = form.dataset.sending || '';
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      status.dataset.kind = 'success';
      status.textContent = form.dataset.success || '';
    } catch {
      status.dataset.kind = 'error';
      status.textContent = form.dataset.error || '';
    } finally {
      sending = false;
      button.disabled = false;
    }
  });
}
