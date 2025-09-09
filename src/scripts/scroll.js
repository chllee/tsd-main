const links = Array.from(document.querySelectorAll('#menu a'));
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

function onScroll() {
  const fromTop = window.scrollY + 80;
  let current = sections[0]?.id;
  for (const sec of sections) {
    if (sec.offsetTop <= fromTop) current = sec.id;
  }
  links.forEach(a => {
    if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
    else a.classList.remove('active');
  });
}

links.forEach(a => a.addEventListener('click', (e) => {
  const href = a.getAttribute('href');
  if (href?.startsWith('#')) {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}));

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();