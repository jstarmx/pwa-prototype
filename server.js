require('babel-register');
const express = require('express');
const exphbs = require('express-handlebars');

const ComponentRenderer = require('./src/renderers/component-renderer');

const app = express();

app.engine('handlebars', exphbs({ partialsDir: './src/views/partials' }));
app.set('port', process.env.PORT || 9001);
app.set('views', './src/views');
app.set('view engine', 'handlebars');
app.use(express.static('./public'));

app.get('/', (req, res) =>
  res.render('index', {
    layout: false,
    header: ComponentRenderer.header('SERVER'),
    main: ComponentRenderer.main(),
    footer: ComponentRenderer.footer(),
  }),
);

app.listen(app.get('port'), () =>
  console.log('Node app is running on port', app.get('port')),
);
