/* ── Homepage carousel: arrow navigation + restrained auto-advance ── */
(function () {
  var track = document.getElementById('carouselTrack');
  if (!track) return;
  var carousel = track.closest('.homepage-carousel') || track;
  var intervalId = null;
  var AUTO_ADVANCE_MS = 5000;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function getStepAmount() {
    var item = track.querySelector('.carousel-item');
    if (!item) return 0;
    var gap = parseFloat(getComputedStyle(track).gap) || 16;
    return item.offsetWidth + gap;
  }

  function moveCarousel(dir) {
    var amount = getStepAmount();
    if (!amount) return;
    track.scrollBy({ left: dir * amount, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  function advanceCarousel() {
    var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    if (atEnd) {
      track.scrollTo({ left: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      return;
    }

    moveCarousel(1);
  }

  function startAutoAdvance() {
    if (reduceMotion || intervalId || document.hidden) return;
    intervalId = window.setInterval(advanceCarousel, AUTO_ADVANCE_MS);
  }

  function stopAutoAdvance() {
    if (!intervalId) return;
    window.clearInterval(intervalId);
    intervalId = null;
  }

  function setInitialCarouselPosition() {
    if (carousel.classList.contains('hero-carousel')) return;
    var amount = getStepAmount();
    if (!amount || track.scrollLeft > 0) return;
    track.scrollTo({ left: amount, behavior: 'auto' });
  }

  document.querySelectorAll('.carousel-arrow').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var dir = btn.classList.contains('carousel-arrow--prev') ? -1 : 1;
      moveCarousel(dir);
    });
  });

  carousel.addEventListener('mouseenter', stopAutoAdvance);
  carousel.addEventListener('mouseleave', startAutoAdvance);
  carousel.addEventListener('focusin', stopAutoAdvance);
  carousel.addEventListener('focusout', startAutoAdvance);
  carousel.addEventListener('pointerdown', stopAutoAdvance);
  carousel.addEventListener('pointerup', startAutoAdvance);
  carousel.addEventListener('pointercancel', startAutoAdvance);

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      stopAutoAdvance();
      return;
    }
    startAutoAdvance();
  });

  window.requestAnimationFrame(function () {
    setInitialCarouselPosition();
    startAutoAdvance();
  });
}());

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
