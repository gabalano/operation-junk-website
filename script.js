(() => {
  const businessPhone = '+18722225502';

  const upgradeHeaderContact = () => {
    const legacyContact = document.querySelector('.oj-logo-line > .oj-top-call');
    if (!legacyContact) return;

    const callHref = legacyContact.getAttribute('href') || `tel:${businessPhone}`;
    const contact = document.createElement('div');
    contact.className = 'oj-top-contact';
    contact.setAttribute('aria-label', 'Contact Operation Junk');
    contact.innerHTML = `
      <a class="oj-top-call" href="${callHref}" aria-label="Call Operation Junk at (872) 222-5502">
        <span class="oj-top-contact-icon" aria-hidden="true">☎</span>
        <span class="oj-top-contact-copy"><small>CALL NOW</small><strong>(872) 222-5502</strong></span>
      </a>
      <a class="oj-top-text" href="sms:${businessPhone}?&body=Hi%20Operation%20Junk%2C%20I%27d%20like%20help%20with%20junk%20removal." aria-label="Text Operation Junk at (872) 222-5502">
        <span aria-hidden="true">💬</span><span>TEXT</span>
      </a>`;
    legacyContact.replaceWith(contact);
  };

  upgradeHeaderContact();

  const modal = document.getElementById('callback-modal');
  const form = document.getElementById('oj-callback-form');
  const sendLink = document.getElementById('oj-send-callback');
  const formStep = document.querySelector('[data-callback-step="form"]');
  const successStep = document.querySelector('[data-callback-step="success"]');
  const dateField = form?.querySelector('input[name="callbackDate"]');

  const setMinimumDate = () => {
    if (!dateField) return;
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 10);
    dateField.min = local;
    if (!dateField.value) dateField.value = local;
  };

  const showForm = () => {
    formStep?.classList.add('is-active');
    successStep?.classList.remove('is-active');
  };

  const openCallback = () => {
    if (!modal) return;
    setMinimumDate();
    showForm();
    if (!modal.open) modal.showModal();
  };

  const closeCallback = () => {
    if (modal?.open) modal.close();
  };

  document.querySelectorAll('[data-open-callback]').forEach((button) => {
    button.addEventListener('click', openCallback);
  });

  document.querySelectorAll('[data-close-callback]').forEach((button) => {
    button.addEventListener('click', closeCallback);
  });

  modal?.addEventListener('click', (event) => {
    if (event.target === modal) closeCallback();
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const required = [...form.querySelectorAll('[required]')];
    const incomplete = required.find((field) => !String(field.value || '').trim());
    if (incomplete) {
      incomplete.focus();
      return;
    }

    const data = new FormData(form);
    const lines = [
      "Hi Operation Junk — I'd like to schedule a callback.",
      '',
      `Name: ${data.get('name')}`,
      `Mobile: ${data.get('phone')}`,
      `City/suburb: ${data.get('city')}`,
      `Preferred callback: ${data.get('callbackDate')} · ${data.get('callbackTime')}`,
      data.get('notes') ? `Notes: ${data.get('notes')}` : '',
      '',
      'Please confirm my callback time.'
    ].filter(Boolean);

    if (sendLink) sendLink.href = `sms:${businessPhone}?&body=${encodeURIComponent(lines.join('\n'))}`;
    formStep?.classList.remove('is-active');
    successStep?.classList.add('is-active');
  });
})();
