import { z } from "zod";
import { removeProfileFavoriteSchema } from "../schemas/remove-profile-favorite.schema";

export type RemoveProfileFavoriteRequestDto = z.infer<typeof removeProfileFavoriteSchema>;