import fs from 'fs';
import { TOKENS } from '../utils/tokens.utils';

export const httpsOptions = {
  key: fs.readFileSync(TOKENS.httpsOptions.keyPath),
  cert: fs.readFileSync(TOKENS.httpsOptions.certPath),
};
