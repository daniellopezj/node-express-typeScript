var http = require('http');
require('dotenv-safe').config();
const helmet = require('helmet');
var express = require('express');
var app = express();
const morgan = require('morgan')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var server = http.createServer(app);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(helmet())
app.use(express.static(path.join(__dirname, 'public')));
var router = require('./app/routes');

app.use('/', router)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

server.listen(process.env.PORT || 8000);

module.exports = app;
