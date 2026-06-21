(() => {
  const servicesSection = document.querySelector('section[aria-labelledby="services-title"]');
  servicesSection?.classList.add('oj-services-feature');

  document.querySelector('.oj-process-section')?.remove();

  const finalSection = document.querySelector('.oj-final');
  const finalCall = finalSection?.querySelector('a[href^="tel:"]');
  if (!finalSection || !finalCall) return;

  finalCall.textContent = 'Call (872) 222-5502';
  finalCall.setAttribute('aria-label', 'Call Operation Junk at (872) 222-5502');
  finalSection.querySelectorAll('.oj-btn-row > :not(a[href^="tel:"])').forEach((element) => element.remove());
})();
