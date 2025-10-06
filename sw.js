self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('painter-v1').then(cache => cache.addAll([
      '/',
      '/painter.html',
      '/manifest.json'
      // Agrega aquí tus íconos y otros recursos
    ]))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});