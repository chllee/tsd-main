// /src/scripts/nav.js
const btn = document.querySelector('.hamburger');
const overlay = document.getElementById('mobile-menu');
const overlayNav = overlay?.querySelector('.mobile-links');
const desktopMenu = document.querySelector('.menu');

if (overlayNav && desktopMenu) {
  // Mirror desktop links into the overlay on load
  overlayNav.innerHTML = desktopMenu.innerHTML;
}

function openMenu() {
  overlay.classList.add('open');
  document.body.classList.add('no-scroll');
  btn.setAttribute('aria-expanded', 'true');
  overlay.setAttribute('aria-hidden', 'false');
  // focus the first link for accessibility
  const firstLink = overlay.querySelector('a');
  firstLink && firstLink.focus();
}

function closeMenu() {
  overlay.classList.remove('open');
  document.body.classList.remove('no-scroll');
  btn.setAttribute('aria-expanded', 'false');
  overlay.setAttribute('aria-hidden', 'true');
  btn.focus();
}

function toggleMenu() {
  const isOpen = overlay.classList.contains('open');
  isOpen ? closeMenu() : openMenu();
}

btn?.addEventListener('click', toggleMenu);

// Close when clicking outside (overlay background)
overlay?.addEventListener('click', (e) => {
  if (e.target === overlay) closeMenu();
});

// Close on link click
overlay?.addEventListener('click', (e) => {
  const target = e.target;
  if (target instanceof HTMLElement && target.tagName === 'A') {
    closeMenu();
  }
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) {
    closeMenu();
  }
});
