/* Scroll-triggered section fade-in — Intersection Observer */
(function () {
  if (!window.IntersectionObserver) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      io.unobserve(e.target);
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });

  // Portfolio/category pages: fade individual grid items with stagger
  Array.from(document.querySelectorAll('.project-grid > *, .category-grid > *'))
    .forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i * 0.08, 0.32) + 's';
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
