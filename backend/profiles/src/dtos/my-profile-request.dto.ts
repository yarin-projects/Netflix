import { z } from "zod";
import { MyProfileSchema } from "../schemas/my-profile.schema";

export type MyProfileRequestDto = z.infer<typeof MyProfileSchema>