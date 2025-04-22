import { JwtTokens } from '../dtos/jwt-tokens.dto';
import { ITokenMetaData } from './token-meta-data.interface';
import { IUserPayload } from './user-payload.interface';

export interface ITokenHelperService {
  generateNewTokensAndSaveToDB(payload: IUserPayload, metaData: ITokenMetaData): Promise<JwtTokens>;
}
