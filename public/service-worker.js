importScripts("/precache-manifest.98f555d0a86062c5c355ee3610a27338.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* eslint-disable */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('message', (e) => {
  if (e.data.action == 'skipWaiting') self.skipWaiting();
});

