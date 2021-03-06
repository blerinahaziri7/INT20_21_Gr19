const cacheName = "home_cache"

const cacheAssets = [
  "/",
  "images",
  "images/Apartment_4.png",
  "images/GreenLakeHotel_8.jpeg",
  "images/OldTown_2.png",
  "images/GreenLakeHotel_3.jpeg",
  "images/bw2.jpg",
  "images/bw1.jpg",
  "images/colorful.jpg",
  "images/meeting.jpg",
  "images/eliza.jpg",
  "images/Learti.jpeg",
  "images/discover.jpg",
  "images/inspire.jpg",
  "images/favicon.png",
  "images/selene_logo.png",
  "home.html",
  "home.css",
  "home.js"
];

// call install event
self.addEventListener("install", event => {
  console.log("Service Workers: Installed!");

  //wait until promise is finished
  event.waitUntil(
    caches.open(cacheName)  //open a new cache
          .then(cache => {
            console.log("Service Worker: Cashing Files...");
            cache.addAll(cacheAssets);   //add the files to the cache object
          })
          .then(() => self.skipWaiting())
  );
})


// call activate event
self.addEventListener("activate", event => {
  console.log("Service Worker: Activated!");
})


// call fetch event
self.addEventListener("fetch", event => {
  console.log("Service Worker: Fetching...");
  event.respondWith(
    fetch(event.request) //fetch initial request
                       .catch( () => caches.match(event.request))); //if fails fetch from the cache
});