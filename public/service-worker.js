importScripts("/precache-manifest.1a6ce781fd70616316bf468bd5fa11d6.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* eslint-disable */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('message', (e) => {
  if (e.data.action == 'skipWaiting') self.skipWaiting();
});

