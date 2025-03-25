import fs from 'fs';

export const httpsOptions = {
  key: fs.readFileSync('src/configs/certs/media-key.pem'),
  cert: fs.readFileSync('src/configs/certs/media-cert.pem'),
};