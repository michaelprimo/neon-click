const version = "1.0.4";
const cacheName = `NeonClick-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
        `/offline.html`,
        `/index.css`,
        `/colorAnimation.css`,
        `/package.json`,
        `/manifest.json`,
        `/manifest.webmanifest`,
        `/js/buttons.js`,
        `/js/animations.js`,
        `/js/check.js`,
        `/js/countdown.js`,
        `/js/generate.js`,
        `/js/index.js`,
        `/js/reset.js`,
        `/js/state.js`,
        `/AUTOMANI.TTF`,
        `/Neon.ttf`,
        `/SIMPLIFICA.ttf`,
        `/LoveloLineBold.ttf`,
        `/images/reset.png`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
