importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js',
  'sw-renderer.js',
);

console.log(SWRenderer.default.render());

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  new RegExp('.*.js'),
  workbox.strategies.cacheFirst(),
);
