import { GenerateTokensRequestDto } from '../dtos/generate-tokens-request.dto';
import { JwtTokens } from '../dtos/jwt-tokens-response.dto';

export interface IInternalAuthService {
  generateTokens(tokenData: GenerateTokensRequestDto): Promise<JwtTokens>;
}
