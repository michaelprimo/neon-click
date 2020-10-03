// sw.js

const ASSETS = [
    "/js/animations.js",
    "/js/buttons.js",
    "/js/check.js",
    "/js/countdown.js",
    "/js/generate.js",
    "/js/index.js",
    "/js/reset.js",
    "/js/state.js",
    "/AUTOMANI.ttf",
    "/colorAnimation.css",
    "/index.css",
    "/index.html",
    "/SIMPLIFICA.ttf",
    "/images/icons-192.png",
    "/images/icons-512.png"
];


// sw.js

let cache_name = "NeonCity"; // The string used to identify our cache

self.addEventListener("install", event => {
    console.log("installing...");
    event.waitUntil(
        caches
            .open(cache_name)
            .then(cache => {
                return cache.addAll(ASSETS);
            })
            .catch(err => console.log(err))
    );
});

self.addEventListener("fetch", event => {
    console.log("You fetched " + event.url);
});

self.addEventListener("fetch", event => {
    if (event.request.url === "https://www.michaelprimo.it/") {
        // or whatever your app's URL is
        event.respondWith(
            fetch(event.request).catch(err =>
                self.cache.open(cache_name).then(cache => cache.match("/offline.html"))
            )
        );
    } else {
        event.respondWith(
            fetch(event.request).catch(err =>
                caches.match(event.request).then(response => response)
            )
        );
    }
});