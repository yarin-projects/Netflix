import { Request, Response, Router } from 'express';
import { container } from '../configs/inversify.config';
import { MediaController } from '../controllers/media-controller';
import { TOKENS } from '../media-utils/tokens.utils';

const mediaRouter: Router = Router();

const mediaController = container.get<MediaController>(TOKENS.injections.mediaController);

mediaRouter.get(TOKENS.routes.movies, (req: Request, res: Response) => {
    mediaController.GetAllMovies(req, res);
});

mediaRouter.get(TOKENS.routes.series, (req: Request, res: Response) => {
    mediaController.GetAllTVs(req, res);
});

mediaRouter.get(TOKENS.routes.search, (req: Request, res: Response) => {
    mediaController.Search(req, res);
}); 

mediaRouter.get(TOKENS.routes.getMovie, (req: Request, res: Response) => {
    mediaController.GetMovieById(req, res);
});

mediaRouter.get(TOKENS.routes.getSeries, (req: Request, res: Response) => {
    mediaController.Search(req, res);
});

export { mediaRouter };