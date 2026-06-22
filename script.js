(() => {
  const businessPhone = '+18722225502';
  const modal = document.getElementById('callback-modal');
  const form = document.getElementById('oj-callback-form');
  const sendLink = document.getElementById('oj-send-callback');
  const formStep = form?.querySelector('[data-callback-step="form"]');
  const successStep = form?.querySelector('[data-callback-step="success"]');
  const dateField = form?.querySelector('input[name="callbackDate"]');

  const setMinimumDate = () => {
    if (!dateField) return;
    const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    dateField.min = today;
    if (!dateField.value) dateField.value = today;
  };

  const openCallback = () => {
    if (!modal) return;
    setMinimumDate();
    formStep?.classList.add('is-active');
    successStep?.classList.remove('is-active');
    if (!modal.open) modal.showModal();
  };

  document.querySelectorAll('[data-open-callback]').forEach((button) => button.addEventListener('click', openCallback));
  document.querySelectorAll('[data-close-callback]').forEach((button) => button.addEventListener('click', () => modal?.close()));
  modal?.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const required = [...form.querySelectorAll('[required]')];
    const incomplete = required.find((field) => !String(field.value || '').trim());
    if (incomplete) { incomplete.focus(); return; }

    const data = new FormData(form);
    const lines = [
      "Hi Operation Junk — I'd like to schedule a callback.",
      '',
      `Name: ${data.get('firstName')} ${data.get('lastName')}`,
      `Mobile: ${data.get('phone')}`,
      `Address: ${data.get('address')}`,
      `Preferred callback: ${data.get('callbackDate')} · ${data.get('callbackTime')}`,
      data.get('notes') ? `Notes: ${data.get('notes')}` : '',
      '',
      'Please confirm my callback time.'
    ].filter(Boolean);
    if (sendLink) sendLink.href = `sms:${businessPhone}?&body=${encodeURIComponent(lines.join('\n'))}`;
    formStep?.classList.remove('is-active');
    successStep?.classList.add('is-active');
  });

  const gallery = document.querySelector('[data-job-gallery]');
  if (!gallery) return;
  const slides = [...gallery.querySelectorAll('[data-job-slide]')];
  const current = gallery.querySelector('[data-job-current]');
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  let active = 0;
  let timer;
  const show = (index) => {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const isActive = i === active;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });
    if (current) current.textContent = String(active + 1).padStart(2, '0');
  };
  const stop = () => { if (timer) window.clearInterval(timer); timer = undefined; };
  const start = () => { if (!reduceMotion && !timer) timer = window.setInterval(() => show(active + 1), 7000); };
  gallery.querySelector('[data-job-prev]')?.addEventListener('click', () => { show(active - 1); stop(); start(); });
  gallery.querySelector('[data-job-next]')?.addEventListener('click', () => { show(active + 1); stop(); start(); });
  gallery.addEventListener('pointerenter', stop);
  gallery.addEventListener('pointerleave', start);
  gallery.addEventListener('focusin', stop);
  gallery.addEventListener('focusout', () => requestAnimationFrame(() => { if (!gallery.contains(document.activeElement)) start(); }));
  start();
})();
