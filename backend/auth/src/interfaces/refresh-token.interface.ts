export interface IRefreshToken {
  token: string;
  userId: string;
  used?: boolean;
  ipAddress?: string;
  userAgent?: string;
}
