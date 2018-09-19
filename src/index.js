import Header from './components/header';
import Main from './components/main';
import render from './renderers/client-renderer';

render({ Header, Main });

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
});
