import { inject, injectable } from 'inversify';
import { IInternalAuthService } from '../interfaces/internal-auth-service.interface';
import { JwtTokens } from '../dtos/jwt-tokens-response.dto';
import { TOKENS } from '../utils/tokens.utils';
import { IAuthRepository } from '../interfaces/auth-repository.interface';
import { GenerateTokensRequestDto } from '../dtos/generate-tokens-request.dto';
import { IUserPayload } from '../interfaces/user-payload.interface';
import { SubscriptionPlan } from '../enums/subscription-plan.enum';
import { generateJwtTokens } from '../utils/jwt.utils';
import { IRefreshToken } from '../interfaces/refresh-token.interface';
import { hashToken } from '../utils/bcrypt.utils';

@injectable()
export class InternalAuthService implements IInternalAuthService {
  constructor(@inject(TOKENS.injections.iAuthRepository) private authRepository: IAuthRepository) {}
  async generateTokens(tokenData: GenerateTokensRequestDto): Promise<JwtTokens> {
    const { user_id, email, ipAddress, userAgent } = tokenData;

    let { subscription_plan } = tokenData;
    if (!subscription_plan) {
      subscription_plan = SubscriptionPlan.None;
    }
    const payload: IUserPayload = { user_id, email, subscription_plan };

    const { accessToken, refreshToken } = generateJwtTokens(payload);
    const hashedRefreshToken = await hashToken(refreshToken);

    const refreshTokenModel: IRefreshToken = {
      token: hashedRefreshToken,
      user_id: user_id,
      ip_address: ipAddress,
      user_agent: userAgent,
      used: false,
    };
    await this.authRepository.createToken(refreshTokenModel);

    return { accessToken, refreshToken };
  }
}
