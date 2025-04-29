import { Request, Response, Router } from 'express';
import { container } from '../configs/inversify.config';
import { MediaController } from '../controllers/media-controller';
import { TOKENS } from '../media-utils/tokens.utils';

const mediaRouter: Router = Router();

const mediaController = container.get<MediaController>(TOKENS.injections.mediaController);

mediaRouter.get(TOKENS.routes.getAllMovies, (req: Request, res: Response) => {
    mediaController.GetAllMovies(req, res);
});

mediaRouter.get(TOKENS.routes.GetAllTVs, (req: Request, res: Response) => {
    mediaController.GetAllTVs(req, res);
});

mediaRouter.get(TOKENS.routes.GetAllMedia, (req: Request, res: Response) => {
    mediaController.GetAllMedia(req, res);
});

mediaRouter.get(TOKENS.routes.Search, (req: Request, res: Response) => {
    mediaController.Search(req, res);
}); 

mediaRouter.get(TOKENS.routes.GetMovieById, (req: Request, res: Response) => {
    mediaController.GetMovieById(req, res);
});

mediaRouter.get(TOKENS.routes.GetTVById, (req: Request, res: Response) => {
    mediaController.GetTVById(req, res);
});

export { mediaRouter };