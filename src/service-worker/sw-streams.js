// importScripts("precache-manifest.7f27717c905d89ab52c35dafef11b9d5.js", "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js',
  // 'component-renderer.js',
  // 'template-renderer.js',
);

// workbox.routing.registerRoute(
//   '/',
//   workbox.streams.strategy([
//     () => Templates.head(),
//     () => ComponentRenderer.header('SERVICE WORKER'),
//   ]),
// );

// workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

// workbox.routing.registerRoute(
//   new RegExp('.*.js'),
//   workbox.strategies.cacheFirst(),
// );

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(function(response) {
      const clone = response.clone();
      // console.log(clone.body);
      const reader = clone.body.getReader();

      new ReadableStream({
        start(controller) {
          return pump();
          function pump() {
            return reader.read().then(({ done, value }) => {
              // When no more data needs to be consumed, close the stream
              // console.log(value);
              // const reader2 = new FileReader();
              // reader2.addEventListener('loadend', function() {
              //   console.log(reader2.result);
              // });
              // reader2.readAsText(new Blob(value));
              console.log(new TextDecoder('utf-8').decode(value));
              if (done) {
                controller.close();
                return;
              }
              // Enqueue the next data chunk into our target stream
              controller.enqueue(value);
              return pump();
            });
          }
        },
      });
      return response;
    }),
    // .then(stream => new Response(stream))
    // .then(response => response.blob())
    // // .then(blob => URL.createObjectURL(blob))
    // .then(url => {
    //   const reader2 = new FileReader();
    //   reader2.addEventListener('loadend', function() {
    //     console.log(reader2.result);
    //   });
    //   reader2.readAsText(url);
    //   console.log(reader2.result);
    //   return url;
    // }),
    // .catch(err => console.error(err));

    //   // reader.read().then(body => console.log(body));
    // }),
  );
});
