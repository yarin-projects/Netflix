import { inject, injectable } from 'inversify';
import { IMediaService } from '../Interfaces/media-service-interface';
import { TOKENS } from '../media-utils/tokens.utils';
import { Request, Response } from 'express';
import { handleError } from '../media-utils/error-handler.utils';

@injectable()
export class MediaController {
  constructor(@inject(TOKENS.injections.IMediaService) private mediaService: IMediaService) {}

  async GetAllMovies(req: Request, res: Response) {
    try {
      const movies = await this.mediaService.GetAllMovies();
      if (!movies) {
        handleError(res, new Error(TOKENS.errors.movieNotFound));
        return;
      }
      res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getMovies, data: movies });
    } catch (error) {
      handleError(res, error);
    }
  }

  async GetAllTVs(req: Request, res: Response) {
    try {
      const tvs = await this.mediaService.GetAllTVs();
      if (!tvs) {
        handleError(res, new Error(TOKENS.errors.seriesNotFound));
        return;
      }
      res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getTVs, data: tvs });
    } catch (error) {
      handleError(res, error);
    }
  }
  async GetAllMedia(req: Request, res: Response) {
    try {
      const allMedia = await this.mediaService.GetAllMedia();
      if (!allMedia) {
        handleError(res, new Error(TOKENS.errors.movieNotFound));
        return;
      }
      res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getMedia, data: allMedia });
    } catch (error) {
      handleError(res, error);
    }
  }

  async Search(req: Request, res: Response) {
    try {
      const searchMedia = await this.mediaService.Search(req.query.q as string); //idk about it
      if (!searchMedia) {
        handleError(res, new Error(TOKENS.errors.mediaNotFound));
        return;
      }
      res
        .status(TOKENS.httpStatus.OK)
        .json({ message: TOKENS.messages.searchMedia, data: searchMedia });
    } catch (error) {
      handleError(res, error);
    }
  }

  async GetMovieById(req: Request, res: Response) {
    try {
      const movie = await this.mediaService.GetMovieById(req.params.id); //idk about it
      if (!movie) {
        handleError(res, new Error(TOKENS.errors.movieNotFound));
        return;
      }
      res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getMovieById, data: movie });
    } catch (error) {
      handleError(res, error);
    }
  }

  async GetTVById(req: Request, res: Response) {
    try {
      const tv = await this.mediaService.GetTVById(req.body.id); //idk about it
      if (!tv) {
        handleError(res, new Error(TOKENS.errors.movieNotFound));
        return;
      }
      res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.getTVById, data: tv });
    } catch (error) {
      handleError(res, error);
    }
  }
}
