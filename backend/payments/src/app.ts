import { requestLogger } from './middlewares/request-logger.middleware';
import { TOKENS } from './utils/tokens.utils';
import { paypalRouter } from './routers/paypal.router';
import express, { Application, urlencoded } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: TOKENS.allowedOrigins,
  })
);
app.use(requestLogger);

app.use(TOKENS.routes.paymentsBasePath, paypalRouter);

export { app };
