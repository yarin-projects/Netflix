import { TOKENS } from './utils/tokens.utils';
import { app } from './app';
import { dbConnection } from './configs/db.config';
import { httpsOptions } from './configs/https.config';
import https from 'https';
import { checkEnviormentVariables } from './utils/env-variables-check.utils';
import { logger } from './configs/logger.config';

const PORT = TOKENS.port;

const start = async () => {
  checkEnviormentVariables();
  await dbConnection();
  https.createServer(httpsOptions, app).listen(PORT, () => {
    logger.info(TOKENS.messages.serverRunning + ' ' + PORT);
    console.log(TOKENS.messages.serverRunning, PORT);
  });
};

start();
