const staticCacheName = "Snap! Wiki";
const assets = [
  "assets/js/base.js",
  "assets/css/base.scss",
  "assets/css/markdown.scss",
  "/",
  "/status",
  "/assets/js/status.js"
];

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("Caching shell assets...");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});
