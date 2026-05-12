/* Shared footer component — edit here, updates all pages */
(function () {
  var el = document.querySelector('footer[data-component="footer"]');
  if (!el) return;

  el.innerHTML = [
    '<p class="footer-tagline">DFW editorial and portrait photography</p>',

    '<div class="footer-social">',

      '<a href="https://instagram.com/kchernek" target="_blank" rel="noopener" aria-label="Instagram">',
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',
          '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>',
          '<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>',
          '<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
        '</svg>',
      '</a>',

      '<a href="https://www.threads.com/@kchernek" target="_blank" rel="noopener" aria-label="Threads">',
        '<img src="/Threads-Logo.jpg" alt="" aria-hidden="true" width="18" height="18" style="display:block;mix-blend-mode:multiply;">',
      '</a>',

    '</div>',

    '<div class="footer-contact">',
      '<a href="mailto:keith@kchernek.com">keith@kchernek.com</a><br>',
      'Irving, TX 75039',
    '</div>',

    '<p class="footer-copy">&copy; 2026 Keith Chernek. All rights reserved.</p>',
  ].join('');
}());
