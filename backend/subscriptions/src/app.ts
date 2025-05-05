import { requestLogger } from './middlewares/request-logger.middleware';
import { TOKENS } from './utils/tokens.utils';
import { subscriptionRouter } from './routers/subscription.router';
import { internalSubscriptionRouter } from './routers/internal-subscription.router';
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

app.use(TOKENS.routes.subscriptionsBasePath, subscriptionRouter);
app.use(TOKENS.routes.internalSubscriptionsBasePath, internalSubscriptionRouter);

export { app };
