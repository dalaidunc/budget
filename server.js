var express = require('express');
var path = require('path');

var app = express();

var port = 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

// my css
app.use('/css', express.static(path.resolve(__dirname, 'css')));

// my js
app.use('/js', express.static(path.resolve(__dirname, 'build')));

// 3rd party libraries
app.use('/vendor', express.static(path.resolve(__dirname, 'node_modules')));

app.listen(port, () => console.log(`Server listening on port ${port}`));
