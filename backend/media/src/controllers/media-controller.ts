import { inject, injectable } from 'inversify';
import { IMediaService } from '../Interfaces/media-service-interface';
import { TOKENS } from "../media-utils/tokens.utils";
import { Request, Response } from 'express';
import { IFullMovie } from '../Interfaces/Model-Interfaces/MOVIE/full-movie-interface';
import { IFullTVSeries } from '../Interfaces/Model-Interfaces/TV/full-tv-series-interface';
import { ITVSeries } from '../Interfaces/Model-Interfaces/TV/tv-series-interface';
import { IMovie } from '../Interfaces/Model-Interfaces/MOVIE/movie-interface';

@injectable()
export class MediaController {
  constructor(@inject(TOKENS.injections.IMediaService) private mediaService: IMediaService) {} 
  //idk why this is an exception - the @ decorator is not recognized. 
    GetAllMovies(req: Request, res: Response): Promise<IMovie[] | null> {
        throw new Error('Method not implemented.');
    }
    GetAllTVs(req: Request, res: Response): Promise<ITVSeries[] | null> {
        throw new Error('Method not implemented.');
    }
    GetAllMedia(req: Request, res: Response): Promise<any> {
        throw new Error('Method not implemented.');
    }
    Search(req: Request, res: Response): Promise<any> {
        throw new Error('Method not implemented.');
    }
    GetMovieById(req: Request, res: Response): Promise<IFullMovie | null> {
        throw new Error('Method not implemented.');
    }
    GetTVById(req: Request, res: Response): Promise<IFullTVSeries | null> {
        throw new Error('Method not implemented.');
    }
}