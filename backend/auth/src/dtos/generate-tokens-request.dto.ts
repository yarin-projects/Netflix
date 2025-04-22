import { z } from 'zod';
import { generateTokenSchema } from '../schemas/generate-token.schema';

export type GenerateTokensRequestDto = z.infer<typeof generateTokenSchema>;
