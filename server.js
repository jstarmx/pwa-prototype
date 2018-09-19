require('babel-register');
const express = require('express');
const exphbs = require('express-handlebars');

const render = require('./src/renderers/server-renderer');
const Header = require('./src/components/header').default;
const Main = require('./src/components/main').default;
const Footer = require('./src/components/footer').default;

const app = express();

app.engine('handlebars', exphbs());
app.set('port', process.env.PORT || 9001);
app.set('views', './src/views');
app.set('view engine', 'handlebars');
app.use(express.static('./public'));

app.get('/', (req, res) =>
  res.render('index', {
    layout: false,
    header: render(Header, { content: 'Header' }),
    main: render(Main, {
      content: 'Main',
      random: Math.ceil(Math.random() * 10000),
    }),
    footer: render(Footer, { content: 'Footer' }, { static: true }),
  }),
);

app.listen(app.get('port'), () =>
  console.log('Node app is running on port', app.get('port')),
);
