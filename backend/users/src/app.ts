import cookieParser from 'cookie-parser';
import express, { Application, urlencoded } from 'express';
import cors from 'cors';
import { TOKENS } from './utils/tokens.utils';
import { userRouter } from './routers/user.router';

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

app.use(TOKENS.routes.usersBasePath, userRouter);

export { app };
