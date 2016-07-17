require('babel-register');
require('babel-polyfill');
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const publicPath = '../dist';
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

app.use(express.static('dist/'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if (env === 'development') {
  console.log('Environment: ', env);
  require('./middleware/devserver')(app);
}

app.use('/api/data', (req, res, next) => {
  res.send('hello again');
});

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
