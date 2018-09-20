import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import serverRender from './server-renderer';
import clientRender from './client-renderer';

if ('document' in global) {
  clientRender({ Header, Main });
}

module.exports = {
  header: suffix => serverRender(Header, { content: `Header from ${suffix}` }),
  main: () =>
    serverRender(Main, {
      content: 'Main',
      random: Math.ceil(Math.random() * 10000),
    }),
  footer: () => serverRender(Footer, { content: 'Footer' }, { static: true }),
};
