import { injections } from "./tokens/injections";


export const TOKENS = {
    corsOrigin: [
      'http://localhost:3000',
      'http://localhost:3002',
      'http://localhost:3003',
      'http://localhost:3004',
    ],
    port: 3001,
    bcryptRounds: 10,
    jwtExpiry: '3h',
    token: 'Token',
    injections,
  };