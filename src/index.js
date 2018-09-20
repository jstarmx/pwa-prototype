window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
});

fetch('./component-renderer.js')
  .then(response => response.text())
  .then(response => {
    // eslint-disable-next-line no-new-func
    const ComponentRenderer = new Function(response);
    ComponentRenderer();
  });
