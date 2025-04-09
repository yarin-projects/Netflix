import { GenerateTokensRequestDto } from '../dtos/generate-tokens-request.dto';
import { JwtTokens } from '../dtos/jwt-tokens.dto';

export interface IInternalAuthService {
  generateTokens(requestData: GenerateTokensRequestDto): Promise<JwtTokens>;
}
