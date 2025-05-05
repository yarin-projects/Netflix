import { z } from 'zod';
import { captureOrderSchema } from '../schemas/capture-order.schema';

export type CaptureOrderRequestDto = z.infer<typeof captureOrderSchema>;
