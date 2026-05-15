/* Scroll-triggered section fade-in — Intersection Observer */
(function () {
  if (!window.IntersectionObserver) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      io.unobserve(e.target);
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });

  // Portfolio shoot pages: release GPU layer after each thumbnail hover transition
  document.querySelectorAll('.project-thumb img').forEach(function (img) {
    img.addEventListener('transitionend', function () { img.style.willChange = 'auto'; });
  });

  // Portfolio/category pages: fade individual grid items with stagger
  Array.from(document.querySelectorAll('.project-grid > *, .category-grid > *'))
    .forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i * 0.07, 0.21) + 's';
      el.classList.add('fade-in');
      io.observe(el);
    });

  // All pages: fade section blocks (skip grid containers handled above)
  Array.from(document.querySelectorAll('.page-wrap > *'))
    .filter(function (el) {
      return !el.classList.contains('project-grid') &&
             !el.classList.contains('category-grid');
    })
    .forEach(function (el) {
      el.classList.add('fade-in');
      io.observe(el);
    });
}());
