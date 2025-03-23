import { z } from 'zod';
import { authSchema } from '../schemas/auth.schema';

export type AuthRequestDto = z.infer<typeof authSchema>;
