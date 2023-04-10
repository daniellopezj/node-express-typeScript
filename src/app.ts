import http from 'http';
import express from 'express';
import dotenv from 'dotenv-safe';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import router from './routes'
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

app.use('/', router);

console.log(process.env.NODE_ENV)
server.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 8000}`);
});

export default app;