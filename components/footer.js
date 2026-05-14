/* Shared footer component — edit here, updates all pages */
(function () {
  var el = document.querySelector('footer[data-component="footer"]');
  if (!el) return;

  el.innerHTML = [
    '<p class="footer-tagline">DFW editorial and portrait photography</p>',

    '<div class="footer-social">',

      '<a href="https://instagram.com/kchernek" target="_blank" rel="noopener" aria-label="Instagram">',
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',
          '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>',
          '<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>',
          '<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
        '</svg>',
      '</a>',

      '<a href="https://www.threads.com/@kchernek" target="_blank" rel="noopener" aria-label="Threads">',
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',
          '<path d="M19 7.5c-1.333-3-3.667-4.5-7-4.5c-5 0-8 2.5-8 9s3.5 9 8 9c4 0 6.5-1.5 7.5-5.5c.5-2 0-4-1.5-5c-1-.667-3-1-6-1c-2 0-3 .667-3 2s1.333 2 4 2c1.333 0 2.333.333 3 1"/>',
        '</svg>',
      '</a>',

    '</div>',

    '<div class="footer-contact">',
      '<a href="mailto:keith@kchernek.com">keith@kchernek.com</a><br>',
      'Irving, TX 75039',
    '</div>',

    '<p class="footer-copy">&copy; 2026 Keith Chernek. All rights reserved.</p>',
  ].join('');
}());
