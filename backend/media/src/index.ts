import { TOKENS } from './media-utils/tokens.utils';
import { app } from './app';
import { httpsOptions } from './configs/https.config';
import https from 'https';

const PORT = process.env.PORT || TOKENS.port;

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error(TOKENS.errors.jwtKeyMissing);
  }
  https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(TOKENS.messages.serverRunning, PORT);
  });
};

start();
