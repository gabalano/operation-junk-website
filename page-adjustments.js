(() => {
  const servicesSection = document.querySelector('section[aria-labelledby="services-title"]');
  servicesSection?.classList.add('oj-services-feature');
  const servicesKicker = servicesSection?.querySelector('.oj-section-kicker');
  if (servicesKicker) servicesKicker.textContent = 'What we take';

  document.querySelector('.oj-process-section')?.remove();

  const serviceArea = document.querySelector('.oj-service-area');
  const serviceAreaTitle = document.getElementById('area-title');
  const serviceAreaCopy = serviceArea?.querySelector('.oj-section-head p');
  const cityPills = serviceArea?.querySelector('.oj-city-pills');
  const cities = [
    'Schaumburg', 'Hoffman Estates', 'Streamwood', 'Elk Grove Village',
    'Rolling Meadows', 'Arlington Heights', 'Palatine', 'Roselle',
    'Hanover Park', 'Carol Stream', 'Bloomingdale', 'Bartlett',
    'Elgin', 'South Elgin', 'Itasca', 'Wood Dale', 'Addison',
    'Glendale Heights', 'Mount Prospect', 'Prospect Heights',
    'Des Plaines', 'Wheeling', 'Buffalo Grove', 'Barrington',
    'South Barrington', 'Inverness'
  ];

  if (serviceAreaTitle) serviceAreaTitle.textContent = 'Serving Schaumburg and the Northwest Suburbs.';
  if (serviceAreaCopy) serviceAreaCopy.textContent = 'Based in Schaumburg and serving nearby Northwest-suburb communities. Call to confirm availability for locations just outside this list.';
  if (cityPills) {
    cityPills.setAttribute('aria-label', 'Cities served by Operation Junk');
    cityPills.innerHTML = cities.map((city) => `<span>${city}</span>`).join('');
  }

  const finalSection = document.querySelector('.oj-final');
  const finalCall = finalSection?.querySelector('a[href^="tel:"]');
  if (!finalSection || !finalCall) return;

  finalCall.textContent = 'Call (872) 222-5502';
  finalCall.setAttribute('aria-label', 'Call Operation Junk at (872) 222-5502');
  finalSection.querySelectorAll('.oj-btn-row > :not(a[href^="tel:"])').forEach((element) => element.remove());
})();
