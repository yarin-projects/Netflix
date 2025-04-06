import { JwtTokensResponse } from "../dtos/jwt-tokens-response.dto";

export interface IInternalAuthService {
    generateTokens(userId: string): Promise<JwtTokensResponse>;
}