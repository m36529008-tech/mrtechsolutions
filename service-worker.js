self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("mrtech-cache").then(cache =>
      cache.addAll([
        "/mrtechsolutions/",
        "/mrtechsolutions/index.html",
        "/mrtechsolutions/style.css",
        "/mrtechsolutions/script.js"
      ])
    )
  );
});
