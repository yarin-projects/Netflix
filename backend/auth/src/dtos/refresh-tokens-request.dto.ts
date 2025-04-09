import { z } from 'zod';
import { refreshTokenSchema } from '../schemas/refresh-token.schema';

export type RefreshTokensRequest = z.infer<typeof refreshTokenSchema>;
