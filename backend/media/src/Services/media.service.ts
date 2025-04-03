import { IMovie } from "../../../../Shared/Model-Interfaces/MOVIE/movie-interface";
import { ITVSeries } from "../../../../Shared/Model-Interfaces/TV/tv-series-interface";
import { IFullMovie } from "../../../../Shared/Model-Interfaces/MOVIE/full-movie-interface";
import { IFullTVSeries } from "../../../../Shared/Model-Interfaces/TV/full-tv-series-interface";
import { inject, injectable } from 'inversify';
import { IMediaService } from "../Interfaces/media-service-interface";
import { TOKENS } from "../media-utils/tokens.utils";
import { IMediaRepository } from "../Interfaces/media-repository-interface";

@injectable()
export class MediaService implements IMediaService { 
    constructor(@inject(TOKENS.injections.IMediaRepository) private mediaRepository: IMediaRepository) {}
    async GetAllMovies(): Promise<IMovie[] | null> {
        const movies = await this.mediaRepository.GetAllMovies();
        if (!movies) {
            throw new Error(TOKENS.errors.moviesNotFound);
        }
        return movies;  
    }
    async GetAllTVs(): Promise<ITVSeries[] | null> {
        const tvs = await this.mediaRepository.GetAllTVs();
        if (!tvs) {
            throw new Error(TOKENS.errors.seriesNotFound);
        }
        return tvs;
    }
    async GetAllMedia(): Promise<any> {
        const media = await this.mediaRepository.GetAllMedia();
        if (!media) {
            throw new Error(TOKENS.errors.mediaNotFound);
        }
        return media;
    }
    async Search(query: string): Promise<any> {
        const search = await this.mediaRepository.Search(query);
        if (!search) {
            throw new Error(TOKENS.errors.mediaNotFound);
        }
        return search;
    }
    async GetMovieById(id: string) {
        const movie = await this.mediaRepository.GetMovieById(id);
        if (!movie) {
            throw new Error(TOKENS.errors.movieNotFound);
        }
        return movie;
    }
    async GetTVById(id: string) {
        const tv = await this.mediaRepository.GetTVById(id);
        if (!tv) {
            throw new Error(TOKENS.errors.seriesNotFound);
        }
        return tv;
    }
}