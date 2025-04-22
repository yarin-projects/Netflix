import express, { Application, urlencoded } from 'express';
import cors from 'cors';
import { requestLogger } from './middlewares/request-logger.middleware';
import { TOKENS } from './utils/tokens.utils';
import { authRouter } from './routers/auth.router';
import { internalAuthRouter } from './routers/internal-auth.router';

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

app.use(TOKENS.routes.authBasePath, authRouter);
app.use(TOKENS.routes.internalBasePath, internalAuthRouter);

export { app };
