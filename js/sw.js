// sw.js

const ASSETS = [
    "animations.js",
    "buttons.js",
    "check.js",
    "countdown.js",
    "generate.js",
    "index.js",
    "reset.js",
    "state.js",
    "sw.js",
    "/AUTOMANI.ttf",
    "/colorAnimation.css",
    "/index.css",
    "/index.html",
    "/SIMPLIFICA.ttf"
];


// sw.js

let cache_name = "NeonCity"; // The string used to identify our cache

self.addEventListener("install", event => {
    console.log("installing...");
    event.waitUntil(
        caches
            .open(cache_name)
            .then(cache => {
                return cache.addAll(assets);
            })
            .catch(err => console.log(err))
    );
});

self.addEventListener("fetch", event => {
    console.log("You fetched " + event.url);
});

self.addEventListener("fetch", event => {
    if (event.request.url === "https://www.simicart.com/") {
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