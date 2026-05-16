/* Site nav — behavior only. Markup is static in each HTML page (see partials/nav.html). */
(function () {
  var header = document.getElementById('siteHeader');
  if (!header) return;

  // ── Skip navigation link ──────────────────────────────────────────────────
  var mainEl = document.querySelector('main');
  if (mainEl && !mainEl.id) mainEl.id = 'main-content';

  var skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-nav';
  skipLink.textContent = 'Skip to content';
  document.body.insertBefore(skipLink, document.body.firstChild);

  // ── Active state ──────────────────────────────────────────────────────────
  var path = window.location.pathname;

  header.querySelectorAll('.site-nav a[href]').forEach(function (link) {
    try {
      var linkPath = new URL(link.href, location.origin).pathname;
      if (linkPath === path) link.classList.add('active');
    } catch (e) { /* external links */ }
  });

  // Portfolio sub-pages: mark Portfolio link active
  if (path.startsWith('/portfolio/')) {
    var portfolioLink = header.querySelector('a[href="/portfolio.html"]');
    if (portfolioLink) portfolioLink.classList.add('active');
  }

  // Book a Shoot sub-pages: mark Book a Shoot dropdown trigger active
  if (path.startsWith('/book-a-shoot/')) {
    var bookingTrigger = header.querySelector('#ddBooking .nav-dropdown-trigger');
    if (bookingTrigger) bookingTrigger.classList.add('active');
  }

  // Mark dropdown trigger active when any child is active
  header.querySelectorAll('.nav-dropdown').forEach(function (dd) {
    if (dd.querySelector('a.active')) {
      dd.querySelector('.nav-dropdown-trigger').classList.add('active');
    }
  });

  // ── Dropdown logic ────────────────────────────────────────────────────────
  function closeAllDropdowns() {
    header.querySelectorAll('.nav-dropdown[data-open]').forEach(function (dd) {
      dd.removeAttribute('data-open');
      dd.querySelector('.nav-dropdown-trigger').setAttribute('aria-expanded', 'false');
    });
  }

  header.querySelectorAll('.nav-dropdown-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var dd     = trigger.closest('.nav-dropdown');
      var isOpen = dd.hasAttribute('data-open');
      closeAllDropdowns();
      if (!isOpen) {
        dd.setAttribute('data-open', '');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) closeAllDropdowns();
  });

  // ── Hamburger ─────────────────────────────────────────────────────────────
  var toggle  = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');

  toggle.addEventListener('click', function () {
    var open = siteNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (!open) closeAllDropdowns();
  });

  // ── Escape key ────────────────────────────────────────────────────────────
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    closeAllDropdowns();
    siteNav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  });

  // ── Scroll shrink — passive scroll listener + rAF ───────────────────────
  // Single threshold: collapse when scrollY > 40px, expand when scrollY <= 40px.
  // No lock — CSS transitions handle mid-animation reversals naturally.
  // rAF batching (one check per frame) is sufficient to prevent jank.
  var THRESHOLD  = 40;
  var rafPending = false;

  function applyScrollState() {
    header.classList.toggle('shrunk', window.scrollY > THRESHOLD);
    rafPending = false;
  }

  // Apply correct state immediately (handles reloads at scrolled position)
  applyScrollState();

  window.addEventListener('scroll', function () {
    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(applyScrollState);
    }
  }, { passive: true });
}());
