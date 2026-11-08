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

const form = document.querySelector<HTMLFormElement>('form[data-enquiry]');
if (form) {
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
