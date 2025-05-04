import { MediaType } from "../enums/media-type.enum";

export interface IMedia {
  mediaId: number;
  mediaType: MediaType;
  title: string;
  posterPath: string | null;
  releaseYear: number | null;
  voteAverage: number | null;
}
