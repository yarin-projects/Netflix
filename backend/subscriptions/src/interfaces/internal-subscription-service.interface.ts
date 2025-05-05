import { MySubscriptionResponseDto } from '../dtos/my-subscription-response.dto';

export interface ISubscriptionService {
  getMySubscriptionStatus(userId: string): Promise<MySubscriptionResponseDto | null>;
}
