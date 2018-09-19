importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js',
);

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  new RegExp('.*.js'),
  workbox.strategies.cacheFirst(),
);
