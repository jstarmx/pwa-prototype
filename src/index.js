import Header from './components/header';
import Main from './components/main';
// import Footer from './components/footer';
import render from './renderers/client-renderer';
// import renderToString from './renderers/server-renderer';
// import Template from './views/index.handlebars';

// document.querySelector('html').innerHTML = Template({
//   header: renderToString(Header, { content: 'Header!!' }),
//   main: renderToString(Main, {
//     content: 'Main!!',
//     random: Math.ceil(Math.random() * 10000),
//   }),
//   footer: renderToString(Footer, { content: 'Footer!!' }, { static: true }),
// });

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
});

console.log('index loaded');

render({ Header, Main });
