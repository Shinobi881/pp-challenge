require('babel-register');
require('babel-polyfill');
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');
const jsonfile = require('jsonfile');

const app = express();
const publicPath = '../dist';
const port = process.env.PORT || 3030;
const env = process.env.NODE_ENV || 'development';
const file = '/Users/Martial-Form/Desktop/Coding/coding-challenges/pp-challenge/node_modules/cldr-misc-full/main/af/delimiters.json';
const file2 = '/node_modules/cldr-misc-full/main/af/delimiters.json';
// /node_modules/cldr-misc-full/main/af/delimiters.json
// const data = require(file);
const newData = fs.readFileSync(file);

const newPath = path.resolve( __dirname, '../node_modules/cldr-misc-full/main/af/delimiters.json');
console.log('Node modules: ', newPath);

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

app.use('/json', (req, res) => {
  fs.readFile(newPath, (err, data) => {
    if (err) throw err;

    res.send(JSON.parse(data.toString()));
  });  
});

app.get('*', (req, res) => {
  res.send(publicPath);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
