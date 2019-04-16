importScripts("/precache-manifest.d8d1b3b5e5ba80358c1bf61490617736.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* eslint-disable */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('message', (e) => {
  if (e.data.action == 'skipWaiting') self.skipWaiting();
});

