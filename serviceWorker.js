const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "./assets/css/input.css",
  "./assets/scripts/app.js",
  "./assets/videos/video-demo.mp4",
  "./assets/images/marcelo-ramos.png",
  "./assets/images/marcelo-ramos-2.png",
  "./assets/images/bettina-rudolph.png",
  "./assets/images/cris-arcangeli.png",
  "./assets/images/samy-dana.png",
  "./assets/images/daniel.jpg",
  "./assets/images/logo.svg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
