import cookieParser from 'cookie-parser';
import express, { Application, urlencoded } from 'express';
import cors from 'cors';
import { TOKENS } from './utils/tokens.utils';
import { requestLogger } from './middlewares/request-logger.middleware';

const app: Application = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: TOKENS.allowedOrigins,
  })
);
app.use(cookieParser());
app.use(requestLogger);


export { app };
