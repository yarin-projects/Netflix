import { z } from "zod";
import { createOrderSchema } from "../schemas/create-order.schema";

export type CreateOrderRequestDto = z.infer<typeof createOrderSchema>;