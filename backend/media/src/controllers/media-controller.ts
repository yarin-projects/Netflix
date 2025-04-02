import { inject, injectable } from 'inversify';
import { IMediaService } from '../Interfaces/media-service-interface';
import { TOKENS } from "../media-utils/tokens.utils";
import { Request, Response } from 'express';
import { handleError } from '../media-utils/error-handler.utils';

@injectable()
export class MediaController {
  constructor(@inject(TOKENS.injections.IMediaService) private mediaService: IMediaService) {} 

    async GetAllMovies(req: Request, res: Response) {
        try {
            const movies = await this.mediaService.GetAllMovies();
            if (!movies) {
                res.status(TOKENS.httpStatus.INTERNAL_SERVER_ERROR).json({ message: TOKENS.messages.mediaNotFound, data: null });
            }
            res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getMovies, data: movies });
        } catch (error) {
            handleError(res,error);
        }
    }

    async GetAllTVs(req: Request, res: Response) {
        try {
            const tvs = await this.mediaService.GetAllTVs();
            if (!tvs) {
                res.status(TOKENS.httpStatus.INTERNAL_SERVER_ERROR).json({ message: TOKENS.messages.mediaNotFound, data: null });
            }
            res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getTVs, data: tvs });
        } catch (error) {
            handleError(res,error);
        }
    }
    async GetAllMedia(req: Request, res: Response) {
        try {
            const allMedia = await this.mediaService.GetAllMedia();
            if (!allMedia) {
                res.status(TOKENS.httpStatus.INTERNAL_SERVER_ERROR).json({ message: TOKENS.messages.mediaNotFound, data: null });
            }
            res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getMedia, data: allMedia });
        } catch (error) {
            handleError(res,error);
        }
    }

    async Search(req: Request, res: Response) {
        try {
            const searchMedia = await this.mediaService.Search(req.query.q as string); //idk about it 
            if (!searchMedia) {
                res.status(TOKENS.httpStatus.INTERNAL_SERVER_ERROR).json({ message: TOKENS.messages.mediaNotFound, data: null });
            }
            res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.searchMedia, data: searchMedia });
        } catch (error) {
            handleError(res,error);
        }
    }

    async GetMovieById(req: Request, res: Response) {
        try {
            const movie = await this.mediaService.GetMovieById(req.body.id); //idk about it 
            if (!movie) {
                res.status(TOKENS.httpStatus.INTERNAL_SERVER_ERROR).json({ message: TOKENS.messages.mediaNotFound, data: null });
            }
            res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getMovieById, data: movie });
        } catch (error) {
            handleError(res,error);
        }
    }

    async GetTVById(req: Request, res: Response) {
        try {
            const tv = await this.mediaService.GetTVById(req.body.id); //idk about it 
            if (!tv) {
                res.status(TOKENS.httpStatus.INTERNAL_SERVER_ERROR).json({ message: TOKENS.messages.mediaNotFound, data: null });
            }
            res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getTVById, data: tv });
        } catch (error) {
            handleError(res,error);
        }
    }
}