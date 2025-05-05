import { z } from "zod";
import { createSubscriptionSchema } from "../schemas/create-subscription.schema";

export type CreateSubscriptionRequestDto = z.infer<typeof createSubscriptionSchema>;