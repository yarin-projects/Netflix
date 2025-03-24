import fs from 'fs';

export const httpsOptions = {
  key: fs.readFileSync('src/configs/certs/users-key.pem'),
  cert: fs.readFileSync('src/configs/certs/users-cert.pem'),
};
