import { z } from 'zod';
import { createDefaultProfileSchema } from '../schemas/create-default-profile.schema';

export type CreateDefaultProfileRequestDto = z.infer<typeof createDefaultProfileSchema>;
