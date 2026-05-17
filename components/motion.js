/* ── Homepage carousel: arrow navigation + restrained auto-advance ── */
(function () {
  var track = document.getElementById('carouselTrack');
  if (!track) return;
  var carousel = track.closest('.homepage-carousel') || track;
  var intervalId = null;
  var interactionTimer = null;
  var AUTO_ADVANCE_MS = 8500;
  var MANUAL_PAUSE_MS = 24000;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var progressBar = null;

  if (!reduceMotion) {
    var progress = document.createElement('div');
    progress.className = 'carousel-progress';
    progress.setAttribute('aria-hidden', 'true');
    progress.innerHTML = '<span class="carousel-progress-bar"></span>';
    carousel.appendChild(progress);
    progressBar = progress.querySelector('.carousel-progress-bar');
  }

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

  function updateProgress() {
    if (!progressBar) return;
    var maxScroll = track.scrollWidth - track.clientWidth;
    var ratio = maxScroll <= 0 ? 1 : Math.min(track.scrollLeft / maxScroll, 1);
    progressBar.style.width = Math.max(ratio * 100, 8) + '%';
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

  function pauseAfterManualInteraction() {
    stopAutoAdvance();
    window.clearTimeout(interactionTimer);
    if (reduceMotion) return;
    interactionTimer = window.setTimeout(startAutoAdvance, MANUAL_PAUSE_MS);
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
      pauseAfterManualInteraction();
      moveCarousel(dir);
    });
  });

  carousel.addEventListener('mouseenter', stopAutoAdvance);
  carousel.addEventListener('mouseleave', startAutoAdvance);
  carousel.addEventListener('focusin', stopAutoAdvance);
  carousel.addEventListener('focusout', startAutoAdvance);
  carousel.addEventListener('pointerdown', pauseAfterManualInteraction);
  carousel.addEventListener('pointerup', pauseAfterManualInteraction);
  carousel.addEventListener('pointercancel', pauseAfterManualInteraction);
  track.addEventListener('scroll', function () {
    window.requestAnimationFrame(updateProgress);
  }, { passive: true });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      stopAutoAdvance();
      return;
    }
    startAutoAdvance();
  });

  window.requestAnimationFrame(function () {
    setInitialCarouselPosition();
    updateProgress();
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

  // Image moments get a barely perceptible settle; text remains immediate.
  Array.from(document.querySelectorAll('.page-wrap picture, .page-wrap img.about-portrait'))
    .forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i * 0.04, 0.16) + 's';
      el.classList.add('image-reveal');
      io.observe(el);
    });

  // Larger non-header sections can fade, but primary page headers stay instant.
  Array.from(document.querySelectorAll('.page-wrap > section, .page-wrap > details, .page-wrap > .page-cta'))
    .filter(function (el) {
      return !el.classList.contains('project-grid') &&
             !el.classList.contains('category-grid');
    })
    .forEach(function (el) {
      el.classList.add('fade-in');
      io.observe(el);
    });
}());
