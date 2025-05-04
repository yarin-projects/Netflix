import { myProfileDto } from '../dtos/my-profile.dto';

export interface IInternalProfileService {
  createDefaultProfile(userId: string): Promise<myProfileDto | null>;
}
