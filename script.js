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
        <span class="oj-top-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.24 1l-2.21 2.22Z"/></svg></span>
        <span class="oj-top-contact-copy"><small>CALL NOW</small><strong>(872) 222-5502</strong></span>
      </a>
      <a class="oj-top-text" href="sms:${businessPhone}?&body=Hi%20Operation%20Junk%2C%20I%27d%20like%20help%20with%20junk%20removal." aria-label="Text Operation Junk at (872) 222-5502">
        <span class="oj-top-text-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm2 6v2h12V9H6Zm0 4v2h8v-2H6Z"/></svg></span>
        <span class="oj-top-text-copy"><small>PREFER TO</small><strong>TEXT US</strong></span>
      </a>`;
    legacyContact.replaceWith(contact);
  };

  const upgradeHeroMessage = () => {
    const heroCopy = document.querySelector('.oj-hero-copy');
    const headline = document.getElementById('hero-title');
    const body = heroCopy?.querySelector('p:not(.oj-hero-assurance)');
    const assurance = heroCopy?.querySelector('.oj-hero-assurance');
    if (!heroCopy || !headline || !body || !assurance) return;

    document.title = 'Operation Junk | Clear Out the Junk. Keep Your Day Moving.';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Clear out the junk and keep your day moving with local junk removal from Operation Junk in Schaumburg and nearby Chicago suburbs.'
    );
    headline.textContent = 'Clear out the junk. Keep your day moving.';
    body.textContent = 'Talk directly with Operation Junk about furniture removal, appliances, garage cleanouts, move-outs, and bulky-item pickup. We learn about the job first, then personally coordinate the best removal time.';
    assurance.textContent = 'No obligations. You approve the price before loading.';
    heroCopy.classList.remove('oj-hero-outcome-copy');
  };

  const upgradeCallbackForm = () => {
    const callbackForm = document.getElementById('oj-callback-form');
    if (!callbackForm || callbackForm.dataset.detailedForm === 'true') return;

    callbackForm.dataset.detailedForm = 'true';
    callbackForm.innerHTML = `
      <section class="oj-form-step is-active" data-callback-step="form">
        <span class="oj-form-kicker">Schedule a callback</span>
        <h2 id="callback-title">Choose a good time for us to call.</h2>
        <p>We will discuss the job and personally coordinate the best removal time. This is a callback request, not a pickup appointment.</p>
        <div class="oj-field-grid oj-callback-fields">
          <label>First name<input name="firstName" autocomplete="given-name" required placeholder="Your first name"></label>
          <label>Last name<input name="lastName" autocomplete="family-name" required placeholder="Your last name"></label>
          <label>Mobile number<input name="phone" type="tel" inputmode="tel" autocomplete="tel" required placeholder="(555) 555-5555"></label>
          <label class="oj-field--full">Full service address<input name="address" autocomplete="street-address" required placeholder="123 Main St, Schaumburg, IL 60193"></label>
          <label>Preferred callback day<input name="callbackDate" type="date" required></label>
          <label>Preferred time window<select name="callbackTime" required><option value="" selected disabled>Select a time</option><option>9:00–10:00 AM</option><option>10:00–11:00 AM</option><option>11:00 AM–12:00 PM</option><option>12:00–1:00 PM</option><option>1:00–2:00 PM</option><option>2:00–3:00 PM</option><option>3:00–4:00 PM</option><option>4:00–5:00 PM</option><option>5:00–6:00 PM</option></select></label>
        </div>
        <label class="oj-notes">Anything helpful to know? <textarea name="notes" rows="3" placeholder="Optional: a few items, any stairs, or a question you want answered."></textarea></label>
        <p class="oj-consent">By requesting a callback, you agree to receive calls and text messages from Operation Junk about your inquiry. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Consent is not a condition of purchase. See our <a href="/privacy-policy/">Privacy Policy</a> and <a href="/terms-and-conditions/">Terms &amp; Conditions</a>.</p>
        <div class="oj-form-nav"><span></span><button class="oj-btn oj-btn-primary" type="submit">Prepare Callback Request →</button></div>
      </section>
      <section class="oj-form-step oj-success" data-callback-step="success" aria-live="polite">
        <div class="oj-success-mark">✓</div><span class="oj-form-kicker">One last tap</span><h2>Open the text message to send your callback request.</h2><p>Your contact details, address, and preferred callback time are included. We will confirm the next step personally.</p>
        <a id="oj-send-callback" class="oj-btn oj-btn-primary" href="sms:${businessPhone}">Send Callback Request by Text →</a>
        <a class="oj-text-button" href="tel:${businessPhone}">Rather talk now? Call us</a>
      </section>`;
  };

  upgradeHeaderContact();
  upgradeHeroMessage();
  upgradeCallbackForm();

  const pageAdjustments = document.createElement('script');
  pageAdjustments.src = 'page-adjustments.js';
  pageAdjustments.defer = true;
  document.body.append(pageAdjustments);

  if (document.querySelector('.oj-hero-card.oj-next-step-card')) {
    const galleryScript = document.createElement('script');
    galleryScript.src = 'job-gallery.js';
    galleryScript.defer = true;
    document.body.append(galleryScript);
  }

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
})();
