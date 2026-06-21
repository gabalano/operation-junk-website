(() => {
  const card = document.querySelector('.oj-hero-card.oj-next-step-card');
  if (!card || card.dataset.jobGalleryReady === 'true') return;

  const phone = '+18722225502';
  const jobs = [
    ['Small cleanout', 'small_cleanout_before.jpg', 'small_cleanout_after.jpg'],
    ['Room cleanout', 'room_cleanout_before.jpg', 'room_cleanout_after.jpg'],
    ['Medium cleanout', 'medium_cleanout_before.jpg', 'medium_cleanout_after.jpg'],
    ['Large cleanout', 'big_cleanout_before.jpg', 'big_cleanout_after.jpg']
  ];

  const slides = jobs.map(([title, before, after], index) => `
    <article class="oj-job-slide${index === 0 ? ' is-active' : ''}" data-job-slide="${index}" aria-hidden="${index === 0 ? 'false' : 'true'}">
      <div class="oj-job-images">
        <figure class="oj-job-photo"><img src="assets/images/${before}" alt="Before photo from an Operation Junk ${title}" loading="${index === 0 ? 'eager' : 'lazy'}"><figcaption>Before</figcaption></figure>
        <figure class="oj-job-photo oj-job-photo--after"><img src="assets/images/${after}" alt="After photo from an Operation Junk ${title}" loading="${index === 0 ? 'eager' : 'lazy'}"><figcaption>After</figcaption></figure>
      </div>
      <div class="oj-job-meta"><strong>${title}</strong><span>Before → After</span></div>
    </article>`).join('');

  const dots = jobs.map(([title], index) => `<button class="oj-job-dot${index === 0 ? ' is-active' : ''}" type="button" data-job-dot="${index}" aria-label="Show ${title}" aria-current="${index === 0 ? 'true' : 'false'}"></button>`).join('');

  card.classList.remove('oj-next-step-card');
  card.classList.add('oj-job-showcase');
  card.dataset.jobGalleryReady = 'true';
  card.setAttribute('aria-label', 'Our past junk removal jobs');
  card.innerHTML = `
    <div class="oj-card-top"><div><span class="oj-card-kicker">WHAT WE DO</span><h2>Our past junk removal jobs</h2></div><div class="oj-job-index"><span data-job-current>01</span><span>/</span><span>${String(jobs.length).padStart(2, '0')}</span></div></div>
    <div class="oj-job-slider" role="region" aria-roledescription="carousel" aria-label="Operation Junk before and after job gallery">
      <div class="oj-job-slides">${slides}</div>
      <button class="oj-job-arrow oj-job-arrow--prev" type="button" data-job-prev aria-label="Previous job">‹</button>
      <button class="oj-job-arrow oj-job-arrow--next" type="button" data-job-next aria-label="Next job">›</button>
    </div>
    <div class="oj-job-footer"><div class="oj-job-dots" aria-label="Choose a past job">${dots}</div><a class="oj-job-cta" href="tel:${phone}">Need a job like this? Call Now</a></div>`;

  const slideEls = [...card.querySelectorAll('[data-job-slide]')];
  const dotEls = [...card.querySelectorAll('[data-job-dot]')];
  const currentLabel = card.querySelector('[data-job-current]');
  let activeIndex = 0;
  let timerId;
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const show = (nextIndex) => {
    activeIndex = (nextIndex + jobs.length) % jobs.length;
    slideEls.forEach((slide, index) => {
      const active = index === activeIndex;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    dotEls.forEach((dot, index) => {
      const active = index === activeIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-current', String(active));
    });
    currentLabel.textContent = String(activeIndex + 1).padStart(2, '0');
  };

  const stop = () => { if (timerId) window.clearInterval(timerId); timerId = undefined; };
  const start = () => { if (!reduceMotion && !timerId) timerId = window.setInterval(() => show(activeIndex + 1), 7000); };
  const restart = () => { stop(); start(); };

  card.querySelector('[data-job-prev]').addEventListener('click', () => { show(activeIndex - 1); restart(); });
  card.querySelector('[data-job-next]').addEventListener('click', () => { show(activeIndex + 1); restart(); });
  dotEls.forEach((dot) => dot.addEventListener('click', () => { show(Number(dot.dataset.jobDot)); restart(); }));
  card.addEventListener('pointerenter', stop);
  card.addEventListener('pointerleave', start);
  card.addEventListener('focusin', stop);
  card.addEventListener('focusout', () => requestAnimationFrame(() => { if (!card.contains(document.activeElement)) start(); }));
  start();
})();
