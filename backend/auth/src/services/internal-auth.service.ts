import { inject, injectable } from 'inversify';
import { IInternalAuthService } from '../interfaces/internal-auth-service.interface';
import { JwtTokens } from '../dtos/jwt-tokens.dto';
import { TOKENS } from '../utils/tokens.utils';
import { IUserPayload } from '../interfaces/user-payload.interface';
import { ITokenHelperService } from '../interfaces/token-helper-service.interface';
import { ITokenMetaData } from '../interfaces/token-meta-data.interface';

@injectable()
export class InternalAuthService implements IInternalAuthService {
  constructor(
    @inject(TOKENS.injections.iTokenHelperService) private tokenHelperService: ITokenHelperService
  ) {}
  async generateTokens(tokenMetaData: ITokenMetaData, payload: IUserPayload): Promise<JwtTokens> {
    const jwtTokens = await this.tokenHelperService.generateNewTokensAndSaveToDB(
      payload,
      tokenMetaData
    );
    return jwtTokens;
  }
}
