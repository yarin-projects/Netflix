/// <reference path="./types/global/express.d.ts" />
import { TOKENS } from './utils/tokens.utils';
import { app } from './app';
import { dbConnection } from './configs/db.config';
import { httpsOptions } from './configs/https.config';
import https from 'https';
import 'dotenv/config';

const PORT = process.env.PORT || TOKENS.port;

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error(TOKENS.errors.jwtKeyMissing);
  }
  await dbConnection();
  https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(TOKENS.messages.serverRunning, PORT);
  });
};

start();
