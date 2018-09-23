importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js',
);

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  new RegExp('.*.js'),
  workbox.strategies.cacheFirst(),
);

// self.addEventListener('fetch', event =>
//   event.respondWith(
//     fetch(event.request).then(response => {
//       const clone = response.clone();
//       clone.text().then(text => console.log(text));
//       return response;
//     }),
//   ),
// );

self.addEventListener('message', ({ data }) => console.log(data));
