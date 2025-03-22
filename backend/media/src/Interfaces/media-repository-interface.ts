import { IFullMovie } from "./Model-Interfaces/MOVIE/full-movie-interface";
import { IFullTVSeries } from "./Model-Interfaces/TV/full-tv-series-interface";
import { IMovie } from "./Model-Interfaces/MOVIE/movie-interface";
import { ITVSeries } from "./Model-Interfaces/TV/tv-series-interface";

export interface IMediaRepository {
    GetAllMovies(page?: number): Promise<IMovie[] | null>;
    GetAllTVs(page?: number): Promise<ITVSeries[] | null>;
    GetAllMedia(page?: number): Promise<any>;
    Search(query: string): Promise<any>;
    GetMovieById(id: number): Promise<IFullMovie | null>;
    GetTVById(id: number): Promise<IFullTVSeries | null>;
}