import { IMovie } from "../Interfaces/Model-Interfaces/MOVIE/movie-interface";
import { ITVSeries } from "../Interfaces/Model-Interfaces/TV/tv-series-interface";
import { IFullMovie } from "../Interfaces/Model-Interfaces/MOVIE/full-movie-interface";
import { IFullTVSeries } from "../Interfaces/Model-Interfaces/TV/full-tv-series-interface";
import { inject, injectable } from 'inversify';
import { IMediaService } from "../Interfaces/media-service-interface";
import { TOKENS } from "../media-utils/tokens.utils";
import { IMediaRepository } from "../Interfaces/media-repository-interface";

@injectable()
export class MediaService implements IMediaService {
    constructor(@inject(TOKENS.injections.IMediaRepository) private mediaRepository: IMediaRepository) {}
    async GetAllMovies(): Promise<IMovie[] | null> {
        return this.mediaRepository.GetAllMovies();
    }
    async GetAllTVs(): Promise<ITVSeries[] | null> {
        return this.mediaRepository.GetAllTVs();
    }
    async GetAllMedia(): Promise<any> {
        return this.mediaRepository.GetAllMedia();
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