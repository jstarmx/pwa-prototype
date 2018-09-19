/* eslint-disable no-restricted-globals, no-param-reassign, comma-dangle */

const currentCache = `cache-v1`;

const putCache = async (request, response, cache) => {
  const clone = response.clone();
  if (cache === undefined) {
    cache = await caches.open(currentCache);
  }
  cache.put(request, clone);
};

const fetchAndCache = request =>
  fetch(request.clone())
    .then(response => {
      putCache(request, response);
      return response;
    })
    .catch(err => {
      console.error(err);
    });

const cacheNoCors = (url, cache) =>
  fetch(url, {
    mode: 'no-cors',
  }).then(response => {
    putCache(url, response, cache);
    return response;
  });

self.addEventListener('install', event =>
  event.waitUntil(
    caches
      .open(currentCache)
      .then(cache => cacheNoCors('/script/index.js', cache)),
  ),
);

self.addEventListener('activate', event =>
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames
            .filter(
              cacheName =>
                cacheName.startsWith('cache-v') && cacheName !== currentCache,
            )
            .map(cache => caches.delete(cache)),
        ),
      ),
  ),
);

self.addEventListener('fetch', event => {
  // DevTools opening will trigger these o-i-c requests, which this SW can't handle.
  // There's probably more going on here, but I'd rather just ignore this problem. :)
  // https://github.com/paulirish/caltrainschedule.io/issues/49
  if (
    event.request.cache === 'only-if-cached' &&
    event.request.mode !== 'same-origin'
  )
    return null;

  return event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetchAndCache(event.request)),
  );
});
