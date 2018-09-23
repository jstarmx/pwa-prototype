import Header from './components/header';
import Main from './components/main';
import render from './renderers/client-renderer';

window.addEventListener('load', () => {
  const components = render({ Header, Main });
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => navigator.serviceWorker.controller.postMessage(components));
});
