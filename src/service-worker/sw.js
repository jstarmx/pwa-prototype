importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js',
  'component-renderer.js',
  'template-renderer.js',
);

workbox.routing.registerRoute(
  '/',
  workbox.streams.strategy([
    () => TemplateRenderer.head(),
    () => ComponentRenderer.header('SERVICE WORKER'),
  ]),
);

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  new RegExp('.*.js'),
  workbox.strategies.cacheFirst(),
);
