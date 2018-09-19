import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import render from './renderers/server-renderer';

export default {
  header: render(Header, { content: 'Header!!' }),
  main: render(Main, {
    content: 'Main!!',
    random: Math.ceil(Math.random() * 10000),
  }),
  footer: render(Footer, { content: 'Footer!!' }, { static: true }),
};
