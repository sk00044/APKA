self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("apka-cache").then((cache) =>
      cache.addAll([
        "/APKA/",
        "/APKA/index.html",
        "/APKA/style.css",
        "/APKA/script.js"
      ])
    )
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
