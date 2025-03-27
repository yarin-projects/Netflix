import { inject, injectable } from 'inversify';
import { IMediaService } from '../Interfaces/media-service-interface';
import { TOKENS } from "../media-utils/tokens.utils";
import { Request, Response } from 'express';
import { IFullMovie } from '../Interfaces/Model-Interfaces/MOVIE/full-movie-interface';
import { IFullTVSeries } from '../Interfaces/Model-Interfaces/TV/full-tv-series-interface';
import { ITVSeries } from '../Interfaces/Model-Interfaces/TV/tv-series-interface';
import { IMovie } from '../Interfaces/Model-Interfaces/MOVIE/movie-interface';
import { handleError } from '../media-utils/error-handler.utils';

@injectable()
export class MediaController {
  constructor(@inject(TOKENS.injections.IMediaService) private mediaService: IMediaService) {} 

    async GetAllMovies(req: Request, res: Response): Promise<IMovie[] | null> {
        try {
            const movies = await this.mediaService.GetAllMovies();
            if (!movies) {
                return null;
            }
            res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getMovies });
            return movies;
        } catch (error) {
            handleError(res,error);
            return null;
        }
    }

    async GetAllTVs(req: Request, res: Response): Promise<ITVSeries[] | null> {
        try {
            const tvs = await this.mediaService.GetAllTVs();
            if (!tvs) {
                return null;
            }
            res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getTVs });
            return tvs;
        } catch (error) {
            handleError(res,error);
            return null;
        }
    }
    async GetAllMedia(req: Request, res: Response): Promise<any> {
        try {
            const allMedia = await this.mediaService.GetAllMedia();
            if (!allMedia) {
                return null;
            }
            res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getMedia });
            return allMedia;
        } catch (error) {
            handleError(res,error);
            return null;
        }
    }

    async Search(req: Request, res: Response): Promise<any> {
        try {
            const searchMedia = await this.mediaService.Search(req.query.q as string); //idk about it 
            if (!searchMedia) {
                return null;
            }
            res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.searchMedia });
            return searchMedia;
        } catch (error) {
            handleError(res,error);
            return null;
        }
    }

    async GetMovieById(req: Request, res: Response): Promise<IFullMovie | null> {
        try {
            const movie = await this.mediaService.GetMovieById(req.body.id); //idk about it 
            if (!movie) {
                return null;
            }
            res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getMovieById });
            return movie;
        } catch (error) {
            handleError(res,error);
            return null;
        }
    }

    async GetTVById(req: Request, res: Response): Promise<IFullTVSeries | null> {
        try {
            const tv = await this.mediaService.GetTVById(req.body.id); //idk about it 
            if (!tv) {
                return null;
            }
            res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getTVById });
            return tv;
        } catch (error) {
            handleError(res,error);
            return null;
        }
    }
}