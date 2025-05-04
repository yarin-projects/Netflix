import { IFullMovie } from "./Model-Interfaces/Movie/full-movie-interface";
import { IMovie } from "./Model-Interfaces/Movie/movie-interface";
import { IFullTVSeries } from "./Model-Interfaces/Tv/full-tv-series-interface";
import { ITVSeries } from "./Model-Interfaces/Tv/tv-series-interface";

export interface IMediaRepository {
    GetAllMovies(page?: number): Promise<IMovie[] | null>;
    GetAllTVs(page?: number): Promise<ITVSeries[] | null>;
    GetAllMedia(page?: number): Promise<any>;
    Search(query: string): Promise<any>;
    GetMovieById(id: string): Promise<IFullMovie | null>;
    GetTVById(id: string): Promise<IFullTVSeries | null>;
}