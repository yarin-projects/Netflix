import { IFullMovie } from "../../../../Shared/Model-Interfaces/MOVIE/full-movie-interface";
import { IFullTVSeries } from "../../../../Shared/Model-Interfaces/TV/full-tv-series-interface";
import { IMovie } from "../../../../Shared/Model-Interfaces/MOVIE/movie-interface";
import { ITVSeries } from "../../../../Shared/Model-Interfaces/TV/tv-series-interface";

export interface IMediaRepository {
    GetAllMovies(page?: number): Promise<IMovie[] | null>;
    GetAllTVs(page?: number): Promise<ITVSeries[] | null>;
    GetAllMedia(page?: number): Promise<any>;
    Search(query: string): Promise<any>;
    GetMovieById(id: string): Promise<IFullMovie | null>;
    GetTVById(id: string): Promise<IFullTVSeries | null>;
}