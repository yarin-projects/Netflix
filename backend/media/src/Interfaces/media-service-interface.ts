import { IFullMovie } from "../../../../Shared/Model-Interfaces/MOVIE/full-movie-interface"
import { IMovie } from "../../../../Shared/Model-Interfaces/MOVIE/movie-interface"
import { IFullTVSeries } from "../../../../Shared/Model-Interfaces/TV/full-tv-series-interface"
import { ITVSeries } from "../../../../Shared/Model-Interfaces/TV/tv-series-interface"

export interface IMediaService {
    GetAllMovies(): Promise<IMovie[] | null>
    GetAllTVs(): Promise<ITVSeries[] | null>
    GetAllMedia(): Promise<any>
    Search(query: string): Promise<any>
    GetMovieById(id: string): Promise<IFullMovie | null>
    GetTVById(id: string): Promise<IFullTVSeries | null>
}