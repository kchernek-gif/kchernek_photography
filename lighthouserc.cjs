module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/portfolio.html',
        'http://localhost:3000/services.html',
        'http://localhost:3000/commercial.html',
        'http://localhost:3000/book-a-shoot/model-development.html',
        'http://localhost:3000/contact.html',
      ],
      numberOfRuns: 1,
      settings: {
        // Required for containerised CI environments
        chromeFlags: '--no-sandbox --headless',
      },
    },
    assert: {
      // All assertions use 'warn' so the workflow surfaces issues
      // without blocking the build. Tighten thresholds once baselines
      // are established.
      assertions: {
        'categories:performance':    ['warn', { minScore: 0.5 }],
        'categories:accessibility':  ['warn', { minScore: 0.7 }],
        'categories:best-practices': ['warn', { minScore: 0.7 }],
        'categories:seo':            ['warn', { minScore: 0.7 }],
      },
    },
    upload: {
      // Uploads reports to Google's temporary public storage (no server needed).
      // Reports are publicly accessible for ~7 days then auto-deleted.
      target: 'temporary-public-storage',
    },
  },
};
