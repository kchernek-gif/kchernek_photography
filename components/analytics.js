/* Vercel Web Analytics loader for static HTML pages. */
(function () {
  var host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1' || host === '::1') return;

  window.va = window.va || function () {
    (window.vaq = window.vaq || []).push(arguments);
  };

  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  document.head.appendChild(script);
}());
