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

app.get('/', (req, res) => {
  // res.render('index', {
  //   layout: false,
  //   header: ComponentRenderer.header('SERVER'),
  //   main: ComponentRenderer.main(),
  //   footer: ComponentRenderer.footer(),
  // }),
  res.write(ComponentRenderer.header('SERVER'));
  res.write(ComponentRenderer.main());
  res.write(ComponentRenderer.footer());
  res.write(
    `<script type="text/javascript">
      window.addEventListener('load', () => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js');
        }
      });
    </script>`,
  );
  res.end();
});

app.listen(app.get('port'), () =>
  console.log('Node app is running on port', app.get('port')),
);
