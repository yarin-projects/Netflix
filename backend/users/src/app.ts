import cookieParser from 'cookie-parser';
import express, { Application, urlencoded } from 'express';
import cors from 'cors';
import { TOKENS } from './utils/tokens.utils';

const app: Application = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: TOKENS.corsOrigin,
  })
);
app.use(cookieParser());

export { app };
