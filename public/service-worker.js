importScripts("/precache-manifest.8de8b7110892af70e6b8fba346b520e6.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* eslint-disable */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('message', (e) => {
  if (e.data.action == 'skipWaiting') self.skipWaiting();
});

