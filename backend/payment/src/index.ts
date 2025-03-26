/// <reference path="./types/global/express.d.ts" />
import { TOKENS } from './utils/tokens.utils';
import { app } from './app';
import { dbConnection } from './configs/db.config';
import { httpsOptions } from './configs/https.config';
import https from 'https';
import { checkEnviormentVariables } from './utils/env-variables-check.utils';
import 'dotenv/config';

const PORT = TOKENS.port;

const start = async () => {
  checkEnviormentVariables();
  await dbConnection();
  https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(TOKENS.messages.serverRunning, PORT);
  });
};

start();
