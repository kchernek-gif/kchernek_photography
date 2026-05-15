/* Shared nav component — edit here, updates all pages */
(function () {
  var header = document.getElementById('siteHeader');
  if (!header) return;

  // ── Skip navigation link ──────────────────────────────────────────────────
  // Wire the first <main> on the page to #main-content so the skip link works
  // without touching every HTML file.
  var mainEl = document.querySelector('main');
  if (mainEl && !mainEl.id) mainEl.id = 'main-content';

  var skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-nav';
  skipLink.textContent = 'Skip to content';
  document.body.insertBefore(skipLink, document.body.firstChild);

  header.innerHTML = `
    <div class="masthead">
      <div class="masthead-inner">
        <a href="/" class="logo-link">
          <img src="/brand_assets/cropped_Black.png" alt="" class="logo-img" aria-hidden="true">
          <span class="site-name">Keith Chernek</span>
        </a>
        <p class="site-tagline">Fashion &#8212; Lifestyle &#8212; DFW</p>
      </div>
    </div>

    <div class="nav-row">
      <button class="nav-toggle" id="navToggle"
              aria-label="Open navigation" aria-expanded="false" aria-controls="siteNav">
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
      </button>

      <nav class="site-nav" id="siteNav" aria-label="Main navigation">
        <a href="/portfolio.html">Portfolio</a>
        <a href="/services.html">Services</a>
        <a href="/about.html">About</a>

        <div class="nav-dropdown" id="ddBooking">
          <button class="nav-dropdown-trigger" aria-expanded="false" aria-haspopup="true">
            Book a Shoot <span class="dropdown-arrow" aria-hidden="true">&#9662;</span>
          </button>
          <div class="nav-dropdown-menu">
            <a href="/book-a-shoot/model-development.html">Model Development</a>
            <a href="/commercial.html">Commercial &amp; Brand</a>
          </div>
        </div>

        <div class="nav-dropdown" id="ddConnect">
          <button class="nav-dropdown-trigger" aria-expanded="false" aria-haspopup="true">
            Connect <span class="dropdown-arrow" aria-hidden="true">&#9662;</span>
          </button>
          <div class="nav-dropdown-menu">
            <a href="/contact.html">Get in Touch</a>
            <a href="https://meetup.com/dfwphotowalks" target="_blank" rel="noopener noreferrer">DFW Photowalks &#8599;</a>
          </div>
        </div>
      </nav>
    </div>
  `;

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

  // ── Scroll shrink — IntersectionObserver sentinel (no scroll listener) ────
  // Negative rootMargin (-80px top) fires ~80px before the sentinel reaches
  // the viewport edge, so the collapse starts well before content is hidden.
  var sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.cssText = 'height:1px;pointer-events:none;visibility:hidden;';
  header.insertAdjacentElement('afterend', sentinel);
  new IntersectionObserver(function (entries) {
    header.classList.toggle('shrunk', !entries[0].isIntersecting);
  }, { threshold: 0, rootMargin: '-80px 0px 0px 0px' }).observe(sentinel);
}());
