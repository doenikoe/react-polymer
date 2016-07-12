'use strict';

const express = require('express');
var responseTime = require('response-time');

// Constants
const port = 8080;

// App
const app = express();
app.use(responseTime());
app.get('/', function (req, res) {
  res.setHeader('Cache-Control', 'public, max-age=' + (maxAge / 1000));
  res.send('Hello world\n');
});


app.use('/react', express.static('react'));
app.use('/polymer', express.static('polymer'));

app.listen(port);
console.log('Running on http://localhost:' + port);
