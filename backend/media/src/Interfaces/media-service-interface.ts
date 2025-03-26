import { IFullMovie } from "./Model-Interfaces/MOVIE/full-movie-interface"
import { IMovie } from "./Model-Interfaces/MOVIE/movie-interface"
import { IFullTVSeries } from "./Model-Interfaces/TV/full-tv-series-interface"
import { ITVSeries } from "./Model-Interfaces/TV/tv-series-interface"

export interface IMediaService {
    GetAllMovies(): Promise<IMovie[] | null>
    GetAllTVs(): Promise<ITVSeries[] | null>
    GetAllMedia(): Promise<any>
    Search(query: string): Promise<any>
    GetMovieById(id: number): Promise<IFullMovie | null>
    GetTVById(id: number): Promise<IFullTVSeries | null>
}