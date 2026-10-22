// Lightweight progressive enhancement. No framework or paid plugins required.
(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-nav');
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  if (toggle && menu) {
    const closeMenu = () => {
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    };
    toggle.addEventListener('click', () => {
      const opening = menu.hidden;
      menu.hidden = !opening;
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => {
      if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
  }
})();
