// import express from 'express';

// // Initialize the express engine
// const app: express.Application = express();

// // Take a port 3000 for running server.
// const port: number = 3000;

// // Handling '/' Request
// app.get('/', (req, res) => {
//     res.send("TypeScript With Express");
// });

// // Server setup
// app.listen(port, () => {
//     console.log(`TypeScript with Express
//          http://localhost:${port}/`);
// });


import http from 'http';
import express from 'express';
import dotenv from 'dotenv-safe';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import router from './src/routes'
dotenv.config();

const app = express();
const server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev')); // Log requests to the console in development mode
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

// const router = require('./app/routes'); // Update this import based on your routes file

app.use('/', router);

server.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 8000}`);
});

export default app;


// var http = require('http');
// require('dotenv-safe').config();
// const helmet = require('helmet');
// var express = require('express');
// var app = express();
// const morgan = require('morgan')
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var server = http.createServer(app);
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(cookieParser());
// app.use(helmet())
// app.use(express.static(path.join(__dirname, 'public')));
// var router = require('./app/routes');

// app.use('/', router)
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'))
// }

// server.listen(process.env.PORT || 8000);

// module.exports = app;
