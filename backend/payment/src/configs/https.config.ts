import fs from 'fs';

export const httpsOptions = {
  key: fs.readFileSync('src/configs/certs/payment-key.pem'),
  cert: fs.readFileSync('src/configs/certs/payment-cert.pem'),
};
