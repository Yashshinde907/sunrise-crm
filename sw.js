const cacheName = 'sunrise-v1';
const staticAssets = ['./', './index.html', './app.js', './manifest.json'];

self.addEventListener('install', async () => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
