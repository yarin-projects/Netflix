import { Container } from 'inversify';
import { MediaController } from '../controllers/media-controller';
import { TOKENS } from '../media-utils/tokens.utils';
import { IMediaService } from '../Interfaces/media-service-interface';
import { IMediaRepository } from '../Interfaces/media-repository-interface';
import { MediaRepository } from '../Repositories/media-repository';
import {MediaService} from '../Services/media.service';

const container = new Container();

container.bind<MediaController>(TOKENS.injections.mediaController).to(MediaController);

container.bind<IMediaService>(TOKENS.injections.IMediaService).to(MediaService);

container.bind<IMediaRepository>(TOKENS.injections.IMediaRepository).to(MediaRepository);

export { container };
