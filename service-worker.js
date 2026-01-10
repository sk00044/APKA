const CACHE_NAME = "apka-cache-v1";

const FILES_TO_CACHE = [
  "/APKA/",
  "/APKA/index.html",
  "/APKA/style.css",
  "/APKA/script.js",

  // icons & images
  "/APKA/icon.png",
  "/APKA/raymond.png",
  "/APKA/siyarams.jpg",
  "/APKA/dj.png",
  "/APKA/arvind.png"
];

// INSTALL
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ACTIVATE (old cache clean)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// FETCH
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
