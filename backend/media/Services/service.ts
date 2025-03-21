import { MediaRepository } from "../Repositories/media-repository";
import { IMovie } from "../Interfaces/Model-Interfaces/MOVIE/movie-interface";
import { ITVSeries } from "../Interfaces/Model-Interfaces/TV/tv-series-interface";
import { IFullMovie } from "../Interfaces/Model-Interfaces/MOVIE/full-movie-interface";
import { IFullTVSeries } from "../Interfaces/Model-Interfaces/TV/full-tv-series-interface";

class MediaService{
    private mediaRepository: MediaRepository;

    constructor(){
        this.mediaRepository = new MediaRepository();
    }
    async GetAllMovies(page?: number): Promise<IMovie[] | null> {
        return this.mediaRepository.GetAllMovies(page);
    }
    async GetAllTVs(page?: number): Promise<ITVSeries[] | null> {
        return this.mediaRepository.GetAllTVs(page);
    }
    async GetAllMedia(page?: number): Promise<any> {
        return this.mediaRepository.GetAllMedia(page);
    }
    async Search(query: string): Promise<any> {
        return this.mediaRepository.Search(query);
    }
    async GetMovieById(id: number): Promise<IFullMovie | null> {
        return this.mediaRepository.GetMovieById(id);
    }
    async GetTVById(id: number): Promise<IFullTVSeries | null> {
        return this.mediaRepository.GetTVById(id);
    }
}